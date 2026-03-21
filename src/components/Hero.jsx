import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-[80vh] flex flex-col justify-center items-center text-center p-8 bg-linear-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="z-10 flex flex-col items-center space-y-6 max-w-3xl glass-container p-10 rounded-3xl backdrop-blur-sm bg-white/40 dark:bg-gray-900/40 border border-white/50 dark:border-gray-700/50 shadow-xl">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-4 animate-fade-in-up">
          S Sanjay
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium animate-fade-in-up animation-delay-300">
          Software Engineer & Full Stack Developer
        </p>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4 animate-fade-in-up animation-delay-500">
          Passionate about building scalable applications, solving complex problems, and continuously learning new technologies.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8 animate-fade-in-up animation-delay-700">
          <a href="https://linkedin.com/in/sanjay-s77" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all hover:scale-105 shadow-md">
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/Sanjays77" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-all hover:scale-105 shadow-md dark:bg-gray-700 dark:hover:bg-gray-600">
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a href="mailto:sanjay28912005@gmail.com" className="flex items-center gap-2 px-5 py-2.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all hover:scale-105 shadow-md">
            <Mail size={20} />
            <span>Email</span>
          </a>
          <a href="tel:+919074472015" className="flex items-center gap-2 px-5 py-2.5 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all hover:scale-105 shadow-md">
            <Phone size={20} />
            <span>Mobile</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
