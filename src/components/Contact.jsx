import { useState } from 'react';
import { Github, Linkedin, Mail, Phone, Send, MapPin, CheckCircle, XCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/sanjay28912005@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            _subject: `New Portfolio Message: ${formData.subject || 'Contact'} from ${formData.name}`,
            _template: "table"
        })
      });
      
      const data = await response.json();
      
      if (data.success === "true" || data.success === true) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0b0c10] border-t border-[#233554]/50 relative overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#a855f7]/10 rounded-full blur-[128px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#818cf8]/10 rounded-full blur-[128px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#a855f7]"></div>
          <span className="text-[#a855f7] font-mono text-xs tracking-[0.2em] uppercase border border-[#a855f7]/30 bg-[#a855f7]/10 px-4 py-1.5 rounded-full">
            Contact
          </span>
          <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#a855f7]"></div>
        </div>

        {/* Heading */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-[#ccd6f6] tracking-tight leading-tight mb-6">
            Let's build something <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] via-[#d8b4fe] to-[#818cf8]">extraordinary.</span>
          </h2>
          <p className="text-[#8892b0] text-lg md:text-xl max-w-2xl leading-relaxed">
            Whether you have a groundbreaking idea, a question, or just want to say hi, my inbox is always open. Let's start the conversation!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 xl:gap-20 items-stretch">
          
          {/* Left Side: Contact Info & Socials */}
          <div className="lg:w-2/5 flex flex-col justify-between space-y-12">
            
            {/* Contact Details Grid */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#ccd6f6] mb-8 relative inline-block">
                Get in Touch
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-[#a855f7] to-transparent rounded-full"></span>
              </h3>
              
              <a href="mailto:sanjay28912005@gmail.com" className="group flex items-start gap-5 p-5 rounded-2xl bg-[#13141c] border border-[#233554] hover:border-[#a855f7]/50 hover:bg-[#112240]/80 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#a855f7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-14 h-14 rounded-xl bg-[#0b0c10] border border-[#233554] flex items-center justify-center text-[#a855f7] group-hover:scale-110 group-hover:bg-[#a855f7] group-hover:text-white transition-all duration-300 shadow-lg shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex flex-col justify-center h-14">
                  <span className="text-[#8892b0] text-sm font-medium mb-0.5">Email directly</span>
                  <span className="text-[#ccd6f6] font-semibold group-hover:text-[#d8b4fe] transition-colors break-all text-sm sm:text-base">sanjay28912005@gmail.com</span>
                </div>
              </a>

              <a href="tel:+919074472015" className="group flex items-start gap-5 p-5 rounded-2xl bg-[#13141c] border border-[#233554] hover:border-[#a855f7]/50 hover:bg-[#112240]/80 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#a855f7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-14 h-14 rounded-xl bg-[#0b0c10] border border-[#233554] flex items-center justify-center text-[#a855f7] group-hover:scale-110 group-hover:bg-[#a855f7] group-hover:text-white transition-all duration-300 shadow-lg shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex flex-col justify-center h-14">
                  <span className="text-[#8892b0] text-sm font-medium mb-0.5">Call me</span>
                  <span className="text-[#ccd6f6] font-semibold group-hover:text-[#d8b4fe] transition-colors">+91 9074472015</span>
                </div>
              </a>
              
              <div className="group flex items-start gap-5 p-5 rounded-2xl bg-[#13141c] border border-[#233554] hover:border-[#a855f7]/50 hover:bg-[#112240]/80 transition-all duration-300 relative overflow-hidden cursor-default">
                <div className="absolute inset-0 bg-gradient-to-r from-[#a855f7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-14 h-14 rounded-xl bg-[#0b0c10] border border-[#233554] flex items-center justify-center text-[#a855f7] group-hover:scale-110 group-hover:bg-[#a855f7] group-hover:text-white transition-all duration-300 shadow-lg shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex flex-col justify-center h-14">
                  <span className="text-[#8892b0] text-sm font-medium mb-0.5">Location</span>
                  <span className="text-[#ccd6f6] font-semibold">Trivandrum, Kerala, India</span>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="pt-4">
              <h3 className="text-[#8892b0] text-sm font-mono tracking-wider uppercase mb-6 flex items-center gap-4">
                Social Profiles <span className="h-[1px] flex-1 bg-[#233554]"></span>
              </h3>
              <div className="flex gap-5">
                <a href="https://github.com/Sanjays77" target="_blank" rel="noopener noreferrer" className="group w-14 h-14 rounded-xl bg-[#13141c] border border-[#233554] flex items-center justify-center text-[#ccd6f6] hover:bg-[#233554] hover:text-white hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#233554]/50">
                  <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="group w-14 h-14 rounded-xl bg-[#13141c] border border-[#233554] flex items-center justify-center text-[#ccd6f6] hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#0077b5]/30">
                  <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
            
          </div>

          {/* Right Side: Form (Matching the attached image) */}
          <div className="lg:w-3/5 bg-[#13141c] p-8 md:p-10 rounded-[2rem] border border-[#233554] shadow-2xl relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-[#a855f7]/5 to-transparent rounded-[2rem] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <form className="relative z-10 flex flex-col gap-6" onSubmit={handleSubmit}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2.5">
                  <label htmlFor="name" className="text-[#8892b0] text-[15px] font-semibold tracking-wide">
                    Full Designation <span className="text-[#a855f7]">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-[#1a1b26] border border-[#233554] text-[#ccd6f6] placeholder-[#556285] rounded-xl px-5 py-4 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all font-medium text-lg"
                    required
                  />
                </div>
                
                <div className="flex flex-col space-y-2.5">
                  <label htmlFor="email" className="text-[#8892b0] text-[15px] font-semibold tracking-wide">
                    Electronic Mail <span className="text-[#a855f7]">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="jane@company.io"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-[#1a1b26] border border-[#233554] text-[#ccd6f6] placeholder-[#556285] rounded-xl px-5 py-4 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all font-medium text-lg"
                    required
                  />
                </div>
              </div>
              
              <div className="flex flex-col space-y-2.5">
                <label htmlFor="subject" className="text-[#8892b0] text-[15px] font-semibold tracking-wide">
                  Subject of Discourse <span className="text-[#a855f7]">*</span>
                </label>
                <div className="relative">
                  <select 
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full bg-[#1a1b26] border border-[#233554] text-[#ccd6f6] rounded-xl px-5 py-4 appearance-none focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all font-medium text-lg cursor-pointer"
                    required
                  >
                    <option value="" disabled className="text-[#556285]">Select a subject...</option>
                    <option value="freelance">Freelance Project</option>
                    <option value="job">Job Opportunity</option>
                    <option value="networking">Networking / Connection</option>
                    <option value="other">Other Inquiries</option>
                  </select>
                  {/* Custom dropdown arrow */}
                  <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.5L7 7.5L13 1.5" stroke="#ccd6f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col space-y-2.5">
                <label htmlFor="message" className="text-[#8892b0] text-[15px] font-semibold tracking-wide">
                  Communiqué <span className="text-[#a855f7]">*</span>
                </label>
                <textarea 
                  id="message" 
                  rows="5"
                  placeholder="Describe your proposition, vision, or context..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-[#1a1b26] border border-[#233554] text-[#ccd6f6] placeholder-[#556285] rounded-xl px-5 py-4 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all resize-none font-medium text-lg"
                  required
                ></textarea>
              </div>

              <div className="pt-4 mt-auto">
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className={`w-full font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 hover:shadow-[0_10px_40px_-15px_rgba(168,85,247,0.7)] active:translate-y-0 text-lg ${
                    status === 'success' ? 'bg-emerald-500 hover:bg-emerald-600 text-white' : 
                    status === 'error' ? 'bg-red-500 hover:bg-red-600 text-white' : 
                    'bg-[#a855f7] hover:bg-[#b06cf7] text-white'
                  } ${status === 'submitting' ? 'opacity-70 cursor-not-allowed hover:transform-none' : ''}`}
                >
                  <span>
                    {status === 'submitting' ? 'Dispatching...' : 
                     status === 'success' ? 'Dispatched Successfully!' : 
                     status === 'error' ? 'Failed to Dispatch' : 'Dispatch Communiqué'}
                  </span>
                  {status === 'success' ? <CheckCircle className="w-5 h-5" /> : 
                   status === 'error' ? <XCircle className="w-5 h-5" /> : 
                   <Send className={`w-5 h-5 ${status === 'submitting' ? 'animate-pulse text-[#d8b4fe]' : ''}`} />}
                </button>
              </div>
              
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
