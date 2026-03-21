import { MapPin, Mail, Phone, Code2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0b0c10] border-t border-[#233554]/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left Column: Narrative */}
          <div className="flex flex-col space-y-8">
            <div className="flex items-center gap-4 mb-2">
              <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#a855f7]"></div>
              <span className="text-[#a855f7] font-mono text-xs tracking-[0.2em] uppercase border border-[#a855f7]/30 bg-[#a855f7]/10 px-4 py-1.5 rounded-full">
                About Me
              </span>
              <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#a855f7]"></div>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#ccd6f6] tracking-tight leading-tight">
              Developer behind<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#d8b4fe]">the code</span>
            </h2>

            <p className="text-[#8892b0] text-lg leading-relaxed">
              I'm a passionate Software Engineer and Full Stack Developer focused on building scalable systems, responsive web architectures, and seamless user experiences. My work sits at the intersection of elegant design and engineering rigor — from robust REST APIs to pixel-perfect frontends for production-grade reliability.
            </p>

            <div className="border-l-2 border-[#233554] pl-6 py-2 my-4">
              <p className="text-[#8892b0] italic text-[15px] leading-relaxed">
                "I build full stack applications that solve real problems, focusing on clean code, performance, and long-term scalability."
              </p>
            </div>

            {/* Contact Pills */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#112240] rounded-lg border border-[#233554]">
                <MapPin size={16} className="text-[#8892b0]" />
                <span className="text-[#8892b0] text-sm">Kerala,India</span>
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
            {/* Number Stats Row */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              <div className="flex flex-col">
                <h3 className="text-4xl lg:text-5xl font-black text-[#c084fc] mb-3">400+</h3>
                <p className="text-[#60a5fa]/80 text-sm">Problems Solved</p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-4xl lg:text-5xl font-black text-[#c084fc] mb-3">5</h3>
                <p className="text-[#60a5fa]/80 text-sm">Projects</p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-4xl lg:text-5xl font-black text-[#c084fc] mb-3">10+</h3>
                <p className="text-[#60a5fa]/80 text-sm">Certifications</p>
              </div>
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
                <span className="text-[#8892b0] text-sm flex-shrink-0">Primary Languages</span>
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
