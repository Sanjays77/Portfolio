import { Award, Trophy, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Introduction to Cloud Computing",
      issuer: "NPTEL",
      date: "January 2025 - March 2025",
      link: "#"
    },
    {
      title: "Mastering in C :Basic to Beyond",
      issuer: "CSE Pathsala",
      date: "February 2024 - March 2024",
      link: "#"
    },
    {
      title: "Internet of Things",
      issuer: "Infosys",
      date: "August 2023 - October 2023",
      link: "#"
    }
  ];

  const achievements = [
    {
      title: "Solved 200+ Questions in LeetCode platform",
      date: "Since August 2024",
      link: "#" // Replace with actual LeetCode profile link
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50 dark:bg-gray-900" id="certifications">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-800 dark:text-gray-100">
          Certifications & <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-500 to-amber-500">Achievements</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Certifications Block */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400 rounded-xl">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Certificates</h3>
            </div>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex-1">
                    <h4 className="font-bold text-lg text-gray-800 dark:text-gray-100 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{cert.issuer}</p>
                    <span className="inline-block mt-3 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full font-medium">
                      {cert.date}
                    </span>
                  </div>
                  <a 
                    href={cert.link} 
                    className="shrink-0 w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-700 flex items-center justify-center text-gray-400 hover:bg-yellow-50 hover:text-yellow-600 dark:hover:bg-gray-600 dark:hover:text-yellow-400 transition-colors"
                    aria-label={`View ${cert.title} Certificate`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Block */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 rounded-xl">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Achievements</h3>
            </div>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="group bg-linear-to-br from-white to-amber-50 dark:from-gray-800 dark:to-gray-800 p-6 rounded-2xl shadow-sm border border-amber-100 dark:border-gray-700 hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex-1">
                    <h4 className="font-bold text-lg text-gray-800 dark:text-gray-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {achievement.title}
                    </h4>
                    <span className="inline-block mt-3 px-3 py-1 bg-amber-100 dark:bg-gray-700 text-amber-800 dark:text-gray-300 text-xs rounded-full font-medium">
                      {achievement.date}
                    </span>
                  </div>
                  <a 
                    href={achievement.link} 
                    className="shrink-0 w-10 h-10 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center text-gray-400 hover:bg-amber-50 hover:text-amber-600 dark:hover:bg-gray-600 dark:hover:text-amber-400 transition-colors shadow-sm"
                    aria-label={`View ${achievement.title}`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
