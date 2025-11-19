import Section from './Section';
import { workExperience } from '../data';

const ExperienceItem = ({ title, items }) => (
  <div>
    <h4 className="text-lg md:text-xl font-semibold text-cyan-400 mb-3">{title}</h4>
    <ul className="list-disc list-outside pl-5 space-y-2 text-sm md:text-base text-gray-400">
      {items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  </div>
);

const Experience = () => {
  return (
    <Section id="experience" title="Work Experience">
      <div className="relative border-l-2 border-gray-700 pl-8">
        {/* Timeline dot */}
        <div className="absolute -left-[11px] top-7 w-5 h-5 bg-cyan-500 rounded-full border-4 border-gray-900"></div>

        <div className="mb-10">
          <div className="flex items-center mb-4">
            <img src={workExperience.companyLogo} alt={workExperience.company} className="w-17 h-17 mr-4 rounded-md bg-white p-1 " />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-white">{workExperience.role}</h3>
              <p className="text-cyan-400">{workExperience.company}</p>
              <p className="text-gray-500 italic text-sm">{workExperience.period}</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 bg-gray-800/30 p-6 rounded-lg">
            <ExperienceItem title="Backend Development" items={workExperience.backend} />
            <ExperienceItem title="Frontend Development" items={workExperience.frontend} />
            <ExperienceItem title="DevOps & Collaboration" items={workExperience.devops} />
            <ExperienceItem title="Key Achievements" items={workExperience.achievements} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;