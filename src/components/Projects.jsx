import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './Section';
import { projects } from '../data';
import { FiFilter } from 'react-icons/fi';
import ProjectGallery from './ProjectGallery';
import ProjectCard from './ProjectCard';
import { useTheme } from '../context/ThemeContext';

const Projects = () => {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState('★ Featured');
  const [visibleCount, setVisibleCount] = useState(6);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryConfig, setGalleryConfig] = useState({ images: [], title: '' });
  const featuredProjects = projects.filter(p => p.isFeatured);

  const categories = ['All', '★ Featured'];

  const processedProjects = useMemo(() => {
    let filtered = activeCategory === 'All'
      ? [...projects]
      : projects.filter(p => p.category === activeCategory);
    if (activeCategory === '★ Featured') {
      filtered = projects.filter(p => p.isFeatured);
    }
    return filtered.sort((a, b) => {
      const dateA = new Date(a.startDate);
      const dateB = new Date(b.startDate);
      return dateB - dateA;
    });
  }, [activeCategory]);

  const handleOpenGallery = (images, title) => {
    setGalleryConfig({ images, title });
    setIsGalleryOpen(true);
  };

  return (
    <Section id="projects" title="Featured Work" subtitle="Architecting elegant solutions for complex problems">
      <div className="flex items-center mb-10">
        {/* Category Filter */}
        <div className="flex items-center gap-2">
          <FiFilter className={isDark ? 'text-cyan-500 mr-1' : 'text-cyan-400 mr-1'} size={20} />
          <div id="categoryFilterBox" className={`flex flex-wrap items-center justify-center gap-2 `} >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setVisibleCount(6); }}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 border
              ${activeCategory === cat
                    ? 'bg-cyan-500 border-cyan-500 text-white shadow-lg shadow-cyan-500/20'
                    : isDark
                      ? 'bg-slate-800/40 border-slate-700/50 text-slate-400 hover:text-white hover:border-slate-500'
                      : 'bg-white border-slate-300 text-slate-500 hover:text-slate-800 hover:border-slate-400'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="relative">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          <AnimatePresence mode="popLayout">
            {processedProjects.slice(0, visibleCount).map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
                onOpenGallery={handleOpenGallery}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {processedProjects.length === 0 && (
          <div className={`text-center py-20 rounded-3xl border border-dashed
            ${isDark ? 'bg-slate-800/20 border-slate-700' : 'bg-slate-100 border-slate-300'}`}>
            <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>No projects found in this category.</p>
          </div>
        )}

        {/* Load More */}
        {processedProjects.length > visibleCount && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setVisibleCount(prev => prev + 3)}
              className={`px-8 py-3 border text-xs font-bold rounded-2xl transition-all duration-300 flex items-center gap-2
                ${isDark
                  ? 'bg-slate-800/50 hover:bg-slate-700/50 border-slate-700 text-slate-300'
                  : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-600'
                }`}
            >
              Show More Projects
              <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" />
            </button>
          </div>
        )}
      </div>

      <ProjectGallery
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        images={galleryConfig.images}
        projectTitle={galleryConfig.title}
      />
    </Section>
  );
};

export default Projects;
