
import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_GROUPS } from '../constants';
import { TechIcon } from '../utils/techIcons';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-gray-900/50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">Technology <span className="text-gradient">Arsenal</span></h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            A battle-hardened stack optimized for performance, scalability, and maintainability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {SKILL_GROUPS.map((group, idx) => (
            <motion.div 
              key={group.category} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 md:p-10 rounded-[2.5rem] border border-white/5 flex flex-col hover:border-indigo-500/30 transition-all duration-500 group"
            >
              <h3 className="text-xl md:text-2xl font-black mb-8 text-white uppercase tracking-tight pb-5 border-b border-white/5 flex items-center gap-3">
                <i className={`fa-solid ${group.icon} text-indigo-400`}></i>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2.5 md:gap-3">
                {group.skills.map((skill: string) => (
                  <div key={skill} className="px-3 py-1.5 md:px-4 md:py-2 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all flex items-center gap-2">
                    <TechIcon techName={skill} className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                    <span className="text-[10px] md:text-xs font-bold text-gray-300 uppercase tracking-widest">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
