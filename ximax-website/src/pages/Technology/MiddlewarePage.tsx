import { Server } from 'lucide-react';
import {
  FaCheckCircle,
  FaDatabase,
  FaCode,
  FaGlobe,
  FaJava,
  FaMicrosoft,
  FaRocket,
  FaServer,
  FaMicrochip
} from 'react-icons/fa';
import {  
  SiOracle,
} from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

const MiddlewarePage: React.FC = () => {
  const navigate = useNavigate();

  // Technology Portfolio Data
const technologyPortfolio = [
  {
    icon: <FaMicrosoft className="text-2xl text-[#38B2FF]" />,
    title: "Microsoft .NET",
    description: "Full-stack development using Microsoft's .NET ecosystem for building robust, scalable enterprise applications and web solutions",
    path: "/microsoft-dotnet"
  },
  {
    icon: <FaJava className="text-2xl text-[#7ED4FF]" />,
    title: "Java/J2EE",
    description: "Enterprise-grade Java development with J2EE, Spring Boot, Hibernate, and microservices architecture for mission-critical applications",
    path: "/java-j2ee"
  },
  {
    icon: <FaGlobe className="text-2xl text-[#38B2FF]" />,
    title: "Enterprise Web Services",
    description: "Comprehensive web services including RESTful APIs, SOAP services, API gateway implementations, and seamless system integration",
    path: "/enterprise-web-services"
  },
//   {
//     icon: <FaNetworkWired className="text-2xl text-[#7ED4FF]" />,
//     title: "Middleware",
//     description: "Advanced integration solutions using IBM WebSphere, Oracle Fusion, and messaging platforms for robust enterprise communication",
//     path: "/technology/middleware"
//   },
  {
    icon: <FaDatabase className="text-2xl text-[#38B2FF]" />,
    title: "Oracle",
    description: "End-to-end Oracle solutions including database management, PL/SQL development, optimization, and enterprise application integration",
    path: "/oracle"
  },
  {
    icon: <FaServer className="text-2xl text-[#7ED4FF]" />,
    title: "SAP",
    description: "Comprehensive SAP implementation, customization, and integration services including SAP, SAP Fiori, and SAP Business Suite for enterprise resource planning",
    path: "/sap"
  },
  {
    icon: <FaMicrochip className="text-2xl text-[#38B2FF]" />,
    title: "VLSI",
    description: "Advanced VLSI design and verification services including ASIC design, FPGA implementation, RTL coding, and semiconductor solutions for hardware development",
    path: "/vlsi"
  }
];
  // Middleware Services
  const middlewareServices = [
    "Enterprise Application Integration configuration and implementation",
    "B2B solutions development and deployment",
    "webMethods Integration Server and Developer",
    "TIBCO ActiveMatrix and Service Bus implementation",
    "JCAPS and MQ Series integration",
    "Oracle Fusion middleware solutions",
    "Process Engine and Task Engine configuration"
  ];

  // WebMethods Components
  const webmethodsComponents = [
    "webMethods Integration Server",
    "WebMethods Developer",
    "webMethods Trading Networks",
    "webMethods Broker",
    "webMethods Monitor",
    "webMethods Designer",
    "Process Engine",
    "Task Engine",
    "Fair Issac's Blaze Advisor",
    "Metadata Library",
    "webMethods Optimize for Infrastructure",
    "webMethods Optimize for Process",
    "webMethods Optimize for B2B",
    "webMethods Optimize for SAP",
    "CentraSite Governance Edition",
    "webMethods X-Broker",
    "mywebMethods",
    "webMethods Installer"
  ];

  // TIBCO Tools
  const tibcoTools = [
    {
      icon: <Server className="text-3xl text-[#38B2FF]" />,
      title: "TIBCO ActiveMatrix"
    },
    {
      icon: <Server className="text-3xl text-[#7ED4FF]" />,
      title: "TIBCO ActiveMatrix Service Bus"
    },
    {
      icon: <Server className="text-3xl text-[#38B2FF]" />,
      title: "TIBCO ActiveMatrix Service Grid"
    },
    {
      icon: <Server className="text-3xl text-[#7ED4FF]" />,
      title: "TIBCO Business Studio"
    },
    {
      icon: <Server className="text-3xl text-[#38B2FF]" />,
      title: "TIBCO General Interface"
    },
    {
      icon: <Server className="text-3xl text-[#7ED4FF]" />,
      title: "TIBCO PageBus"
    },
    {
      icon: <FaCode className="text-3xl text-[#38B2FF]" />,
      title: "gXML Open Source"
    }
  ];

  // Middleware Platforms
  const middlewarePlatforms = [
    {
      icon: <Server className="text-3xl text-[#38B2FF]" />,
      title: "webMethods"
    },
    {
      icon: <Server className="text-3xl text-[#7ED4FF]" />,
      title: "TIBCO"
    },
    {
      icon: <Server className="text-3xl text-[#38B2FF]" />,
      title: "JCAPS / MQ Series"
    },
    {
      icon: <SiOracle className="text-3xl text-[#7ED4FF]" />,
      title: "Oracle Fusion"
    }
  ];

  // Why Ximax Points
  const whyXimaxPoints = [
    "Experienced, certified, and inexpensive consultants",
    "Build applications on schedule and within budget",
    "No compromise on quality",
    "Extensive experience in Enterprise Application Integration",
    "Proven expertise in webMethods and TIBCO components"
  ];

  // Function to handle solution click
  const handleSolutionClick = (path: string) => {
    navigate(path);
  };

  return (
    <div id='middleware' className="min-h-screen bg-gray-50 -mt-8">
      {/* Hero Section with Skyblue Theme Background */}
      <section 
        className="pt-52 py-5 relative overflow-hidden min-h-[300px] md:min-h-[500px] flex items-start"
        // style={{
        //   background: 'linear-gradient(135deg, #38B2FF 0%, #7ED4FF 50%, #B0E6FF 100%)'
        // }}
      >
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/technology5.png" 
            alt="Ximax Automation Background" 
            className="w-full h-full md:object-cover opacity-"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-sky-600/80 to-sky-500/80 mix-blend-multiply"></div> */}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-end">
  <div className="w-full lg:w-[30%] text-center">
    <div className="inline-flex items-center justify-center mb-3">
      <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold text-white">
        Middleware
      </h1>
    </div>
    
    <p className="text-xs md:text-sm text-white/90 text-center max-w-xl mx-auto mb-12">
      FloorEdge has extensive experience in configuration, design, development, and implementation of Enterprise Application Integration and B2B solutions using webMethods, TIBCO, JCAPS, MQ Series, and Oracle Fusion.
             </p>
  </div>
</div>
        </div>
      </section>
    
      {/* Main Content Section */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-10">
          {/* Middleware Overview */}
          <div className="max-w-6xl mx-auto ">
            <div className="text-center mb-5">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Middleware <span className="text-[#38B2FF]">Solutions</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#38B2FF] to-[#7ED4FF] mx-auto mb-6"></div>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed max-w-4xl mx-auto">
                <span className="font-semibold text-[#38B2FF]">Ximax</span> delivers comprehensive middleware solutions that help enterprises integrate applications and streamline B2B processes. Our experienced, certified, and inexpensive consultants can help you build applications on schedule, within the budget, and without compromising the quality.
              </p>
            </div>
          </div>

          {/* Services Grid - Middleware Services */}
          <div className="max-w-7xl mx-auto ">
            <div className="bg-gradient-to-br from-[#38B2FF]/5 to-[#7ED4FF]/5 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
                Our <span className="text-[#38B2FF]">Middleware Services</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {middlewareServices.map((service, index) => (
                  <div 
                    key={index} 
                    className="flex items-start bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#7ED4FF] hover:scale-105"
                  >
                    <FaCheckCircle className="text-[#7ED4FF] text-xl mt-1 mr-4 flex-shrink-0" />
                    <span className="text-gray-800 text-xs md:text-sm font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Middleware Platforms Section */}
          <div className="max-w-7xl mx-auto py-5 ">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center mt-10">
              Middleware <span className="text-[#38B2FF]">Platforms</span>
            </h3>
            <p className="text-xs md:text-sm text-gray-600 text-center max-w-3xl mx-auto">
              Our team has proven expertise in leading middleware platforms
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-5">
              {middlewarePlatforms.map((platform, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#38B2FF] shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-[#38B2FF]/10 transition-colors duration-300">
                      {platform.icon}
                    </div>
                    <span className="text-xs md:text-sm font-semibold text-gray-800 group-hover:text-[#38B2FF] transition-colors duration-300">
                      {platform.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WebMethods Section */}
          <div className="max-w-7xl mx-auto py-5">
            <div 
              className="relative rounded-3xl overflow-hidden shadow-2xl mt-10"
              style={{
                background: 'linear-gradient(135deg, #38B2FF 0%, #7ED4FF 50%, #B0E6FF 100%)'
              }}
            >
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 p-8 md:p-12 lg:p-16">
                <div className="max-w-6xl mx-auto text-center">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                    webMethods Components
                  </h3>
                  <p className="text-xs md:text-sm text-white/95 mb-8 leading-relaxed">
                    FloorEdge has proven expertise in the following webMethods components
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {webmethodsComponents.map((component, index) => (
                      <div key={index} className="flex items-start bg-white/10 backdrop-blur-sm rounded-lg p-3">
                        <FaCheckCircle className="text-white text-lg mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-white text-xs md:text-sm text-left">{component}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* TIBCO Tools Section */}
          <div className="bg-gradient-to-br from-[#38B2FF]/5 to-[#7ED4FF]/5 max-w-7xl mx-auto py-5">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center mt-10">
              TIBCO <span className="text-[#7ED4FF]">Tools</span>
            </h3>
            <p className="text-xs md:text-sm text-gray-600 text-center max-w-3xl mx-auto mb-8">
              FloorEdge has extensive experience in providing services on these TIBCO Tools
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
              {tibcoTools.map((tool, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#7ED4FF] shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-[#7ED4FF]/10 transition-colors duration-300">
                      {tool.icon}
                    </div>
                    <span className="text-xs md:text-sm font-semibold text-gray-800 group-hover:text-[#38B2FF] transition-colors duration-300">
                      {tool.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Ximax Section */}
          <div className="max-w-7xl mx-auto py-5">
            <div className=" rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Why <span className="text-[#38B2FF]">Ximax</span> for Middleware Solutions?
              </h3>
              <div className="max-w-4xl mx-auto">
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-6 text-center">
                  Our experienced, certified, and inexpensive consultants can help you build applications on schedule, 
                  within the budget, and without compromising the quality. With extensive experience in Enterprise 
                  Application Integration and B2B solutions, we deliver robust middleware implementations that drive 
                  business efficiency.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  {whyXimaxPoints.map((point, index) => (
                    <div key={index} className="flex items-start">
                      <FaCheckCircle className="text-[#7ED4FF] text-lg mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-xs md:text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Portfolio Section */}
      <section className="py-5 bg-gray-50">
        <div className="container mx-auto px-4 mt-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
            Our <span className="text-[#7ED4FF]">Technology Portfolio</span>
          </h2>
          <p className="text-xs md:text-sm text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Explore our comprehensive range of technology services designed to transform your business
          </p>
          
          {/* Services Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-6">
              {technologyPortfolio.map((service, idx) => (
                <div 
                  key={idx}
                  onClick={() => handleSolutionClick(service.path)}
                  className="bg-white rounded-xl border border-gray-200 p-3 hover:shadow-2xl transition-all duration-300 hover:border-[#7ED4FF] cursor-pointer group h-full flex flex-col"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-[#7ED4FF]/10 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="w-6 h-6 text-[#7ED4FF] transform rotate-45 group-hover:rotate-90 transition-transform duration-300 flex-shrink-0" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-med md:text-xl font-semibold text-gray-800 group-hover:text-[#7ED4FF] transition-colors duration-300 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
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
              Ready to Integrate Your Enterprise Applications?
          </h2>
          <p className="text-white/90 text-xs md:text-sm mb-6 max-w-2xl mx-auto">
            Partner with us for expert middleware implementation and B2B integration solutions
          </p>
            <button onClick={()=>navigate("/contact-us")} className="inline-flex items-center gap-2 bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg">
              Get Started Today
              <FaRocket className="text-blue-600" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MiddlewarePage;