import './App.css'
import Header from './components/Header';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Footer from './components/Footer';
import Contact from './components/Contact';
// insert top arrow
import { FaArrowUp } from 'react-icons/fa';


function App() {
  return (
    <div className="bg-gray-900 text-gray-300 font-sans antialiased">
      <Header />
      <main className="container mx-auto px-6 py-10  xl:px-50 lg:px-25 ">
        <Experience />
        <Projects />
        <Skills />
        <Education />
        {/* <Certificates /> */}
        <Contact />
      </main>

      <Footer />
      {/* buttton which send view to top */}
      <div className="fixed bottom-4 right-4">
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-2 rounded-full transition-colors duration-300" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <FaArrowUp />
        </button>
      </div>
    </div>
  )
}

export default App
