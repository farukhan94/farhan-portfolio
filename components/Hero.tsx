
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { TechIcon } from '../utils/techIcons';
import { TECH_STACK } from '../constants';

const Hero: React.FC = () => {
  const firstName = "FARHAN";
  const lastName = "KHAN";

  // 0: trying webp, 1: trying jpg
  const [imgState, setImgState] = useState(0);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const letter: Variants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, damping: 10, stiffness: 100 }
    }
  };

  const handleImageError = () => {
    if (imgState < 1) {
      setImgState(1); // Try .jpg
    }
  };

  const currentImgSrc = imgState === 0 ? "/assets/farhan-khan.webp" : "/assets/farhan-khan.jpg";

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Enhanced Background with Multiple Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
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
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 left-1/3 w-[700px] h-[700px] bg-pink-500/15 blur-[140px] rounded-full"
        ></motion.div>
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-12 lg:gap-16 py-12 pb-16 md:pb-12">
        {/* Profile Image Section - Left Side */}
        <motion.div
          initial={{ scale: 0, opacity: 0, x: -50 }}
          animate={{ scale: 1, opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="flex-shrink-0 mb-8 md:mb-0"
        >
          <div className="avatar-border">
            <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-[6px] md:border-[8px] border-[#030712] relative group bg-gray-900 flex items-center justify-center shadow-2xl shadow-indigo-500/20">
              <img
                src={currentImgSrc}
                alt="Mohammad Farhan Khan"
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                onError={handleImageError}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </motion.div>

        {/* Content Section - Right Side */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left w-full">
          <div className="inline-block mb-6 md:mb-8 px-4 py-1.5 glass rounded-full border border-indigo-500/30">
            <span className="text-indigo-400 text-sm font-semibold tracking-widest flex items-center gap-2 uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Senior Full Stack Engineer
            </span>
          </div>

          {/* Name Popup Animation */}
          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-x-4 md:gap-x-6 mb-6 md:mb-8"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <div className="flex">
              {firstName.split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={letter}
                  className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter text-white hover:text-indigo-500 transition-colors cursor-default"
                >
                  {char}
                </motion.span>
              ))}
            </div>
            <div className="flex">
              {lastName.split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={letter}
                  className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter text-gradient hover:scale-110 transition-transform cursor-default"
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="max-w-2xl text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 md:mb-10 leading-relaxed"
          >
            Architecting resilient solutions for <span className="text-white font-bold">10M+ daily requests</span>.
            Expertise in <span className="text-indigo-400">Angular</span>, <span className="text-purple-400">Laravel</span>,
            & <span className="text-rose-400">AWS</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="flex flex-col sm:flex-row items-center gap-6 w-full md:w-auto"
          >
            <a
              href="#projects"
              className="px-10 py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold transition-all transform hover:scale-105 shadow-2xl shadow-indigo-600/40 flex items-center gap-2"
            >
              <i className="fa-solid fa-folder-open"></i>
              Explore Projects
            </a>
            <a
              href="#contact"
              className="px-10 py-5 glass text-white rounded-2xl font-bold transition-all hover:bg-white/10 border border-white/10 flex items-center gap-2"
            >
              <i className="fa-solid fa-envelope"></i>
              Contact Me
            </a>
            <a
              href="/assets/farhan-khan-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 glass text-white rounded-2xl font-bold transition-all hover:bg-white/10 border border-white/10 flex items-center gap-2"
            >
              <i className="fa-solid fa-file-pdf"></i>
              View Resume
            </a>
          </motion.div>
        </div>
      </div>

      {/* Animated Tech Stack Marquee - Full Width */}
      <div className="container mx-auto px-6 relative z-10 mt-12 md:mt-16 hidden md:block">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.8 }}
          className="w-full overflow-hidden"
        >
          <div className="flex items-center justify-center gap-8 mb-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest whitespace-nowrap">Tech Stack</span>
            <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/50 via-purple-500/30 to-transparent"></div>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex flex-shrink-0">
                  {TECH_STACK.map((tech, i) => (
                    <div key={`tech-${setIndex}-${i}`} className="flex-shrink-0 mx-4 px-6 py-3 glass rounded-full border border-white/5 hover:border-indigo-500/30 transition-all flex items-center gap-2">
                      <TechIcon techName={tech} className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm font-semibold text-gray-400 whitespace-nowrap">{tech}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
