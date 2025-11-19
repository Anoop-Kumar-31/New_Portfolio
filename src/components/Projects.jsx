import Section from './Section';
import { projects } from '../data';

const ProjectCard = ({ title, period, description, project_img, link, githubRepo }) => (
  <div 
    className="relative h-65 rounded-lg shadow-lg overflow-hidden group transform hover:scale-102 transition-transform duration-300 ease-in-out bg-cover bg-center border-transparent hover:border-cyan-500" 
    style={{ backgroundImage: `url(${project_img})` }}
  >
    {/* Base gradient */}
    <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>
    {/* Hover gradient */}
    <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
  
    {/* Content container */}
    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transition-all duration-500 ease-in-out transform translate-y-30 group-hover:translate-y-0">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-gray-400 italic mb-2">{period}</p>
      
      {/* Hidden content that appears on hover */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <div className="flex justify-end space-x-4">
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300" title="View Project">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
          <a href={githubRepo} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors duration-300" title="View on GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
);

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