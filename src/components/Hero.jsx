import { useState, useEffect } from 'react';
import { Code2, Database, LayoutTemplate, Layers, Cpu, Github, Linkedin, Mail } from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import resumePdf from '../assets/Sanjay General CV final.pdf';

const TypingEffect = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index >= words.length) {
      setIndex(0);
      return;
    }

    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 50 : subIndex === words[index].length ? 2000 : 100, parseInt(Math.random() * 50 + 50)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  const currentWord = words[index] || words[0] || '';

  return (
    <span className="font-mono text-xl md:text-2xl text-[#64ffda]">
      {`${currentWord.substring(0, subIndex)}`}
      <span className="animate-blink inline-block w-2 bg-[#64ffda] h-5 md:h-6 ml-1 align-middle"></span>
    </span>
  );
};

const FloatingIcon = ({ icon: Icon, className, delay }) => (
  <div 
    className={`absolute opacity-10 animate-float ${className}`}
    style={{ animationDelay: delay }}
  >
    <Icon size={48} className="text-[#8892b0]" />
  </div>
);

const Hero = () => {
  const roles = [
    "Full-Stack Developer",
    "Software Engineer",
    "Problem Solver",
    "Tech Enthusiast"
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-[#0b0c10] px-6 md:px-12 pt-20">
      
      {/* Background Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingIcon icon={Code2} className="top-[20%] left-[10%]" delay="0s" />
        <FloatingIcon icon={Database} className="top-[60%] left-[5%]" delay="2s" />
        <FloatingIcon icon={LayoutTemplate} className="top-[30%] right-[15%]" delay="1s" />
        <FloatingIcon icon={Layers} className="top-[70%] right-[10%]" delay="3s" />
        <FloatingIcon icon={Cpu} className="top-[10%] right-[40%]" delay="4s" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start space-y-6">
          <div className="flex items-center gap-4 mb-2 animate-fade-in-up">
            <div className="h-[1px] w-8 bg:gradient-to-r from-transparent to-[#64ffda]"></div>
            <span className="text-[#64ffda] font-mono text-xs tracking-[0.2em] uppercase border border-[#64ffda]/30 bg-[#64ffda]/10 px-4 py-1.5 rounded-full">
              Full Stack Web Developer
            </span>
            <div className="h-[1px] w-8 bg:gradient-to-l from-transparent to-[#64ffda]"></div>
          </div>

          <p className="font-mono text-[#64ffda] text-lg mb-2">
            Hi, I am
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-[#ccd6f6] tracking-tight">
            S Sanjay
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#64ffda] to-[#00d2ff] leading-tight py-1 max-w-3xl">
            Developing solutions with Performance in Mind
          </h2>
          
          <div className="h-8 mt-1">
            <TypingEffect words={roles} />
          </div>

          <p className="text-[#8892b0] text-lg max-w-lg leading-relaxed mt-1">
            Crafting elegant, accessible, and robust digital experiences from front-end interfaces to back-end architecture.
          </p>

          <div className="flex flex-wrap gap-6 mt-6">
            <a 
              href="#projects" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-[#64ffda] text-[#0b0c10] font-bold rounded hover:shadow-[0_0_20px_#64ffda] transition-all duration-300"
            >
              Check out my work!
            </a>
            <a 
              href={resumePdf} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 border border-[#64ffda] text-[#64ffda] font-bold rounded hover:bg-[#64ffda]/10 transition-all duration-300 flex items-center gap-2"
            >
              View / Download CV
            </a>
          </div>
        </div>

        {/* Right Column: Profile Image / Visual */}
        <div className="flex flex-col items-center justify-center relative mt-16 lg:mt-0">
          <div className="relative group perspective w-64 h-80 sm:w-80 sm:h-96">
            {/* Decorative behind image (from About page) */}
            <div className="absolute inset-0 bg-linear-to-tr from-indigo-600 to-purple-600 rounded-2xl transform rotate-6 scale-105 opacity-50 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-linear-to-bl from-[#64ffda] to-[#00d2ff] rounded-2xl transform -rotate-3 scale-105 opacity-50 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"></div>
            
            {/* Image Container */}
            <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border-8 border-[#0b0c10] shadow-2xl bg-[#112240] transform transition-transform duration-500 group-hover:-translate-y-2">
              <img 
                src={profileImg} 
                alt="S Sanjay - Profile" 
                className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-500"
                onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=S+Sanjay&size=512&background=64ffda&color=0b0c10'; }}
              />
            </div>

            {/* Status Badge */}
            <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-[#112240] border border-[#233554] px-4 py-2 rounded-full flex items-center gap-2 z-20 shadow-xl">
              <span className="w-2.5 h-2.5 bg-[#64ffda] rounded-full animate-pulse"></span>
              <span className="text-[#ccd6f6] text-xs font-mono">AVAILABLE FOR WORK</span>
            </div>
          </div>
          
          {/* Social Links under photo */}
          <div className="flex items-center gap-6 mt-12 text-[#ccd6f6]">
            <a href="https://github.com/Sanjays77" target="_blank" rel="noopener noreferrer" className="hover:text-[#64ffda] transition-colors hover:-translate-y-1 transform duration-300">
              <Github size={28} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#64ffda] transition-colors hover:-translate-y-1 transform duration-300">
              <Linkedin size={28} />
            </a>
            <a href="mailto:sanjay28912005@gmail.com" className="hover:text-[#64ffda] transition-colors hover:-translate-y-1 transform duration-300">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
