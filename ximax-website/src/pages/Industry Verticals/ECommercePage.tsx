import React from 'react';
import {
  FaCheckCircle,
  FaChartLine,
  FaStore,
  FaUsers,
  FaCube,
  FaTruck,
  FaWifi,
  FaIndustry,
  FaHeartbeat,
  FaRocket
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ECommercePage: React.FC = () => {
  const navigate = useNavigate();

  // Industry Verticals Portfolio Data
const industryVerticalsPortfolio = [
  {
    icon: <FaChartLine className="text-2xl text-[#38B2FF]" />,
    title: "Financial Services",
    description: "Secure and compliant financial technology solutions for modern banking, including core banking systems, payment gateways, and regulatory technology for financial institutions",
    path: "/financial"
  },
  {
    icon: <FaHeartbeat className="text-2xl text-[#7ED4FF]" />,
    title: "Healthcare Solutions",
    description: "Advanced healthcare technology solutions including EHR systems, telemedicine platforms, and medical practice management software for healthcare providers",
    path: "/healthcare"
  },
//   {
//     icon: <FaShoppingCart className="text-2xl text-[#38B2FF]" />,
//     title: "E-commerce",
//     description: "Scalable online retail platforms and digital marketplaces for global commerce, including custom shopping cart solutions and omnichannel platforms",
//     path: "/ecommerce"
//   },
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

  // E-Commerce Services for Online Retailers
  const onlineRetailerServices = [
    "Develop innovative storefronts using RIA",
    "Streamline order flow, integrate inventory feeds",
    "Enable seamless data exchange with vendors and partners",
    "Automate internal workflow processes",
    "Integrate web applications with ERP systems",
    "Develop custom CRM and personalization solutions for loyalty programs",
    "Intelligently use web services and APIs for integration with agencies like aggregators, credit rating agencies and other ecommerce providers"
  ];

  // E-Commerce Categories
  const ecommerceCategories = [
    {
      icon: <FaStore className="text-3xl text-[#38B2FF]" />,
      title: "Online Retailers",
      description: "Both established and startups looking to maximize revenue with existing budgets through skillful merchandizing, supply chain partnerships and appropriate technology"
    },
    {
      icon: <FaUsers className="text-3xl text-[#7ED4FF]" />,
      title: "SaaS Service Providers",
      description: "Payroll providers, marketing service / CRM providers, e-learning platforms and financial services providers"
    },
    {
      icon: <FaCube className="text-3xl text-[#38B2FF]" />,
      title: "ISVs – Vendors to E-Businesses",
      description: "Content management platform vendors, shopping cart vendors, eBusiness platforms, CRM providers and supply chain vendors"
    }
  ];

  // Web Application Development Services
  const webAppServices = [
    "Web application design and architecture (multi-tenant, scalable, extensible)",
    "Front end design (RIA)",
    "Making right choices in technologies, tools",
    "Consulting services for build or buy decisions",
    "Full cycle development services from Discovery to Design, Develop and Deploy",
    "Advisory on hosting and infrastructure services",
    "Performance Engineering",
    "Testing – Performance Testing, functional testing and validation",
    "Integration with external partners and ERP applications",
    "Database optimization",
    "Ongoing maintenance and support services"
  ];

  // Why FloorEdge Points
  const whyFloorEdgePoints = [
    "Reliable, scalable architecture that reduces downtime while withstanding large volumes of transactions",
    "Expertise in ecommerce, intranet and portal development",
    "Personalization technology and community-building expertise",
    "Design systems that manage customer information, analyze complex data sets, and target and deliver personalized content"
  ];

  // Function to handle solution click
  const handleSolutionClick = (path: string) => {
    navigate(path);
  };

  return (
    <div id='e-commerce' className="min-h-screen bg-gray-50 -mt-8">
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
          E-Commerce
        </h1>
      </div>
      
      <p className="text-xs md:text-base text-white/90 max-w-3xl mx-auto mb-12">
        Services for E-Businesses - We help e-businesses run and grow their operations profitably. 
              Plan business strategies, choose the right tools and technologies, build, develop or migrate 
              applications, run operations efficiently and transform revenue models through SaaS, Web 2.0.
            </p>
    </div>
  </div>
</section>

      {/* Main Content Section */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-10">
          {/* E-Commerce Overview */}
          <div className="max-w-6xl mx-auto ">
            <div className="text-center mb-5">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                E-<span className="text-[#38B2FF]">Commerce</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#38B2FF] to-[#7ED4FF] mx-auto mb-6"></div>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed max-w-4xl mx-auto">
                <span className="font-semibold text-[#38B2FF]">Ximax</span> helps e-businesses run and grow their operations profitably. 
                We help e-businesses plan their business strategies, choose the right tools and technologies, 
                build, develop or migrate their applications, run their operations efficiently and transform 
                their revenue models through SaaS, Web 2.0.
              </p>
            </div>
          </div>

          {/* E-Business Categories Section */}
          <div className="bg-gradient-to-br from-[#38B2FF]/5 to-[#7ED4FF]/5 max-w-7xl mx-auto py-5 ">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center mt-10">
              E-<span className="text-[#38B2FF]">Businesses</span>
            </h3>
            <p className="text-xs md:text-sm text-gray-600 text-center max-w-3xl mx-auto mb-2">
              We serve online retailers, SaaS providers, and ISVs with comprehensive e-commerce solutions
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
              {ecommerceCategories.map((category, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#38B2FF] shadow-md hover:shadow-xl transition-all duration-300 group h-full flex flex-col"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-[#38B2FF]/10 transition-colors duration-300">
                      {category.icon}
                    </div>
                    <h4 className="text-med md:text-xl font-semibold text-gray-800 group-hover:text-[#38B2FF] transition-colors duration-300">
                      {category.title}
                    </h4>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Online Retailers Services Section */}
          <div className="max-w-7xl mx-auto ">
            <div className=" rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
                Online <span className="text-[#38B2FF]">Retailers</span>
              </h3>
              <p className="text-xs md:text-sm text-gray-600 text-center max-w-3xl mx-auto mb-4">
                We help online retailers remain competitive through innovative solutions and technology
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {onlineRetailerServices.map((service, index) => (
                  <div 
                    key={index} 
                    className="flex items-start bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#7ED4FF] hover:scale-105"
                  >
                    <FaCheckCircle className="text-[#7ED4FF] text-xl mt-1 mr-4 flex-shrink-0" />
                    <span className="text-gray-800 text-xs md:text-sm font-medium">{service}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-xs md:text-sm text-gray-700 italic">
                  FloorEdge's performance testing and QA services help online retailers test and fortify their application for events, seasonal shoppers and unpredictable traffic scenarios.
                </p>
              </div>
            </div>
          </div>

          {/* Robust Web Application Development Section */}
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
                    Robust Web Application Development
                  </h3>
                  <p className="text-xs md:text-sm text-left text-white/95 mb-8 leading-relaxed">
  For over a decade, Ximax has specialized in building robust, high-capacity web applications and information systems tailored for online businesses. We leverage deep expertise in ecommerce, portal development, and data analytics to design scalable architectures that manage complex customer information and deliver personalized content. By prioritizing reliability and performance, our solutions effectively minimize downtime while seamlessly handling high transaction volumes.
</p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold text-xs md:text-sm">
                      Reliable & Scalable Architecture
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold text-xs md:text-sm">
                      High-Capacity Systems
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold text-xs md:text-sm">
                      Personalized Content Delivery
                    </span>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Web Application Development Services Section */}
          <div className="max-w-7xl mx-auto py-5">
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Web Application <span className="text-[#38B2FF]">Services</span>
              </h3>
              <p className="text-xs md:text-sm text-gray-600 text-center max-w-3xl mx-auto mb-8">
                Comprehensive web application development services for e-businesses
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {webAppServices.map((service, index) => (
                  <div 
                    key={index} 
                    className="flex items-start bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#7ED4FF]"
                  >
                    <FaCheckCircle className="text-[#7ED4FF] text-lg mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-xs md:text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Ximax Section */}
          <div className="max-w-7xl mx-auto py-5">
            <div className="rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Why <span className="text-[#38B2FF]">Ximax</span> for E-Commerce Solutions?
              </h3>
              <div className="max-w-4xl mx-auto">
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-6 text-center">
                  With our deep expertise in ecommerce, intranet and portal development, personalization technology, 
                  and community-building, we design systems that manage customer information, analyze complex data sets, 
                  and target and deliver personalized content. Our e-business solutions are characterized by a reliable, 
                  scalable architecture that reduces downtime while withstanding large volumes of transactions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  {whyFloorEdgePoints.map((point, index) => (
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
          background: 'linear-gradient(135deg, #38B2FF 0%, #7ED4FF 50%, #B0E6FF 100%)'
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
              Ready to Transform Your E-Commerce Business?
            </h2>
            <p className="text-white/90 text-xs md:text-sm mb-6 max-w-2xl mx-auto">
              Partner with us to build robust, scalable e-commerce solutions that drive growth and maximize revenue
          </p>
            <button onClick={()=>navigate("/contact-us")} className="inline-flex items-center gap-2 bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg">
              Get Started Today
              <FaRocket className="text-blue-600" />
            </button>
          </div>
        </div>
      </section>
      
      {/* <section 
        className="py-5"
        style={{
          background: 'linear-gradient(135deg, #38B2FF 0%, #7ED4FF 50%, #B0E6FF 100%)'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">
            Ready to Transform Your E-Commerce Business?
          </h2>
          <p className="text-white/90 text-xs md:text-sm mb-6 max-w-2xl mx-auto">
            Partner with us to build robust, scalable e-commerce solutions that drive growth and maximize revenue
          </p>
          <button className="inline-flex items-center gap-2 bg-white text-sky-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg">
            Get Started Today
          </button>
        </div>
      </section> */}
    </div>
  );
};

export default ECommercePage;