import {
  FaCheckCircle,
  FaCloud,
  FaCogs,
  FaChartLine,
  FaFilter,
  FaServer,
  FaCode,
  FaUsers,
  FaRocket,
  FaHome,
  FaFileAlt,
  FaShieldAlt,
  FaClipboardCheck,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MortgageServicesPage: React.FC = () => {
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
      icon: <FaServer className="text-2xl text-[#7ED4FF]" />,
      title: "ERP Development",
      description: "ERP Implementation, Post Implementation Support and customization services",
      path: "/erp-development"
    }
  ];

  // Mortgage Services - What We Offer
  const whatWeOfferServices = [
    "Live Underwriting Services",
    "Post Closing Underwriting Services",
    "Loan Origination & Servicing",
    "Administrative Support",
    "Lead Generation",
    "Process Automation",
    "Quality Checks"
  ];

  // Mortgage Services List
  const mortgageServicesList = [
    "Pre-Underwriting",
    "Post-Underwriting",
    "Post-Closing QC",
    "Loan Onboarding",
    "Escrow Setup",
    "Tax Research",
    "Lien Release",
    "Skip Tracing",
    "Property Preservation",
    "Appraisal Services",
    "Loss Mitigation",
    "REO Services"
  ];

  // Key Highlights
  const keyHighlights = [
    {
      icon: <FaUsers className="text-3xl text-[#38B2FF]" />,
      title: "Dedicated to Client Success",
      description: "Truefy Technologies is a business process transformation company providing comprehensive solutions driven by technology for mortgage servicing and offshore services. We deliver cost-effective, efficient, and quality-driven solutions, adapting to the evolving industry requirements."
    },
    {
      icon: <FaShieldAlt className="text-3xl text-[#7ED4FF]" />,
      title: "Industry Expertise",
      description: "Our team consists of industry experts with extensive knowledge and experience in collaborating with top-tier origination and servicing companies. Trueintech's management team holds certifications from the Mortgage Bankers Association's education arm in servicing and origination, ensuring firsthand understanding of the dynamic nature of the mortgage industry."
    },
    {
      icon: <FaClipboardCheck className="text-3xl text-[#38B2FF]" />,
      title: "Regulatory Compliance",
      description: "Recognizing the importance of compliance with regulatory requirements, we conduct thorough quality checks throughout various processes. We focus on the bigger picture, ensuring that our work enhances the quality of the loans we service."
    }
  ];

  // Why Choose Us Points
  const whyChooseUsPoints = [
    "End-to-end mortgage servicing solutions including Pre-Underwriting, Post-Underwriting, Post-Closing QC, Loan Onboarding, etc.",
    "Cost-effective, efficient, and quality-driven solutions adapting to evolving industry requirements",
    "Immediate insights into industry changes, regulatory updates, and compliance requirements",
    "Meticulous due diligence process underscoring our understanding and expertise",
    "Clear action plans to address client questions and concerns"
  ];

  // Function to handle solution click
  const handleSolutionClick = (path: string) => {
    navigate(path);
  };

  return (
    <div id='mortgage-services' className="min-h-screen bg-gray-50 -mt-8">
      {/* Hero Section with Skyblue Theme Background */}
      <section 
        className="pt-44 md:pt-76 py-5 relative overflow-hidden min-h-[300px] md:min-h-[500px] flex items-start"
      >
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/service-bghero.jpg" 
            alt="Mortgage Services Background" 
            className="w-full h-full md:object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center mb-3">
              <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-white">
                Mortgage Services
              </h1>
            </div>
            
            <p className="text-xs md:text-base text-white/90 max-w-3xl mx-auto mb-12">
              We provide end-to-end mortgage servicing solutions, including Pre-Underwriting, Post-Underwriting, Post-Closing QC, Loan Onboarding etc.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-10">
          {/* Mortgage Services Overview */}
          <div className="max-w-6xl mx-auto ">
            <div className="text-center mb-5">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Mortgage <span className="text-[#38B2FF]">Services</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#38B2FF] to-[#7ED4FF] mx-auto mb-6"></div>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed max-w-4xl mx-auto">
                <span className="font-semibold text-[#38B2FF]">Truefy Technologies</span> is a business process transformation company providing comprehensive solutions driven by technology for mortgage servicing and offshore services. We deliver cost-effective, efficient, and quality-driven solutions, adapting to the evolving industry requirements.
              </p>
            </div>
          </div>

          {/* Dedicated to Client Success Section */}
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
                    Dedicated to Client Success
                  </h3>
                  <p className="text-xs md:text-sm text-white/95 mb-6 leading-relaxed">
                    Truefy Technologies is a business process transformation company providing comprehensive solutions driven by technology for mortgage servicing and offshore services. We deliver cost-effective, efficient, and quality-driven solutions, adapting to the evolving industry requirements.
                  </p>
                  <p className="text-xs md:text-sm text-white/95 mb-6 leading-relaxed">
                    Our team consists of industry experts with extensive knowledge and experience in collaborating with top-tier origination and servicing companies. Trueintech's management team holds certifications from the Mortgage Bankers Association's education arm in servicing and origination, ensuring firsthand understanding of the dynamic nature of the mortgage industry. Together, we offer immediate insights into industry changes, regulatory updates, and compliance requirements, enabling us to deliver top-notch solutions.
                  </p>
                  <p className="text-xs md:text-sm text-white/95 mb-8 leading-relaxed">
                    Recognizing the importance of compliance with regulatory requirements, we conduct thorough quality checks throughout various processes. We focus on the bigger picture, ensuring that our work enhances the quality of the loans we service.
                  </p>
                  <p className="text-xs md:text-sm text-white/95 mb-8 leading-relaxed">
                    Our meticulous due diligence process underscores our understanding and expertise in the processes. We work closely with our clients, providing clear action plans to address their questions and concerns.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold text-xs md:text-sm">
                      Cost-Effective Solutions
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold text-xs md:text-sm">
                      Quality-Driven
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold text-xs md:text-sm">
                      Industry Experts
                    </span>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Key Highlights Section */}
          <div className="bg-gradient-to-br from-[#38B2FF]/5 to-[#7ED4FF]/5 max-w-7xl mx-auto py-5">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center mt-10">
              Our <span className="text-[#38B2FF]">Key Highlights</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-5">
              {keyHighlights.map((highlight, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#7ED4FF] shadow-lg hover:shadow-2xl transition-all duration-500 group h-full flex flex-col"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#38B2FF]/10 to-[#7ED4FF]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                  <h4 className="text-med md:text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#38B2FF] transition-colors duration-300">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed flex-1">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mortgage Services List Section */}
          <div className="max-w-7xl mx-auto py-5">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-[#38B2FF]/10 rounded-lg mr-4">
                <FaHome className="text-3xl text-[#38B2FF]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Comprehensive <span className="text-[#38B2FF]">Mortgage Services</span>
              </h3>
            </div>
            <p className="text-xs md:text-sm text-gray-600 mb-6 max-w-3xl">
              We provide end-to-end mortgage servicing solutions, including Pre-Underwriting, Post-Underwriting, Post-Closing QC, Loan Onboarding, Escrow Setup, Tax Research, Lien Release, Skip Tracing, Property Preservation, Appraisal Services, Loss Mitigation and REO Services.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mortgageServicesList.map((service, index) => (
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

          {/* What We Offer Section */}
          <div className="max-w-7xl mx-auto py-5">
            <div className="bg-gradient-to-br from-[#38B2FF]/5 to-[#7ED4FF]/5 rounded-3xl p-8 md:p-12">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-[#38B2FF]/10 rounded-lg mr-4">
                  <FaFileAlt className="text-3xl text-[#38B2FF]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  What <span className="text-[#38B2FF]">We Offer</span>
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {whatWeOfferServices.map((service, index) => (
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

          {/* Why Choose Us Section */}
          <div className="max-w-7xl mx-auto py-5">
            <div className="rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Why Choose <span className="text-[#38B2FF]">Us</span>?
              </h3>
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  {whyChooseUsPoints.map((point, index) => (
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
            alt="Mortgage Services Partnership Background" 
            className="w-full h-full object-cover object-top opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-blue-800/60 mix-blend-multiply"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 mt-40 mb-12">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">
              Ready to Streamline Your Mortgage Services?
            </h2>
            <p className="text-white/90 text-xs md:text-sm mb-6 max-w-2xl mx-auto">
              Partner with us for end-to-end mortgage servicing solutions driven by technology and industry expertise
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

export default MortgageServicesPage;