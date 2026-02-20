import {
  FaCheckCircle,
  FaCloud,
  FaCogs,
  FaChartLine,
  FaFilter,
  FaServer,
  FaCode,
  FaUsers,
  FaCube,
  FaRocket,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const DigitalTransformationPage: React.FC = () => {
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
    // {
    //   icon: <FaCogs className="text-2xl text-[#7ED4FF]" />,
    //   title: "Digital Transformation",
    //   description: "End-to-end digital transformation solutions to modernize business processes and operations",
    //   path: "/digital-transformation"
    // },
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

  // Digital Transformation Services - Engage Customers Better
  const engageCustomersServices = [
    "Intelligent Customer Experience/Personalized",
    "Omni Channel experience for the entire customer journey",
    "Customer Insight/Social Sentiment Analysis",
    "Digital Marketing",
    "Customer feedback and sharing experience"
  ];

  // Digital Transformation Services - Digital Operations
  const digitalOperationsServices = [
    "Rapid Experimentation – Digital MV Prototypes & A/B Testing",
    "Supply Chain Digitization",
    "Mass Personalization",
    "Increase workforce collaboration and productivity",
    "Better Performance Management – Real time data using sensors/event-based triggers for goal-based manufacturing"
  ];

  // Digital Transformation Outcomes
  const transformationOutcomes = [
    {
      icon: <FaUsers className="text-3xl text-[#38B2FF]" />,
      title: "Engage Customers Better",
      description: "Intelligent Customer Experience, Omni Channel journey, Customer Insight, Digital Marketing, and feedback sharing"
    },
    {
      icon: <FaCube className="text-3xl text-[#7ED4FF]" />,
      title: "Digital Products and Services",
      description: "Connected products, Value added services, Intelligent apps and devices, Boundary less (Open) solutions"
    },
    {
      icon: <FaCogs className="text-3xl text-[#38B2FF]" />,
      title: "Digital Operations",
      description: "Rapid Experimentation, Supply Chain Digitization, Mass Personalization, Workforce collaboration, Real-time Performance Management"
    }
  ];

  // Why Digital Transformation Points
  const whyDigitalPoints = [
    "Technology is incomplete without a proper strategy in place",
    "Conclusive strategy is a primal driving force for successful Digital Transformation",
    "Technology coupled with solid business strategy drives organization's Digital Transformation",
    "Create value and new services for various stakeholders",
    "Innovate and acquire capabilities to rapidly adapt to changing circumstances"
  ];

  // Function to handle solution click
  const handleSolutionClick = (path: string) => {
    navigate(path);
  };

  return (
    <div id='digital-transformation' className="min-h-screen bg-gray-50 -mt-8">
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
                Digital Transformation
              </h1>
            </div>
            
            <p className="text-xs md:text-base text-white/90 max-w-3xl mx-auto mb-12">
              In this age of digital disruption, emerging technologies and human centric transformation help enterprises to create more adaptive models, processes and systems. At Ximax, we assist companies accelerate their Digital Transformation through our comprehensive expertise in devices, apps and analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-10">
          {/* Digital Transformation Overview */}
          <div className="max-w-6xl mx-auto ">
            <div className="text-center mb-5">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Digital <span className="text-[#38B2FF]">Transformation</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#38B2FF] to-[#7ED4FF] mx-auto mb-6"></div>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed max-w-4xl mx-auto">
                <span className="font-semibold text-[#38B2FF]">Ximax</span> leverages nearly two decades of experience in delivering robust, innovative and reliable solutions in product development. We help our customers achieve key Digital Transformation outcomes through comprehensive expertise in devices, apps and analytics.
              </p>
            </div>
          </div>

          {/* Digital Strategy is Paramount Section */}
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
                    Digital Strategy is Paramount
                  </h3>
                  <p className="text-xs md:text-sm text-white/95 mb-6 leading-relaxed">
                    Contrary to the popular belief, technology is incomplete without a proper strategy in place. Having a conclusive strategy is a primal driving force for a successful Digital Transformation of any business.
                  </p>
                  <p className="text-xs md:text-sm text-white/95 mb-6 leading-relaxed">
                    Our evolutionary journey and experience working with various customers for over two decades has taught us that technology, coupled with a solid business strategy, drives an organization's Digital Transformation wheel. We understand this and hence help businesses thrive by carving out and executing the right strategy to provide necessary competitive advantage and success.
                  </p>
                  <p className="text-xs md:text-sm text-white/95 mb-8 leading-relaxed">
                    Digital transformation (also DX or DT) leverages technologies to create value and new services for various stakeholders (customers in the broadest possible sense), innovate and acquire the capabilities to rapidly adapt to changing circumstances.
                  </p>
                  <p className="text-xs md:text-sm text-white/95 mb-8 leading-relaxed">
                    While digital transformation is predominantly used in a business context, it also impacts other organizations such as governments, public sector agencies and organizations which are involved in tackling societal challenges such as pollution and aging populations by leveraging one or more of these existing and emerging technologies.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold text-xs md:text-sm">
                      Strategy First
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold text-xs md:text-sm">
                      Human Centric
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold text-xs md:text-sm">
                      Adaptive Models
                    </span>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Our Offerings Section */}
          <div className="bg-gradient-to-br from-[#38B2FF]/5 to-[#7ED4FF]/5 max-w-7xl mx-auto py-5">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center mt-10">
              Our <span className="text-[#38B2FF]">Offerings</span>
            </h3>
            <p className="text-xs md:text-sm text-gray-600 text-center max-w-3xl mx-auto mb-10">
              With nearly two decades of experience in delivering robust, innovative and reliable solutions in product development, we help our customers achieve the below key Digital Transformation outcomes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-5">
              {transformationOutcomes.map((outcome, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#7ED4FF] shadow-lg hover:shadow-2xl transition-all duration-500 group h-full flex flex-col"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#38B2FF]/10 to-[#7ED4FF]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {outcome.icon}
                  </div>
                  <h4 className="text-med md:text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#38B2FF] transition-colors duration-300">
                    {outcome.title}
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed flex-1">
                    {outcome.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Engage Customers Better Section */}
          <div className="max-w-7xl mx-auto py-5">
            <div className="rounded-3xl p-8 md:p-12">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-[#38B2FF]/10 rounded-lg mr-4">
                  <FaUsers className="text-3xl text-[#38B2FF]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Engage <span className="text-[#38B2FF]">Customers Better</span>
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {engageCustomersServices.map((service, index) => (
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

          {/* Digital Products and Services Section */}
          {/* <div className="max-w-7xl mx-auto py-5">
            <div className="bg-gradient-to-br from-[#38B2FF]/5 to-[#7ED4FF]/5 rounded-3xl p-8 md:p-12">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-[#38B2FF]/10 rounded-lg mr-4">
                  <FaCube className="text-3xl text-[#7ED4FF]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Digital <span className="text-[#7ED4FF]">Products and Services</span>
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {digitalProductsServices.map((service, index) => (
                  <div 
                    key={index} 
                    className="flex items-start bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#38B2FF] hover:scale-105"
                  >
                    <FaCheckCircle className="text-[#38B2FF] text-xl mt-1 mr-4 flex-shrink-0" />
                    <span className="text-gray-800 text-xs md:text-sm font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div> */}

          {/* Digital Operations Section */}
          <div className="max-w-7xl mx-auto py-5">
            <div className="bg-gradient-to-br from-[#38B2FF]/5 to-[#7ED4FF]/5 rounded-3xl p-8 md:p-12">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-[#38B2FF]/10 rounded-lg mr-4">
                  <FaCogs className="text-3xl text-[#38B2FF]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Digital <span className="text-[#38B2FF]">Operations</span>
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {digitalOperationsServices.map((service, index) => (
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

          {/* Why Digital Transformation Section */}
          <div className="max-w-7xl mx-auto py-5">
            <div className="rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Why <span className="text-[#38B2FF]">Digital Transformation</span>?
              </h3>
              <div className="max-w-4xl mx-auto">
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-6 text-center">
                  Digital transformation leverages technologies to create value and new services for various stakeholders, innovate and acquire the capabilities to rapidly adapt to changing circumstances. With nearly two decades of experience, we help businesses thrive by carving out and executing the right strategy to provide necessary competitive advantage and success.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  {whyDigitalPoints.map((point, index) => (
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {servicesPortfolio.map((service, idx) => (
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
              Ready to Start Your Digital Transformation Journey?
          </h2>
          <p className="text-white/90 text-xs md:text-sm mb-6 max-w-2xl mx-auto">
            Partner with us to create adaptive models, processes and systems for your business
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

export default DigitalTransformationPage;