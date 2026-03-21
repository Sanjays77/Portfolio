import { MapPin, Mail, Phone, Code2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0b0c10] border-t border-[#233554]/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Narrative */}
          <div className="flex flex-col space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-8 h-[1px] bg-[#a855f7]"></div>
              <span className="text-[#a855f7] font-mono text-xs font-bold tracking-[0.2em] uppercase">
                Genesis
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#ccd6f6] tracking-tight leading-tight">
              The mind behind <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#d8b4fe]">the machine</span>
            </h2>

            <p className="text-[#8892b0] text-lg leading-relaxed">
              I'm a passionate Software Engineer and Full Stack Developer focused on building scalable systems, responsive web architectures, and seamless user experiences. My work sits at the intersection of elegant design and engineering rigor — from robust REST APIs to pixel-perfect frontends for production-grade reliability.
            </p>

            <div className="border-l-2 border-[#233554] pl-6 py-2 my-4">
              <p className="text-[#8892b0] italic text-[15px] leading-relaxed">
                "I believe the best software is nearly invisible — it solves real problems without demanding attention. I write code that is deliberate, readable, and built to last."
              </p>
            </div>

            {/* Contact Pills */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#112240] rounded-lg border border-[#233554]">
                <MapPin size={16} className="text-[#8892b0]" />
                <span className="text-[#8892b0] text-sm">India</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#112240] rounded-lg border border-[#233554]">
                <Mail size={16} className="text-[#8892b0]" />
                <span className="text-[#8892b0] text-sm">sanjay28912005@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#112240] rounded-lg border border-[#233554]">
                <Phone size={16} className="text-[#8892b0]" />
                <span className="text-[#8892b0] text-sm">+91-9074472015</span>
              </div>
            </div>
          </div>

          {/* Right Column: Stats Table */}
          <div className="flex flex-col justify-center">
            <div className="flex justify-center mb-16 opacity-20 hidden lg:flex">
              <Code2 size={120} className="text-[#a855f7]" strokeWidth={1} />
            </div>

            <div className="flex flex-col space-y-6">
              {/* Row 1 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-[#233554]/50 gap-2">
                <span className="text-[#8892b0] text-sm flex-shrink-0">Current Pursuit</span>
                <span className="text-[#ccd6f6] font-medium text-right sm:text-left">Computer Science & Engineering</span>
              </div>
              
              {/* Row 2 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-[#233554]/50 gap-2">
                <span className="text-[#8892b0] text-sm flex-shrink-0">Specialisation</span>
                <span className="text-[#ccd6f6] font-medium text-right sm:text-left">Full-Stack Web Development</span>
              </div>
              
              {/* Row 3 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-[#233554]/50 gap-2">
                <span className="text-[#8892b0] text-sm flex-shrink-0">Primary Vernaculars</span>
                <span className="text-[#ccd6f6] font-medium text-right sm:text-left">JavaScript, React, Node.js, C++</span>
              </div>
              
              {/* Row 4 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-[#233554]/50 gap-2">
                <span className="text-[#8892b0] text-sm flex-shrink-0">Open To</span>
                <span className="text-[#ccd6f6] font-medium text-right sm:text-left">Internships, Freelance, Full-time roles</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
