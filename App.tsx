
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

      <footer role="contentinfo" className="py-20 border-t border-white/5 bg-black/20">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-black mb-8 tracking-tighter text-white">
            FARHAN<span className="text-indigo-500">.KHAN</span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-10">
            {['hero', 'projects', 'skills', 'experience', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-indigo-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-black">
            &copy; {new Date().getFullYear()} Engineered with passion by Mohammad Farhan Khan
          </p>
        </div>
      </footer>

      {/* Floating AI Assistant */}
      <AIChatbot />
    </div>
  );
};

export default App;
