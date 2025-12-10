import { motion } from 'framer-motion';
import { useState } from 'react';
import Section from './Section';
import { hireReadiness } from '../data';

const CapabilityCard = ({ capability, index }) => {
    const [isCardTapped, setIsCardTapped] = useState(false);

    const handleCardClick = () => {
        setIsCardTapped(true);
        setTimeout(() => setIsCardTapped(false), 500);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
                scale: 1.05,
                borderColor: 'rgba(6, 182, 212, 0.5)',
                transition: { duration: 0.3 }
            }}
            whileTap={{
                scale: 0.98,
                transition: { duration: 0.2 }
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 cursor-pointer"
            onClick={handleCardClick}
        >
            {/* Icon */}
            <motion.div
                className="text-4xl mb-4 w-fit"
                animate={isCardTapped ? { scale: 1.1, rotate: -20 } : { scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.4, rotate: 5 }}
                whileTap={{ scale: 1.3, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                {capability.icon}
            </motion.div>

            {/* Title */}
            <motion.h3
                className="text-lg font-bold text-white mb-2"
                whileHover={{ color: '#22d3ee' }}
                transition={{ duration: 0.3 }}
            >
                {capability.title}
            </motion.h3>

            {/* Description */}
            <p className="text-sm text-gray-400">
                {capability.description}
            </p>
        </motion.div>
    );
};

const HireReadiness = () => {
    return (
        <Section
            id="hire-readiness"
            title={hireReadiness.title}
            subtitle="Skills I can apply from day one"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hireReadiness.capabilities.map((capability, index) => (
                    <CapabilityCard key={index} capability={capability} index={index} />
                ))}
            </div>

            {/* Call to Action */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-12 text-center"
            >
                <p className="text-gray-300 text-lg mb-4">
                    Ready to deliver value from <span className="text-cyan-400 font-semibold">day one</span>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05, backgroundColor: '#0e7490' }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-full shadow-md"
                    >
                        Let's Talk
                    </motion.a>
                    <span className="text-gray-500">or</span>
                    <motion.a
                        href="#projects"
                        whileHover={{
                            scale: 1.05,
                            borderColor: '#22d3ee',
                            color: '#22d3ee'
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="border border-gray-600 text-gray-300 font-bold py-3 px-8 rounded-full"
                    >
                        View My Work
                    </motion.a>
                </div>
            </motion.div>
        </Section>
    );
};

export default HireReadiness;
