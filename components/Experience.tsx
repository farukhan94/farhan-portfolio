
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-gray-900/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black mb-24 text-center uppercase tracking-tighter"
        >
          Career <span className="text-gradient">Timeline</span>
        </motion.h2>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent md:-ml-px"></div>
          
          <div className="space-y-24">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex items-center justify-between ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} flex-col md:flex-row pl-8 md:pl-0`}
              >
                <div className="md:w-[45%]"></div>
                
                {/* Connector Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 w-6 h-6 rounded-full bg-indigo-500 border-4 border-[#030712] -ml-3 md:-mt-3 z-10 shadow-[0_0_20px_rgba(99,102,241,0.6)]"></div>
                
                <div className="md:w-[45%] w-full">
                  <div className="glass p-10 rounded-[2.5rem] border border-white/5 transition-all hover:border-indigo-500/20 group">
                    <span className="inline-block px-4 py-1.5 bg-indigo-500/10 text-indigo-400 text-xs font-black uppercase tracking-widest rounded-full mb-6">
                      {exp.period}
                    </span>
                    <h3 className="text-3xl font-black mb-2 text-white uppercase tracking-tight group-hover:text-indigo-400 transition-colors">{exp.role}</h3>
                    <p className="text-xl text-gray-400 mb-8 font-medium">{exp.company}</p>
                    <ul className="space-y-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-4 text-gray-500 text-sm leading-relaxed">
                          <i className="fa-solid fa-bolt text-indigo-500/40 mt-1"></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
