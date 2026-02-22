import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink, FiImage } from 'react-icons/fi';

const ProjectCard = ({ title, businessContext, period, description, problemSolutionImpact, techStack, project_img, link, githubRepo, category, gallery, onOpenGallery }) => {
    const [isTapped, setIsTapped] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [isDescExpanded, setIsDescExpanded] = useState(false);

    const handleTap = () => {
        if ('ontouchstart' in window) {
            setIsTapped(!isTapped);
        }
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="group h-full"
        >
            <div
                className={`relative rounded-2xl overflow bg-gray-900/40 backdrop-blur-md border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 flex flex-col h-full shadow-2xl hover:shadow-cyan-500/10 ${isTapped ? 'is-tapped' : ''} ${showDetails ? 'z-50' : 'z-0'}`}
                onClick={handleTap}
            >
                {/* Project Image Section */}
                <div className="relative h-56 overflow-hidden shrink-0 rounded-t-2xl">
                    <img
                        src={project_img}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/20 to-transparent"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-cyan-500/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                            {category}
                        </span>
                    </div>

                    {/* Overlay Buttons */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-xl"
                            title="Live Demo"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <FiExternalLink className="w-6 h-6" />
                        </a>

                        {gallery && gallery.length > 0 && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onOpenGallery(gallery, title);
                                }}
                                onMouseEnter={() => {
                                    gallery.forEach((src) => {
                                        const img = new Image();
                                        img.src = src;
                                    });
                                }}
                                className="p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-xl delay-75"
                                title="View Gallery"
                            >
                                <FiImage className="w-6 h-6" />
                            </button>
                        )}
                        {typeof githubRepo === 'object' ? (
                            <div className="flex gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                                <a
                                    href={githubRepo.frontend}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-gray-800 hover:bg-cyan-500/20 text-white rounded-full transition-all duration-300"
                                    title="Frontend Source"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <FaGithub className="w-6 h-6 text-cyan-400" />
                                </a>
                                <a
                                    href={githubRepo.backend}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-gray-800 hover:bg-purple-500/20 text-white rounded-full transition-all duration-300"
                                    title="Backend Source"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <FaGithub className="w-6 h-6 text-purple-400" />
                                </a>
                            </div>
                        ) : (
                            <a
                                href={githubRepo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75"
                                title="Source Code"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <FaGithub className="w-6 h-6" />
                            </a>
                        )}
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col">
                    <div className="flex-col justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                            {title}
                        </h3>
                        <span className="text-xs text-gray-400 whitespace-nowrap mt-1 italic">{period}</span>
                    </div>

                    <p className="text-xs text-cyan-400/80 font-semibold uppercase tracking-wider mb-4">
                        {businessContext}
                    </p>

                    <div className="mb-4 relative">
                        <p className={`text-sm text-gray-400 leading-relaxed ${!isDescExpanded ? 'line-clamp-2' : ''}`}>
                            {description}
                        </p>
                        {description.length > 80 && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsDescExpanded(!isDescExpanded);
                                }}
                                className="text-xs font-bold text-cyan-400/60 hover:text-cyan-400 mt-1 transition-colors duration-300"
                            >
                                {isDescExpanded ? 'Show less' : 'Read more'}
                            </button>
                        )}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                        {techStack.map((tech, index) => (
                            <span
                                key={index}
                                className="px-2 py-0.5 bg-gray-800/30 text-gray-500 text-[12px] font-medium rounded-md border border-gray-700/30"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Bottom Actions */}
                    <div className="mt-auto space-y-4">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowDetails(!showDetails);
                            }}
                            className="w-full text-center py-2 px-4 rounded-xl border border-gray-700/50 text-xs font-bold text-gray-400 hover:text-white hover:bg-gray-800/50 hover:border-gray-600 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            {showDetails ? 'Hide Details' : 'View Problem, Solution & Impact'}
                        </button>

                        {showDetails && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-4 bg-gray-800 rounded-xl border border-gray-700/30 space-y-3 absolute z-10000 w-[calc(100%-46px)]"
                            >
                                <div>
                                    <h4 className="text-[10px] text-yellow-400 font-bold uppercase mb-1">Problem</h4>
                                    <p className="text-xs text-gray-400">{problemSolutionImpact.problem}</p>
                                </div>
                                <div>
                                    <h4 className="text-[10px] text-green-400 font-bold uppercase mb-1">Solution</h4>
                                    <p className="text-xs text-gray-400">{problemSolutionImpact.solution}</p>
                                </div>
                                <div>
                                    <h4 className="text-[10px] text-blue-400 font-bold uppercase mb-1">Impact</h4>
                                    <p className="text-xs text-gray-400">{problemSolutionImpact.impact}</p>
                                </div>
                            </motion.div>
                        )}

                        <div className="flex gap-3 pt-2">
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-white text-center text-xs font-black py-3 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/10 uppercase tracking-widest"
                                onClick={(e) => e.stopPropagation()}
                            >
                                View Project
                            </a>
                            {typeof githubRepo === 'object' ? (
                                <div className="flex gap-2">
                                    <a
                                        href={githubRepo.frontend}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 border border-gray-700 hover:border-cyan-500/50 text-gray-400 hover:text-cyan-400 rounded-xl transition-all duration-300"
                                        title="Frontend"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <FaGithub className="w-4 h-4" />
                                    </a>
                                    <a
                                        href={githubRepo.backend}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 border border-gray-700 hover:border-purple-500/50 text-gray-400 hover:text-purple-400 rounded-xl transition-all duration-300"
                                        title="Backend"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <FaGithub className="w-4 h-4" />
                                    </a>
                                </div>
                            ) : (
                                <a
                                    href={githubRepo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 border border-gray-700 hover:border-cyan-500/50 text-gray-400 hover:text-cyan-400 rounded-xl transition-all duration-300"
                                    title="GitHub"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <FaGithub className="w-4 h-4" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
