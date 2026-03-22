import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Certificates', id: 'certifications' },
    { name: 'Education', id: 'education' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'education', 'contact'];
      let current = '';
      
      if (window.scrollY < 100) {
        current = 'home';
      } else {
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            // If the section is touching the top third of the viewport
            if (rect.top <= window.innerHeight * 0.35 && rect.bottom >= window.innerHeight * 0.35) {
              current = section;
              break;
            }
          }
        }
      }
      
      // If we've reached the absolute bottom of the page, forcefully highlight Contact
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
          current = 'contact';
      }
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        // Offset smooth scroll for fixed header
        const yOffset = -80; 
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'py-4 bg-[#0b0c10]/80 backdrop-blur-lg border-b border-[#233554]/50 shadow-2xl' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center relative z-[110]">
        
        {/* Logo/Name */}
        <a 
          href="/" 
          onClick={(e) => handleScrollTo(e, 'home')}
          className="text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#d8b4fe] hover:scale-105 transition-transform duration-300 origin-left cursor-pointer drop-shadow-lg"
        >
          S.
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => handleScrollTo(e, link.id)}
              className={`relative px-4 py-2 text-[14px] font-semibold tracking-wide transition-all duration-300 rounded-full cursor-pointer overflow-hidden group
                ${activeSection === link.id 
                  ? 'text-[#d8b4fe] bg-[#a855f7]/15 shadow-[0_0_15px_rgba(168,85,247,0.15)] ring-1 ring-[#a855f7]/50' 
                  : 'text-[#ccd6f6] hover:text-white hover:bg-[#233554]/40'
                }
              `}
            >
              <span className="relative z-10">{link.name}</span>
              
              {/* Animated hover background for inactive items */}
              {activeSection !== link.id && (
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#a855f7]/0 via-[#a855f7]/10 to-[#a855f7]/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
              )}
            </a>
          ))}
          
          <a 
            href="#contact"
            onClick={(e) => handleScrollTo(e, 'contact')}
            className={`ml-4 px-8 py-2.5 text-[15px] font-extrabold transition-all duration-300 ease-out cursor-pointer relative overflow-hidden group rounded-full
              ${activeSection === 'contact'
                ? 'text-white bg-gradient-to-r from-[#a855f7] to-[#818cf8] shadow-[0_0_25px_rgba(168,85,247,0.7)] scale-105 ring-2 ring-[#d8b4fe]/60'
                : 'text-white bg-gradient-to-r from-[#a855f7] to-[#818cf8] shadow-[0_4px_14px_0_rgba(168,85,247,0.39)] hover:shadow-[0_6px_20px_rgba(168,85,247,0.6)] hover:-translate-y-1'
              }
            `}
          >
            <span className="relative z-10">Hire Me</span>
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-white opacity-20 group-hover:left-full transition-all duration-700 ease-out" />
          </a>
        </div>

        {/* Mobile Menu Button  */}
        <button 
          className="lg:hidden text-[#ccd6f6] hover:text-[#a855f7] p-2 transition-colors z-50 duration-300 transform active:scale-90"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`lg:hidden fixed inset-0 w-full h-screen bg-[#0b0c10]/95 backdrop-blur-2xl z-[105] transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] flex flex-col items-center justify-center ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}
      >
        <div className="flex flex-col items-center space-y-6 w-full px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => handleScrollTo(e, link.id)}
              className={`text-2xl font-bold transition-all cursor-pointer w-full text-center py-3 tracking-wide rounded-2xl
                ${activeSection === link.id 
                  ? 'text-[#d8b4fe] bg-[#a855f7]/15 ring-1 ring-[#a855f7]/50 scale-105 shadow-lg' 
                  : 'text-[#ccd6f6] hover:text-[#a855f7] hover:bg-[#233554]/30'
                }
              `}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={(e) => handleScrollTo(e, 'contact')}
            className={`mt-10 px-14 py-4 text-xl font-bold text-white rounded-full cursor-pointer w-4/5 max-w-sm text-center transition-all duration-300
              ${activeSection === 'contact'
                ? 'bg-gradient-to-r from-[#a855f7] to-[#818cf8] shadow-[0_0_25px_rgba(168,85,247,0.7)] scale-110 ring-2 ring-[#d8b4fe]/60'
                : 'bg-gradient-to-r from-[#a855f7] to-[#818cf8] shadow-[0_4px_14px_0_rgba(168,85,247,0.39)] transform hover:scale-105 hover:shadow-[0_6px_20px_rgba(168,85,247,0.6)]'
              }
            `}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
