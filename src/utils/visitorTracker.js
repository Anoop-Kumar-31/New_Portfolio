/**
 * Visitor Tracking Service
 * 
 * Silently tracks portfolio visitors and sends notifications via Discord webhook.
 * Collects publicly available data without requiring user permissions.
 */

// Flag to prevent duplicate tracking in React.StrictMode (development only)
let hasTracked = false;

/**
 * Track a visitor and send notification to Discord
 * This function runs silently and won't throw errors that affect the portfolio
 */
export const trackVisitor = async () => {
  // Prevent duplicate tracking in React.StrictMode (development mode)
  if (hasTracked) {
    console.log('⏭️ Skipping duplicate track call (React.StrictMode)');
    return;
  }
  hasTracked = true;
  
  try {
    // Get Discord webhook URL from environment variables
    const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL;
    
    // Debug logging
    console.log("🔍 All env vars:", import.meta.env);
    console.log("🔍 Webhook URL value:", webhookUrl);
    console.log("🔍 Webhook URL type:", typeof webhookUrl);
    
    // Skip tracking if webhook URL is not configured
    if (!webhookUrl || webhookUrl === 'PASTE_YOUR_WEBHOOK_URL_HERE') {
      console.info('❌ Visitor tracking disabled: No webhook URL configured');
      return;
    }
    
    console.log("✅ Webhook URL loaded successfully, tracking visitor...");


    // Collect visitor information
    const visitorInfo = await collectVisitorInfo();
    
    // Send to Discord
    await sendDiscordNotification(webhookUrl, visitorInfo);
    
  } catch (error) {
    // Silent failure - don't let tracking errors affect the portfolio
    console.error('Visitor tracking error:', error);
  }
};

/**
 * Collect publicly available visitor information
 */
const collectVisitorInfo = async () => {
  const info = {
    timestamp: new Date().toISOString(),
    page: window.location.href,
    referrer: document.referrer || 'Direct visit',
    userAgent: navigator.userAgent,
    language: navigator.language,
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    viewportSize: `${window.innerWidth}x${window.innerHeight}`,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };

  // Parse user agent for device info
  info.deviceInfo = parseUserAgent(info.userAgent);

  // Get approximate location from IP (using free ipapi.co API)
  try {
    const locationData = await fetchLocationData();
    info.location = locationData;
  } catch (error) {
    info.location = { error: 'Location data unavailable' };
  }

  return info;
};

/**
 * Parse user agent to extract device and browser info
 */
const parseUserAgent = (userAgent) => {
  const ua = userAgent.toLowerCase();
  
  // Detect device type
  let deviceType = 'Desktop';
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobile))/i.test(userAgent)) {
    deviceType = 'Tablet';
  } else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(userAgent)) {
    deviceType = 'Mobile';
  }

  // Detect browser
  let browser = 'Unknown';
  if (ua.includes('firefox')) browser = 'Firefox';
  else if (ua.includes('edg')) browser = 'Edge';
  else if (ua.includes('chrome')) browser = 'Chrome';
  else if (ua.includes('safari')) browser = 'Safari';
  else if (ua.includes('opera')) browser = 'Opera';

  // Detect OS
  let os = 'Unknown';
  if (ua.includes('win')) os = 'Windows';
  else if (ua.includes('mac')) os = 'macOS';
  else if (ua.includes('linux')) os = 'Linux';
  else if (ua.includes('android')) os = 'Android';
  else if (ua.includes('ios') || ua.includes('iphone') || ua.includes('ipad')) os = 'iOS';

  return { deviceType, browser, os };
};

/**
 * Fetch approximate location data from IP address
 * Uses free ipapi.co API (no API key required, 1000 requests/day limit)
 */
const fetchLocationData = async () => {
  try {
    const response = await fetch('https://ipapi.co/json/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Location API request failed');
    }

    const data = await response.json();
    
    return {
      ip: data.ip || 'Unknown',
      city: data.city || 'Unknown',
      region: data.region || 'Unknown',
      country: data.country_name || 'Unknown',
      countryCode: data.country_code || 'Unknown',
      timezone: data.timezone || 'Unknown',
      org: data.org || 'Unknown',
    };
  } catch (error) {
    console.error('Location fetch error:', error);
    return {
      error: 'Unable to fetch location',
    };
  }
};

/**
 * Send formatted notification to Discord webhook
 */
const sendDiscordNotification = async (webhookUrl, visitorInfo) => {
  const { deviceInfo, location, timestamp, page, referrer, language, screenResolution, viewportSize, timezone } = visitorInfo;

  // Format timestamp for better readability
  const formattedTime = new Date(timestamp).toLocaleString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  // Create rich embed for Discord
  const embed = {
    title: '👀 New Portfolio Visitor!',
    color: 0x06b6d4, // Cyan color
    timestamp: timestamp,
    fields: [
      {
        name: '📍 Location',
        value: location.error 
          ? location.error 
          : `${location.city}, ${location.region}, ${location.country} (${location.countryCode})`,
        inline: false,
      },
      {
        name: '💻 Device',
        value: `${deviceInfo.deviceType} • ${deviceInfo.browser} on ${deviceInfo.os}`,
        inline: true,
      },
      {
        name: '🌐 IP Address',
        value: location.ip || 'Unknown',
        inline: true,
      },
      {
        name: '🔗 Referrer',
        value: referrer === 'Direct visit' ? '🔗 Direct visit (no referrer)' : `🔗 ${referrer}`,
        inline: false,
      },
      {
        name: '📄 Page',
        value: page,
        inline: false,
      },
      {
        name: '🖥️ Screen / Viewport',
        value: `${screenResolution} / ${viewportSize}`,
        inline: true,
      },
      {
        name: '🌍 Language / Timezone',
        value: `${language} / ${timezone}`,
        inline: true,
      },
    ],
    footer: {
      text: 'Portfolio Analytics',
    },
  };

  // Add ISP/Organization if available
  if (location.org && !location.error) {
    embed.fields.splice(3, 0, {
      name: '🏢 ISP/Organization',
      value: location.org,
      inline: false,
    });
  }

  // Send to Discord
  const payload = {
    username: 'Portfolio Tracker',
    avatar_url: 'https://cdn-icons-png.flaticon.com/512/3659/3659898.png', // Analytics icon
    embeds: [embed],
  };

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Discord webhook failed: ${response.status}`);
  }
};

export default trackVisitor;
