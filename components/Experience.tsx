
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';
import { useDeviceDetection } from '../utils/useDeviceDetection';

// Helper function to determine role badge
const getRoleBadge = (role: string) => {
  if (role.includes('Lead') || role.includes('Supervisor')) {
    return {
      label: 'Leadership',
      color: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      icon: 'fa-crown'
    };
  }
  if (role.includes('Senior') || role.includes('Sr')) {
    return {
      label: 'Senior',
      color: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      icon: 'fa-star'
    };
  }
  return {
    label: 'Mid-Level',
    color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    icon: 'fa-code'
  };
};

const Experience: React.FC = () => {
  const { shouldReduceMotion } = useDeviceDetection();
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (idx: number) => {
    setExpandedItems(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-32 bg-gray-900/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.h2
          id="experience-heading"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.6 }}
          className="text-4xl md:text-6xl font-black mb-24 text-center uppercase tracking-tighter"
        >
          Professional <span className="text-gradient">Journey</span>
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent md:-ml-px"></div>

          <div className="space-y-24">
            {EXPERIENCES.map((exp, idx) => {
              const badge = getRoleBadge(exp.role);
              const isExpanded = expandedItems.includes(idx);
              const visibleItems = isExpanded ? exp.description : exp.description.slice(0, 3);
              const hasMore = exp.description.length > 3;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: shouldReduceMotion ? 0 : (idx % 2 === 0 ? 50 : -50) }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: shouldReduceMotion ? 0.3 : 0.6 }}
                  className={`relative flex items-center justify-between ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} flex-col md:flex-row pl-8 md:pl-0`}
                >
                  <div className="md:w-[45%]"></div>

                  {/* Connector Dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 w-6 h-6 rounded-full bg-indigo-500 border-4 border-[#030712] -ml-3 md:-mt-3 z-10 shadow-[0_0_20px_rgba(99,102,241,0.6)]"></div>

                  <div className="md:w-[45%] w-full">
                    <div className="glass p-10 rounded-[2.5rem] border border-white/5 transition-all hover:border-indigo-500/20 group">
                      {/* Role Badge + Period */}
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border ${badge.color}`}>
                          <i className={`fa-solid ${badge.icon}`}></i>
                          {badge.label}
                        </span>
                        <span className="text-sm text-gray-500 font-medium">{exp.period}</span>
                      </div>

                      <h3 className="text-3xl font-black mb-2 text-white uppercase tracking-tight group-hover:text-indigo-400 transition-colors">{exp.role}</h3>
                      <p className="text-xl text-gray-400 mb-8 font-medium">{exp.company}</p>

                      <ul className="space-y-4">
                        {visibleItems.map((item, i) => (
                          <li key={i} className="flex items-start gap-4 text-gray-300 text-sm leading-relaxed">
                            <i className="fa-solid fa-check-circle text-indigo-500/60 mt-1 flex-shrink-0"></i>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Show More Button */}
                      {hasMore && (
                        <button
                          onClick={() => toggleExpanded(idx)}
                          className="mt-6 text-sm text-indigo-300 hover:text-indigo-200 font-medium transition-colors flex items-center gap-2"
                        >
                          {isExpanded ? (
                            <>
                              <i className="fa-solid fa-chevron-up"></i>
                              Show Less
                            </>
                          ) : (
                            <>
                              <i className="fa-solid fa-chevron-down"></i>
                              + {exp.description.length - 3} more achievements
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
