import { User, Code, Heart, Coffee } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white inline-block relative">
            About Me
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full"></div>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Side: Photo */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="relative group perspective">
              {/* Decorative behind image */}
              <div className="absolute inset-0 bg-linear-to-tr from-indigo-600 to-purple-600 rounded-2xl transform rotate-6 scale-105 opacity-50 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-linear-to-bl from-pink-500 to-orange-400 rounded-2xl transform -rotate-3 scale-105 opacity-50 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"></div>
              
              {/* Image Container */}
              <div className="relative z-10 w-64 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl bg-gray-200 dark:bg-gray-800 transform transition-transform duration-500 group-hover:-translate-y-2">
                <img 
                  src={profileImg} 
                  alt="S Sanjay - Profile" 
                  className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-500"
                  onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=S+Sanjay&size=512&background=6366f1&color=fff&font-size=0.33'; }}
                />
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-3/5 space-y-6 text-lg text-gray-600 dark:text-gray-300">
            <p className="leading-relaxed">
              Hello! I'm <span className="font-semibold text-indigo-600 dark:text-indigo-400">S Sanjay</span>, a passionate Software Engineer and Full Stack Developer. I thrive on translating complex problems into intuitive, elegant, and highly functional digital experiences.
            </p>
            <p className="leading-relaxed">
              My journey in tech began with a deep curiosity about how things work on the web. Today, I build scalable applications using modern web technologies, always focusing on delivering clean code and exceptional user experiences. Whether it's crafting a pixel-perfect frontend or architecting a robust backend, I love every aspect of the development cycle.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 rounded-lg">
                  <Code size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Clean Code</h4>
                  <p className="text-sm">Maintainable & scalable</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 rounded-lg">
                  <User size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">User-Centric</h4>
                  <p className="text-sm">Focus on experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
