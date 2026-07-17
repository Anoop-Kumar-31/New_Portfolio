import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaGithub } from 'react-icons/fa';

const Banner = ({
  titleText,
  gradientWord,
  titleSuffix,
  description,
  primaryBtnText,
  primaryBtnLink,
  primaryIcon: PrimaryIcon,
  secondaryBtnText,
  secondaryBtnLink,
  secondaryIcon: SecondaryIcon,
  isSecondaryExternal = false,
}) => {
  const { isDark } = useTheme();

  return (
    <div className={`w-full border-y py-16 md:py-20 my-12 transition-colors duration-400 relative overflow-hidden
      ${isDark
        ? 'border-slate-800/80 bg-[#080c14]'
        : 'border-slate-200 bg-slate-50'}`}>

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {titleText}{' '}
          {gradientWord && (
            <span className="bg-linear-to-r from-cyan-400 via-indigo-400 to-pink-500 bg-clip-text text-transparent italic font-serif">
              {gradientWord}
            </span>
          )}
          {titleSuffix}
        </h2>

        <p className={`text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {primaryBtnText && (
            <motion.a
              href={primaryBtnLink}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 bg-linear-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold px-8 py-3.5 rounded-full shadow-md hover:shadow-cyan-500/20 uppercase tracking-widest hover:scale-[1.01] active:scale-[0.99] text-sm"
            >
              {PrimaryIcon && <PrimaryIcon size={14} />}
              {primaryBtnText}
            </motion.a>
          )}

          {secondaryBtnText && (
            <motion.a
              href={secondaryBtnLink}
              target={isSecondaryExternal ? "_blank" : undefined}
              rel={isSecondaryExternal ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`px-8 py-3.5 rounded-full text-sm font-bold border flex items-center justify-center gap-2 transition-all duration-300 w-full sm:w-auto
                ${isDark
                  ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:text-white hover:border-slate-650'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-slate-350'
                }`}
            >
              {SecondaryIcon && <SecondaryIcon size={14} />}
              {secondaryBtnText}
            </motion.a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
