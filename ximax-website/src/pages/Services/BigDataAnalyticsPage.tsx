import React from 'react';
import {
  FaCheckCircle,
  FaDatabase,
  FaCloud,
  FaBrain,
  FaRobot,
  FaLanguage,
  FaTag,
  FaVideo,
  FaFilter,
  FaProjectDiagram,
  FaRegChartBar,
  FaRProject,
  FaNetworkWired,
  FaMicroscope,
  FaCode,
  FaDna,
  FaEye,
  FaRegCopy,
  FaMicrophone,
  FaCogs,
  FaServer,
  FaRocket,
  FaHome
} from 'react-icons/fa';
import { SiApachehadoop, SiPython} from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

const BigDataAnalyticsPage: React.FC = () => {
  const navigate = useNavigate();


  // Services Portfolio Data
  const servicesPortfolio = [
    // {
    //   icon: <FaChartLine className="text-2xl text-[#38B2FF]" />,
    //   title: "Big Data & Analytics",
    //   description: "Comprehensive BI, big data and analytics solutions for processing large amounts of business data and providing real-time reports",
    //   path: "/big-data-analytics"
    // },
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
    },
    {
      icon: <FaHome className="text-2xl text-[#38B2FF]" />,
      title: "Mortgage Services",
      description: "End-to-end mortgage servicing solutions including Pre-Underwriting, Post-Closing QC, Loan Onboarding and more",
      path: "/mortgage-services"
    }
  ];

  // Big Data & Analytics Services
  const bigDataServices = [
    "Data warehouse and data mining design and implementation",
    "Collect and analyze data in real-time",
    "Data visualization",
    "Standard and custom reports",
    "Data analytics and forecasting",
    "Analyzing high volume structured and unstructured data",
    "Data migration"
  ];

  // Big Data Technologies
  const bigDataTechnologies = [
    {
      icon: <FaProjectDiagram className="text-3xl text-[#38B2FF]" />,
      title: "Data integration and aggregation"
    },
    {
      icon: <FaDatabase className="text-3xl text-[#7ED4FF]" />,
      title: "Data Warehousing: ROLAP, MOLAP, HOLAP"
    },
    {
      icon: <FaNetworkWired className="text-3xl text-[#38B2FF]" />,
      title: "Data-mining: Classification, Regression, Clustering, Association, Sequence Analysis"
    },
    {
      icon: <FaRegChartBar className="text-3xl text-[#7ED4FF]" />,
      title: "Reporting: Cognos, Jasper, Qlikview, SSRS, Pentaho BI, Hive"
    },
    {
      icon: <SiApachehadoop className="text-3xl text-[#38B2FF]" />,
      title: "Hadoop platform, Map Reduce, Pentaho, MS BI Platform"
    },
    {
      icon: <FaRProject className="text-3xl text-[#7ED4FF]" />,
      title: "Statistical computing: R language"
    }
  ];

  // AI Development Expertise
  const aiExpertise = [
    {
      icon: <FaMicrophone className="text-3xl text-[#38B2FF]" />,
      title: "Speech and Audio",
      description: "Voice-activated device control, voice Assistance Integrated with AI for messaging, email and more"
    },
    {
      icon: <FaBrain className="text-3xl text-[#7ED4FF]" />,
      title: "Machine Learning",
      description: "Accessible and affordable enterprise-level machine learning applications"
    },
    {
      icon: <FaDna className="text-3xl text-[#38B2FF]" />,
      title: "Deep Learning",
      description: "Implementation of simpler concepts with more abstract representations using CNN, RNN, LSTM"
    },
    {
      icon: <FaRegCopy className="text-3xl text-[#7ED4FF]" />,
      title: "Text Decoding",
      description: "Decoding, transcription, comparison, classification, extraction, OCR, ICR for structured and unstructured text"
    },
    {
      icon: <FaTag className="text-3xl text-[#38B2FF]" />,
      title: "Image Labeling",
      description: "Accurate labeling of objects, images, regions with bounding boxes, polygon selection, cuboid selection, attributes tagging"
    },
    {
      icon: <FaVideo className="text-3xl text-[#7ED4FF]" />,
      title: "Video Annotations",
      description: "Automatic identification of classes, multiple shapes, localization support, image segmentation for actionable insights"
    }
  ];

  // AI Technologies
  const aiTechnologies = [
    { icon: <SiPython className="text-3xl text-[#38B2FF]" />, name: "Python" },
    { icon: <FaRobot className="text-3xl text-[#7ED4FF]" />, name: "R Language" },
    { icon: <FaEye className="text-3xl text-[#38B2FF]" />, name: "OpenCV, Computer Vision" },
    { icon: <FaLanguage className="text-3xl text-[#7ED4FF]" />, name: "NLP: NLTK, SPACY, GENSIM" },
    { icon: <FaMicroscope className="text-3xl text-[#38B2FF]" />, name: "Neural Networks: CNN, RNN, LSTM" },
    { icon: <FaCode className="text-3xl text-[#7ED4FF]" />, name: "Machine Learning Algorithms" }
  ];

  // Function to handle solution click
  const handleSolutionClick = (path: string) => {
    navigate(path);
  };

  return (
    <div id='big-data-analytics' className="min-h-screen bg-gray-50 -mt-8">
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
                Big Data & Analytics
              </h1>
            </div>
            
            <p className="text-xs md:text-base text-white/90 max-w-3xl mx-auto mb-12">
              Our BI, big data and analytics team has supported many customers in building BI and analytics solutions 
              to process large amounts of business data and provide real-time reports for business decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-10">
          {/* Big Data & Analytics Overview */}
          <div className="max-w-6xl mx-auto ">
            <div className="text-center mb-5">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Big Data <span className="text-[#38B2FF]">& Analytics</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#38B2FF] to-[#7ED4FF] mx-auto mb-6"></div>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed max-w-4xl mx-auto">
                <span className="font-semibold text-[#38B2FF]">Ximax</span> leverages cutting-edge big data technologies and advanced analytics 
                to transform raw data into actionable intelligence. Our comprehensive approach combines data warehousing, 
                real-time processing, and predictive modeling to deliver insights that drive strategic business decisions.
              </p>
            </div>
          </div>

          {/* Services Grid - Big Data Services */}
          <div className="max-w-7xl mx-auto ">
            <div className="bg-gradient-to-br from-[#38B2FF]/5 to-[#7ED4FF]/5 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
                Our <span className="text-[#38B2FF]">Big Data Services</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bigDataServices.map((service, index) => (
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

          {/* Technologies Section */}
          <div className="max-w-7xl mx-auto py-5 ">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center mt-10">
              Big Data <span className="text-[#38B2FF]">Technologies</span>
            </h3>
            <p className="text-xs md:text-sm text-gray-600 text-center max-w-3xl mx-auto">
              We leverage modern data platforms and tools to build scalable, high-performance analytics solutions
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
              {bigDataTechnologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#38B2FF] shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-[#38B2FF]/10 transition-colors duration-300">
                      {tech.icon}
                    </div>
                    <span className="text-xs md:text-sm font-semibold text-gray-800 group-hover:text-[#38B2FF] transition-colors duration-300">
                      {tech.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* ML Algorithms - Commented out */}
          </div>

          {/* Innovative AI Development Section */}
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
                    Innovative AI Development
                  </h3>
                  <p className="text-xs md:text-sm text-white/95 mb-8 leading-relaxed">
                    Our Artificial Intelligence Development services redefine the way businesses operate. We, at Ximax, 
                    a leading AI development company, believe in delivering end to end AI integrated apps covering wide 
                    range of industries. Our tailor-made AI solutions help your business to build data-driven strategies, 
                    expedite the decision-making process, and deliver a personalized experience to your customers.
                  </p>
                  <p className="text-xs md:text-sm text-white/95 mb-8 leading-relaxed">
                    Our team has right mix of technical skills and business acumen to deliver high quality solutions. 
                    We have deep knowledge in Neural Networks such CNN, RNN, LSTM etc. besides OpenCV, Computer Vision, 
                    NLP (NLTK, SPACY, GENSIM). We convert your idea into reality to keep you look smart and spontaneous, 
                    hardly matter how complex your AI App idea is.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold text-xs md:text-sm">
                      End-to-End AI Integration
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold text-xs md:text-sm">
                      Custom AI Solutions
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold text-xs md:text-sm">
                      Neural Networks Expert
                    </span>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* AI Development Expertise */}
          <div className="max-w-7xl mx-auto py-5">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center mt-10">
              Our AI Development <span className="text-[#7ED4FF]">Expertise</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiExpertise.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#7ED4FF] shadow-lg hover:shadow-2xl transition-all duration-500 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#38B2FF]/10 to-[#7ED4FF]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-med md:text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#38B2FF] transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* AI Technology Stack */}
          <div className="max-w-7xl mx-auto py-5">
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                AI & Machine Learning <span className="text-[#38B2FF]">Tech Stack</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {aiTechnologies.map((tech, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <div className="mb-3">
                      {tech.icon}
                    </div>
                    <span className="text-xs md:text-sm font-semibold text-gray-800">{tech.name}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 text-center">
                <p className="text-xs md:text-sm text-gray-600 italic">
                  "Deep knowledge in Neural Networks: CNN, RNN, LSTM • OpenCV • Computer Vision • NLP (NLTK, SPACY, GENSIM)"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Portfolio Section - Updated with 6 services in one row */}
      <section className="py-5 bg-gray-50">
        <div className="container mx-auto px-4 mt-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
            Our <span className="text-[#7ED4FF]">Services Portfolio</span>
          </h2>
          <p className="text-xs md:text-sm text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Explore our comprehensive range of technology services designed to transform your business
          </p>
          
          {/* Services Grid - All 6 services in one row on desktop */}
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
             Ready to Transform Your Data into Actionable Insights?
          </h2>
          <p className="text-white/90 text-xs md:text-sm mb-6 max-w-2xl mx-auto">
            Partner with us to build scalable big data and AI solutions that drive business growth
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

export default BigDataAnalyticsPage;