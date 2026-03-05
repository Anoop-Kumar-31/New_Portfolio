import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Section = ({ id, title, subtitle, children }) => {
  const { isDark } = useTheme();
  return (
    <motion.section
      id={id}
      className="mb-20 scroll-mt-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-2">
          {/* Accent bar */}
          <span className="block w-1 h-8 bg-gradient-to-b from-cyan-400 to-indigo-500 rounded-full flex-shrink-0" />
          <h2 className={`text-2xl md:text-3xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {title}
          </h2>
          <div className={`grow h-px ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`} />
        </div>
        {subtitle && (
          <p className={`ml-5 text-sm md:text-base font-medium ${isDark ? 'text-cyan-400/70' : 'text-cyan-600/80'}`}>
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </motion.section>
  );
};

export default Section;
