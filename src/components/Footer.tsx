import Link from "next/link";
import { contactInfo } from "@/data/portfolio";
import { Code2, MessageCircle, Users } from "lucide-react";
import logoImg from "@/assets/images/nerixglobal.jpeg";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[#020617] pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                <img src={logoImg.src} alt="Nerixglobal Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                Nerix<span className="text-indigo-400">global</span>
              </span>
            </Link>
            <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
              Building scalable, high-performance mobile and web solutions for forward-thinking companies worldwide.
            </p>
            <div className="flex items-center gap-4">
              <a href={contactInfo.socials.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 transition-all">
                <Code2 className="w-4 h-4" />
              </a>
              <a href={contactInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 transition-all">
                <Users className="w-4 h-4" />
              </a>
              <a href={contactInfo.socials.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {["Mobile Apps", "SaaS Development", "Web Platforms", "UI/UX Design", "Backend Systems"].map(item => (
                <li key={item}>
                  <Link href="#services" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href={`mailto:${contactInfo.email}`} className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                  Email Us
                </a>
              </li>
              <li>
                <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                  WhatsApp
                </a>
              </li>
              <li className="text-slate-400 text-sm mt-4">
                {contactInfo.address}
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Nerixglobal. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
