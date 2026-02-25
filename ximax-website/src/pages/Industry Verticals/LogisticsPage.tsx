import {
  FaCheckCircle,
  FaChartLine,
  FaTruck,
  FaShip,
  FaPlane,
  FaWarehouse,
  FaWifi,
  FaIndustry,
  FaShoppingCart,
  FaHeartbeat,
  FaRocket
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LogisticsPage: React.FC = () => {
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
//   {
//     icon: <FaTruck className="text-2xl text-[#7ED4FF]" />,
//     title: "Logistics",
//     description: "Comprehensive transportation and logistics management systems including fleet management, route optimization, and real-time tracking platforms",
//     path: "/logistics"
//   }
];

  // Logistics Services
  const logisticsServices = [
    "Online booking systems for travel and logistics",
    "Remote travel management solutions",
    "New age CRM programs for logistics industry",
    "Flatter distribution structure with fewer intermediate stages",
    "Cost reduction across logistics activities",
    "Order processing optimization",
    "Warehousing and shipping management",
    "Delivery and payment systems integration"
  ];

  // Logistics Solutions
//   const logisticsSolutions = [
//     {
//       icon: <FaGlobe className="text-3xl text-[#38B2FF]" />,
//       title: "Online Booking"
//     },
//     {
//       icon: <FaClock className="text-3xl text-[#7ED4FF]" />,
//       title: "Remote Travel Management"
//     },
//     {
//       icon: <FaChartLine className="text-3xl text-[#38B2FF]" />,
//       title: "New Age CRM Programs"
//     },
//     {
//       icon: <FaBoxes className="text-3xl text-[#7ED4FF]" />,
//       title: "Distribution Structure"
//     },
//     {
//       icon: <FaDollarSign className="text-3xl text-[#38B2FF]" />,
//       title: "Cost Optimization"
//     },
//     {
//       icon: <FaWarehouse className="text-3xl text-[#7ED4FF]" />,
//       title: "Warehousing Solutions"
//     }
//   ];

  // Logistics Benefits
  const logisticsBenefits = [
    {
      icon: <FaTruck className="text-3xl text-[#38B2FF]" />,
      title: "Reduced Overall Costs",
      description: "Significant reduction in overall costs through optimized logistics operations and streamlined processes."
    },
    {
      icon: <FaShip className="text-3xl text-[#7ED4FF]" />,
      title: "Shift in Cost Distribution",
      description: "Strategic redistribution of costs between order processing, warehousing, shipping, delivery, and payment activities."
    },
    {
      icon: <FaPlane className="text-3xl text-[#38B2FF]" />,
      title: "Flatter Distribution",
      description: "Building flatter distribution structures requiring fewer intermediate stages where time and cost are added."
    },
    {
      icon: <FaWarehouse className="text-3xl text-[#7ED4FF]" />,
      title: "Enhanced Efficiency",
      description: "Improved operational efficiency across the entire logistics value chain from order to delivery."
    }
  ];

  // Why Ximax Points
  const whyXimaxPoints = [
    "Specialized expertise in travel and logistics industry solutions",
    "Proven track record in creating new propositions for customers",
    "Experience in building flatter distribution structures",
    "Comprehensive understanding of logistics cost optimization"
  ];

  // Function to handle solution click
  const handleSolutionClick = (path: string) => {
    navigate(path);
  };

  return (
    <div id='logistics' className="min-h-screen bg-gray-50 -mt-8">
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
          Logistics & Travel
        </h1>
      </div>
      
      <p className="text-xs md:text-base text-white/90 max-w-3xl mx-auto mb-12">
        Ximax can help the travel industry in creating new propositions for its customers - online booking, remote travel management, and new age CRM programs.
            </p>
    </div>
  </div>
</section>

      {/* Main Content Section */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-10">
          {/* Logistics Overview */}
          <div className="max-w-6xl mx-auto ">
            <div className="text-center mb-5">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Logistics & <span className="text-[#38B2FF]">Travel Solutions</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#38B2FF] to-[#7ED4FF] mx-auto mb-6"></div>
              <p className="text-xs md:text-sm text-left text-gray-700 leading-relaxed max-w-4xl mx-auto">
                <span className="font-semibold text-[#38B2FF]">Ximax</span> helps the travel and logistics industry in creating new propositions for its customers. Driving the logistics industry ahead, we help in building a flatter distribution structure requiring fewer intermediate stages where time and cost are added. We assist you in reducing overall costs and a shift in the distribution of costs between the various logistics activities such as order processing, warehousing, shipping, delivery, and payment.
              </p>
            </div>
          </div>

          {/* Services Grid - Logistics Services */}
          <div className="max-w-7xl mx-auto ">
            <div className="bg-gradient-to-br from-[#38B2FF]/5 to-[#7ED4FF]/5 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
                Our <span className="text-[#38B2FF]">Logistics Services</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {logisticsServices.map((service, index) => (
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

          {/* Logistics Solutions Section */}
          {/* <div className="max-w-7xl mx-auto py-5 ">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center mt-10">
              Logistics <span className="text-[#38B2FF]">Solutions</span>
            </h3>
            <p className="text-xs md:text-sm text-gray-600 text-center max-w-3xl mx-auto">
              Comprehensive technology solutions for the modern logistics industry
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
              {logisticsSolutions.map((solution, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#38B2FF] shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-[#38B2FF]/10 transition-colors duration-300">
                      {solution.icon}
                    </div>
                    <span className="text-xs md:text-sm font-semibold text-gray-800 group-hover:text-[#38B2FF] transition-colors duration-300">
                      {solution.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          {/* Logistics Innovation Section */}
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
                    Driving Logistics Forward
                  </h3>
                  <p className="text-xs md:text-sm text-white/95 mb-6 leading-relaxed">
                    Building a flatter distribution structure requiring fewer intermediate stages
                  </p>
                  <p className="text-xs md:text-sm text-white/95 mb-8 leading-relaxed">
                    Driving the logistics industry ahead, Ximax helps in building a flatter distribution structure requiring fewer intermediate stages where time and cost are added. We can help you in reducing overall costs and a shift in the distribution of costs between the various logistics activities such as order processing, warehousing, shipping, delivery, and payment.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold text-xs md:text-sm">
                      Online Booking Systems
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold text-xs md:text-sm">
                      Remote Travel Management
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold text-xs md:text-sm">
                      New Age CRM
                    </span>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Logistics Benefits Section */}
          <div className="bg-gradient-to-br from-[#38B2FF]/5 to-[#7ED4FF]/5 max-w-7xl mx-auto py-5">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center mt-10">
              Cost Optimization & <span className="text-[#7ED4FF]">Efficiency Gains</span>
            </h3>
            <p className="text-xs md:text-sm text-gray-600 text-center max-w-3xl mx-auto">
              Driving down costs while improving service quality
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-5">
              {logisticsBenefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#7ED4FF] shadow-lg hover:shadow-2xl transition-all duration-500 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#38B2FF]/10 to-[#7ED4FF]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h4 className="text-med md:text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#38B2FF] transition-colors duration-300">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Ximax Section */}
          <div className="max-w-7xl mx-auto py-5">
            <div className="rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Why <span className="text-[#38B2FF]">Ximax</span> for Logistics Solutions?
              </h3>
              <div className="max-w-4xl mx-auto">
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-6 text-center">
                  With our deep expertise in logistics and travel technology, we help you create innovative propositions for your customers. From online booking systems to remote travel management and next-generation CRM programs, we deliver solutions that transform your logistics operations and drive significant cost savings across the entire value chain.
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
               Ready to Transform Your Logistics Operations?
          </h2>
          <p className="text-white/90 text-xs md:text-sm mb-6 max-w-2xl mx-auto">
            Partner with us to build innovative logistics and travel solutions that drive efficiency and reduce costs
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

export default LogisticsPage;