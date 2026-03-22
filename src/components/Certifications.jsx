import React from 'react';
import { Award, Trophy, ExternalLink } from 'lucide-react';

import automataInfosys from '../assets/certificates/Automata Infosys.pdf';
import cNeo from '../assets/certificates/C NeoColab certificate.pdf';
import cppNeo from '../assets/certificates/C++ Neocolab certificate.pdf';
import csePathsala from '../assets/certificates/CSE Pathsala certificate.png';
import chatgptPrompt from '../assets/certificates/ChatGPT Generative AI Prompt Engineering for Business.pdf';
import nptelCloud from '../assets/certificates/Cloud Computing nptel certificate.pdf';
import courseraNet from '../assets/certificates/Coursera 306 Fundamentals of network.pdf';
import courseraTcp from '../assets/certificates/Coursera 306 TCP.pdf';
import courseraDigital from '../assets/certificates/Coursera211 DIGITAL SYSTEM.pdf';
import iotInfosys from '../assets/certificates/IoT infosys certificate.pdf';
import javaNeo from '../assets/certificates/Java Neocolab certificate.pdf';
import udemyMasterGenAi from '../assets/certificates/Master generative AI Udemy.pdf';

const CertificateThumbnail = ({ file }) => {
  if (file && (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg'))) {
    return (
      <div className="w-[180px] h-[120px] flex items-center justify-center bg-white rounded-md shadow-md p-1">
        <img src={file} alt="Certificate shadow" className="max-w-full max-h-full object-contain rounded-sm" />
      </div>
    );
  }

  return (
    <div className="w-[180px] h-[120px] bg-white rounded-md shadow-md relative flex flex-col items-center justify-center p-2 border-[4px] border-double border-gray-100">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-orange-500 to-red-600 rounded-t-sm"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-orange-500 to-red-600 rounded-b-sm"></div>

      <Award className="w-6 h-6 text-[#a855f7] mb-1 drop-shadow-sm" />

      <div className="text-[7px] font-black text-gray-800 tracking-[0.1em] mb-0.5">CERTIFICATE</div>
      <div className="text-[5px] text-gray-500 font-medium tracking-wide mb-1.5">OF COMPLETION</div>

      <div className="w-16 h-[0.5px] bg-gray-300 mb-1.5"></div>

      <div className="text-[5px] text-gray-800 text-center leading-relaxed">
        This certifies that<br />
        <span className="font-serif italic text-[8px] text-black font-bold">S. Sanjay</span>
      </div>

      <div className="w-4 h-4 rounded-full bg-red-600/10 absolute bottom-2 right-2 flex items-center justify-center border border-red-600/20">
        <div className="w-2 h-2 rounded-full bg-red-600"></div>
      </div>

      <div className="absolute top-2 left-2 flex gap-1">
        <div className="w-1.5 h-1.5 bg-blue-600 rounded-sm"></div>
        <div className="w-1.5 h-1.5 bg-orange-600 rounded-sm"></div>
      </div>
    </div>
  );
};

const Certifications = () => {
  const certificates = [
    {
      title: "Computer Programming",
      issuer: "iamNEO",
      date: "16 May 2023",
      badges: ["Programming", "C Language"],
      file: cNeo
    },
    {
      title: "Object Oriented Programming",
      issuer: "iamNEO",
      date: "5 DEC 2024",
      badges: ["Programming", "C++ Language"],
      file: cppNeo
    },
    {
      title: "Data Structures and Algorithms",
      issuer: "iamNEO",
      date: "5 DEC 2024",
      badges: ["Programming", "CPP & Java Language"],
      file: javaNeo
    },
    {
      title: "Introduction to Cloud Computing",
      issuer: "NPTEL",
      date: "March 2025",
      badges: ["Cloud", "AWS/GCP"],
      file: nptelCloud
    },
    {
      title: "Mastering in C :Basic to Beyond",
      issuer: "CSE Pathsala",
      date: "March 2024",
      badges: ["C Language", "Programming"],
      file: csePathsala
    },
    {
      title: "Internet of Things",
      issuer: "Infosys",
      date: "October 2023",
      badges: ["IoT", "Hardware"],
      file: iotInfosys
    },
    {
      title: "Automata",
      issuer: "Infosys",
      date: "2023",
      badges: ["Automata", "Theory"],
      file: automataInfosys
    },
    {
      title: "ChatGPT Prompt Engineering",
      issuer: "Coursera",
      date: "2024",
      badges: ["Generative AI", "Prompting"],
      file: chatgptPrompt
    },
    {
      title: "Master Generative AI",
      issuer: "Udemy",
      date: "2024",
      badges: ["AI", "Advanced"],
      file: udemyMasterGenAi
    },
    {
      title: "Fundamentals of Network",
      issuer: "Coursera",
      date: "2024",
      badges: ["Networking", "Basics"],
      file: courseraNet
    },
    {
      title: "TCP/IP Networks",
      issuer: "Coursera",
      date: "2024",
      badges: ["Networking", "TCP/IP"],
      file: courseraTcp
    },
    {
      title: "Digital Systems",
      issuer: "Coursera",
      date: "2024",
      badges: ["Hardware", "Digital Logic"],
      file: courseraDigital
    }
  ];

  const achievements = [
    {
      title: "Solved 400+ Questions in LeetCode platform",
      date: "Since August 2024",
      link: "#" // Replace with actual LeetCode profile link
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-[#0b0c10] border-t border-[#233554]/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Certificates Label - Top Left */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#a855f7]"></div>
          <span className="text-[#a855f7] font-mono text-xs tracking-[0.2em] uppercase border border-[#a855f7]/30 bg-[#a855f7]/10 px-4 py-1.5 rounded-full">
            Certificates
          </span>
          <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#a855f7]"></div>
        </div>

        {/* Certificates Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#ccd6f6] tracking-tight leading-tight mb-16">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#d8b4fe]">Certificates</span>
        </h2>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-24">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-[#191d28] rounded-xl border border-[#233554]/50 hover:border-[#a855f7]/50 transition-all duration-300 shadow-xl overflow-hidden flex flex-col items-center p-6 relative group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#a855f7]/0 via-[#a855f7] to-[#a855f7]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Thumbnail */}
              <div className="mb-6 transform group-hover:-translate-y-1 transition-transform duration-300">
                <CertificateThumbnail file={cert.file} />
              </div>

              {/* Details */}
              <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500 text-center leading-snug mb-2 min-h-[56px] flex items-center justify-center">
                {cert.title}
              </h3>

              <p className="text-[#8892b0] text-sm mb-1 text-center">{cert.issuer}</p>
              <p className="text-[#556285] text-xs mb-5 text-center">Issued: {cert.date}</p>

              {/* Badges container */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-6 mt-auto">
                {cert.badges.map((badge, bIdx) => (
                  <span key={bIdx} className="bg-[#2d2f48] text-purple-300 border border-[#a855f7]/10 text-[10px] font-mono px-3 py-1 rounded-full">
                    {badge}
                  </span>
                ))}
              </div>

              {/* Button */}
              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-[#3b3d54] text-white py-2.5 rounded-md text-sm font-medium hover:bg-[#4a4c66] transition-colors duration-300 shadow-sm"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>

        {/* Achievements Label - Top Left (For distinction, keeping About's violet or Yellow) */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#eab308]"></div>
          <span className="text-[#eab308] font-mono text-xs tracking-[0.2em] uppercase border border-[#eab308]/30 bg-[#eab308]/10 px-4 py-1.5 rounded-full">
            Achievements
          </span>
          <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#eab308]"></div>
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-[#ccd6f6] tracking-tight leading-tight mb-12">
          Milestones & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eab308] to-[#fef08a]">Recognitions</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group bg-[#112240] p-6 rounded-2xl border border-[#233554] hover:border-[#eab308]/50 transition-all duration-300 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#eab308] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#eab308]/10 text-[#eab308] rounded-xl shrink-0">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-lg text-[#ccd6f6] group-hover:text-white transition-colors">
                    {achievement.title}
                  </h4>
                </div>
                <span className="inline-block mt-2 font-mono text-[#facc15] bg-[#eab308]/10 border border-[#eab308]/20 px-3 py-1 rounded-full text-xs">
                  {achievement.date}
                </span>
              </div>
              <a
                href={achievement.link}
                className="shrink-0 w-10 h-10 rounded-full border border-[#233554] bg-[#0b0c10] flex items-center justify-center text-[#8892b0] group-hover:bg-[#eab308] group-hover:text-white transition-colors z-10"
                aria-label={`View ${achievement.title}`}
              >
                <Award className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
