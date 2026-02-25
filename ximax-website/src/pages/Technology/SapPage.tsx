import {
  FaCheckCircle,
  FaDatabase,
  FaMicrosoft,
  FaJava,
  FaGlobe,
  FaNetworkWired,
  FaRocket,
  FaMicrochip,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SAPPage: React.FC = () => {
  const navigate = useNavigate();

  // Technology Portfolio Data
  const technologyPortfolio = [
    {
      icon: <FaMicrosoft className="text-2xl text-[#38B2FF]" />,
      title: "Microsoft .NET",
      description: "Full-stack development using Microsoft's .NET ecosystem for building robust, scalable enterprise applications and web solutions",
      path: "/technology/microsoft-dotnet"
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
      icon: <FaDatabase className="text-2xl text-[#38B2FF]" />,
      title: "Oracle",
      description: "End-to-end Oracle solutions including database management, PL/SQL development, optimization, and enterprise application integration",
      path: "/oracle"
    },
//   {
//     icon: <FaServer className="text-2xl text-[#7ED4FF]" />,
//     title: "SAP",
//     description: "Comprehensive SAP implementation, customization, and integration services including SAP S/4HANA, SAP Fiori, and SAP Business Suite for enterprise resource planning",
//     path: "/sap"
//   },
  {
    icon: <FaMicrochip className="text-2xl text-[#38B2FF]" />,
    title: "VLSI",
    description: "Advanced VLSI design and verification services including ASIC design, FPGA implementation, RTL coding, and semiconductor solutions for hardware development",
    path: "/vlsi"
  }
  ];

  // Industries
  const industries = [
    "Manufacturing",
    "Retail",
    "Oil & Gas",
    "Media",
    "Cutting Edge",
    "Investment Banking & Financial Services",
    "Business Information & Media Services",
    "Travel and Hospitality",
    "ISVs/SaaS",
    "Retail and Consumer Goods",
    "Telecommunications"
  ];

  // Most Important SAP Modules
  const sapModules = [
    "SAP FICO module",
    "MM Module",
    "SD module",
    "HR module",
    "PP Module",
    "PS Module",
    "Basis Module",
    "Security Module",
    "ABAP module"
  ];

  // SAP Modules Expertise
  const sapExpertise = [
    "Material Management (MM)",
    "Master data management (MDM)",
    "Warehouse Management (WM)",
    "Finance/controlling (FICO)",
    "Production Planning (PP)",
    "Customer Relationship Management (CRM)",
    "Supply Chain Management (SCM)",
    "Business Information Warehouse (BW)",
    "Advanced Planning & Optimization (APO)",
    "HR and Human Capital Management (HR/HCM)",
    "Product Lifecycle Management (PLM)",
    "Supplier Relationship Management (SRM)",
    "Business Object (BO)",
    "Environmental Health and Safety (EHS)"
  ];

  // Function to handle solution click
  const handleSolutionClick = (path: string) => {
    navigate(path);
  };

  return (
    <div id='sap' className="min-h-screen bg-gray-50 -mt-8">
      {/* Hero Section with Skyblue Theme Background */}
      <section 
        className="pt-52 py-5 relative overflow-hidden min-h-[300px] md:min-h-[440px] flex items-start"
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
                  SAP
                </h1>
              </div>
              
              <p className="text-xs md:text-sm text-white/90 text-center max-w-xl mx-auto mb-12">
                Ximax has broad involvement in giving SAP counseling administrations to assortment of enterprises including producing, retail, oil and gas, media, cutting edge and others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-10">
          {/* SAP Overview */}
          <div className="max-w-6xl mx-auto ">
            <div className="text-center mb-5">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                SAP <span className="text-[#38B2FF]">Consulting</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#38B2FF] to-[#7ED4FF] mx-auto mb-6"></div>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed max-w-4xl mx-auto">
                <span className="font-semibold text-[#38B2FF]">Ximax</span> has broad involvement in giving SAP counseling administrations to assortment of enterprises including producing, retail, oil and gas, media, cutting edge and others. One of the center parts of the SAP business structure is a business insight arrangement called SAP Business Information Warehouse (SAP BW). SAP BW is an entire information stockroom and data conveyance system and is firmly combined with the SAP R/3 Online Transaction Processing condition. This makes it simpler to actualize a self-governing information distribution center condition without the test of managing SAP R/3 information extraction and information administration complexities.
              </p>
            </div>
          </div>

          {/* Most Important SAP Modules */}
          <div className="max-w-7xl mx-auto ">
            <div className="bg-gradient-to-br from-[#38B2FF]/5 to-[#7ED4FF]/5 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Most Important SAP Modules that <span className="text-[#38B2FF]">Ximax</span> implements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sapModules.map((module, index) => (
                  <div 
                    key={index} 
                    className="flex items-start bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#7ED4FF]"
                  >
                    <FaCheckCircle className="text-[#7ED4FF] text-lg mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 text-xs md:text-sm font-medium">{module}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SAP Modules Expertise Section */}
          <div className="max-w-7xl mx-auto py-5 ">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center mt-10">
              SAP <span className="text-[#38B2FF]">Modules Expertise</span>
            </h3>
            <p className="text-xs md:text-sm text-gray-600 text-center max-w-3xl mx-auto mb-8">
              Green Technosoft has expertise in various SAP modules. Some of the modules we have supported are listed below.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sapExpertise.map((module, index) => (
                <div 
                  key={index} 
                  className="flex items-start bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#7ED4FF] hover:scale-105"
                >
                  <FaCheckCircle className="text-[#7ED4FF] text-lg mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-800 text-xs md:text-sm font-medium">{module}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Industries Section */}
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
                    Industries We Serve
                  </h3>
                  <p className="text-xs md:text-sm text-white/95 mb-6 leading-relaxed">
                    Delivering SAP solutions across diverse industry verticals
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {industries.slice(0, 6).map((industry, index) => (
                      <span key={index} className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold text-xs md:text-sm">
                        {industry}
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
              Ready to Implement Your SAP Solution?
            </h2>
            <p className="text-white/90 text-xs md:text-sm mb-6 max-w-2xl mx-auto">
              Partner with our SAP experts to implement and customize SAP solutions tailored to your business needs
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

export default SAPPage;