import Section from './Section';
import { education, certificates } from '../data';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { FaMedal, FaUniversity } from 'react-icons/fa';
import { FiExternalLink, FiAward } from 'react-icons/fi';

const Education = () => {
  const { isDark } = useTheme();
  const cardBase = isDark ? 'bg-slate-800/40 border-slate-700/50' : 'bg-white border-slate-200';

  return (
    <Section id="education" title="Education" subtitle="Academic background & certifications">

      {/* ── University Card ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`rounded-2xl border shadow-lg mb-8 overflow-hidden ${cardBase}`}
      >
        {/* Top accent bar */}
        <div className="h-1 bg-linear-to-r from-cyan-400 via-indigo-500 to-pink-500" />

        <div className="p-6 flex flex-col sm:flex-row sm:items-center gap-2">
          {/* Logo */}
          <div className={`overflow-hidden h-20 rounded-xs flex items-center justify-center shrink-0 border
            ${isDark ? 'bg-white/10 border-slate-600' : 'bg-slate-50 border-slate-200'}`}>
            <img
              src={education.logo}
              alt="University Logo"
              className="w-full h-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start gap-1 mb-1">
              <FaUniversity className={`mt-0.5 shrink-0 ${isDark ? 'text-slate-500' : 'text-slate-400'}`} size={20} />
              <h3 className={`text-lg font-extrabold leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {education.university}
              </h3>
            </div>
            <p className="text-cyan-400 font-semibold text-sm mb-1">{education.degree}</p>
            <p className={`text-xs italic ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{education.period}</p>
          </div>

          {/* CGPA */}
          <div className={`flex flex-col items-center px-5 py-3 rounded-2xl border shrink-0 text-center
            ${isDark ? 'bg-cyan-500/10 border-cyan-500/30' : 'bg-cyan-50 border-cyan-200'}`}>
            <span className={`text-[10px] font-semibold uppercase tracking-widest mb-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              CGPA
            </span>
            <span className="text-3xl font-black bg-gradient-to-br from-cyan-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">{education.cgpa ?? '7.98'}</span>
            <span className={`text-[10px] mt-0.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>/ 10.00</span>
          </div>
        </div>
      </motion.div>

      {/* ── Certifications heading ── */}
      <div className="flex items-center gap-2 mb-5">
        <FaMedal className="text-amber-400" size={16} />
        <h3 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Certifications & Achievements
        </h3>
        <span className={`ml-auto text-xs font-semibold px-2 py-0.5 rounded-full border
          ${isDark ? 'border-slate-700 text-slate-400 bg-slate-800' : 'border-slate-200 text-slate-500 bg-slate-100'}`}>
          {certificates.length} Certificates
        </span>
      </div>

      {/* ── Cert card grid ── */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificates.map((cert, index) => (
          <motion.a
            key={index}
            href={cert.verify}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className={`group rounded-2xl border p-4 flex flex-col gap-3 transition-all duration-300 cursor-pointer
              ${isDark
                ? 'bg-slate-800/40 border-slate-700/50 hover:border-cyan-500/40 hover:bg-slate-800/80 hover:shadow-lg hover:shadow-cyan-500/5'
                : 'bg-white border-slate-200 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-slate-200/80'
              }`}
          >
            {/* Top row */}
            <div className="flex items-center justify-between">
              <div className="h-9 w-20 rounded-lg flex items-center justify-center border p-1 bg-white border-slate-200 shrink-0">
                <img
                  src={cert.icon}
                  alt={cert.authorizedBy}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border
                ${cert.type.includes('Specialization')
                  ? isDark
                    ? 'text-violet-400 border-violet-500/30 bg-violet-500/10'
                    : 'text-violet-600 border-violet-200 bg-violet-50'
                  : isDark
                    ? 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10'
                    : 'text-emerald-600 border-emerald-200 bg-emerald-50'
                }`}>
                {cert.type.includes('Specialization') ? 'Specialization' : 'Course'}
              </span>
            </div>

            {/* Cert name */}
            <p className={`text-sm font-bold leading-snug group-hover:text-cyan-400 transition-colors duration-200 flex-1
              ${isDark ? 'text-white' : 'text-slate-800'}`}>
              {cert.name}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between mt-auto">
              <div>
                <p className={`text-xs font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{cert.authorizedBy}</p>
                <p className={`text-[10px] ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>{cert.date}</p>
              </div>
              <span className={`flex items-center gap-1 text-[10px] font-black uppercase tracking-wider
                ${isDark ? 'text-cyan-500' : 'text-cyan-600'}`}>
                <FiAward size={10} /> Verify <FiExternalLink size={9} />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
};

export default Education;