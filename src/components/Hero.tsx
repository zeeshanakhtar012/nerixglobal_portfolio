"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/images/nerixglobal.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" style={{ backgroundImage: `url(${heroBg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#020617]/85 backdrop-blur-[2px]" />
      {/* Background elements */}


      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-4 py-2 rounded-full glass text-indigo-400 text-sm font-semibold mb-6 inline-block border border-indigo-500/20">
            Next-Gen Software Agency
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            We Build <span className="gradient-text">Scalable Apps</span> & <br />
            SaaS Platforms That Drive <span className="gradient-text">Growth</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            From high-performance mobile apps to complex SaaS ecosystems, we deliver
            software that transforms businesses and reaches millions of users.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#services"
              className="group bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 flex items-center gap-2 shadow-xl shadow-indigo-500/30"
            >
              Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="glass hover:bg-white/5 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 flex items-center gap-2 border border-white/10"
            >
              <Play className="w-5 h-5 fill-current" />
              Get Started
            </Link>
          </div>
        </motion.div>

        {/* Floating cards mockup area */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 relative max-w-5xl mx-auto"
        >
          <div className="aspect-video glass-card rounded-2xl overflow-hidden relative shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent" />
            {/* Inner "screen" content placeholder */}
            <div className="p-8 h-full flex flex-col justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-4 bg-white/10 rounded-full" />
                <div className="w-24 h-4 bg-white/10 rounded-full" />
                <div className="flex-1" />
                <div className="w-8 h-8 rounded-full bg-white/20" />
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="h-40 glass rounded-xl" />
                <div className="h-40 glass rounded-xl border-indigo-500/30" />
                <div className="h-40 glass rounded-xl" />
              </div>
            </div>
          </div>

          {/* Decorative floating elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 glass rounded-2xl rotate-12 flex items-center justify-center shadow-xl">
            <div className="w-12 h-12 bg-indigo-500 rounded-lg animate-bounce" />
          </div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 glass rounded-2xl -rotate-6 shadow-2xl p-4">
            <div className="space-y-3">
              <div className="w-full h-3 bg-white/20 rounded-full" />
              <div className="w-3/4 h-3 bg-white/10 rounded-full" />
              <div className="w-1/2 h-3 bg-indigo-500/40 rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
