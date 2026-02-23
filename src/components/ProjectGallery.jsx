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

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-100000 flex items-center justify-center bg-gray-950/20 backdrop-blur-xl p-4 md:p-8 h-screen w-screen overflow-hidden"
                onClick={onClose}
            >
                {/* Close Button - More touch friendly on mobile */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 md:top-6 md:right-6 p-4 md:p-3 bg-gray-800/50 hover:bg-gray-700 text-white rounded-full transition-all duration-300 z-50 group"
                >
                    <FiX className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                </button>

                {/* Header Info - Better mobile spacing */}
                <div className="absolute top-4 left-4 md:top-6 md:left-6 z-50 pr-16 md:pr-0">
                    <h3 className="text-white font-bold text-base md:text-xl line-clamp-1 md:line-clamp-none">{projectTitle}</h3>
                    <p className="text-gray-400 text-[10px] md:text-sm font-medium">
                        {currentIndex + 1} / {images.length}
                    </p>
                </div>

                {/* Carousel Container */}
                <div
                    className="relative w-full max-w-6xl h-full flex flex-col items-center justify-center gap-6"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="relative w-full flex items-center justify-center">
                        {/* Navigation Arrows - Desktop only */}
                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={handlePrev}
                                    className="absolute left-0 md:-left-20 p-4 bg-gray-800/40 hover:bg-cyan-500 text-white rounded-full transition-all duration-300 z-50 hidden lg:block"
                                >
                                    <FiChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="absolute right-0 md:-right-20 p-4 bg-gray-800/40 hover:bg-cyan-500 text-white rounded-full transition-all duration-300 z-50 hidden lg:block"
                                >
                                    <FiChevronRight className="w-6 h-6" />
                                </button>
                            </>
                        )}

                        {/* Main Image with Drag support */}
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.95, x: 20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0.95, x: -20 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.8}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);
                                if (swipe < -swipeConfidenceThreshold) {
                                    handleNext();
                                } else if (swipe > swipeConfidenceThreshold) {
                                    handlePrev();
                                }
                            }}
                            className="flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50 bg-gray-900 cursor-grab active:cursor-grabbing"
                        >
                            <img
                                src={images[currentIndex]}
                                alt={`${projectTitle} screenshot ${currentIndex + 1}`}
                                className="h-[65vh] md:h-[80vh] w-auto max-w-[90vw] object-contain pointer-events-none"
                            />
                        </motion.div>
                    </div>

                    {/* Mobile/Tablet Swipe Hint */}
                    <div className="lg:hidden text-gray-500 text-[10px] uppercase tracking-widest font-bold animate-pulse">
                        Swipe to browse
                    </div>

                    {/* Navigation Dots - More compact for mobile */}
                    <div className="flex flex-wrap justify-center gap-2 max-w-[80vw]">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentIndex(idx);
                                }}
                                className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-cyan-500 w-4 md:w-6' : 'bg-gray-600 hover:bg-gray-400'
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
