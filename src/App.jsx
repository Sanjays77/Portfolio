import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <main className="min-h-screen font-sans text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-950">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Education />
      <Contact />
      
      <footer className="py-8 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 mt-12">
        <p>© {new Date().getFullYear()} S Sanjay. All rights reserved.</p>
        <p className="mt-2 text-xs">Developed with React, Vite & Tailwind CSS</p>
      </footer>
    </main>
  );
}

export default App;
