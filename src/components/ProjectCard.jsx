import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { IoImages } from "react-icons/io5";
import { useTheme } from '../context/ThemeContext';

const ProjectCard = ({ title, businessContext, period, description, problemSolutionImpact, techStack, project_img, link, githubRepo, category, gallery, onOpenGallery }) => {
    const { isDark } = useTheme();
    const [isTapped, setIsTapped] = useState(false);

    const handleTap = () => {
        if ('ontouchstart' in window) {
            setIsTapped(!isTapped);
        }
    };

    const cardBg = isDark
        ? 'bg-slate-900/40 backdrop-blur-md border-slate-800/80 hover:border-cyan-500/50 shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1.5'
        : 'bg-white border-slate-100 hover:border-cyan-400/60 shadow-md hover:shadow-cyan-500/15 hover:-translate-y-1.5';

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
                className={`relative rounded-2xl  border transition-all duration-500 flex flex-col h-full ${cardBg} ${isTapped ? 'is-tapped' : ''}`}
                onClick={handleTap}
            >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden shrink-0 rounded-t-2xl">
                    <img
                        src={project_img}
                        alt={title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:blur-xs "
                        loading="lazy"
                        decoding="async"
                    />
                    <div className={`absolute inset-0 ${isDark ? 'bg-linear-to-t from-black/60 via-black/10 to-transparent' : 'bg-linear-to-t from-black/25 via-black/5 to-transparent'}`} />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-cyan-500/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                            {category}
                        </span>
                    </div>

                    <div className="absolute bottom-2 right-2">
                        <span className={`text-[12px] font-semibold px-2 py-0.5 rounded-full shrink-0 backdrop-blur-sm
                            ${isDark ? 'text-white bg-black/50' : 'text-white bg-black/50'}`}>
                            {period}
                        </span>
                    </div>

                    {/* Overlay Buttons */}
                    <div className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-300 backdrop-blur-xs
                        ${isTapped ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'} 
                        ${isDark ? 'bg-black/40' : 'bg-slate-900/20'}
                        `}>
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-3 ${isDark ? 'bg-cyan-500 hover:bg-cyan-400' : 'bg-cyan-600 hover:bg-cyan-500'} text-white rounded-full transition-all duration-300 transform shadow-xl ${isTapped ? 'translate-y-0' : 'translate-y-4 md:group-hover:translate-y-0'}
                            ${isTapped ? 'pointer-events-auto' : 'pointer-events-none md:group-hover:pointer-events-auto'}`}
                            title="Live Demo"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <FiExternalLink className={`w-5 h-5`} />
                        </a>

                        {gallery && gallery.length > 0 && (
                            <button
                                onClick={(e) => { e.stopPropagation(); onOpenGallery(gallery, title); }}
                                onMouseEnter={() => gallery.forEach(src => { const img = new Image(); img.src = src; })}
                                className={`p-3 rounded-full transition-all duration-300 transform shadow-xl delay-75 ${isTapped ? 'translate-y-0' : 'translate-y-4 md:group-hover:translate-y-0'} ${isTapped ? 'pointer-events-auto' : 'pointer-events-none md:group-hover:pointer-events-auto'} ${isDark ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-white text-slate-800 hover:bg-slate-200'}`}
                                title="View Gallery"
                            >
                                <IoImages className={`w-5 h-5 hover:scale-110 transition-all duration-300`} />
                            </button>
                        )}

                        {typeof githubRepo === 'object' ? (
                            <div className={`flex gap-2 transition-all duration-300 delay-75 transform ${isTapped ? 'translate-y-0' : 'translate-y-4 md:group-hover:translate-y-0'}`}>
                                <a href={githubRepo.frontend} target="_blank" rel="noopener noreferrer"
                                    className={`p-3 rounded-full transition-all duration-300 transform shadow-xl delay-75 ${isTapped ? 'translate-y-0' : 'translate-y-4 md:group-hover:translate-y-0'} ${isTapped ? 'pointer-events-auto' : 'pointer-events-none md:group-hover:pointer-events-auto'} ${isDark ? 'bg-slate-800 hover:bg-cyan-900 text-white' : 'bg-white text-slate-800 hover:bg-cyan-200'}`}
                                    title="Frontend Source" onClick={(e) => e.stopPropagation()}>
                                    <FaGithub className={`w-5 h-5 ${isDark ? 'text-cyan-400' : 'text-cyan-700'} hover:scale-110 transition-all duration-300`} />
                                </a>
                                <a href={githubRepo.backend} target="_blank" rel="noopener noreferrer"
                                    className={`p-3 rounded-full transition-all duration-300 transform shadow-xl delay-75 ${isTapped ? 'translate-y-0' : 'translate-y-4 md:group-hover:translate-y-0'} ${isTapped ? 'pointer-events-auto' : 'pointer-events-none md:group-hover:pointer-events-auto'} ${isDark ? 'bg-slate-800 hover:bg-violet-900 text-white' : 'bg-white text-slate-800 hover:bg-violet-200'}`}
                                    title="Backend Source" onClick={(e) => e.stopPropagation()}>
                                    <FaGithub className={`w-5 h-5 ${isDark ? 'text-violet-400' : 'text-violet-700'} hover:scale-110 transition-all duration-300`} />
                                </a>
                            </div>
                        ) : (
                            <a href={githubRepo} target="_blank" rel="noopener noreferrer"
                                className={`p-3 rounded-full transition-all duration-300 transform shadow-xl delay-75 ${isTapped ? 'translate-y-0' : 'translate-y-4 md:group-hover:translate-y-0'} ${isTapped ? 'pointer-events-auto' : 'pointer-events-none md:group-hover:pointer-events-auto'} ${isDark ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-white text-slate-800 hover:bg-slate-200'}`}
                                title="Source Code" onClick={(e) => e.stopPropagation()}>
                                <FaGithub className="w-5 h-5 hover:scale-110 transition-all duration-300" />
                            </a>
                        )}
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                    <div className="flex flex-col justify-between items-start sm:items-center gap-2 mb-2">
                        <h3 className={`text-lg font-bold transition-colors duration-300 group-hover:text-cyan-400
                            ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            {title}
                        </h3>
                    </div>

                    <p className="text-xs text-cyan-500 font-semibold uppercase tracking-wider mb-3">
                        {businessContext}
                    </p>

                    <div className="mb-4">
                        <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                            {description}
                        </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                        {techStack.map((tech, index) => (
                            <span key={index}
                                className={`px-2.5 py-1 text-[11px] font-semibold rounded-lg border transition-colors duration-300
                                    ${isDark
                                        ? 'bg-slate-800/80 text-cyan-400 border-slate-700/50 hover:bg-cyan-500/10'
                                        : 'bg-cyan-50/50 text-cyan-700 border-cyan-100/85 hover:bg-cyan-100/50'
                                    }`}>
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/60">
                        <div className="flex gap-2.5">
                            {/* Live Demo Link */}
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-2 bg-linear-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs font-bold py-3 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-cyan-500/20 uppercase tracking-widest hover:scale-[1.01] active:scale-[0.99]"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <FiExternalLink className="w-4 h-4" />
                                <span>Live Demo</span>
                            </a>

                            {/* GitHub Link(s) */}
                            <div className="flex gap-2">
                                {typeof githubRepo === 'object' ? (
                                    <>
                                        <a
                                            href={githubRepo.frontend}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 border rounded-xl text-xs font-bold transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]
                                                ${isDark
                                                    ? 'border-slate-700 text-slate-300 bg-slate-800/40 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-500/5'
                                                    : 'border-slate-200 text-slate-600 bg-slate-50 hover:border-cyan-500/50 hover:text-cyan-600 hover:bg-cyan-50'
                                                }`}
                                            title="Frontend Repository"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <FaGithub className="w-4 h-4" />
                                            <span>Frontend</span>
                                        </a>
                                        <a
                                            href={githubRepo.backend}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 border rounded-xl text-xs font-bold transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]
                                                ${isDark
                                                    ? 'border-slate-700 text-slate-300 bg-slate-800/40 hover:border-violet-500/50 hover:text-violet-400 hover:bg-violet-500/5'
                                                    : 'border-slate-200 text-slate-600 bg-slate-50 hover:border-violet-500/50 hover:text-violet-600 hover:bg-violet-50'
                                                }`}
                                            title="Backend Repository"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <FaGithub className="w-4 h-4" />
                                            <span>Backend</span>
                                        </a>
                                    </>
                                ) : (
                                    <a
                                        href={githubRepo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 border rounded-xl text-xs font-bold transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]
                                            ${isDark
                                                ? 'border-slate-700 text-slate-300 bg-slate-800/40 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-500/5'
                                                : 'border-slate-200 text-slate-600 bg-slate-50 hover:border-cyan-500/50 hover:text-cyan-600 hover:bg-cyan-50'
                                            }`}
                                        title="GitHub Repository"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <FaGithub className="w-4 h-4" />
                                        <span>GitHub</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
