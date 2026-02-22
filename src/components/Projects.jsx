import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './Section';
import { projects } from '../data';
import { FiFilter } from 'react-icons/fi';
import ProjectGallery from './ProjectGallery';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeSort, setActiveSort] = useState('newest'); // 'newest' or 'oldest'
  const [visibleCount, setVisibleCount] = useState(6);

  // Gallery State
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryConfig, setGalleryConfig] = useState({ images: [], title: '' });

  const categories = ['All', 'Full-Stack', 'Frontend'];

  const processedProjects = useMemo(() => {
    let filtered = activeCategory === 'All'
      ? [...projects]
      : projects.filter(p => p.category === activeCategory);

    return filtered.sort((a, b) => {
      const dateA = new Date(a.startDate);
      const dateB = new Date(b.startDate);
      return activeSort === 'newest' ? dateB - dateA : dateA - dateB;
    });
  }, [activeCategory, activeSort]);

  const handleOpenGallery = (images, title) => {
    setGalleryConfig({ images, title });
    setIsGalleryOpen(true);
  };

  return (
    <Section id="projects" title="Featured Work" subtitle="Architecting elegant solutions for complex problems">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <FiFilter className="text-gray-500 mr-2" />
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(6);
              }}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all duration-300 border ${activeCategory === cat
                ? 'bg-cyan-500 border-cyan-500 text-white shadow-lg shadow-cyan-500/20'
                : 'bg-gray-800/40 border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-500'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort Controls */}
        <div className="flex items-center gap-2 bg-gray-900/40 p-1.5 rounded-2xl border border-gray-700/50">
          <button
            onClick={() => setActiveSort('newest')}
            className={`px-4 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${activeSort === 'newest'
              ? 'bg-gray-800 text-cyan-400 shadow-lg'
              : 'text-gray-500 hover:text-white'
              }`}
          >
            Newest
          </button>
          <button
            onClick={() => setActiveSort('oldest')}
            className={`px-4 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${activeSort === 'oldest'
              ? 'bg-gray-800 text-cyan-400 shadow-lg'
              : 'text-gray-500 hover:text-white'
              }`}
          >
            Oldest
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="relative">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
        >
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
          <div className="text-center py-20 bg-gray-800/20 rounded-3xl border border-dashed border-gray-700">
            <p className="text-gray-500 text-sm">No projects found in this category.</p>
          </div>
        )}

        {/* Load More */}
        {processedProjects.length > visibleCount && (
          <div className="flex justify-center mt-16">
            <button
              onClick={() => setVisibleCount(prev => prev + 3)}
              className="px-8 py-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 text-gray-300 text-xs font-bold rounded-2xl transition-all duration-300 flex items-center gap-2"
            >
              Show More Projects
              <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" />
            </button>
          </div>
        )}
      </div>

      {/* Gallery Modal */}
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

