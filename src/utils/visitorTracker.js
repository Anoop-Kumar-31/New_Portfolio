/**
 * Visitor Tracking Service
 *
 * Tracks portfolio visitors and sends a notification to a Discord webhook.
 * Uses publicly available browser/IP data. Fails silently so tracking
 * issues never break the portfolio itself.
 */

let hasTracked = false; // guards against double-fire in React.StrictMode

export const trackVisitor = async () => {
  if (hasTracked) return;
  hasTracked = true;

  const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL;
  if (!webhookUrl || webhookUrl === 'PASTE_YOUR_WEBHOOK_URL_HERE') {
    console.info('Visitor tracking disabled: no webhook URL configured');
    return;
  }

  try {
    const info = await collectVisitorInfo();
    await sendDiscordNotification(webhookUrl, info);
    console.log('✅ Visitor tracked');
  } catch (error) {
    console.error('Visitor tracking error:', error);
  }
};

/* ---------------------------- Data collection --------------------------- */

const collectVisitorInfo = async () => {
  const ua = navigator.userAgent;

  const info = {
    timestamp: new Date().toISOString(),
    page: window.location.href,
    referrer: document.referrer || 'Direct visit',
    language: navigator.language,
    screen: `${window.screen.width}x${window.screen.height}`,
    viewport: `${window.innerWidth}x${window.innerHeight}`,
    browserTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    device: parseUserAgent(ua),
    hardware: {
      cpuCores: navigator.hardwareConcurrency ?? 'Unknown',
      ram: navigator.deviceMemory ? `${navigator.deviceMemory} GB` : 'Unknown',
      platform: navigator.platform || 'Unknown',
    },
    session: getSessionInfo(),
  };

  try {
    info.location = await fetchLocationData();
  } catch {
    info.location = { error: 'Location unavailable' };
  }

  return info;
};

const parseUserAgent = (ua) => {
  const s = ua.toLowerCase();

  const deviceType = /ipad|tablet|(?:android(?!.*mobile))/i.test(ua)
    ? 'Tablet'
    : /mobile|android|iphone|ipod|iemobile|blackberry|opera m(?:ob|ini)/i.test(ua)
      ? 'Mobile'
      : 'Desktop';

  const browser =
    (s.includes('edg') && 'Edge') ||
    (s.includes('firefox') && 'Firefox') ||
    (s.includes('chrome') && 'Chrome') ||
    (s.includes('safari') && 'Safari') ||
    (s.includes('opera') && 'Opera') ||
    'Unknown';

  const os =
    (s.includes('win') && 'Windows') ||
    (s.includes('mac') && 'macOS') ||
    (s.includes('android') && 'Android') ||
    ((s.includes('iphone') || s.includes('ipad') || s.includes('ios')) && 'iOS') ||
    (s.includes('linux') && 'Linux') ||
    'Unknown';

  return { deviceType, browser, os };
};

const getSessionInfo = () => {
  const RETURNING_KEY = 'portfolio_returning_visitor';
  const SESSION_KEY = 'portfolio_visitor_session';
  const nowISO = new Date().toISOString();

  const info = {
    isReturningVisitor: false,
    visitCount: 1,
    isNewSession: !sessionStorage.getItem(SESSION_KEY),
  };

  try {
    const stored = JSON.parse(localStorage.getItem(RETURNING_KEY) || 'null');
    if (stored) {
      info.isReturningVisitor = true;
      info.visitCount = (stored.visitCount || 0) + 1;
      info.firstVisit = stored.firstVisit;
    } else {
      info.firstVisit = nowISO;
    }
    localStorage.setItem(
      RETURNING_KEY,
      JSON.stringify({ visitCount: info.visitCount, firstVisit: info.firstVisit })
    );
    sessionStorage.setItem(SESSION_KEY, 'active');
  } catch {
    // storage unavailable (private browsing etc.) — just fall back to defaults
  }

  return info;
};

/** Free ipapi.co lookup — no key required, ~1000 req/day limit. */
const fetchLocationData = async () => {
  const res = await fetch('https://ipapi.co/json/');
  if (!res.ok) throw new Error(`Location API failed: ${res.status}`);
  const d = await res.json();

  return {
    ip: d.ip ?? 'Unknown',
    city: d.city ?? 'Unknown',
    region: d.region ?? 'Unknown',
    country: d.country_name ?? 'Unknown',
    countryCode: d.country_code ?? '',
    timezone: d.timezone ?? 'Unknown',
    latitude: d.latitude ?? null,
    longitude: d.longitude ?? null,
    org: d.org ?? 'Unknown',
  };
};

/* ------------------------------ Discord embed ----------------------------- */

const flagEmoji = (countryCode) =>
  countryCode
    ? String.fromCodePoint(...[...countryCode.toUpperCase()].map((c) => 127397 + c.charCodeAt()))
    : '';

const sendDiscordNotification = async (webhookUrl, info) => {
  const { device, location, page, referrer, session, timestamp, hardware, screen, viewport, language } = info;

  // Time in the visitor's own local timezone, not the server's
  const localTime = location.timezone
    ? new Date(timestamp).toLocaleString('en-US', {
        timeZone: location.timezone,
        dateStyle: 'medium',
        timeStyle: 'short',
      })
    : new Date(timestamp).toLocaleString('en-US');

  const isReturning = session.isReturningVisitor;
  const embed = {
    title: isReturning ? `🔄 Returning Visitor (#${session.visitCount})` : '🆕 New Visitor',
    color: isReturning ? 0x10b981 : 0x06b6d4,
    timestamp,
    fields: [
      {
        name: '📍 Location',
        value: location.error
          ? location.error
          : `${flagEmoji(location.countryCode)} ${location.city}, ${location.region}, ${location.country}` +
            (location.latitude ? `\n[View on map](https://www.google.com/maps?q=${location.latitude},${location.longitude})` : ''),
        inline: false,
      },
      { name: '🕒 Local Time', value: localTime, inline: true },
      { name: '🌐 IP', value: location.ip, inline: true },
      { name: '🏢 ISP', value: location.org, inline: false },
      { name: '💻 Device', value: `${device.deviceType} • ${device.browser} on ${device.os}`, inline: true },
      { name: '🔧 Specs', value: `${hardware.cpuCores} cores • ${hardware.ram} RAM`, inline: true },
      { name: '🖥️ Screen / Viewport', value: `${screen} / ${viewport}`, inline: true },
      { name: '🌍 Language', value: language, inline: true },
      { name: '🔗 Referrer', value: referrer === 'Direct visit' ? 'Direct visit' : referrer, inline: false },
      { name: '📄 Page', value: page, inline: false },
    ],
    footer: { text: 'Portfolio Analytics' },
  };

  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: 'Portfolio Analytics',
      avatar_url: 'https://cdn-icons-png.flaticon.com/512/3659/3659898.png',
      embeds: [embed],
    }),
  });

  if (!res.ok) throw new Error(`Discord webhook failed: ${res.status}`);
};

export default trackVisitor;