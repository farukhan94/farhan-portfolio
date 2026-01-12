
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { TechIcon } from '../utils/techIcons';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="pt-16 md:pt-32 pb-32">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">Featured <span className="text-gradient">Work</span></h2>
          <p className="text-gray-400 text-lg max-w-xl">
            A selection of high-performance solutions engineered for complexity and scale. Click on any card for technical deep-dives.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group glass rounded-[3rem] p-10 border border-white/5 flex flex-col transition-all duration-500 hover:-translate-y-4 hover:border-indigo-500/40 min-h-[420px] cursor-pointer relative overflow-hidden"
            >
              {/* Subtle hover background effect */}
              <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-3xl font-black mb-6 group-hover:text-indigo-400 transition-colors uppercase tracking-tight leading-tight">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed font-medium flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-lg text-[10px] font-black uppercase tracking-widest text-indigo-300 border border-white/10 flex items-center gap-1.5">
                            <TechIcon techName={tag} className="w-3 h-3 flex-shrink-0" />
                            {tag}
                        </span>
                    ))}
                </div>
                
                <div className="mt-auto flex items-center text-xs font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-indigo-500 transition-colors">
                  View Details <i className="fa-solid fa-arrow-right ml-2"></i>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative glass w-full max-w-4xl max-h-[90vh] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-8 md:p-12 border-b border-white/5 flex justify-between items-start bg-gray-900/50">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="px-3 py-1.5 bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-widest rounded-lg border border-indigo-500/20 flex items-center gap-1.5">
                        <TechIcon techName={tag} className="w-3 h-3 flex-shrink-0" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
                    {selectedProject.title}
                  </h2>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors text-white"
                >
                  <i className="fa-solid fa-xmark text-xl"></i>
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex-grow overflow-y-auto p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-indigo-400 mb-6 flex items-center gap-2">
                      <span className="w-8 h-px bg-indigo-400"></span> Technical Overview
                    </h4>
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                      {selectedProject.fullDescription}
                    </p>
                    
                    <div className="space-y-4">
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-indigo-400 mb-6 flex items-center gap-2">
                          <span className="w-8 h-px bg-indigo-400"></span> Project Artifacts
                        </h4>
                        <div className="flex flex-col gap-3">
                            <div className="p-4 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-between text-gray-400">
                                <span className="text-sm">Architecture Documentation</span>
                                <i className="fa-solid fa-lock text-xs opacity-40"></i>
                            </div>
                            <div className="p-4 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-between text-gray-400">
                                <span className="text-sm">Technical Specifications</span>
                                <i className="fa-solid fa-lock text-xs opacity-40"></i>
                            </div>
                        </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-indigo-400 mb-6 flex items-center gap-2">
                      <span className="w-8 h-px bg-indigo-400"></span> Key Features
                    </h4>
                    <ul className="space-y-4">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <div className="w-6 h-6 rounded-lg bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                            <i className="fa-solid fa-check text-indigo-400 text-[10px]"></i>
                          </div>
                          <span className="text-gray-400 text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-12 p-8 glass rounded-[2rem] border border-white/5 text-center">
                        <p className="text-gray-500 text-xs mb-4 italic">This project represents sensitive enterprise engineering. Specific repository access is available upon professional request.</p>
                        <a href="mailto:faru947@gmail.com" className="inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all text-xs uppercase tracking-widest">
                            Request Demo Access
                        </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
