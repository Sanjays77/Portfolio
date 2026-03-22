import { GraduationCap, School, MapPin, Calendar } from 'lucide-react';

const Education = () => {
  const educationList = [
    {
      institution: "Lovely Professional University",
      location: "Punjab, India",
      degree: "B.Tech Computer Science and Engineering",
      score: "CGPA: 7.24",
      date: "August 2023 - Present",
      isActive: true,
      icon: GraduationCap
    },
    {
      institution: "Mother Theresa Memorial Central School",
      location: "Trivandrum, Kerala",
      degree: "Intermediate (Class 12th)",
      score: "Percentage: 80%",
      date: "April 2021 - March 2023",
      isActive: false,
      icon: School
    },
    {
      institution: "Mother Theresa Memorial Central School",
      location: "Trivandrum, Kerala",
      degree: "Matriculation (Class 10th)",
      score: "Percentage: 90%",
      date: "April 2010 - March 2021",
      isActive: false,
      icon: School
    }
  ];

  return (
    <section id="education" className="py-24 bg-[#0b0c10] border-t border-[#233554]/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Education Label - Top Left */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#a855f7]"></div>
          <span className="text-[#a855f7] font-mono text-xs tracking-[0.2em] uppercase border border-[#a855f7]/30 bg-[#a855f7]/10 px-4 py-1.5 rounded-full">
            Education
          </span>
          <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#a855f7]"></div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#ccd6f6] tracking-tight leading-tight mb-20">
          Educational <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#d8b4fe]">Roadmap</span>
        </h2>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l border-[#a855f7]/30 ml-6 md:ml-12 pl-8 md:pl-16 space-y-16">
            
            {educationList.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <div key={index} className="relative group">
                  
                  {/* Timeline Node */}
                  <div className="absolute -left-[53px] md:-left-[85px] top-4 w-11 h-11 md:w-14 md:h-14 bg-[#0b0c10] border-2 border-[#a855f7]/40 group-hover:border-[#a855f7] rounded-full flex items-center justify-center transition-colors duration-300 z-10">
                    <div className="bg-[#a855f7]/10 w-full h-full rounded-full flex items-center justify-center">
                      <Icon className="text-[#c084fc] group-hover:text-[#d8b4fe] w-5 h-5 md:w-6 md:h-6 transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Card Section */}
                  <div className="bg-[#112240] p-6 md:p-8 rounded-2xl border border-[#233554] group-hover:border-[#a855f7]/50 transition-all duration-300 shadow-xl overflow-hidden relative">
                    {/* Hover Highlight */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#a855f7] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <span className="text-[#a855f7] font-mono text-sm block mb-3 font-medium tracking-wide">
                        {edu.date}
                      </span>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#818cf8] to-[#c084fc] mb-3 transition-all duration-300 group-hover:from-[#93c5fd] group-hover:to-[#d8b4fe]">
                        {edu.degree}
                      </h3>
                      
                      <h4 className="text-xl md:text-2xl font-bold text-[#ccd6f6] mb-5">
                        {edu.institution}
                      </h4>
                      
                      <div className="flex flex-col sm:flex-row gap-4 sm:items-center mt-6">
                        <span className="text-[#8892b0] text-sm flex items-center gap-1.5 bg-[#0b0c10]/50 px-3 py-1.5 rounded-lg border border-[#233554]/50">
                          <MapPin className="w-4 h-4 text-[#a855f7]"/> 
                          {edu.location}
                        </span>
                        <span className="text-[#c084fc] bg-[#a855f7]/10 border border-[#a855f7]/20 px-3 py-1.5 rounded-lg text-sm font-medium">
                          {edu.score}
                        </span>
                        {edu.isActive && (
                          <span className="text-[#60a5fa] bg-[#3b82f6]/10 border border-[#3b82f6]/20 px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#60a5fa] animate-pulse"></span>
                            Currently pursuing
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
