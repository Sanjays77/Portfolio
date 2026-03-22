import { ArrowRight, ExternalLink } from 'lucide-react';
import redHatCert from '../assets/certificates/red hat certificate .pdf';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[#0b0c10] border-t border-[#233554]/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Experience Label - Top Left */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#eab308]"></div>
          <span className="text-[#eab308] font-mono text-xs tracking-[0.2em] uppercase border border-[#eab308]/30 bg-[#eab308]/10 px-4 py-1.5 rounded-full">
            Experience
          </span>
          <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#eab308]"></div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-8">
          
          {/* Left Side: Heading and Arrow */}
          <div className="flex flex-row items-center gap-6 lg:gap-10 lg:w-2/5">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#ccd6f6] tracking-tight leading-tight">
              Summer<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eab308] to-[#fef08a]">Training</span>
            </h2>
            <div className="hidden md:flex items-center justify-center p-4 rounded-full bg-[#eab308]/10 border border-[#eab308]/30 animate-pulse">
              <ArrowRight className="text-[#eab308] w-10 h-10 lg:w-16 lg:h-16" />
            </div>
            {/* Mobile arrow */}
            <ArrowRight className="md:hidden text-[#eab308] w-10 h-10 animate-bounce" />
          </div>

          {/* Right/Left Side: Experience Card */}
          <div className="lg:w-3/5 w-full">
            <div className="relative group bg-[#112240] p-8 md:p-10 rounded-2xl border border-[#233554] hover:border-[#eab308] transition-all duration-300 shadow-2xl overflow-hidden">
              
              {/* Border Effect Highlights */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#eab308] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-[#eab308]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4 border-b border-[#233554]/50 pb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#ccd6f6] group-hover:text-white transition-colors">
                      Mastering Linux System Administration by RHCSA
                    </h3>
                    <a 
                      href={redHatCert} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-sm font-medium text-[#facc15] hover:text-[#eab308] mt-3 group/link"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/link:translate-x-1 transition-transform" /> View Certificate Link
                    </a>
                  </div>
                  <time className="whitespace-nowrap bg-[#eab308]/10 text-[#facc15] px-4 py-1.5 rounded-full border border-[#eab308]/30 text-sm font-mono self-start mt-2 md:mt-0">
                    June 2025 - July 2025
                  </time>
                </div>
                
                <ul className="space-y-5 mt-6">
                  <li className="text-[#8892b0] text-base lg:text-lg flex items-start">
                    <span className="text-[#eab308] mr-4 mt-1 font-bold">▹</span>
                    <span className="leading-relaxed"><strong>Completed summer training</strong> (RHCSA Module) focused on <strong className="text-[#ccd6f6]">Mastering Linux system administration</strong>, including users & permissions, process management, storage, and system services.</span>
                  </li>
                  <li className="text-[#8892b0] text-base lg:text-lg flex items-start">
                    <span className="text-[#eab308] mr-4 mt-1 font-bold">▹</span>
                    <span className="leading-relaxed">Worked on hands-on real-world administration tasks, configuring networking, automating operations using Bash scripting, and troubleshooting Linux-based environments.</span>
                  </li>
                  <li className="text-[#8892b0] text-base lg:text-lg flex items-start">
                    <span className="text-[#eab308] mr-4 mt-1 font-bold">▹</span>
                    <span className="leading-relaxed">Achieved an <strong className="text-[#ccd6f6]">A grade</strong> and developed strong proficiency in system management, security hardening, package management (YUM/DNF), LVM configuration, and service monitoring.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
