import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX, FiSmile } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt, FaCheckCircle } from 'react-icons/fa';

const ROLES = [
  'Full-Stack Developer',
  'React & Node.js Specialist',
  'REST API Designer',
  'PostgreSQL & Sequelize Engineer',
];

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  const navLinks = ['me', 'experience', 'projects', 'skills', 'education', 'hire-readiness', 'contact'];

  // Typing effect
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        setRoleIndex((roleIndex + 1) % ROLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const bg = isDark
    ? 'bg-[#080c14]/80 border-b border-cyan-900/30'
    : 'bg-white/80 border-b border-slate-200';

  return (
    <>
      <nav className={`sticky top-0 z-1000 backdrop-blur-md ${bg} transition-colors duration-400`}>
        <div className="container mx-auto xl:px-40 lg:px-25 px-4 flex items-center justify-between h-14">

          {/* LEFT: Theme toggle switch */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="select-none"
          >
            {/* Track */}
            <div className={`relative w-14 h-7 rounded-full transition-colors duration-300
              ${isDark ? 'bg-slate-700' : 'bg-amber-400'}`}>
              {/* Sliding disc with icon inside */}
              <motion.div
                animate={{ x: isDark ? 3 : 31 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="absolute top-1 w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center"
              >
                <AnimatePresence mode="wait">
                  {isDark ? (
                    <motion.span key="moon" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} transition={{ duration: 0.15 }}>
                      <FiMoon size={11} className="text-slate-600" />
                    </motion.span>
                  ) : (
                    <motion.span key="sun" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} transition={{ duration: 0.15 }}>
                      <FiSun size={11} className="text-amber-500" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </button>

          {/* CENTER: Desktop nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(section => (
              <a
                key={section}
                href={`#${section}`}
                className={`capitalize px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group
                  ${isDark ? 'text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10' : 'text-slate-500 hover:text-cyan-600 hover:bg-cyan-50'}`}
              >
                {section.replace('-', ' ')}
                <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out rounded-full" />
              </a>
            ))}
          </div>

          {/* RIGHT: Monogram + mobile burger */}
          <div className="flex items-center gap-3">
            {/* <span className={`hidden md:flex items-center justify-center w-9 h-9 rounded-lg font-bold text-sm
              ${isDark ? 'bg-linear-to-br from-cyan-500 to-indigo-600 text-white' : 'bg-linear-to-br from-cyan-500 to-indigo-600 text-white'}`}>
              AK
            </span> */}
            <img src="/img/MyLogo.png" alt="" className='h-12' />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
              {isMenuOpen
                ? <FiX size={22} className={isDark ? 'text-slate-300' : 'text-slate-700'} />
                : <FiMenu size={22} className={isDark ? 'text-slate-300' : 'text-slate-700'} />
              }
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden overflow-hidden ${isDark ? 'bg-[#0d1526]' : 'bg-white'}`}
            >
              {navLinks.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    // Wait for the menu collapse animation to finish before scrolling
                    setTimeout(() => {
                      const el = document.getElementById(section);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 320);
                  }}
                  className={`capitalize block py-3 px-6 text-base font-medium border-b transition-colors duration-200
                    ${isDark ? 'border-slate-800 text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10' : 'border-slate-100 text-slate-600 hover:text-cyan-600 hover:bg-cyan-50'}`}
                >
                  {section.replace('-', ' ')}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero */}
      <header id="me" className={`container mx-auto px-6 xl:px-40 lg:px-25 py-16 md:py-24 scroll-mt-14`}>
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-10 md:gap-16">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-sm font-semibold tracking-widest uppercase mb-3 flex items-center gap-2 justify-center md:justify-start ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}
            >
              <FiSmile size={15} /> Hello, World!
            </motion.p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-2">
              <span className={isDark ? 'text-white' : 'text-slate-900'}>I'm </span>
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <div className={`text-lg sm:text-xl md:text-2xl font-semibold mt-3 mb-6 h-8 flex items-center gap-1 justify-center md:justify-start
              ${isDark ? 'text-indigo-300' : 'text-indigo-600'}`}>
              <span className="font-mono">{displayed}</span>
              <span className="animate-blink">|</span>
            </div>

            <p className={`text-base max-w-xl mb-8 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {personalInfo.motto}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <motion.a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-linear-to-r from-cyan-500 to-indigo-600 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-cyan-500/40 transition-all duration-300"
              >
                <FaFileAlt size={14} /> Resume
              </motion.a>
              <motion.a
                href={`https://mail.google.com/mail?view=cm&fs=1&to=${personalInfo.email}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 font-bold px-6 py-3 rounded-full border transition-all duration-300
                  ${isDark ? 'border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-400' : 'border-slate-300 text-slate-600 hover:border-cyan-500 hover:text-cyan-600'}`}
              >
                <FaEnvelope size={14} /> Contact
              </motion.a>
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`flex items-center justify-center w-11 h-11 rounded-full border transition-all duration-300
                  ${isDark ? 'border-slate-700 text-slate-400 hover:border-cyan-400 hover:text-cyan-400' : 'border-slate-200 text-slate-500 hover:border-cyan-500 hover:text-cyan-600'}`}
              >
                <FaGithub size={18} />
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`flex items-center justify-center w-11 h-11 rounded-full border transition-all duration-300
                  ${isDark ? 'border-slate-700 text-slate-400 hover:border-blue-400 hover:text-blue-400' : 'border-slate-200 text-slate-500 hover:border-blue-500 hover:text-blue-600'}`}
              >
                <FaLinkedin size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            className="relative w-64 h-64 md:w-96 md:h-96 justify-self-center flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, type: 'spring', stiffness: 120 }}
          >
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-linear-to-tr from-cyan-500 via-indigo-600 to-pink-500 blur-3xl opacity-30 animate-gradient" />
            {/* Spinning border */}
            <div className="absolute inset-0 rounded-full border-2 border-transparent"
              style={{ background: isDark ? 'linear-gradient(#080c14, #080c14) padding-box, linear-gradient(135deg, #22d3ee, #818cf8, #f472b6) border-box' : 'linear-gradient(#f1f5f9, #f1f5f9) padding-box, linear-gradient(135deg, #22d3ee, #818cf8, #f472b6) border-box' }}
            />
            <img
              src={personalInfo.MyImage.src}
              alt={personalInfo.MyImage.alt || personalInfo.name}
              className="relative h-[90%] rounded-full object-cover drop-shadow-2xl"
            />

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className={`absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold shadow-xl border flex items-center gap-1.5
                ${isDark ? 'bg-[#0d1526] border-cyan-500/40 text-cyan-300' : 'bg-white border-cyan-300 text-cyan-700'}`}
            >
              <FaCheckCircle className="text-emerald-400" /> Available
            </motion.div>
          </motion.div>
        </div>
      </header>
    </>
  );
};

export default Header;