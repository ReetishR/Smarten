import React from 'react';
import { ShieldCheck, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-deep border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <ShieldCheck className="w-8 h-8 text-gold" />
              <span className="text-2xl font-serif font-bold tracking-wide text-white">SMARTEN</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              The standard for invisible authentication. Protecting global supply chains with molecular-level security and AI intelligence.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Market Analysis', 'Technology', 'Case Studies', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-gold transition-colors text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="text-slate-400 text-sm">Mumbai, India</li>
              <li className="text-slate-400 text-sm">contact@smarten.tech</li>
              <li className="text-slate-400 text-sm">+91 22 5555 0123</li>
              <li className="flex space-x-4 mt-4">
                <Linkedin className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
                <Mail className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">© 2025 SMARTEN Technologies. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
