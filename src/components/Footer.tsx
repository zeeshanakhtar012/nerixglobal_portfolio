import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[#020617] pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                SoftMat<span className="text-indigo-400">Dev</span>
              </span>
            </Link>
            <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
              Building scalable, high-performance mobile and web solutions for forward-thinking companies worldwide.
            </p>
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
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              {["About Us", "Our Work", "Careers", "Contact"].map(item => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(" ", "")}`} className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} SoftMat Dev. All rights reserved.
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
