import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Section = ({ id, title, children }) => {
  return (
    <motion.section id={id} className="mb-16 scroll-mt-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
        <div className="grow h-px bg-gray-700"></div>
      </div>
      {children}
    </motion.section>
  );
};

export default Section;