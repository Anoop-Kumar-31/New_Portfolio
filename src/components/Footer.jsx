import { personalInfo } from '../data';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <p className="text-xl text-gray-400 italic mb-6">"{personalInfo.motto}"</p>
        <div className="flex justify-center space-x-6 mb-6">
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-400 transition-colors duration-300" title="LinkedIn">
            LinkedIn
          </a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-400 transition-colors duration-300" title="GitHub">
            GitHub
          </a>
        </div>
        <p className="text-gray-600 text-sm">&copy; {new Date().getFullYear()} Anoop Kumar. All rights reserved.</p>
        <p className="text-gray-700 text-xs mt-2">Built with React & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;