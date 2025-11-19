import Section from './Section';
import { education } from '../data';

const Education = () => {
  return (
    <Section id="education" title="Education">
      <div className="bg-gray-800/30 p-6 md:p-8 rounded-lg shadow-lg flex items-center gap-4 mb-8">
        <img src={education.logo} alt="logo" className="h-20"/>
        <div className="grow">
          <h3 className="text-xl font-semibold text-white">{education.university}</h3>
          <p className="text-cyan-400">{education.degree}</p>
          <p className="text-gray-500 italic mt-1">{education.period}</p>
        </div>
      </div>
    </Section>
  );
};

export default Education;