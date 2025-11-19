import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ['experience', 'projects', 'skills', 'education', 'certificates', 'contact'];

  return (
    <>
      <nav className={`sticky top-0 z-20 backdrop-blur-md shadow-lg ${isMenuOpen ? 'bg-gray-900' : ' bg-gray-900/30'} `}>
        <div className=" w-full flex justify-between items-center">
          {/* Desktop Menu */}
          <div className="hidden md:flex justify-center items-center w-full space-x-8 text-base">
            {navLinks.map(section => (
              <a key={section} href={`#${section}`} className="capitalize text-gray-300 hover:text-cyan-400 py-4 transition-colors duration-300 relative group">
                {section}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-end w-full">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-4 focus:outline-none">
              <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 } } className="md:hidden absolute top-full left-0 w-full bg-gray-900 backdrop-blur-md shadow-xl flex flex-col items-center justify-center">
              {navLinks.map((section) => (
                <a key={section} href={`#${section}`} className="capitalize w-full text-center text-gray-300 hover:text-cyan-400 py-4 transition-colors duration-300 relative group px-4 hover:bg-gray-800/50 backdrop-blur-3xl">
                  <span className="font-semibold text-xl hover:text-cyan-400 transition-colors duration-300 relative group-hover:text-cyan-400">{section}</span>
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <header className="container mx-auto px-4 xl:px-50 lg:px-25 mdpy-12 md:x-20 text-center md:text-left py-8">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-8 md:gap-12">
          <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Hi, I'm <br/><span className="text-cyan-400">{personalInfo.name}</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mt-4 font-semibold">
              {personalInfo.title}
            </p>
            <p className="mt-6 text-gray-400 max-w-xl">
              I'm a passionate developer focused on building scalable and user-friendly web applications. Welcome to my personal space on the web.
            </p>
            <div className="mt-8 flex flex-col lg:flex-row items-center justify-center md:justify-start gap-4">
              <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="bg-cyan-500 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:bg-cyan-700">
                My_Resume
              </a>
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <span className="text-gray-700 text-2xl hidden lg:block">/</span>
                <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300" title="Email">Email</a>
                <span className="text-gray-700 text-2xl">/</span>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300" title="LinkedIn">LinkedIn</a>
                <span className="text-gray-700 text-2xl">/</span>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300" title="GitHub">GitHub</a>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="relative w-80 h-80 md:w-110 md:h-110 justify-self-center flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-linear-to-r from-rose-900 to-cyan-700 rounded-full blur-2xl opacity-50 rotate-335"></div>
            <img
              src={personalInfo.MyImage.src} // Placeholder for your profile picture
              alt={personalInfo.MyImage.alt || personalInfo.name}
              className="relative h-full"
            />
          </motion.div>
        </div>
      </header>
    </>
  );
};

export default Header;