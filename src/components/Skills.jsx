import { Code2, Wrench, Layers, Users } from 'lucide-react';

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
      skills: ["HTML & CSS", "NodeJS", "React", "Express"],
      color: "purple"
    },
    {
      title: "Tools/Platforms",
      icon: <Wrench className="w-8 h-8 text-orange-500 mb-4" />,
      skills: ["MySQL", "MongoDB", "Git", "GitHub", "Postman"],
      color: "orange"
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-8 h-8 text-green-500 mb-4" />,
      skills: ["Problem Solving", "Team Player", "Leadership", "Adaptability", "Multitasking"],
      color: "green"
    }
  ];

  const getColorClasses = (color) => {
    const classes = {
      blue: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800/50",
      purple: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800/50",
      orange: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 border-orange-200 dark:border-orange-800/50",
      green: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800/50"
    };
    return classes[color] || classes.blue;
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white dark:bg-gray-950" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-800 dark:text-gray-100">
          Professional <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-500">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">{category.title}</h3>
                <div className="flex flex-wrap justify-center gap-2">
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
      </div>
    </section>
  );
};

export default Skills;
