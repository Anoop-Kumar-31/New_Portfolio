import { useState } from 'react';
import Section from './Section';
import { skills } from '../data';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const TABS = ['All', ...skills.technical.map(c => c.name)];

const TAB_ACCENT = [
  { active: 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30', dot: 'bg-cyan-400', ring: 'ring-cyan-500/30', text: 'text-cyan-400' },
  { active: 'bg-violet-500 text-white shadow-lg shadow-violet-500/30', dot: 'bg-violet-400', ring: 'ring-violet-500/30', text: 'text-violet-400' },
  { active: 'bg-amber-500 text-white shadow-lg shadow-amber-500/30', dot: 'bg-amber-400', ring: 'ring-amber-500/30', text: 'text-amber-400' },
  { active: 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30', dot: 'bg-emerald-400', ring: 'ring-emerald-500/30', text: 'text-emerald-400' },
  { active: 'bg-pink-500 text-white shadow-lg shadow-pink-500/30', dot: 'bg-pink-400', ring: 'ring-pink-500/30', text: 'text-pink-400' },
];

const Skills = () => {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const cardBase = isDark ? 'bg-slate-800/40 border-slate-700/50' : 'bg-white border-slate-200';
  const accent = TAB_ACCENT[activeTab % TAB_ACCENT.length];
  const currentCategory = activeTab === 0
    ? {
      name: 'All Skills',
      list: skills.technical.reduce((acc, cat) => {
        cat.list.forEach(item => {
          if (!acc.some(s => s.name === item.name)) {
            acc.push(item);
          }
        });
        return acc;
      }, [])
    }
    : skills.technical[activeTab - 1];

  return (
    <Section id="skills" title="Skills" subtitle="Technologies I work with daily" divider={true}>
      {/* ── Tab Row ── */}
      <div className={`flex flex-wrap gap-2 mb-8 p-1.5 rounded-2xl border w-fit mx-auto md:mx-0
        ${isDark ? 'bg-slate-900/60 border-slate-700/50' : 'bg-slate-100 border-slate-200'}`}>
        {TABS.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveTab(i)}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all duration-300
              ${activeTab === i
                ? TAB_ACCENT[i % TAB_ACCENT.length].active
                : isDark
                  ? 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-white'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ── Icon Grid ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className={`rounded-2xl border p-6 shadow-sm ${cardBase}`}
        >
          {/* Category label */}
          <div className={`flex items-center gap-2 mb-6`}>
            <span className={`w-2 h-2 rounded-full ${accent.dot}`} />
            <h3 className={`text-sm font-bold uppercase tracking-widest ${accent.text}`}>{currentCategory.name}</h3>
          </div>

          {/* Icons */}
          <div className={`grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5 xl:grid-cols-10 2xl:grid-cols-12`}>
            {currentCategory.list.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -4, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="group flex flex-col items-center gap-2"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 border
                  ${isDark
                    ? `bg-slate-700/50 border-slate-600/40 group-hover:border-slate-500 group-hover:bg-slate-700 group-hover:ring-2 group-hover:${accent.ring}`
                    : `bg-slate-50 border-slate-200 group-hover:border-slate-300 group-hover:bg-white group-hover:shadow-md`
                  }`}>
                  <img
                    src={item.icon}
                    alt={item.name}
                    className={`w-8 h-8 object-contain select-none
                      ${(item.name === 'GitHub' || item.name === 'Docker') && isDark ? 'filter invert' : ''}
                      ${(item.name === 'Express.js' || item.name === 'Next.js' || item.name === 'Prisma' || item.name === 'Socket.IO' || item.name === "GitHub Copilot" || item.name === "Cursor" || item.name === "OpenAI") && isDark ? 'filter invert' : ''}
                    `}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className={`text-xs font-semibold text-center leading-tight ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  {item.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ── Soft Skills strip ── */}
      <div className={`mt-6 rounded-2xl border p-5 ${cardBase}`}>
        <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Soft Skills</p>
        <div className="flex flex-wrap gap-2">
          {skills.social.map((skill) => (
            <motion.span
              key={skill}
              whileHover={{ scale: 1.05 }}
              className={`px-3 py-1 rounded-full text-xs font-semibold border cursor-default transition-all duration-200
                ${isDark
                  ? 'bg-slate-700/40 text-slate-300 border-slate-600 hover:border-cyan-500/50 hover:text-cyan-300'
                  : 'bg-slate-100 text-slate-600 border-slate-200 hover:border-cyan-400 hover:text-cyan-700'
                }`}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;