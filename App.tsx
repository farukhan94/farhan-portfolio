
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AIChatbot from './components/AIChatbot';

const App: React.FC = () => {
  return (
    <div className="relative">
      <Navbar />

      <main id="main-content" role="main">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <footer role="contentinfo" className="py-12 border-t border-white/5 text-center text-gray-500">
        <div className="container mx-auto px-6">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Mohammad Farhan Khan. Senior Full Stack Engineer.
          </p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="https://farhan.xyz" className="hover:text-white transition-colors">Portfolio</a>
            <a href="https://github.com/faru947" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/mohammad-farhan-99198419b" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

      {/* Floating AI Assistant */}
      <AIChatbot />
    </div>
  );
};

export default App;
