"use client";

import { motion } from "framer-motion";
import { technologies } from "@/data/portfolio";

const TechStack = () => {
  return (
    <section className="py-24 border-y border-white/5 bg-white/[0.01] overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
          Powered By Modern <span className="gradient-text">Technologies</span>
        </h2>
        <p className="text-slate-400">
          We use the best tools available to build robust, scalable, and high-performance applications.
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="py-8 animate-marquee whitespace-nowrap flex items-center space-x-12">
          {technologies.map((tech, index) => (
            <span 
              key={tech} 
              className="text-xl md:text-3xl font-black text-slate-700/50 uppercase tracking-widest hover:text-indigo-400 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
          {/* Duplicate for infinite effect */}
          {technologies.map((tech, index) => (
            <span 
              key={`${tech}-dup`} 
              className="text-xl md:text-3xl font-black text-slate-700/50 uppercase tracking-widest hover:text-indigo-400 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TechStack;
