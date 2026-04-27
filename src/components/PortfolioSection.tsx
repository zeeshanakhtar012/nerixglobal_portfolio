"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

const PortfolioSection = () => {
  const featuredProject = projects.find(p => p.id === "restaurant-saas");
  const otherProjects = projects.filter(p => p.id !== "restaurant-saas");

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Featured <span className="gradient-text">Case Studies</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            A selection of our most impactful work across SaaS, mobile, and AI.
          </p>
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-[2rem] p-8 md:p-12 mb-16 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
               <div className="w-64 h-64 bg-indigo-500 rounded-full blur-[100px]" />
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 relative z-10">
              <div className="space-y-6">
                <div className="inline-block px-4 py-1.5 rounded-full glass border border-indigo-500/30 text-indigo-300 text-sm font-semibold tracking-wide">
                  {featuredProject.category}
                </div>
                <h3 className="text-4xl font-bold text-white">{featuredProject.title}</h3>
                <p className="text-xl text-slate-300 leading-relaxed">
                  {featuredProject.description}
                </p>
                
                <div className="space-y-4 pt-4">
                  <div className="glass p-6 rounded-2xl">
                    <h4 className="text-sm font-bold text-indigo-400 uppercase tracking-wider mb-2">The Solution</h4>
                    <p className="text-slate-300">{featuredProject.stats?.solution}</p>
                  </div>
                  <div className="glass p-6 rounded-2xl">
                    <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-2">Impact</h4>
                    <p className="text-slate-300">{featuredProject.stats?.results}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {featuredProject.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-slate-300 text-sm border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ecosystem Visualization */}
              <div className="relative flex items-center justify-center min-h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-3xl border border-white/5" />
                <div className="grid gap-6 w-full max-w-sm relative z-10 p-6">
                   {featuredProject.apps?.map((app, idx) => (
                     <div key={app.name} className="glass-card p-6 rounded-2xl transform transition-transform hover:scale-105 hover:border-indigo-500/50">
                       <h4 className="text-lg font-bold text-white mb-2">{app.name}</h4>
                       <ul className="space-y-1">
                         {app.features.map(feature => (
                           <li key={feature} className="text-sm text-slate-400 flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                             {feature}
                           </li>
                         ))}
                       </ul>
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card rounded-3xl p-6 group hover:border-indigo-500/30 flex flex-col h-full"
            >
               <div className="aspect-video w-full rounded-2xl glass mb-6 relative overflow-hidden flex items-center justify-center">
                  <span className="text-slate-500 font-medium">Image Placeholder</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               </div>
               
               <div className="flex-1">
                 <div className="text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2">
                   {project.category}
                 </div>
                 <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                   {project.title}
                 </h3>
                 <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                   {project.description}
                 </p>
               </div>
               
               <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                 <div className="flex gap-2 text-xs text-slate-500">
                    {project.tags.slice(0, 2).map(tag => <span key={tag}>{tag}</span>)}
                 </div>
                 <button className="w-8 h-8 rounded-full glass flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                   <ArrowUpRight className="w-4 h-4" />
                 </button>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
