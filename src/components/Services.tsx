"use client";

import { motion } from "framer-motion";
import { services } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Solutions That <span className="gradient-text">Scale</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We provide comprehensive development services tailored to modern business needs,
            focusing on performance, reliability, and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl group"
            >
              <div className={cn(
                "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 bg-gradient-to-br",
                service.color
              )}>
                <service.icon className="text-white w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-6 flex items-center text-indigo-400 font-semibold group-hover:gap-2 transition-all">
                Learn More
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
