import { Github, FolderGit2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Music School Management System",
      date: "January 2025 - April 2025",
      github: "https://github.com/Sanjays77", // Assuming general profile link since specific isn't provided
      description: [
        "Developed a full-stack web platform to digitize academic and administrative workflows, covering student enrollment, secure profiles, teacher assignment, and lesson scheduling.",
        "Led the design and implementation of core modules, including an automated lesson-scheduling algorithm and a clean, role-based interface for different user groups.",
        "Achieved significant improvements in operational efficiency by reducing timetable conflicts, enhancing coordination between teachers and students, and boosting overall administrative productivity."
      ],
      tech: ["HTML", "Tailwind CSS", "JavaScript", "MySQL", "PHP"]
    },
    {
      title: "Intelligent CPU Scheduler-Simulator",
      date: "January 2025 - April 2025",
      github: "https://github.com/Sanjays77",
      description: [
        "Engineered a C++ Operating System simulation tool to analyze CPU scheduling performance. Implemented FCFS, SJF, Priority, and Round Robin with metrics like Average Waiting Time and Turnaround Time.",
        "Built a real-time ASCII Gantt Chart to present process execution and context switching visually, enabling clearer comparison of algorithm behavior and improving understanding of scheduling efficiency across test.",
        "Developed the project using C++, MySQL, and STL with a modular architecture and GitHub version control, ensuring clean collaboration and delivering a practical benchmark tool for analyzing CPU scheduling."
      ],
      tech: ["C++", "STL", "MySQL", "Git"]
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50 dark:bg-gray-900" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-800 dark:text-gray-100">
          Featured <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-500">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group flex flex-col justify-between bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 rounded-2xl">
                    <FolderGit2 className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-medium px-3 py-1 bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 rounded-full">
                    {project.date}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                
                <ul className="space-y-3 mb-8">
                  {project.description.map((item, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-semibold px-2.5 py-1 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded-lg">
                      {t}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-4 py-2 rounded-xl transition-colors w-full justify-center"
                >
                  <Github className="w-4 h-4" />
                  View Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
