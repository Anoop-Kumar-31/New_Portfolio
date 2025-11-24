import { useState } from 'react';
import Section from './Section';
import { projects } from '../data';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ title, period, description, project_img, link, githubRepo }) => {
  const [isTapped, setIsTapped] = useState(false);

  const handleTap = () => {
    // This is for touch devices to toggle the view.
    // On desktop, hover is preferred, so we don't want click to interfere with leaving the card.
    if ('ontouchstart' in window) {
      setIsTapped(!isTapped);
    }
  };

  return (
    <div 
      className={`relative h-65 rounded-lg shadow-lg overflow-hidden group transform hover:scale-102 transition-transform duration-300 ease-in-out bg-cover bg-center hover:border-cyan-500 ${isTapped ? 'is-tapped' : ''}`}
      style={{ backgroundImage: `url(${project_img})` }}
      onClick={handleTap}
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      {/* Hover/Tap gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 group-[.is-tapped]:opacity-100 transition-opacity duration-500 ease-in-out"></div>
    
      {/* Content container */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-gray-400 italic mb-2 ">{period}</p>
        {/* Hidden content that appears on hover/tap */}
        <div className="overflow-hidden max-h-0 group-hover:max-h-40 group-[.is-tapped]:max-h-40 transition-all duration-500 ease-in-out">
          <p className="text-gray-300 text-sm my-4">{description}</p>
          <div className="flex justify-end space-x-4">
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300" title="View Project">
              <FiExternalLink className="w-6 h-6" />
            </a>
            <a href={githubRepo} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-700 transition-colors duration-300" title="View on GitHub">
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => <ProjectCard key={project.id} {...project} />)}
      </div>
    </Section>
  );
};

export default Projects;