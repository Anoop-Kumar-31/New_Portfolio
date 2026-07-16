import { personalInfo } from '../data';
import { useTheme } from '../context/ThemeContext';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, } from 'react-icons/fa';
import { SiReact, SiTailwindcss, SiVite } from 'react-icons/si';

const Footer = () => {
  const { isDark } = useTheme();
  const navLinks = ['experience', 'projects', 'skills', 'education', 'hire-readiness', 'contact'];

  return (
    <footer className={`border-t pt-16 pb-8 transition-colors duration-400 relative overflow-hidden ${isDark ? 'border-slate-900 bg-[#080c14]' : 'border-slate-200 bg-slate-50'}`}>

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Call to Action Quote ── */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Design and code <span className="bg-linear-to-r from-cyan-400 via-indigo-400 to-pink-500 bg-clip-text text-transparent italic font-serif">aligned{" "}</span>. Build with confidence.
          </h2>
          <p className={`text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            I'm ready to review your project requirements and provide a clear execution plan within one business day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full text-sm font-bold flex items-center justify-center gap-2 bg-linear-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Start a Project &rarr;
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-3.5 rounded-full text-sm font-bold border flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300
                ${isDark
                  ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:text-white hover:border-slate-600 hover:bg-slate-800/80 shadow-[0_0_12px_rgba(255,255,255,0.02)]'
                  : 'border-slate-200 bg-white text-slate-700 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50 shadow-[0_4px_12px_rgba(0,0,0,0.02)]'}`}
            >
              <FaGithub size={16} />
              View Github
            </a>
          </div>
        </div>

        {/* Divider between CTA and footer links */}
        <div className={`w-full h-px mb-16 bg-linear-to-r from-transparent ${isDark ? 'via-slate-800' : 'via-slate-200'} to-transparent`} />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 mb-16">

          {/* Column 1: Brand & Motto (spanning 5 cols) */}
          <div className="col-span-1 md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#" aria-label="Scroll to top" className="hover:scale-105 hover:opacity-90 transition-all duration-300 mb-4 inline-block">
              <img src="/img/MyLogo.png" alt="AK Portfolio Logo" className="h-16 w-auto object-contain drop-shadow-md" loading="lazy" decoding="async" />
            </a>
            <h1 className={`gradient-text text-xl font-bold mb-1`}>{personalInfo.name}</h1>
            <p className={`text-xs font-semibold mb-3 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
              {personalInfo.title}
            </p>
            <p className={`text-xs leading-relaxed max-w-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {personalInfo.motto}
            </p>
          </div>

          {/* Column 2: Quick Links (spanning 3 cols) */}
          <div className="col-span-1 md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className={`text-xs font-bold uppercase tracking-widest mb-4 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    className={`group capitalize text-xs font-medium transition-all duration-200 flex items-center gap-1.5 justify-center md:justify-start
                      ${isDark ? 'text-slate-400 hover:text-cyan-400' : 'text-slate-600 hover:text-cyan-600'}`}
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan-500 scale-0 group-hover:scale-100 transition-transform duration-200 shrink-0" />
                    {link.replace('-', ' ')}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Socials (spanning 4 cols) */}
          <div className="col-span-1 md:col-span-4 flex flex-col items-center md:items-start lg:items-end text-center md:text-left lg:text-right">
            <h3 className={`text-xs font-bold uppercase tracking-widest mb-4 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
              Let's Connect
            </h3>
            <a
              href={`mailto:${personalInfo.email}`}
              className={`text-xs mb-6 font-bold hover:text-cyan-400 transition-colors flex items-center gap-2 justify-center lg:justify-end
                ${isDark ? 'text-slate-300' : 'text-slate-700'}`}
            >
              <FaEnvelope size={12} className="shrink-0" />
              {personalInfo.email}
            </a>

            <div className="flex items-center gap-2.5">
              {[
                { href: `mailto:${personalInfo.email}`, icon: FaEnvelope, label: 'Email', color: 'hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/5 lg:hover:shadow-[0_0_12px_rgba(34,211,238,0.2)]' },
                { href: personalInfo.linkedin, icon: FaLinkedin, label: 'LinkedIn', color: 'hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/5 lg:hover:shadow-[0_0_12px_rgba(96,165,250,0.2)]' },
                { href: personalInfo.github, icon: FaGithub, label: 'GitHub', color: isDark ? 'hover:text-white hover:border-slate-500 hover:bg-white/5 lg:hover:shadow-[0_0_12px_rgba(255,255,255,0.1)]' : 'hover:text-slate-900 hover:border-slate-400 hover:bg-slate-900/5 lg:hover:shadow-[0_0_12px_rgba(15,23,42,0.1)]' },
              ].map(({ href, icon: Icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`p-2.5 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5
                    ${isDark ? 'border-slate-800 bg-slate-900/60 text-slate-400' : 'border-slate-200 bg-white text-slate-500'}
                    ${color}`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className={`w-full h-px mb-8 bg-linear-to-r from-transparent ${isDark ? 'via-slate-800' : 'via-slate-200'} to-transparent`} />

        {/* Bottom: Copyright + Tech */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <div className={`text-xs flex items-center gap-2 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            <span>Made with <FaHeart className="inline text-pink-600 mb-0.5 mx-0.5 hover:text-pink-400 transition-colors cursor-pointer" size={12} /></span>
            <SiReact className="text-cyan-500 hover:text-cyan-400 transition-colors cursor-pointer" size={14} title="React" />
            <SiTailwindcss className="text-teal-500 hover:text-teal-400 transition-colors cursor-pointer" size={14} title="Tailwind CSS" />
            <SiVite className="text-purple-500 hover:text-purple-400 transition-colors cursor-pointer" size={14} title="Vite" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;