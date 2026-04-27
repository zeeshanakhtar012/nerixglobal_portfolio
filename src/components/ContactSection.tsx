"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, ArrowRight } from "lucide-react";
import { contactInfo } from "@/data/portfolio";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto glass-card rounded-[2.5rem] p-8 md:p-16 border border-indigo-500/20 shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Build Your <span className="gradient-text">Product</span>
            </h2>
            <p className="text-xl text-slate-400">
              Ready to scale your business with premium software? Get in touch with our team today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-indigo-400 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Email Us</h4>
                  <p className="text-slate-400">{contactInfo.email}</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-indigo-400 text-sm font-semibold mt-2 inline-block hover:underline">
                    Send an email →
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">WhatsApp</h4>
                  <p className="text-slate-400">{contactInfo.phone}</p>
                  <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="text-emerald-400 text-sm font-semibold mt-2 inline-block hover:underline">
                    Chat with us →
                  </a>
                </div>
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              />
              <textarea 
                placeholder="Tell us about your project..." 
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
              ></textarea>
              <button 
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group"
              >
                Send Message
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
