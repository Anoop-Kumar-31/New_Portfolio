import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ProjectGallery = ({ images, isOpen, onClose, projectTitle }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setCurrentIndex(0);

            // Preload all images for this project
            if (images && images.length > 0) {
                images.forEach((src) => {
                    const img = new Image();
                    img.src = src;
                });
            }
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, images]);

    const handleNext = (e) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = (e) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-100000 flex items-center justify-center bg-gray-950/10 backdrop-blur-xl p-4 md:p-8 h-screen w-screen"
                onClick={onClose}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-3 bg-gray-800/50 hover:bg-gray-700 text-white rounded-full transition-all duration-300 z-50 group"
                >
                    <FiX className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                </button>

                {/* Header Info */}
                <div className="absolute top-6 left-6 z-50">
                    <h3 className="text-white font-bold text-lg md:text-xl">{projectTitle}</h3>
                    <p className="text-gray-400 text-xs md:text-sm">
                        {currentIndex + 1} / {images.length}
                    </p>
                </div>

                {/* Carousel Container */}
                <div
                    className="relative w-full max-w-6xl aspect-video md:aspect-auto flex items-center justify-center"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Navigation Arrows */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={handlePrev}
                                className="absolute left-0 md:-left-16 p-3 bg-gray-800/50 hover:bg-cyan-500 text-white rounded-full transition-all duration-300 z-50 hidden md:block"
                            >
                                <FiChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute right-0 md:-right-16 p-3 bg-gray-800/50 hover:bg-cyan-500 text-white rounded-full transition-all duration-300 z-50 hidden md:block"
                            >
                                <FiChevronRight className="w-6 h-6" />
                            </button>
                        </>
                    )}

                    {/* Main Image */}
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.9, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.9, x: -20 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50 bg-gray-900"
                    >
                        <img
                            src={images[currentIndex]}
                            alt={`${projectTitle} screenshot ${currentIndex + 1}`}
                            className="h-[80vh] w-fit object-contain"
                        />
                    </motion.div>

                    {/* Mobile Swipe Indicators / Dots */}
                    <div className="absolute -bottom-10 flex gap-2">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentIndex(idx);
                                }}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-cyan-500 w-6' : 'bg-gray-600 hover:bg-gray-400'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectGallery;
