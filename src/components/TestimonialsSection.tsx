"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/portfolio";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Client <span className="gradient-text">Testimonials</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Hear what our partners have to say about our work and commitment to excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-white/5" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center overflow-hidden shrink-0">
                  {/* Using initials as placeholder until actual images are added */}
                  <span className="text-indigo-300 font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-indigo-400 text-sm font-medium">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-slate-300 leading-relaxed relative z-10">
                "{testimonial.feedback}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
