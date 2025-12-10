import { motion } from 'framer-motion';
import { quickInfo } from '../data';
import { FaBriefcase, FaMapMarkerAlt, FaCheckCircle, FaCode } from 'react-icons/fa';

const QuickInfo = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 shadow-xl"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Experience */}
                <div className="flex items-start space-x-3">
                    <div className="p-2 bg-cyan-500/10 rounded-lg">
                        <FaBriefcase className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wide">Experience</p>
                        <p className="text-sm font-semibold text-white">{quickInfo.experience}</p>
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="flex items-start space-x-3">
                    <div className="p-2 bg-purple-500/10 rounded-lg">
                        <FaCode className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wide">Stack</p>
                        <p className="text-sm font-semibold text-white">{quickInfo.stack}</p>
                    </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-3">
                    <div className="p-2 bg-yellow-500/10 rounded-lg">
                        <FaMapMarkerAlt className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wide">Location</p>
                        <p className="text-sm font-semibold text-white">{quickInfo.location}</p>
                    </div>
                </div>

                {/* Availability */}
                <div className="flex items-start space-x-3">
                    <div className="p-2 bg-green-500/10 rounded-lg">
                        <FaCheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wide">Status</p>
                        <p className="text-sm font-semibold text-white">{quickInfo.availability}</p>
                    </div>
                </div>
            </div>

            {/* Open To */}
            <div className="mt-4 pt-4 border-t border-gray-700/50">
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">Open To</p>
                <div className="flex flex-wrap gap-2">
                    {quickInfo.openTo.map((type, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-medium rounded-full border border-cyan-500/30"
                        >
                            {type}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default QuickInfo;
