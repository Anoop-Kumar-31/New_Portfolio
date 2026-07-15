import { motion } from 'framer-motion';
import Section from './Section';
import { hireReadiness } from '../data';
import { useTheme } from '../context/ThemeContext';
import { FaEnvelope } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const ROW_ACCENTS = [
  { icon: 'text-pink-400', bg: isDark => isDark ? 'bg-pink-500/10 border-pink-500/20' : 'bg-pink-50 border-pink-200' },
  { icon: 'text-amber-400', bg: isDark => isDark ? 'bg-amber-500/10 border-amber-500/20' : 'bg-amber-50 border-amber-200' },
  { icon: 'text-blue-400', bg: isDark => isDark ? 'bg-blue-500/10 border-blue-500/20' : 'bg-blue-50 border-blue-200' },
  { icon: 'text-emerald-400', bg: isDark => isDark ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-emerald-50 border-emerald-200' },
  { icon: 'text-violet-400', bg: isDark => isDark ? 'bg-violet-500/10 border-violet-500/20' : 'bg-violet-50 border-violet-200' },
  { icon: 'text-cyan-400', bg: isDark => isDark ? 'bg-cyan-500/10 border-cyan-500/20' : 'bg-cyan-50 border-cyan-200' },
];

const HireReadiness = () => {
  const { isDark } = useTheme();
  const cardBase = isDark ? 'bg-slate-800/40 border-slate-700/50' : 'bg-white border-slate-200';

  return (
    <Section id="hire-readiness" title={hireReadiness.title} subtitle="Skills I can apply from day one">

      {/* ── Available badge ── */}
      <div className="flex items-center gap-2 mb-6">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <span className={`text-sm font-semibold ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
          Available Now — Ready to contribute from day one
        </span>
      </div>

      {/* ── Capability grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {hireReadiness.capabilities.map((capability, index) => {
          const accent = ROW_ACCENTS[index % ROW_ACCENTS.length];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              whileHover={{ y: -4 }}
              className={`group rounded-2xl border p-5 transition-all duration-300 ${cardBase}
                ${isDark ? 'hover:border-slate-600 hover:shadow-lg' : 'hover:shadow-xl hover:border-slate-300'}`}
            >
              {/* Icon */}
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center border mb-4 transition-transform duration-300 group-hover:scale-110 ${accent.bg(isDark)}`}>
                <capability.icon className={`w-5 h-5 ${accent.icon}`} />
              </div>

              <h3 className={`text-sm font-bold mb-1.5 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                {capability.title}
              </h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {capability.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* ── CTA Banner ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-2xl"
        style={{
          background: isDark
            ? 'linear-gradient(135deg, #0d1f3c 0%, #0a1628 50%, #0d1f3c 100%)'
            : 'linear-gradient(135deg, #eff6ff 0%, #f0fdff 50%, #f5f3ff 100%)'
        }}
      >
        {/* Gradient border */}
        <div className="absolute inset-0 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, #22d3ee22, #818cf822, #f472b622)',
            padding: '1px'
          }}
        />
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)' }} />

        <div className="relative z-10 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className={`text-xl font-extrabold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Ready to deliver value from{' '}
              <span className="gradient-text">day one</span>
            </p>
            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Let's build something great together.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-linear-to-r from-cyan-500 to-indigo-600 text-white font-bold py-2.5 px-6 rounded-full shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 text-sm"
            >
              <FaEnvelope size={13} /> Let's Talk
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 font-bold py-2.5 px-6 rounded-full border text-sm transition-all duration-300
                ${isDark
                  ? 'border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-400'
                  : 'border-slate-300 text-slate-600 hover:border-cyan-500 hover:text-cyan-600'
                }`}
            >
              View Work <FiArrowRight size={14} />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default HireReadiness;
