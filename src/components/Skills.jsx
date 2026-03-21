import { Code2, Wrench, Layers, Users, Cpu, ChevronLeft, ChevronRight } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="w-8 h-8 text-blue-500 mb-4" />,
      skills: ["C", "C++", "Java", "JavaScript", "PHP", "Python"],
      color: "blue"
    },
    {
      title: "Frameworks",
      icon: <Layers className="w-8 h-8 text-purple-500 mb-4" />,
      skills: ["HTML & CSS", "NodeJS", "React.js", "Express", "Tailwind CSS"],
      color: "purple"
    },
    {
      title: "Tools/Platforms",
      icon: <Wrench className="w-8 h-8 text-orange-500 mb-4" />,
      skills: ["MySQL", "MongoDB", "Git", "GitHub", "Docker", "Postman", "Vercel"],
      color: "orange"
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-8 h-8 text-green-500 mb-4" />,
      skills: ["Problem Solving", "Team Player", "Leadership", "Adaptability", "Multitasking"],
      color: "green"
    },
    {
      title: "Computational Foundations",
      icon: <Cpu className="w-8 h-8 text-[#64ffda] mb-4" />,
      skills: ["Data Structures", "Algorithms", "Operating Systems", "DBMS","DevOps","Computer Networks", "System Design"],
      color: "blue"
    }
  ];

  const getColorClasses = (color) => {
    const classes = {
      blue: "bg-blue-500/10 text-blue-400 border border-blue-500/30",
      purple: "bg-purple-500/10 text-purple-400 border border-purple-500/30",
      orange: "bg-orange-500/10 text-orange-400 border border-orange-500/30",
      green: "bg-green-500/10 text-green-400 border border-green-500/30"
    };
    return classes[color] || classes.blue;
  };

  return (
    <section id="skills" className="py-24 bg-[#0b0c10] border-t border-[#233554]/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center justify-center mb-16 space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#a855f7]"></div>
            <span className="text-[#a855f7] font-mono text-xs tracking-[0.2em] uppercase border border-[#a855f7]/30 bg-[#a855f7]/10 px-4 py-1.5 rounded-full">
              Skills
            </span>
            <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#a855f7]"></div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#ccd6f6] tracking-tight text-center">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64ffda] to-[#00d2ff]">Technologies</span>
          </h2>
        </div>

        <div className="relative group/slider px-2 md:px-6">
          <button 
            onClick={() => {
              const container = document.getElementById('skills-container');
              if(container) container.scrollBy({ left: -350, behavior: 'smooth' });
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-[#112240] border border-[#233554] text-[#64ffda] hover:bg-[#233554] hover:border-[#64ffda]/50 hover:shadow-[0_0_15px_rgba(100,255,218,0.3)] transition-all duration-300 opacity-0 group-hover/slider:opacity-100 hidden md:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>

          <div 
            id="skills-container" 
            className="flex overflow-x-auto gap-6 snap-x snap-mandatory pt-4 pb-12 scroll-smooth" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style>{`#skills-container::-webkit-scrollbar { display: none; }`}</style>
            
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-[#112240] border border-[#233554] hover:shadow-[0_10px_30px_-15px_rgba(100,255,218,0.2)] hover:border-[#64ffda]/30 transition-all duration-300 hover:-translate-y-2 cursor-pointer min-w-[280px] md:min-w-[320px] snap-center flex-shrink-0 flex-1 max-w-[360px]"
              >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-[#0b0c10] border border-[#233554] rounded-full mb-6 group-hover:scale-110 group-hover:border-[#a855f7]/50 transition-all duration-300 shadow-xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-6 text-[#ccd6f6]">{category.title}</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 text-sm font-medium rounded-full border ${getColorClasses(category.color)} whitespace-nowrap`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          </div>

          <button 
            onClick={() => {
              const container = document.getElementById('skills-container');
              if(container) container.scrollBy({ left: 350, behavior: 'smooth' });
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-[#112240] border border-[#233554] text-[#64ffda] hover:bg-[#233554] hover:border-[#64ffda]/50 hover:shadow-[0_0_15px_rgba(100,255,218,0.3)] transition-all duration-300 opacity-0 group-hover/slider:opacity-100 hidden md:flex"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
