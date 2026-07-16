import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo, quickInfo } from '../data';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX, FiMapPin, FiClock } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt, FaBriefcase } from 'react-icons/fa';

const ROLES = ["Full-Stack Web Developer"]

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [roleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');

  const navLinks = ['me', 'experience', 'projects', 'skills', 'education', 'hire-readiness', 'contact'];

  // Typing effect (once only)
  useEffect(() => {
    const current = ROLES[roleIndex];
    if (displayed.length < current.length) {
      const timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 250);
      return () => clearTimeout(timeout);
    }
  }, [displayed, roleIndex]);

  const bg = isDark
    ? 'bg-[#080c14]/80 border-b border-cyan-900/30'
    : 'bg-white/80 border-b border-slate-200';

  return (
    <>
      {/* ── NAV ─────────────────────────────────────── */}
      <nav className={`sticky top-0 z-1000 backdrop-blur-md ${bg} transition-colors duration-400`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">

          {/* Mobile burger */}
          <div className="md:hidden flex items-center gap-3">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {isMenuOpen
                ? <FiX size={22} className={isDark ? 'text-slate-300' : 'text-slate-700'} />
                : <FiMenu size={22} className={isDark ? 'text-slate-300' : 'text-slate-700'} />
              }
            </button>
          </div>

          {/* Logo */}
          <img src="/img/MyLogo.png" alt="Logo" className="h-12" fetchPriority="high" loading="eager" />

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(section => (
              <a
                key={section}
                href={`#${section}`}
                className={`capitalize px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group
                  ${isDark ? 'text-slate-400 hover:text-cyan-400' : 'text-slate-500 hover:text-cyan-600'}`}
              >
                {section.replace('-', ' ')}
                <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out rounded-full" />
              </a>
            ))}
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={isDark ? 'Light Mode' : 'Dark Mode'}
            className="select-none p-2 rounded-lg transition-all duration-200 hover:bg-white/10"
          >
            {!isDark
              ? <FiMoon size={20} className="hover:text-cyan-500 transition-all duration-200" />
              : <FiSun size={20} className="hover:text-yellow-400 transition-all duration-200" />
            }
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden absolute top-14 left-0 w-full border-b overflow-hidden
                ${isDark ? 'bg-[#090e1a] border-slate-800' : 'bg-white border-slate-200'}`}
            >
              {navLinks.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    setTimeout(() => {
                      const el = document.getElementById(section);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 320);
                  }}
                  className={`capitalize block py-4 px-6 text-base font-medium border-b last:border-b-0 transition-colors duration-200
                    ${isDark
                      ? 'border-slate-800 text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/5'
                      : 'border-slate-100 text-slate-600 hover:text-cyan-600 hover:bg-cyan-50'
                    }`}
                >
                  {section.replace('-', ' ')}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── HERO ─────────────────────────────────────── */}
      <header id="me" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 scroll-mt-14">
        <div className="flex flex-col-reverse md:grid md:grid-cols-[1fr_auto] items-center gap-10 md:gap-20">

          {/* ── LEFT: TEXT BLOCK ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center md:text-left"
          >
            {/* Available pill */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-5"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className={`text-xs font-semibold tracking-widest uppercase ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-none mb-5">
              <span className={isDark ? 'text-white' : 'text-slate-900'}>I'm</span> <br />
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Typing role */}
            <div className={`text-lg sm:text-xl font-semibold mb-5 h-8 flex items-center gap-1 justify-center md:justify-start
              ${isDark ? 'text-cyan-300' : 'text-cyan-600'}`}>
              <span className="font-mono">{displayed}</span>
              <span className="animate-blink border-2 border-cyan-300 h-[70%]"></span>
            </div>

            {/* Motto */}
            <p className={`text-sm sm:text-base max-w-lg mb-8 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {personalInfo.motto}
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
              <motion.a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 bg-linear-to-r from-cyan-500 to-indigo-600 text-white font-bold px-6 py-2.5 rounded-full shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 text-sm"
              >
                <FaFileAlt size={13} /> Resume
              </motion.a>
              <motion.a
                href={`https://mail.google.com/mail?view=cm&fs=1&to=${personalInfo.email}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300
                    ${isDark ? 'border-slate-700 text-slate-400' : 'border-slate-200 text-slate-500'} hover:text-red-600 hover:border-red-800`}
              >
                <FaEnvelope size={17} />
              </motion.a>

              {/* Icon links */}
              {[
                { href: personalInfo.github, Icon: FaGithub, label: 'GitHub', hover: isDark ? 'hover:border-slate-400 hover:text-white' : 'hover:border-slate-600 hover:text-slate-900' },
                { href: personalInfo.linkedin, Icon: FaLinkedin, label: 'LinkedIn', hover: 'hover:border-blue-400 hover:text-blue-400' },
              ].map(({ href, Icon, label, hover }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title={label}
                  className={`flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300
                    ${isDark ? 'border-slate-700 text-slate-400' : 'border-slate-200 text-slate-500'} ${hover}`}
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </div>

            {/* ── Quick stat chips ── */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-2 justify-center md:justify-start"
            >
              {[
                { Icon: FiMapPin, label: quickInfo.location, color: 'text-amber-400', bg: isDark ? 'bg-amber-500/10 border-amber-500/20' : 'bg-amber-50 border-amber-200' },
                { Icon: FiClock, label: quickInfo.availability, color: 'text-emerald-400', bg: isDark ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-emerald-50 border-emerald-200' },
              ].map(({ Icon, label, color, bg }) => (
                <span key={label} className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${bg}`}>
                  <Icon className={color} size={11} />
                  <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{label}</span>
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: PHOTO ── */}
          <motion.div
            className="relative w-64 h-64 md:w-100 md:h-100 justify-self-center flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, type: 'spring', stiffness: 120 }}
          >
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-linear-to-tr from-cyan-500 via-indigo-700 to-pink-700 blur-3xl opacity-65 animate-gradient scale-90" />
            {/* Spinning border */}
            {/* <div className="absolute inset-0 rounded-full border-2 border-transparent"
              style={{ background: isDark ? 'linear-gradient(#080c14, #080c14) padding-box, linear-gradient(135deg, #22d3ee, #818cf8, #f472b6) border-box' : 'linear-gradient(#f1f5f9, #f1f5f9) padding-box, linear-gradient(135deg, #22d3ee, #818cf8, #f472b6) border-box' }}
            /> */}
            <img
              src={personalInfo.MyImage.src}
              alt={personalInfo.MyImage.alt || personalInfo.name}
              className="relative h-full rounded-full object-cover drop-shadow-2xl scale-125"
              fetchPriority="high"
              loading="eager"
              decoding="async"
            />
          </motion.div>
        </div>
      </header>

    </>
  );
};

export default Header;