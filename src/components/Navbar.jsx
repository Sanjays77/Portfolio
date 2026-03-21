import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import resumePdf from '../assets/Sanjay General CV final.pdf';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
  ];

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (!targetId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-nav py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo/Name */}
        <a 
          href="/" 
          onClick={(e) => handleScrollTo(e, '')}
          className="text-2xl font-bold tracking-tighter text-[#64ffda] hover:text-[#64ffda]/80 transition-colors"
        >
          S.
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => handleScrollTo(e, link.id)}
              className="text-sm font-medium text-[#ccd6f6] hover:text-[#64ffda] transition-colors flex items-center gap-1 group cursor-pointer"
            >
              <span className="text-[#64ffda] text-xs font-mono mr-1">0{index + 1}.</span> {link.name}
            </a>
          ))}
          <a 
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-mono text-[#64ffda] border border-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors cursor-pointer"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[#ccd6f6] hover:text-[#64ffda] p-2 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#112240] shadow-xl border-t border-[#233554] py-6 flex flex-col items-center space-y-6">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => handleScrollTo(e, link.id)}
              className="text-base font-medium text-[#ccd6f6] hover:text-[#64ffda] transition-colors flex flex-col items-center gap-1 cursor-pointer"
            >
              <span className="text-[#64ffda] text-xs font-mono">0{index + 1}.</span>
              {link.name}
            </a>
          ))}
          <a 
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 px-8 py-3 text-sm font-mono text-[#64ffda] border border-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors cursor-pointer"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
