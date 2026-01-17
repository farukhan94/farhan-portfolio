
import React from 'react';
import { motion } from 'framer-motion';
import { useDeviceDetection } from '../utils/useDeviceDetection';

const Hero: React.FC = () => {
  const { shouldReduceMotion } = useDeviceDetection();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Enhanced Background with Optimized Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {!shouldReduceMotion && (
          <>
            <motion.div
              animate={{
                x: [0, 50, 0],
                y: [0, 30, 0],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-indigo-600/20 blur-[100px] rounded-full mix-blend-screen"
            />
            <motion.div
              animate={{
                x: [0, -50, 0],
                y: [0, -30, 0],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/20 blur-[100px] rounded-full mix-blend-screen"
            />
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-[40%] left-[60%] w-[400px] h-[400px] bg-pink-500/10 blur-[80px] rounded-full mix-blend-screen"
            />
          </>
        )}

        {/* Static fallback for reduced motion */}
        {shouldReduceMotion && (
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-purple-900/20"></div>
        )}

        {/* Delicate grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] mask-image-gradient"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-center">

          {/* Content Column (Left on desktop, Bottom on mobile) */}
          <div className="order-2 lg:order-1 space-y-8 text-center lg:text-left">

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-indigo-500/20 shadow-[0_0_20px_rgba(99,102,241,0.1)] hover:border-indigo-500/40 transition-colors"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-indigo-100 tracking-wide">
                Available for Senior Roles
              </span>
            </motion.div>

            {/* Name */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                className="text-6xl lg:text-8xl font-black tracking-tight leading-[0.9]"
              >
                <span className="block text-white mb-2">Mohammad</span>
                <span className="text-gradient block lg:inline">Farhan Khan</span>
              </motion.h1>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light"
            >
              Building <span className="text-white font-semibold relative inline-block">
                cloud-native systems
                <span className="absolute bottom-1 left-0 w-full h-[6px] bg-indigo-600/20 -z-10 skew-x-12"></span>
              </span> that process <span className="text-indigo-300 font-semibold">10M+ daily requests</span> across fintech and logistics.
            </motion.p>

            {/* Primary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4"
            >
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold transition-all shadow-[0_10px_40px_-10px_rgba(99,102,241,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(99,102,241,0.6)] flex items-center justify-center gap-3 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <i className="fa-solid fa-folder-open"></i> View Projects
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[length:200%_auto] animate-gradient-flow"></div>
              </a>
              <a
                href="/assets/farhan-khan-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 glass border border-white/10 text-white rounded-2xl font-bold hover:bg-white/5 transition-all flex items-center justify-center gap-3 hover:border-white/20"
              >
                <i className="fa-solid fa-file-pdf"></i>
                Download Resume
              </a>
            </motion.div>

            {/* Tech Stack Pills - Minimalist */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start pt-6 opacity-80"
            >
              {[
                { name: 'Angular', icon: 'fa-brands fa-angular' },
                { name: 'Laravel', icon: 'fa-brands fa-laravel' },
                { name: 'AWS', icon: 'fa-brands fa-aws' },
                { name: 'Docker', icon: 'fa-brands fa-docker' }
              ].map(tech => (
                <div key={tech.name} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-gray-400 text-sm font-medium">
                  <i className={tech.icon}></i> {tech.name}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Profile Image Column (Right on desktop, Top on mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
          >
            <div className="relative z-10">
              <div className="avatar-border p-1.5">
                <div className="w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-[#030712] relative group shadow-2xl">
                  <img
                    src="/assets/farhan-khan.webp"
                    alt="Mohammad Farhan Khan"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.src = "/assets/farhan-khan.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
                </div>
              </div>

              {/* Decorative elements behind avatar */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-[40px] -z-10 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-500/20 rounded-full blur-[40px] -z-10 animate-pulse delay-700"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
