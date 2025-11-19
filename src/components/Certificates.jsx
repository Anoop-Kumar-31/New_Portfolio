import Section from './Section';
import { certificates } from '../data';

const Certificates = () => {
  return (
    <Section id="certificates" title="Certificates & Achievements">
      <div className="bg-gray-800/30 p-6 md:p-8 rounded-lg shadow-lg">
        <ul className="list-disc list-outside pl-5 space-y-3">
          {certificates.map((cert, index) => (
            <li key={index}>{cert.text}{cert.highlight && <span className={`font-semibold ${cert.highlightColor}`}>{cert.highlight}</span>}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Certificates;