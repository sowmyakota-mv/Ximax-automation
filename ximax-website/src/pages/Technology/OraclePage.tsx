import React from 'react';
import {
  FaCheckCircle,
  FaDatabase,
  FaChartLine,
  FaProjectDiagram,
  FaNetworkWired,
  FaUsers,
  FaUserTie,
  FaLaptopCode,
  FaMicrosoft,
  FaJava,
  FaGlobe,
  FaRocket,
  FaServer,
  FaMicrochip
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const OraclePage: React.FC = () => {
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
  {
    icon: <FaNetworkWired className="text-2xl text-[#7ED4FF]" />,
    title: "Middleware",
    description: "Advanced integration solutions using IBM WebSphere, Oracle Fusion, and messaging platforms for robust enterprise communication",
    path: "/middleware"
  },
  {
    icon: <FaServer className="text-2xl text-[#7ED4FF]" />,
    title: "SAP",
    description: "Comprehensive SAP implementation, customization, and integration services including SAP S/4HANA, SAP Fiori, and SAP Business Suite for enterprise resource planning",
    path: "/sap"
  },
  {
    icon: <FaMicrochip className="text-2xl text-[#38B2FF]" />,
    title: "VLSI",
    description: "Advanced VLSI design and verification services including ASIC design, FPGA implementation, RTL coding, and semiconductor solutions for hardware development",
    path: "/vlsi"
  }
//   {
//     icon: <FaDatabase className="text-2xl text-[#38B2FF]" />,
//     title: "Oracle",
//     description: "End-to-end Oracle solutions including database management, PL/SQL development, optimization, and enterprise application integration",
//     path: "/technology/oracle"
//   }
];

  // Oracle E-Business Modules
  const oracleModules = [
    "Oracle Finance",
    "Oracle Manufacturing",
    "Oracle Service Management system",
    "Oracle Distribution",
    "Oracle Supply Chain Management",
    "CRM",
    "HRMS",
    "Oracle Apps Technical Support",
    "Technical development for RICE Components"
  ];

  // Oracle Capabilities
  const oracleCapabilities = [
    {
      icon: <FaDatabase className="text-3xl text-[#38B2FF]" />,
      title: "ERP Implementation",
      description: "Complete Life Cycle Implementation process for Oracle Enterprise Application Products"
    },
    {
      icon: <FaUsers className="text-3xl text-[#7ED4FF]" />,
      title: "CRM Solutions",
      description: "Comprehensive CRM implementation and support for Oracle suite of applications"
    },
    {
      icon: <FaProjectDiagram className="text-3xl text-[#38B2FF]" />,
      title: "Strategic Enterprise Management",
      description: "SEM and DSS Life Cycle Implementation processes for Oracle Enterprise Applications"
    },
    {
      icon: <FaUserTie className="text-3xl text-[#7ED4FF]" />,
      title: "Expert Consultants",
      description: "Trained and experienced group of Oracle Applications ERP Consultants with Functional, Technical, and Business Analysis skills"
    }
  ];

  // Why Ximax Points
  const whyXimaxPoints = [
    "100% Oracle E-Business implementation history",
    "Excellent Production Support for E-Business Technology",
    "Full Life Cycle Implementation and support on Oracle E-Business Modules",
    "Trained and experienced group of Oracle Applications ERP Consultants"
  ];

  // Function to handle solution click
  const handleSolutionClick = (path: string) => {
    navigate(path);
  };

  return (
    <div id='oracle' className="min-h-screen bg-gray-50 -mt-8">
      {/* Hero Section with Skyblue Theme Background */}
      <section 
        className="pt-40 py-5 relative overflow-hidden min-h-[300px] md:min-h-[480px] flex items-start"
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
        Oracle
      </h1>
    </div>
    
    <p className="text-xs md:text-sm text-white/90 text-center max-w-xl mx-auto mb-12">
      Our Oracle Enterprise Application Competency Group has capabilities to provide ERP, CRM, and Strategic Enterprise Management (SEM) and DSS Life Cycle Implementation processes for the Oracle suite of Enterprise Applications products.
            </p>
  </div>
</div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-10">
          {/* Oracle Overview */}
          <div className="max-w-6xl mx-auto ">
            <div className="text-center mb-5">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Oracle <span className="text-[#38B2FF]">E-Business Suite</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#38B2FF] to-[#7ED4FF] mx-auto mb-6"></div>
              <p className="text-xs md:text-sm text-gray-700  leading-relaxed max-w-4xl mx-auto">
                <span className="font-semibold text-[#38B2FF]">Ximax</span> has the capabilities to provide the complete Life Cycle Implementation process for the Oracle Enterprise Application Products. We are proud to say that we have 100% Oracle E-Business implementation history and we are providing Excellent Production Support. We are sure that we can reach your expectations in E-Business Technology.
              </p>
            </div>
          </div>

          {/* Oracle Capabilities Grid */}
          <div className="max-w-7xl mx-auto ">
            <div className="bg-gradient-to-br from-[#38B2FF]/5 to-[#7ED4FF]/5 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
                Our <span className="text-[#38B2FF]">Oracle Capabilities</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {oracleCapabilities.map((capability, index) => (
                  <div 
                    key={index} 
                    className="flex items-start bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#7ED4FF] hover:scale-105"
                  >
                    <div className="mr-4 mt-1 flex-shrink-0">
                      {capability.icon}
                    </div>
                    <div>
                      <h4 className="text-med md:text-xl font-semibold text-gray-800 mb-2">{capability.title}</h4>
                      <span className="text-gray-600 text-xs md:text-sm">{capability.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Oracle E-Business Modules Section */}
          <div className="max-w-7xl mx-auto py-5 ">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center mt-10">
              Oracle <span className="text-[#38B2FF]">E-Business Modules</span>
            </h3>
            <p className="text-xs md:text-sm text-gray-600 text-center max-w-3xl mx-auto">
              FloorEdge Provided the Full Life Cycle Implementation and support on below Oracle E-Business Modules
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
              {oracleModules.map((module, index) => (
                <div 
                  key={index} 
                  className="flex items-start bg-white rounded-xl p-6 border border-gray-200 hover:border-[#38B2FF] shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <FaCheckCircle className="text-[#7ED4FF] text-xl mt-1 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-xs md:text-sm font-semibold text-gray-800 group-hover:text-[#38B2FF] transition-colors duration-300">
                    {module}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Oracle E-Business Suite Section */}
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
                    Oracle E-Business Suite (EBS)
                  </h3>
                  <p className="text-xs md:text-sm text-left text-white/95 mb-6 leading-relaxed">
                    As an expert in your business, you understand your processes and goals, yet identifying the right technology partner to enhance efficiency can be a challenge. Oracle E-Business Suite (EBS) bridges this gap by providing integrated applications designed to drive global performance. Whether you are implementing Oracle for the first time or upgrading an existing installation, the advanced functionality of the latest EBS versions empowers you to adopt industry best practices. By aligning your unique insights with our technical expertise, we help you transform productivity and achieve your strategic objectives.</p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold text-xs md:text-sm">
                      100% Implementation History
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold text-xs md:text-sm">
                      Full Life Cycle Implementation
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold text-xs md:text-sm">
                      Excellent Production Support
                    </span>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Expert Consultants Section */}
          <div className="bg-gradient-to-br from-[#38B2FF]/5 to-[#7ED4FF]/5 max-w-7xl mx-auto py-5">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center mt-10">
              Our <span className="text-[#7ED4FF]">Oracle Experts</span>
            </h3>
            <p className="text-xs md:text-sm text-gray-600 text-center max-w-3xl mx-auto">
              Trained and experienced group of Oracle Applications ERP Consultants with the relevant skills
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-5">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#7ED4FF] shadow-lg hover:shadow-2xl transition-all duration-500 group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#38B2FF]/10 to-[#7ED4FF]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaUserTie className="text-3xl text-[#38B2FF]" />
                </div>
                <h4 className="text-med md:text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#38B2FF] transition-colors duration-300">
                  Functional Consultants
                </h4>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  Deep domain expertise in Oracle Finance, Manufacturing, SCM, HRMS and CRM modules
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#7ED4FF] shadow-lg hover:shadow-2xl transition-all duration-500 group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#38B2FF]/10 to-[#7ED4FF]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaLaptopCode className="text-3xl text-[#7ED4FF]" />
                </div>
                <h4 className="text-med md:text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#38B2FF] transition-colors duration-300">
                  Technical Consultants
                </h4>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  Expertise in RICE Components development, Oracle Apps Technical Support and customization
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#7ED4FF] shadow-lg hover:shadow-2xl transition-all duration-500 group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#38B2FF]/10 to-[#7ED4FF]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaChartLine className="text-3xl text-[#38B2FF]" />
                </div>
                <h4 className="text-med md:text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#38B2FF] transition-colors duration-300">
                  Business Analysts
                </h4>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  Skilled in bridging business requirements with Oracle EBS solutions and best practices
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#7ED4FF] shadow-lg hover:shadow-2xl transition-all duration-500 group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#38B2FF]/10 to-[#7ED4FF]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaProjectDiagram className="text-3xl text-[#7ED4FF]" />
                </div>
                <h4 className="text-med md:text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#38B2FF] transition-colors duration-300">
                  Project Managers
                </h4>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  Experienced in managing Full Life Cycle Implementation projects for Oracle Enterprise Applications
                </p>
              </div>
            </div>
          </div>

          {/* Why Ximax Section */}
          <div className="max-w-7xl mx-auto py-5">
            <div className="rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Why <span className="text-[#38B2FF]">Ximax</span> for Oracle?
              </h3>
              <div className="max-w-4xl mx-auto">
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-6 text-center">
                  We are proud to say that we have 100% Oracle E-Business implementation history and we are providing Excellent Production Support. We are sure that we can reach your expectations in E-Business Technology. Our team focuses exclusively on Oracle Enterprise Applications with relevant skills such as Functional, Technical, and Business Analysis, and Project Management.
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
              Ready to Transform Your Oracle E-Business Suite?
          </h2>
          <p className="text-white/90 text-xs md:text-sm mb-6 max-w-2xl mx-auto">
            Partner with us for Full Life Cycle Implementation and support for your Oracle applications
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

export default OraclePage;