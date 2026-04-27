"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/portfolio";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 border-y border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Engineering <span className="gradient-text">Excellence</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              We are a team of passionate engineers and designers dedicated to building software that matters. With over 5 years of agency experience, we've delivered solutions that handle millions of requests and serve users globally.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              Our focus is on clean architecture, scalable infrastructure, and premium user interfaces. We don't just write code; we build digital businesses.
            </p>
            <div className="pt-4">
              <button className="glass hover:bg-white/10 text-white px-8 py-3 rounded-full font-semibold transition-all">
                Meet the Team
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 grid grid-cols-2 gap-4 w-full"
          >
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="glass-card p-8 rounded-3xl text-center hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="text-4xl font-black text-indigo-400 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
