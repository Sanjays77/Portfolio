import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Target, Code, Star } from 'lucide-react';
import chooseEasyImg from '../assets/chooseeasy.png';
import communityConnectImg from '../assets/Community connect.png';
import musicSchoolImg from '../assets/music.png';
import cpuSchedulerImg from '../assets/CPU.png';
import portfolioImg from '../assets/Portfolio.png';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      title: "CHOOSE EASY",
      badge: "Major",
      image: chooseEasyImg,
      goal: "Design a tool to help individuals explore career opportunities and make informed decisions without external influence.",
      techStack: "React.js, Node.js, MongoDB, Express, Socket.IO, Git",
      features: "Real-time interactions and personalized career path guidance tailored directly to user interests.",
      liveLink: "#",
      githubLink: "https://github.com/Sanjays77"
    },
    {
      title: "Community Connect",
      badge: "Major",
      image: communityConnectImg,
      goal: "A centralized web platform designed to streamline daily operations for residential societies.",
      techStack: "React.js, Node.js, Express, Tailwind CSS, MongoDB",
      features: "Digital notice board, interactive real-time complaint tracking, and automated maintenance billing.",
      liveLink: "#",
      githubLink: "https://github.com/Sanjays77"
    },
    {
      title: "Music School Mgt",
      badge: "Major",
      image: musicSchoolImg,
      goal: "Digitize academic and administrative workflows covering student enrollment and lesson scheduling.",
      techStack: "HTML, Tailwind CSS, JavaScript, MySQL, PHP",
      features: "Secure roles, auto-scheduling, conflict resolution, teacher-student portals.",
      liveLink: "#",
      githubLink: "https://github.com/Sanjays77"
    },
    {
      title: "CPU Scheduler Sim",
      badge: "Major",
      image: cpuSchedulerImg,
      goal: "Analyze CPU scheduling performance across various load conditions and algorithm constraints.",
      techStack: "C++, STL, MySQL, Git",
      features: "FCFS, SJF, Priority & Round Robin, ASCII Gantt Chart rendering.",
      liveLink: "#",
      githubLink: "https://github.com/Sanjays77"
    },
    {
      title: "Portfolio",
      badge: "Major",
      image: portfolioImg,
      goal: "Design and engineer a highly engaging, fully responsive personal portfolio to showcase featured works.",
      techStack: "React, Tailwind CSS, Vite, Lucide Icons",
      features: "Custom CSS animations, advanced 3D coverflow carousel, and modern neon aesthetic.",
      liveLink: "#",
      githubLink: "https://github.com/Sanjays77"
    }
  ];

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % projects.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="projects" className="py-24 bg-[#0b0c10] border-t border-[#233554]/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center mb-16 space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#a855f7]"></div>
            <span className="text-[#a855f7] font-mono text-xs tracking-[0.2em] uppercase border border-[#a855f7]/30 bg-[#a855f7]/10 px-4 py-1.5 rounded-full">
              Projects
            </span>
            <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#a855f7]"></div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#ccd6f6] tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64ffda] to-[#00d2ff]">Selected Works</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full h-[680px] md:h-[650px] flex justify-center items-center mt-10">

          {/* Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:left-4 lg:left-12 z-50 p-3 bg-[#112240] rounded-full border border-[#233554] text-[#ccd6f6] hover:bg-[#64ffda] hover:text-[#0b0c10] hover:scale-110 transition-all shadow-[0_0_20px_rgba(100,255,218,0.2)]"
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 md:right-4 lg:right-12 z-50 p-3 bg-[#112240] rounded-full border border-[#233554] text-[#ccd6f6] hover:bg-[#64ffda] hover:text-[#0b0c10] hover:scale-110 transition-all shadow-[0_0_20px_rgba(100,255,218,0.2)]"
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>

          {/* Cards */}
          {projects.map((project, i) => {
            const total = projects.length;
            let offset = (i - activeIndex + total) % total;

            // Adjust offset to center active index in a circular array view
            if (offset > Math.floor(total / 2)) {
              offset -= total;
            }

            const absOffset = Math.abs(offset);
            const zIndex = 10 - absOffset;
            const sign = Math.sign(offset);

            // Hide cards beyond immediate neighbors to prevent clutter
            let opacity = 0;
            if (absOffset === 0) opacity = 1;
            else if (absOffset === 1) opacity = 0.5;
            else if (absOffset === 2) opacity = 0.15;

            return (
              <div
                key={i}
                className="absolute transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)]"
                style={{
                  transform: `translateX(${offset * 105}%) scale(${1 - absOffset * 0.15}) perspective(1200px) rotateY(${-sign * 15}deg)`,
                  zIndex: zIndex,
                  opacity: opacity,
                  pointerEvents: absOffset === 0 ? 'auto' : 'none',
                }}
              >
                {/* Advanced Card Body */}
                <div className="w-[320px] md:w-[400px] bg-[#1a1d29] rounded-[1.5rem] overflow-hidden shadow-2xl border border-white/5 mx-auto">

                  {/* Top Image Box */}
                  <div className="h-48 md:h-56 w-full bg-[#112240] relative flex items-center justify-center border-b border-white/5">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  </div>

                  {/* Metadata Box */}
                  <div className="p-6 md:p-8 flex flex-col gap-5">

                    {/* Title Row */}
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-bold text-[#a855f7]">{project.title}</h3>
                      <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[10px] uppercase font-black tracking-widest rounded-full shadow-lg">
                        {project.badge}
                      </span>
                    </div>

                    {/* Core Features */}
                    <div className="flex flex-col gap-4 text-sm mt-2">
                      <div className="flex items-start gap-3">
                        <Target size={18} className="text-indigo-400 mt-0.5 flex-shrink-0" />
                        <p className="text-[#ccd6f6] font-semibold leading-snug">Goal: <span className="text-[#8892b0] font-normal">{project.goal}</span></p>
                      </div>

                      <div className="flex items-start gap-3">
                        <Code size={18} className="text-indigo-400 mt-0.5 flex-shrink-0" />
                        <p className="text-[#ccd6f6] font-semibold leading-snug">Tech Stack: <span className="text-[#8892b0] font-normal">{project.techStack}</span></p>
                      </div>

                      <div className="flex items-start gap-3">
                        <Star size={18} className="text-pink-400 mt-0.5 flex-shrink-0" />
                        <p className="text-[#ccd6f6] font-semibold leading-snug">Features: <span className="text-[#8892b0] font-normal">{project.features}</span></p>
                      </div>
                    </div>

                    {/* Bottom Links */}
                    <div className="flex gap-4 w-full mt-4">
                      {project.title === "CHOOSE EASY" && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-bold rounded-lg text-center hover:opacity-90 transition-opacity shadow-[0_4px_14px_0_rgba(168,85,247,0.39)]"
                        >
                          Live Demo
                        </a>
                      )}
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 bg-[#2a3040] border border-[#3f4a63] text-white text-sm font-bold rounded-lg text-center hover:bg-[#3f4a63] transition-colors shadow-lg"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
