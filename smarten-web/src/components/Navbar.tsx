import { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/85 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <ShieldCheck className="w-8 h-8 text-gold" />
          <span className="text-2xl font-serif font-bold tracking-wide text-white">SMARTEN</span>
        </div>

        <div className="hidden md:flex space-x-8 items-center">
          {['Market', 'Technology', 'Competition'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-slate-300 hover:text-gold transition-colors tracking-widest uppercase">
              {item}
            </a>
          ))}
          <a
            href="mailto:vinayab@goa.bits-pilani.ac.in?cc=f20221254@goa.bits-pilani.ac.in"
            className="px-6 py-2 bg-gradient-to-r from-[#f5d76e] via-[#f0c756] to-[#cfa636] text-slate-900 font-semibold uppercase text-xs tracking-widest shadow-[0_0_22px_rgba(245,215,110,0.35)] hover:shadow-[0_0_32px_rgba(207,166,54,0.45)] transition-all duration-300"
          >
            Request Access
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col space-y-4">
          {['Market', 'Technology', 'Competition'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-gold block py-2">
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
