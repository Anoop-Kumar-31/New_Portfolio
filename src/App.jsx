import './App.css'
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import HireReadiness from './components/HireReadiness';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Banner from './components/Banner';
import { FaArrowUp, FaEnvelope } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { trackVisitor } from './utils/visitorTracker';
import { projects, personalInfo } from './data';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function preloadImages(images) {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}

function AppContent() {
  const { isDark } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => { trackVisitor(); }, []);

  useEffect(() => {
    if (!isLoaded) {
      const allImages = projects.flatMap(project => project.gallery);
      preloadImages(allImages);
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    // Apply theme class to body for CSS vars
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${isDark ? 'text-slate-300' : 'text-slate-700'} font-sans antialiased transition-colors duration-400`}>
      <Header />

      <main className="py-10">
        <Banner
          titleText="Clean code is not a preference. It is a"
          gradientWord="standard "
          titleSuffix="."
          description="Designing solutions that scale. Coding systems that perform. Focused on reliability, scalability, and exceptional user experiences."
          primaryBtnText="View My Works"
          primaryBtnLink="#projects"
          secondaryBtnText="Read My Resume"
          secondaryBtnLink={personalInfo.resumeUrl}
          isSecondaryExternal={true}
        />
        <Experience />
        <Projects />
        <Banner
          titleText="Have an idea"
          gradientWord="in mind "
          titleSuffix="? Let's engineer it."
          description="Let's collaborate to build something performant, user-friendly, and modern. I'm ready to help you convert your specs into reliable code."
          primaryBtnText="Discuss Project"
          primaryBtnLink="#contact"
          secondaryBtnText="See Live Demos"
          secondaryBtnLink="#projects"
          secondaryIcon={FiArrowRight}
        />
        <Skills />
        <Education />
        <HireReadiness />
        <Banner
          titleText="Let's build something"
          gradientWord="extraordinary "
          titleSuffix="."
          description="Ready to deliver value from day one. I'm excited to collaborate, contribute to high-impact projects, and build reliable full-stack systems."
          primaryBtnText="Let's Talk"
          primaryBtnLink="#contact"
          primaryIcon={FaEnvelope}
          secondaryBtnText="View Work"
          secondaryBtnLink="#projects"
          secondaryIcon={FiArrowRight}
        />
        <Contact />
      </main>

      <Footer />

      {/* Scroll to top */}
      {showTop && (
        <button
          className="fixed bottom-6 right-6 bg-cyan-500 hover:bg-cyan-400 text-white p-3 rounded-full shadow-lg glow-cyan transition-all duration-300 z-50"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
