
import React from 'react';
import { motion } from 'framer-motion';
import { useDeviceDetection } from '../utils/useDeviceDetection';

const Hero: React.FC = () => {
  const { shouldReduceMotion, isMobile } = useDeviceDetection();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Enhanced Background with Optimized Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Only show animated orbs on desktop for performance */}
        {!shouldReduceMotion && (
          <>
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-500/20 blur-[120px] rounded-full"
            ></motion.div>
            <motion.div
              animate={{
                x: [0, -80, 0],
                y: [0, 80, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-purple-500/20 blur-[100px] rounded-full"
            ></motion.div>
          </>
        )}

        {/* Single static orb for mobile */}
        {shouldReduceMotion && (
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-indigo-500/20 blur-[60px] rounded-full"></div>
        )}

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-[300px_1fr] gap-12 lg:gap-16 items-center">
          {/* Profile Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center lg:justify-start"
          >
            <div className="avatar-border">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-[6px] md:border-[8px] border-[#030712] relative group bg-gray-900 flex items-center justify-center shadow-2xl shadow-indigo-500/20">
                <img
                  src="/assets/farhan-khan.webp"
                  alt="Mohammad Farhan Khan"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.src = "/assets/farhan-khan.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-white/10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-300">
                Available for Senior Roles • Bahrain
              </span>
            </motion.div>

            {/* Name - Simplified Animation */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl lg:text-7xl font-black tracking-tight"
            >
              <span className="text-white">Mohammad</span>{' '}
              <span className="text-gradient">Farhan Khan</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Building <span className="text-white font-semibold">cloud-native systems</span>
              {' '}that process <span className="text-indigo-300 font-semibold">10M+ daily requests</span>
              {' '}across fintech and logistics platforms
            </motion.p>

            {/* Primary CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-105 flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-folder-open"></i>
                View Projects
              </a>
              <a
                href="/assets/farhan-khan-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 glass border border-white/10 text-white rounded-xl font-semibold hover:bg-white/5 transition-all flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-file-pdf"></i>
                Download Resume
              </a>
            </motion.div>

            {/* Tech Stack Pills - Compact */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start pt-4"
            >
              {['Angular', 'Laravel', 'AWS', 'PostgreSQL', 'Docker'].map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
