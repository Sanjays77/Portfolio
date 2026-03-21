import { Briefcase, ExternalLink } from 'lucide-react';

const Experience = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white dark:bg-gray-950" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-800 dark:text-gray-100">
          Summer <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-red-500">Training & Experience</span>
        </h2>
        
        <div className="relative border-l-4 border-orange-200 dark:border-orange-800 ml-4 md:ml-0 md:mx-auto md:w-1/2 md:border-l-0 md:border-t-4 pt-8 md:pt-0">
          {/* Vertical Timeline implementation for mobile, horizontal hint for md+ */}
          <div className="mb-10 ml-6 md:ml-0 relative group">
            {/* Timeline Dot */}
            <span className="absolute flex items-center justify-center w-8 h-8 bg-orange-100 rounded-full -left-10 ring-4 ring-white dark:ring-gray-950 dark:bg-orange-900 md:left-1/2 md:-translate-x-1/2 md:-top-13">
              <Briefcase className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            </span>
            
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all md:mt-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
                    Mastering Linux System Administration by RHCSA
                  </h3>
                  <a href="#" className="inline-flex items-center text-sm font-medium text-orange-500 hover:text-orange-600 mt-2">
                    <ExternalLink className="w-4 h-4 mr-1" /> View Certificate Link
                  </a>
                </div>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400 mt-2 md:mt-0 whitespace-nowrap bg-white dark:bg-gray-800 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700">
                  June 2025 - July 2025
                </time>
              </div>
              
              <ul className="space-y-3 mt-6">
                <li className="text-gray-600 dark:text-gray-300 text-base flex items-start">
                  <span className="text-orange-500 mr-3 mt-1.5">•</span>
                  <span><strong>Completed summer training</strong> (RHCSA Module) focused on <strong>Mastering Linux system administration</strong>, including users & permissions, process management, storage, and system services.</span>
                </li>
                <li className="text-gray-600 dark:text-gray-300 text-base flex items-start">
                  <span className="text-orange-500 mr-3 mt-1.5">•</span>
                  <span>Worked on hands-on real-world administration tasks, configuring networking, automating operations using Bash scripting, and troubleshooting Linux-based environments.</span>
                </li>
                <li className="text-gray-600 dark:text-gray-300 text-base flex items-start">
                  <span className="text-orange-500 mr-3 mt-1.5">•</span>
                  <span>Achieved an <strong>A grade</strong> and developed strong proficiency in system management, security hardening, package management (YUM/DNF), LVM configuration, and service monitoring.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
