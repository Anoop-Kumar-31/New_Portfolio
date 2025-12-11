import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { projects } from '../data';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ title, businessContext, period, description, problemSolutionImpact, techStack, project_img, link, githubRepo }) => {
  const [isTapped, setIsTapped] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleTap = () => {
    if ('ontouchstart' in window) {
      setIsTapped(!isTapped);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group h-full"
    >
      <div
        className={`relative rounded-xl shadow-xl overflow-hidden transform hover:scale-102 transition-all duration-300 bg-gray-800 border border-gray-700 hover:border-cyan-500/50 flex flex-col h-full ${isTapped ? 'is-tapped' : ''}`}
        onClick={handleTap}
      >
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden flex-shrink-0">
          <img
            src={project_img}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>

          {/* Action Buttons Overlay */}
          <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors duration-300 shadow-lg"
              title="View Live Demo"
              onClick={(e) => e.stopPropagation()}
            >
              <FiExternalLink className="w-5 h-5" />
            </a>
            <a
              href={githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-300 shadow-lg"
              title="View Source Code"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Business Context */}
          <p className="text-xs text-cyan-400 font-semibold uppercase tracking-wide mb-2">
            {businessContext}
          </p>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
            {title}
          </h3>

          {/* Period */}
          <p className="text-xs text-gray-400 italic mb-3">{period}</p>

          {/* Description - Fixed at 3 lines */}
          <p className="text-sm text-gray-300 mb-4 line-clamp-3">
            {description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs font-medium rounded-full border border-gray-600/50"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Problem-Solution-Impact Toggle */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowDetails(!showDetails);
            }}
            className={`text-sm text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300 text-left ${!showDetails ? 'mb-5' : ''}`}
          >
            {showDetails ? '← Hide [Details]' : '→ View [Problem → Solution → Impact]'}
          </button>

          {/* Expandable Details */}
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 p-4 bg-gray-900/50 rounded-lg border border-gray-700/50 space-y-3 mb-4"
            >
              <div>
                <p className="text-xs text-red-400 font-semibold uppercase mb-1">Problem</p>
                <p className="text-sm text-gray-300">{problemSolutionImpact.problem}</p>
              </div>
              <div>
                <p className="text-xs text-yellow-400 font-semibold uppercase mb-1">Solution</p>
                <p className="text-sm text-gray-300">{problemSolutionImpact.solution}</p>
              </div>
              <div>
                <p className="text-xs text-green-400 font-semibold uppercase mb-1">Impact</p>
                <p className="text-sm text-gray-300">{problemSolutionImpact.impact}</p>
              </div>
            </motion.div>
          )}

          {/* CTA Buttons - Pushed to bottom */}
          <div className="flex gap-3 mt-auto">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-cyan-500 hover:bg-cyan-700 text-white text-center font-semibold py-2 px-4 rounded-lg transition-all duration-300 shadow-md"
              onClick={(e) => e.stopPropagation()}
            >
              Live Demo
            </a>
            <a
              href={githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 text-center font-semibold py-2 px-4 rounded-lg transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <Section id="projects" title="Projects" subtitle="Real-world applications I've built">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start xl:auto-rows-fr">
        {projects.map((project) => <ProjectCard key={project.id} {...project} />)}
      </div>
    </Section>
  );
};

export default Projects;

