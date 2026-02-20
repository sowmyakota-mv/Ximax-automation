import React from 'react';
import {
  FaCheckCircle,
  FaDatabase,
  FaCode,
  FaChartBar,
  FaNetworkWired,
  FaProjectDiagram,
  FaRegChartBar,
  FaUsers,
  FaTruck,
  FaBrain,
  FaHeartbeat,
  FaShoppingCart,
  FaIndustry,
  FaWifi,
  FaRocket
} from 'react-icons/fa';
import { SiOracle } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

const FinancialServicesPage: React.FC = () => {
  const navigate = useNavigate();

  // Industry Verticals Portfolio Data
const industryVerticalsPortfolio = [
//   {
//     icon: <FaChartLine className="text-2xl text-[#38B2FF]" />,
//     title: "Financial Services",
//     description: "Secure and compliant financial technology solutions for modern banking, including core banking systems, payment gateways, and regulatory technology for financial institutions",
//     path: "/financial"
//   },
  {
    icon: <FaHeartbeat className="text-2xl text-[#7ED4FF]" />,
    title: "Healthcare Solutions",
    description: "Advanced healthcare technology solutions including EHR systems, telemedicine platforms, and medical practice management software for healthcare providers",
    path: "/healthcare"
  },
  {
    icon: <FaShoppingCart className="text-2xl text-[#38B2FF]" />,
    title: "E-commerce",
    description: "Scalable online retail platforms and digital marketplaces for global commerce, including custom shopping cart solutions and omnichannel platforms",
    path: "/ecommerce"
  },
  {
    icon: <FaIndustry className="text-2xl text-[#7ED4FF]" />,
    title: "Manufacturing",
    description: "Industrial automation and supply chain optimization solutions with Industry 4.0 implementation, MES, and IoT platforms for smart factory automation",
    path: "/manufacturing"
  },
  {
    icon: <FaWifi className="text-2xl text-[#38B2FF]" />,
    title: "Telecommunication",
    description: "Advanced communication networks and service delivery platforms including OSS/BSS solutions, 5G readiness, and network management systems",
    path: "/telecommunication"
  },
  {
    icon: <FaTruck className="text-2xl text-[#7ED4FF]" />,
    title: "Logistics",
    description: "Comprehensive transportation and logistics management systems including fleet management, route optimization, and real-time tracking platforms",
    path: "/logistics"
  }
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
      title: "ERP Implementation"
    },
    {
      icon: <FaUsers className="text-3xl text-[#7ED4FF]" />,
      title: "CRM Solutions"
    },
    {
      icon: <FaProjectDiagram className="text-3xl text-[#38B2FF]" />,
      title: "Strategic Enterprise Management (SEM)"
    },
    {
      icon: <FaRegChartBar className="text-3xl text-[#7ED4FF]" />,
      title: "DSS Life Cycle Implementation"
    },
    {
      icon: <SiOracle className="text-3xl text-[#38B2FF]" />,
      title: "Oracle E-Business Suite (EBS)"
    },
    {
      icon: <FaNetworkWired className="text-3xl text-[#7ED4FF]" />,
      title: "Full Life Cycle Implementation"
    }
  ];

  // Consultant Expertise
  const consultantExpertise = [
    {
      icon: <FaBrain className="text-3xl text-[#38B2FF]" />,
      title: "Functional Consultants",
      description: "Deep domain expertise in Oracle applications and business processes"
    },
    {
      icon: <FaCode className="text-3xl text-[#7ED4FF]" />,
      title: "Technical Consultants",
      description: "Skilled in RICE components, customizations, and technical implementations"
    },
    {
      icon: <FaChartBar className="text-3xl text-[#38B2FF]" />,
      title: "Business Analysts",
      description: "Bridge between business requirements and technical solutions"
    },
    {
      icon: <FaUsers className="text-3xl text-[#7ED4FF]" />,
      title: "Project Managers",
      description: "Experienced in managing complex Oracle enterprise implementations"
    }
  ];

  // Why Ximax Points
  const whyXimaxPoints = [
    "100% Oracle E-Business implementation history",
    "Excellent Production Support",
    "Trained and experienced group of Oracle Applications ERP Consultants",
    "Complete Life Cycle Implementation process for Oracle Enterprise Application Products"
  ];

  // Function to handle solution click
  const handleSolutionClick = (path: string) => {
    navigate(path);
  };

  return (
    <div id='financial-services' className="min-h-screen bg-gray-50 -mt-8">
      {/* Hero Section with Skyblue Theme Background */}
     <section 
  className="pt-24 py-5 relative overflow-hidden min-h-[300px] md:min-h-[500px] flex items-start"
  // style={{
  //   background: 'linear-gradient(135deg, #38B2FF 0%, #7ED4FF 50%, #B0E6FF 100%)'
  // }}
>
  {/* Background Image Overlay */}
  <div className="absolute inset-0 z-0">
    <img 
      src="/industry1.png" 
      alt="Ximax Automation Background" 
      className="w-full h-full md:object-cover opacity-"
    />
    {/* <div className="absolute inset-0 bg-gradient-to-r from-sky-600/80 to-sky-500/80 mix-blend-multiply"></div> */}
  </div>
  
  <div className="container mx-auto px-4 relative z-10 mt-16 md:mt-24">
    <div className="text-center">
      <div className="inline-flex items-center justify-center mb-3">
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-white">
          Financial Services
        </h1>
      </div>
      
      <p className="text-xs md:text-base text-white/90 max-w-3xl mx-auto mb-12">
        Our Oracle Enterprise Application Competency Group has capabilities to provide ERP, CRM, and Strategic Enterprise Management (SEM) and DSS Life Cycle Implementation processes for the Oracle suite of Enterprise Applications products.
      </p>
    </div>
  </div>
</section>

      {/* Main Content Section */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-10">
          {/* Financial Services Overview */}
          <div className="max-w-6xl mx-auto ">
            <div className="text-center mb-5">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Banking & <span className="text-[#38B2FF]">Financial Services</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#38B2FF] to-[#7ED4FF] mx-auto mb-6"></div>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed max-w-4xl mx-auto">
                <span className="font-semibold text-[#38B2FF]">Ximax</span> has trained and experienced group of Oracle Applications ERP Consultants with the relevant skills such as Functional, Technical, and Business Analysis, and Project Management focusing exclusively on Oracle Enterprise Applications. We are proud to say that we have 100% Oracle E-Business implementation history and we are providing the Excellent Production Support.
              </p>
            </div>
          </div>

          {/* Oracle Capabilities Grid */}
          <div className="max-w-7xl mx-auto ">
            <div className="bg-gradient-to-br from-[#38B2FF]/5 to-[#7ED4FF]/5 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
                Our <span className="text-[#38B2FF]">Oracle Capabilities</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {oracleCapabilities.map((capability, index) => (
                  <div 
                    key={index} 
                    className="flex items-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#7ED4FF] hover:scale-105"
                  >
                    <div className="p-2 bg-gray-50 rounded-lg mr-4 group-hover:bg-[#38B2FF]/10 transition-colors duration-300">
                      {capability.icon}
                    </div>
                    <span className="text-gray-800 text-xs md:text-sm font-semibold">{capability.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Oracle E-Business Suite Section */}
          <div className="max-w-7xl mx-auto py-5 ">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center mt-10">
              Oracle <span className="text-[#38B2FF]">E-Business Suite (EBS)</span>
            </h3>
            <p className="text-xs md:text-sm text-gray-600 text-center max-w-4xl mx-auto mb-6">
              You're the expert in your business. You understand your processes and how they work. And you also know your company goals. Finding a technology platform and business partner to support those goals isn't as clear. It's not always obvious how you can use technology best practices to improve the efficiency and productivity of your business.
            </p>
            <p className="text-xs md:text-sm text-gray-600 text-center max-w-4xl mx-auto">
              Oracle E-Business Suite (EBS) provides global, integrated business applications that drive business performance. Whether you're new to Oracle applications or have an older EBS installation you would like to upgrade, the functionality and support available in the newer versions of Oracle EBS applications can help you achieve your business goals.
            </p>
          </div>

          {/* Oracle E-Business Modules Section */}
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
                    Oracle E-Business Modules
                  </h3>
                  <p className="text-xs md:text-sm text-white/95 mb-8 leading-relaxed">
                    Ximax Provided the Full Life Cycle Implementation and support on below Oracle E-Business Modules
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {oracleModules.map((module, index) => (
                      <div key={index} className="flex items-start justify-start">
                        <FaCheckCircle className="text-white text-lg mt-1 mr-3 flex-shrink-0" />
                        <span className="text-white text-xs md:text-sm text-left">{module}</span>
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

          {/* Consultant Expertise Section */}
          <div className="bg-gradient-to-br from-[#38B2FF]/5 to-[#7ED4FF]/5 max-w-7xl mx-auto py-5">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center mt-10">
              Our <span className="text-[#7ED4FF]">Consultant Expertise</span>
            </h3>
            <p className="text-xs md:text-sm text-gray-600 text-center max-w-3xl mx-auto mb-6">
              Trained and experienced group of Oracle Applications ERP Consultants with relevant skills
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-5">
              {consultantExpertise.map((expert, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#7ED4FF] shadow-lg hover:shadow-2xl transition-all duration-500 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#38B2FF]/10 to-[#7ED4FF]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {expert.icon}
                  </div>
                  <h4 className="text-med md:text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#38B2FF] transition-colors duration-300">
                    {expert.title}
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    {expert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Ximax Section */}
          <div className="max-w-7xl mx-auto py-5">
            <div className=" rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Why <span className="text-[#38B2FF]">Ximax</span> for Oracle Solutions?
              </h3>
              <div className="max-w-4xl mx-auto">
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-6 text-center">
                  We are proud to say that we have 100% Oracle E-Business implementation history and we are providing the Excellent Production Support and we are sure that we can reach your expectations in E-Business Technology.
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
            Our <span className="text-[#7ED4FF]">Industry Portfolio</span>
          </h2>
          <p className="text-xs md:text-sm text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Explore our comprehensive range of technology services designed to transform your business
          </p>
          
          {/* Services Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {industryVerticalsPortfolio.map((service, idx) => (
                <div 
                  key={idx}
                  onClick={() => handleSolutionClick(service.path)}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-2xl transition-all duration-300 hover:border-[#7ED4FF] cursor-pointer group h-full flex flex-col"
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
             Ready to Transform Your Oracle Enterprise Applications?
          </h2>
          <p className="text-white/90 text-xs md:text-sm mb-6 max-w-2xl mx-auto">
            Partner with us for 100% successful Oracle E-Business Suite implementation and support
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

export default FinancialServicesPage;