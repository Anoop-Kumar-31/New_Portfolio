import { personalInfo } from '../data';
import { useTheme } from '../context/ThemeContext';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { SiReact, SiTailwindcss } from 'react-icons/si';

const Footer = () => {
  const { isDark } = useTheme();
  return (
    <footer className={`border-t py-12 transition-colors duration-400 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
      <div className="container mx-auto px-6 xl:px-40 lg:px-25">
        <div className="flex flex-col items-center gap-6">

          {/* Monogram */}
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-lg">
            AK
          </div>

          {/* Motto */}
          <p className={`text-center text-sm italic max-w-md leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            "{personalInfo.motto}"
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {[
              { href: `mailto:${personalInfo.email}`, icon: FaEnvelope, label: 'Email', color: 'hover:text-cyan-400' },
              { href: personalInfo.linkedin, icon: FaLinkedin, label: 'LinkedIn', color: 'hover:text-blue-400' },
              { href: personalInfo.github, icon: FaGithub, label: 'GitHub', color: isDark ? 'hover:text-white' : 'hover:text-slate-900' },
            ].map(({ href, icon: Icon, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`p-2.5 rounded-xl border transition-all duration-200
                  ${isDark ? 'border-slate-700 text-slate-500 hover:border-slate-500' : 'border-slate-200 text-slate-400 hover:border-slate-400'}
                  ${color}`}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className={`w-24 h-px ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`} />

          {/* Copyright + Tech */}
          <div className="flex flex-col items-center gap-2 text-center">
            <p className={`text-xs ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
            <p className={`text-xs flex items-center gap-1.5 ${isDark ? 'text-slate-700' : 'text-slate-400'}`}>
              Built with <FaHeart className="text-pink-500/70" size={10} />
              <SiReact className="text-cyan-500/60" size={12} /> React
              &amp;
              <SiTailwindcss className="text-teal-500/60" size={12} /> Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;