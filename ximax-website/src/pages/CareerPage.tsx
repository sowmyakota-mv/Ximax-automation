import React from 'react';
import {
  FaCheckCircle,
  FaHeadset,
  FaLaptop,
  FaRocket,
  FaTools,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CareerPage: React.FC = () => {
    const navigate=useNavigate()

  // Job Openings
  const jobOpenings = [
  {
    icon: <FaHeadset className="text-3xl text-[#38B2FF]" />,
    title: "Customer Relations Representative",
    description: "Manage and grow client relationships across Southern California through weekly consultations and account reviews. You’ll receive 90 days of hands-on corporate training to master our technology and processes. This role focuses on optimizing client satisfaction while identifying opportunities to implement new FloorEdge products and services."
  },
  {
    icon: <FaLaptop className="text-3xl text-[#7ED4FF]" />,
    title: "IT Analyst",
    description: "Monitor and maintain client IT infrastructure from our operations center to ensure peak network performance. You will collaborate with third-party providers and field technicians to troubleshoot issues and meet agreed-upon service parameters. Occasional on-site client visits are required to resolve complex technical challenges."
  },
  {
    icon: <FaTools className="text-3xl text-[#38B2FF]" />,
    title: "Technician",
    description: "Provide expert hardware repair and support for servers, routers, switches, and document output devices. Working closely with our IT analysts, you will ensure maximum uptime and system efficiency for our clients. This is a dedicated, client-facing role that requires strong technical skills and a focus on service excellence."
  }
];
  // Training Events
  const trainingEvents = [
    "IT infrastructure training",
    "Network administration training",
    "System administration training",
    "Technology trends events",
    "Technology updates events"
  ];

  // Function to handle solution click
//   const handleSolutionClick = (path: string) => {
//     navigate(path);
//   };

  return (
    <div id='career' className="min-h-screen bg-gray-50">
      {/* Hero Section with Skyblue Theme Background */}
      <section 
        className="pt-48 py-5 relative overflow-hidden min-h-[300px] md:min-h-[500px] flex items-start"
        // style={{
        //   background: 'linear-gradient(135deg, #38B2FF 0%, #7ED4FF 50%, #B0E6FF 100%)'
        // }}
      >
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/career.png" 
            alt="Ximax Automation Background" 
            className="w-full h-full md:object-cover object-top opacity-"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-600/80 to-sky-500/80 mix-blend-multiply"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">        
  <div className="text-center">
            <div className="inline-flex items-center justify-center mb-3">
              <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-white">
                Career @ Ximax
              </h1>
            </div>
            
            <p className="text-xs md:text-base text-white/90 max-w-3xl mx-auto mb-12">
              Ximax is looking for skilled IT professionals who are customer focused and dedicated helping solve the IT requirements of the clients we serve. All of our representatives should have reliable transportation and effective interactive skills. We are also looking for individuals who possess a can-do spirit and positive attitude.
            </p>
          </div>
</div>
      </section>

      {/* Main Content Section */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-10">
          {/* Career Overview */}
          <div className="max-w-6xl mx-auto ">
            <div className="text-center mb-5">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Join Our <span className="text-[#38B2FF]">Team</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#38B2FF] to-[#7ED4FF] mx-auto mb-6"></div>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed max-w-4xl mx-auto">
                <span className="font-semibold text-[#38B2FF]">Ximax</span> is looking for skilled IT professionals who are customer focused and dedicated helping solve the IT requirements of the clients we serve. All of our representatives should have reliable transportation and effective interactive skills. We are also looking for individuals who possess a can-do spirit and positive attitude.
              </p>
            </div>
          </div>

          {/* Job Openings Grid */}
          <div className="max-w-7xl mx-auto py-5">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center mt-10">
              Current <span className="text-[#38B2FF]">Openings</span>
            </h3>
            <p className="text-xs md:text-sm text-gray-600 text-center max-w-3xl mx-auto">
              Join our team of dedicated IT professionals
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-5">
              {jobOpenings.map((job, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#7ED4FF] shadow-lg hover:shadow-2xl transition-all duration-500 group h-full flex flex-col"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#38B2FF]/10 to-[#7ED4FF]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {job.icon}
                  </div>
                  <h4 className="text-med md:text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#38B2FF] transition-colors duration-300">
                    {job.title}
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed flex-1">
                    {job.description}
                  </p>
                  <div className="mt-6">
                    <button onClick={()=>navigate("/contact-us")} className="w-full bg-gradient-to-r from-[#38B2FF] to-[#7ED4FF] hover:from-[#2A8ECC] hover:to-[#5FB4E0] text-white font-semibold px-4 py-2 rounded-lg text-xs md:text-sm transition-all duration-300 hover:shadow-lg">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* IT Training Courses And Events Section */}
          <div className="max-w-7xl mx-auto py-5">
            <div 
              className="relative rounded-3xl overflow-hidden shadow-2xl mt-10"
              style={{
                background: 'linear-gradient(135deg, #38B2FF 0%, #7ED4FF 50%, #B0E6FF 100%)'
              }}
            >
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 p-8 md:p-12 lg:p-16">
                <div className="max-w-4xl mx-auto text-center">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                    IT Training Courses And Events
                  </h3>
                  <p className="text-xs md:text-sm text-white/95 mb-8 leading-relaxed">
                    We periodically conduct IT infrastructure, network and system administration training.
                  </p>
                  <p className="text-xs md:text-sm text-white/95 mb-8 leading-relaxed">
                    We also organise events to share technology trends and updates.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {trainingEvents.map((event, index) => (
                      <span key={index} className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold text-xs md:text-sm">
                        {event}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Why Join Us Section */}
          <div className="max-w-7xl mx-auto py-5">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
                Why <span className="text-[#38B2FF]">Join</span> Ximax?
              </h3>
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <FaCheckCircle className="text-[#7ED4FF] text-lg mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-xs md:text-sm">Customer-focused environment</span>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-[#7ED4FF] text-lg mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-xs md:text-sm">Dedicated to solving IT requirements</span>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-[#7ED4FF] text-lg mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-xs md:text-sm">Daily training and development</span>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-[#7ED4FF] text-lg mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-xs md:text-sm">Can-do spirit and positive attitude</span>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-[#7ED4FF] text-lg mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-xs md:text-sm">Opportunity to work with latest technologies</span>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-[#7ED4FF] text-lg mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-xs md:text-sm">Professional growth and career advancement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
            <section 
        className="py-5 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0A6B7E 0%, #075985 50%, #0C4A6E 100%)'
        }}
      >
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/caltoaction2.png" 
            alt="Technology Partnership Background" 
            className="w-full h-full object-cover object-top opacity-90"
          />
          {/* Optional: Add a gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-blue-800/60 mix-blend-multiply"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 mt-40 mb-12">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">
              Ready to Join Our Team?
          </h2>
          <p className="text-white/90 text-xs md:text-sm mb-6 max-w-2xl mx-auto">
            Send us your resume and cover letter to start your career journey with Ximax
          </p>
            <button onClick={()=>navigate("/contact-us")} className="inline-flex items-center gap-2 bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg">
              Submit Application
              <FaRocket className="text-blue-600" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;