import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationList = [
    {
      institution: "Lovely Professional University",
      location: "Punjab, India",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      score: "CGPA: 7.09",
      date: "Since August 2023",
      isActive: true
    },
    {
      institution: "Mother Theresa Memorial Central School",
      location: "Trivandrum, Kerala",
      degree: "Intermediate",
      score: "Percentage: 80%",
      date: "April 2021 - March 2023",
      isActive: false
    },
    {
      institution: "Mother Theresa Memorial Central School",
      location: "Trivandrum, Kerala",
      degree: "Matriculation",
      score: "Percentage: 90%",
      date: "April 2010 - March 2021",
      isActive: false
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white dark:bg-gray-950" id="education">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-800 dark:text-gray-100">
          Educational <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-teal-500">Journey</span>
        </h2>
        
        <div className="space-y-8">
          {educationList.map((edu, index) => (
            <div 
              key={index} 
              className={`relative bg-white dark:bg-gray-900 border ${edu.isActive ? 'border-emerald-300 dark:border-emerald-700/50 shadow-md ring-1 ring-emerald-50 dark:ring-emerald-900' : 'border-gray-100 dark:border-gray-800 shadow-sm'} rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start hover:shadow-lg transition-all duration-300 group`}
            >
              <div className={`p-4 rounded-2xl shrink-0 ${edu.isActive ? 'bg-linear-to-br from-emerald-100 to-teal-100 text-emerald-600 dark:from-emerald-900/40 dark:to-teal-900/40 dark:text-emerald-400' : 'bg-gray-50 text-gray-400 dark:bg-gray-800 dark:text-gray-500 group-hover:bg-gray-100 group-hover:text-emerald-500 transition-colors'}`}>
                <GraduationCap className="w-8 h-8" />
              </div>
              
              <div className="flex-1 w-full">
                <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start mb-2 gap-2">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
                    {edu.institution}
                  </h3>
                  <div className="flex items-center gap-1 text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 px-3 py-1 rounded-full w-fit">
                    <Calendar className="w-4 h-4" />
                    {edu.date}
                  </div>
                </div>
                
                <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm mb-4">
                  <MapPin className="w-4 h-4" />
                  {edu.location}
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl gap-4">
                  <span className="font-semibold text-gray-700 dark:text-gray-200">
                    {edu.degree}
                  </span>
                  <span className={`px-4 py-1.5 rounded-full text-sm font-bold whitespace-nowrap ${edu.isActive ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'}`}>
                    {edu.score}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
