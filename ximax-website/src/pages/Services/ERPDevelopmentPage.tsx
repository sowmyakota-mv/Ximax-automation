import {
  FaCheckCircle,
  FaCloud,
  FaChartLine,
  FaFilter,
  FaCode,
  FaCogs,
  FaRocket,
  FaHome,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ERPDevelopmentPage: React.FC = () => {
  const navigate = useNavigate();

  // Services Portfolio Data
  const servicesPortfolio = [
    {
      icon: <FaChartLine className="text-2xl text-[#38B2FF]" />,
      title: "Big Data & Analytics",
      description: "Comprehensive BI, big data and analytics solutions for processing large amounts of business data and providing real-time reports",
      path: "/big-data-analytics"
    },
    {
      icon: <FaCloud className="text-2xl text-[#7ED4FF]" />,
      title: "Cloud Applications",
      description: "Design, development and migration of applications to cloud environments including AWS, Azure and Google Cloud",
      path: "/cloud-applications"
    },
    {
      icon: <FaCode className="text-2xl text-[#38B2FF]" />,
      title: "Application Development",
      description: "Custom software product development, web development and application maintenance services",
      path: "/application-development"
    },
    {
      icon: <FaCogs className="text-2xl text-[#7ED4FF]" />,
      title: "Digital Transformation",
      description: "End-to-end digital transformation solutions to modernize business processes and operations",
      path: "/digital-transformation"
    },
    {
      icon: <FaFilter className="text-2xl text-[#38B2FF]" />,
      title: "Testing & QA",
      description: "Comprehensive quality assurance and testing services for flawless software delivery",
      path: "/testing-qa"
    },
    {
      icon: <FaHome className="text-2xl text-[#38B2FF]" />,
      title: "Mortgage Services",
      description: "End-to-end mortgage servicing solutions including Pre-Underwriting, Post-Closing QC, Loan Onboarding and more",
      path: "/mortgage-services"
    }
    // {
    //   icon: <FaServer className="text-2xl text-[#7ED4FF]" />,
    //   title: "ERP Development",
    //   description: "ERP Implementation, Post Implementation Support and customization services",
    //   path: "/erp-development"
    // }
  ];

  // ERP Services
  const erpServices = [
    "Design and implementation service covering FI, CO, PS, AM, MM, SD and HR modules",
    "Module configuration and integration",
    "Software installation",
    "Data migration and system interfaces",
    "ABAP/4, SAP Script and report development",
    "Performance / functionality optimization",
    "System upgrades",
    "Strategies and implementations"
  ];

  // New Dimension Services
  const newDimensionServices = [
    "SAP Customer Relationship Management",
    "Module configuration and integration",
    "SAP Business Intelligence",
    "SAP Business-to-Business E-commerce",
    "Internet Transaction Server (ITS), IDOC and EDI development",
    "New Dimension Product Implementation: ESS, APO, CRM and BW"
  ];

  // Functional Consulting Points
  const functionalConsultingPoints = [
    "Project planning",
    "Resource requirement planning",
    "Business process analysis",
    "SAP configuration",
    "System testing",
    "User training",
    "Business process documentation",
    "Post implementation support"
  ];

  // Technical Consulting Points
  const technicalConsultingPoints = [
    "Developing a comprehensive set of specifications for all technical tasks",
    "Managing the scheduling of various tasks to minimize the learning curve",
    "Ensuring that all development meets the overall project requirements",
    "Coding programs as required",
    "Quality assurance",
    "Technical documentation"
  ];

  // Function to handle solution click
  const handleSolutionClick = (path: string) => {
    navigate(path);
  };

  return (
    <div id='erp-development' className="min-h-screen bg-gray-50 -mt-8">
      {/* Hero Section with Skyblue Theme Background */}
      <section 
        className="pt-44 md:pt-76 py-5 relative overflow-hidden min-h-[300px] md:min-h-[500px] flex items-start"
        // style={{
        //   background: 'linear-gradient(135deg, #38B2FF 0%, #7ED4FF 50%, #B0E6FF 100%)'
        // }}
      >
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/service-bghero.jpg" 
            alt="Ximax Automation Background" 
            className="w-full h-full md:object-cover "
          />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-sky-600/80 to-sky-500/80 mix-blend-multiply"></div> */}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center mb-3">
              <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-white">
                ERP Development
              </h1>
            </div>
            
            <p className="text-xs md:text-base text-white/90 max-w-3xl mx-auto mb-12">
              FloorEdge's ERP practice is SAP focused and has full-fledged team to take care on SAP Implementation, 
              Post Implementation Support Services, Integration Services and ABAP Development on onsite, offshore 
              and Hybrid engagement model.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-10">
          {/* ERP Development Overview */}
          <div className="max-w-6xl mx-auto ">
            <div className="text-center mb-5">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                ERP <span className="text-[#38B2FF]">Development</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#38B2FF] to-[#7ED4FF] mx-auto mb-6"></div>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed max-w-4xl mx-auto">
                <span className="font-semibold text-[#38B2FF]">Ximax</span> offers a full range of SAP Project Services 
                with a team of experienced consultants bringing unique perspective to each client, based on years of 
                consulting experience in a variety of businesses across many functional areas.
              </p>
            </div>
          </div>

          {/* Services Grid - ERP Services */}
          <div className="max-w-7xl mx-auto ">
            <div className="bg-gradient-to-br from-[#38B2FF]/5 to-[#7ED4FF]/5 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
                Our <span className="text-[#38B2FF]">SAP Project Services</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {erpServices.map((service, index) => (
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

          {/* Functional Consulting Section */}
          <div className="max-w-7xl mx-auto py-5 ">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center mt-10">
              Functional <span className="text-[#38B2FF]">Consulting</span>
            </h3>
            <p className="text-xs md:text-sm text-gray-600 text-center max-w-3xl mx-auto">
              Our functional consulting covers all aspects of implementing SAP within your enterprise.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-5">
              {functionalConsultingPoints.map((point, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#38B2FF] shadow-md hover:shadow-xl transition-all duration-300 group flex items-start"
                >
                  <FaCheckCircle className="text-[#7ED4FF] text-lg mt-1 mr-3 flex-shrink-0" />
                  <span className="text-xs md:text-sm font-medium text-gray-800 group-hover:text-[#38B2FF] transition-colors duration-300">
                    {point}
                  </span>
                </div>
              ))}
            </div>
            
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed max-w-4xl mx-auto mt-6 text-center">
              Our consultants bring a unique perspective to each client, based on years of consulting experience 
              in a variety of businesses across many functional areas.
            </p>
          </div>

          {/* Technical Consulting Section */}
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
                    Technical Consulting
                  </h3>
                  <p className="text-xs md:text-sm text-white/95 mb-6 leading-relaxed">
                    We offer ABAP and BASIS technical consulting services to assist you with front-end applications, 
                    development of custom reports, implementation of in-bound and outbound interfaces with SAP, 
                    and data conversion from legacy systems.
                  </p>
                  <p className="text-xs md:text-sm text-white/95 mb-8 leading-relaxed">
                    FloorEdge's technical team can assist you in all phases of SAP implementation, including developing 
                    a comprehensive set of specifications for all technical tasks, managing the scheduling of various 
                    tasks to minimize the learning curve, ensuring that all development meets the overall project 
                    requirements, coding programs as required, quality assurance and technical documentation.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    {technicalConsultingPoints.map((point, index) => (
                      <div key={index} className="flex items-start text-left justify-center">
                        <FaCheckCircle className="text-white text-lg text-left mt-1 mr-2 flex-shrink-0" />
                        <span className="text-white/95 text-xs md:text-sm text-left">{point}</span>
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

          {/* New Dimensions Section */}
          <div className="max-w-7xl mx-auto py-5">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center mt-10">
              New <span className="text-[#7ED4FF]">Dimensions</span>
            </h3>
            <p className="text-xs md:text-sm text-gray-600 text-center max-w-3xl mx-auto mb-">
              SAP adds important functions for e-procurement, strategic supplier relationship management, supply chain planning, 
              cross-enterprise integration and customer relationship management. Let the experts in our SAP practice keep your 
              valuable operational assets in top form for competing in the dynamic global marketplace.
            </p>
            
            <div className=" rounded-3xl p-8 md:p-12 ">
              {/* <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
                Our <span className="text-[#38B2FF]">New Dimension Services</span>
              </h4> */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newDimensionServices.map((service, index) => (
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
        </div>
      </section>

      {/* Services Portfolio Section */}
      <section className="py-5 bg-gray-50">
        <div className="container mx-auto px-4 mt-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
            Our <span className="text-[#7ED4FF]">Services Portfolio</span>
          </h2>
          <p className="text-xs md:text-sm text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Explore our comprehensive range of technology services designed to transform your business
          </p>
          
          {/* Services Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-6">
              {servicesPortfolio.map((service, idx) => (
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
               Ready to Transform Your SAP Environment?
          </h2>
          <p className="text-white/90 text-xs md:text-sm mb-6 max-w-2xl mx-auto">
            Partner with us for comprehensive SAP implementation, support and consulting services
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

export default ERPDevelopmentPage;