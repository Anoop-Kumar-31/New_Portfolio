import Section from './Section';
import { skills } from '../data';

const Skills = () => {
  return (
    <Section id="skills" title="Skills">
      <div className="bg-gray-800/30 p-6 md:p-8 rounded-lg shadow-lg backdrop-blur-sm grid md:grid-cols-5 gap-8">
        <div className="md:col-span-3">
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">Technical Skills</h3>
          <div className="space-y-6">
            {skills.technical.map((skill, index) => (
              <div key={index} className="shadow-[0_0_5px_rgba(0,0,0,0.5)] rounded-lg border-gray-700 px-6 py-4 bg-gray-800/30">
                <h4 className="text-base md:text-lg font-semibold text-cyan-400 mb-2">{skill.name}</h4>
                <hr className="border-gray-700 mb-4" />
                <div className="flex flex-wrap gap-6">
                  {skill.list.map((item, i) => (
                    <div key={i} className="text-center w-24 group">
                      <img src={item.icon} alt={item.name} className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 transition-transform duration-300 group-hover:scale-110 select-none" />
                      <p className="text-xs text-gray-350 mb-1 font-bold">{item.name}</p>
                      {/* <div className="w-full bg-gray-700 rounded-full h-1.5">
                        <div className="bg-cyan-400 h-1.5 rounded-full transition-all duration-300 group-hover:bg-cyan-300" style={{ width: `${item.proficiency}%` }}></div>
                      </div> */}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">Social Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.social.map((skill, index) => (
              <span key={index} className="bg-gray-700/50 text-gray-300 text-xs sm:text-sm font-medium px-4 py-2 rounded-full border border-gray-600 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-900 transition-all duration-300">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;