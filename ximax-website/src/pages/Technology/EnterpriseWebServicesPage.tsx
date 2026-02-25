import {
  FaCheckCircle,
  FaShieldAlt,
  FaCogs,
  FaMobile,
  FaLock,
  FaUsers,
  FaMicrosoft,
  FaJava,
  FaNetworkWired,
  FaDatabase,
  FaRocket,
  FaServer,
  FaMicrochip,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const EnterpriseWebServicesPage: React.FC = () => {
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
//   {
//     icon: <FaGlobe className="text-2xl text-[#38B2FF]" />,
//     title: "Enterprise Web Services",
//     description: "Comprehensive web services including RESTful APIs, SOAP services, API gateway implementations, and seamless system integration",
//     path: "/technology/enterprise-web-services"
//   },
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

  // Web 2.0 Engagements
  const webEngagements = [
    "Development of a rich UI project management intranet for a $2bn multi-location engineering company with several hundred active users.",
    "Creation of an online directory website with single click action to call features using VoIP and RIA technologies.",
    "Web enablement of a complex syndicated salary survey portal for a leading professional service provider to the financial services industry with a global user community.",
    "Using RIA technology to provide complex search and categorization for a complex parts management system.",
    "Semantic technology-based search and extraction of large amounts of unstructured information utilizing a Web services interface to a Semantic engine and the .NET framework.",
    "Web Services for vendor partner integration for online retailers.",
    "User generated content and collaboration for MySelfHelp.com.",
    "Collaborative portal for recruiters that leverages a social network (e.g., LinkedIn)"
  ];

  // Enterprise Mobility Capabilities
  const mobilityCapabilities = [
    {
      icon: <FaMobile className="text-3xl text-[#38B2FF]" />,
      title: "Mobility Architecture and Development",
      description: "Draws on our deep mobile device expertise to develop native or cross-platform applications and quickly create mobile solutions. Our Mobile Enterprise Solution Framework and other industry standard accelerators can significantly reduce the time needed to launch an enterprise mobile solution."
    },
    {
      icon: <FaShieldAlt className="text-3xl text-[#7ED4FF]" />,
      title: "Mobility Solution Assurance",
      description: "Reduces the risk of launching an enterprise mobile platform solution by ensuring application of critical quality controls, including portability testing strategy, multi-device verification plan, proper performance and scalability testing and an overall deployment strategy and launch plan."
    },
    {
      icon: <FaUsers className="text-3xl text-[#38B2FF]" />,
      title: "Enterprise Mobility Consulting",
      description: "Get maximum value from mobility initiatives with our enterprise mobile planning & consulting. Our team draws on deep industry experience to help businesses reach out to their customers effectively."
    },
    {
      icon: <FaCogs className="text-3xl text-[#7ED4FF]" />,
      title: "Full Lifecycle Application Projects",
      description: "Our team partners with enterprise in full lifecycle application projects taking on complete responsibility for analysis, design, implementation, testing and integration of systems."
    },
    {
      icon: <FaLock className="text-3xl text-[#38B2FF]" />,
      title: "App Security",
      description: "Our team of experts establish secured policies, monitor, manage and test potential threats. We develop a mobile architecture comprising of hardware, software platforms, as well as communication protocols."
    }
  ];

  // Our Capabilities Points
  const ourCapabilities = [
    "Jointly analyze, design, implement, test and integrate systems",
    "Help in creating functional/non-functional prototype for your product features",
    "Analyze and evaluate the viability and device compatibility of the product in detail",
    "Functional and technical requirements analysis",
    "Streamline application design and development",
    "Develop use cases to get user behavior insights for actionable results",
    "Training and support for smooth running of your mobile programs",
    "Build advance digital capabilities by connecting to legacy backend systems inside enterprise organization",
    "Integrate security in the application development lifecycle for existing applications",
    "Adopt new development approaches to continuously deliver secure solutions"
  ];

  // Function to handle solution click
  const handleSolutionClick = (path: string) => {
    navigate(path);
  };

  return (
    <div id='enterprise-web-services' className="min-h-screen bg-gray-50 -mt-8">
      {/* Hero Section with Skyblue Theme Background */}\
      <section 
        className="pt-40 py-5 relative overflow-hidden min-h-[300px] md:min-h-[500px] flex items-start"
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
        Enterprise Web Services
      </h1>
    </div>
    
    <p className="text-xs md:text-sm text-white/90 text-center max-w-xl mx-auto mb-12">
      Ximax helps you quickstart your organization's Web 2.0 initiative. Enterprise Web 2.0 supported by SaaS and PaaS helps companies grow their revenue, provide better customer experiences and achieve greater market share and competitive advantage.
            </p>
  </div>
</div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-10">
          {/* Enterprise Web Services Overview */}
          <div className="max-w-6xl mx-auto ">
            <div className="text-center mb-5">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Enterprise <span className="text-[#38B2FF]">Web 2.0</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#38B2FF] to-[#7ED4FF] mx-auto mb-6"></div>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed max-w-4xl mx-auto">
                <span className="font-semibold text-[#38B2FF]">Ximax</span> helps you quickstart your organization's Web 2.0 initiative. Enterprise Web 2.0 supported by SaaS and PaaS helps companies grow their revenue, provide better customer experiences and achieve greater market share and competitive advantage. We help organizations build Web 2.0 and leverage Social Media in these areas.
              </p>
            </div>
          </div>

          {/* Web 2.0 Engagements Section */}
          <div className="max-w-7xl mx-auto ">
            <div className="bg-gradient-to-br from-[#38B2FF]/5 to-[#7ED4FF]/5 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
               Ximax Automation's Representative <span className="text-[#38B2FF]">Web 2.0 Engagements</span>
              </h3>
              <p className="text-xs md:text-sm text-gray-600 text-center mb-8 max-w-3xl mx-auto">
                Below are some of Ximax's Web 2.0 engagements
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {webEngagements.map((engagement, index) => (
                  <div 
                    key={index} 
                    className="flex items-start bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#7ED4FF] hover:scale-105"
                  >
                    <FaCheckCircle className="text-[#7ED4FF] text-xl mt-1 mr-4 flex-shrink-0" />
                    <span className="text-gray-800 text-xs md:text-sm font-medium">{engagement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enterprise Mobility Section */}
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
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                    Enterprise Mobility
                  </h3>
                  <p className="text-xs md:text-sm text-left text-white/95 mb-4 leading-relaxed">
  Fast-track your transition to a mobile-empowered business with ARCWHALES Enterprise Mobility Services. 
  Leveraging our cost-effective Global Development Model and rich partner network, we provide a seamless 
  Concept-to-Rollout lifecycle that encompasses strategy, specialized development, and rapid prototyping. 
  Our approach ensures robust, production-ready solutions are launched with the speed and scale your 
  enterprise requires to stay ahead.
</p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold text-xs md:text-sm">
                      Concept-to-Rollout
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold text-xs md:text-sm">
                      Native & Cross-Platform
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold text-xs md:text-sm">
                      Mobile Solution Assurance
                    </span>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Mobility Capabilities Section */}
          <div className="max-w-7xl mx-auto py-5 bg-gray-50">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center mt-10">
              Our <span className="text-[#7ED4FF]">Mobility Capabilities</span>
            </h3>
            <p className="text-xs md:text-sm text-gray-600 text-center max-w-3xl mx-auto mb-8">
              Accelerate business growth by creating effective and efficient mobility solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-5">
              {mobilityCapabilities.map((capability, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#7ED4FF] shadow-lg hover:shadow-2xl transition-all duration-500 group h-full flex flex-col"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#38B2FF]/10 to-[#7ED4FF]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {capability.icon}
                  </div>
                  <h4 className="text-med md:text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#38B2FF] transition-colors duration-300">
                    {capability.title}
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed flex-1">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise Mobility Solutions */}
          {/* <div className="max-w-7xl mx-auto py-5">
            <div className="bg-gradient-to-br from-[#38B2FF]/5 to-[#7ED4FF]/5 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Enterprise <span className="text-[#38B2FF]">Mobility Solutions</span>
              </h3>
              <div className="max-w-4xl mx-auto">
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-6 text-center">
                  Enterprise mobility solutions can be your sure-shot companion to deal with a highly mobilized workforce that places heavy demands on IT systems. Streamline business operations, and overcome organizational silos with effective and efficient enterprise mobility solutions. Mobility improves employee engagement while offering personalized experiences to the end-users. At ARCWHALES, we provide a whole bundle of mobility services that emphasize on device selection, address security concerns, and everything in between. Drive your employees' productivity by enabling them to work with any device, any time, anywhere. Experience our quality-driven mobility services that are a blend of strong technical, domain expertise, and modern tech stack. With our global mobility consulting and continuous support, we make sure that you get an effective, seamless and streamlined mobile experience. For your every mobility need, we have got your business covered.
                </p>
              </div>
            </div>
          </div> */}

          {/* Our Capabilities Section */}
          <div className="max-w-7xl mx-auto py-5">
            <div className="rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Our <span className="text-[#38B2FF]">Capabilities</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ourCapabilities.map((capability, index) => (
                  <div key={index} className="flex items-start">
                    <FaCheckCircle className="text-[#7ED4FF] text-lg mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-xs md:text-sm">{capability}</span>
                  </div>
                ))}
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
              Ready to Accelerate Your Enterprise Web & Mobility Journey?
          </h2>
          <p className="text-white/90 text-xs md:text-sm mb-6 max-w-2xl mx-auto">
            Partner with us to build Web 2.0 solutions and enterprise mobility applications that drive business growth
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

export default EnterpriseWebServicesPage;