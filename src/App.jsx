import './App.css'
import { useEffect } from 'react';
import Header from './components/Header';
import QuickInfo from './components/QuickInfo';
import Projects from './components/Projects';
import HireReadiness from './components/HireReadiness';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { FaArrowUp } from 'react-icons/fa';
import { trackVisitor } from './utils/visitorTracker';


function App() {
  // Track visitor on component mount (runs once per page load)
  useEffect(() => {
    trackVisitor();
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="bg-gray-900 text-gray-300 font-sans antialiased">
      <Header />

      {/* Quick Info - Critical for HR 6-10 second scan */}
      <div className="container mx-auto px-6 -mt-8 xl:px-40 lg:px-25 mb-8">
        <QuickInfo />
      </div>

      <main className="container mx-auto px-6 py-10 xl:px-40 lg:px-25">
        {/* Projects first - most important for HR */}
        <Projects />

        {/* Hire Readiness - eliminates training concerns */}
        <HireReadiness />

        {/* Supporting sections */}
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />

      {/* Scroll to top button */}
      <div className="fixed bottom-4 right-4">
        <button
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-2 rounded-full transition-colors duration-300 shadow-lg hover:shadow-cyan-500/50"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      </div>
    </div>
  )
}

export default App
