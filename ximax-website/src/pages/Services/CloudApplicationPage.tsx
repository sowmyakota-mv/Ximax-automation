import React from 'react';
import { BsMicrosoft } from 'react-icons/bs';
import {
  FaCheckCircle,
  FaDatabase,
  FaShieldAlt,
  FaRocket,
  FaCogs,
  FaChartLine,
  FaFilter,
  FaAws,
  FaServer,
  FaCode,
  FaHome,
} from 'react-icons/fa';
import { SiGooglecloud, SiSalesforce, SiHeroku, SiVmware, SiAmazonapigateway } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

const CloudApplicationsPage: React.FC = () => {
  const navigate = useNavigate();


  // Services Portfolio Data
  const servicesPortfolio = [
    {
      icon: <FaChartLine className="text-2xl text-[#38B2FF]" />,
      title: "Big Data & Analytics",
      description: "Comprehensive BI, big data and analytics solutions for processing large amounts of business data and providing real-time reports",
      path: "/big-data-analytics"
    },
    // {
    //   icon: <FaCloud className="text-2xl text-[#7ED4FF]" />,
    //   title: "Cloud Applications",
    //   description: "Design, development and migration of applications to cloud environments including AWS, Azure and Google Cloud",
    //   path: "/cloud-applications"
    // },
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

  // Cloud Application Services
  const cloudServices = [
    "Application development on cloud: build and maintain custom applications using Amazon, Azure, Google App Engine, etc.",
    "Porting application to cloud: port current applications to cloud architecture",
    "SaaS implementation: implement a SaaS solution or transition a current application to a SaaS model",
    "Cloud applications testing: solution to test cloud based applications",
    "Cloud administration: setup, configure, monitor, and manage cloud infrastructure"
  ];

  // Cloud Platforms
  const cloudPlatforms = [
    {
      icon: <SiAmazonapigateway className="text-3xl text-[#38B2FF]" />,
      title: "Amazon Cloud (AWS)"
    },
    {
      icon: <SiSalesforce className="text-3xl text-[#7ED4FF]" />,
      title: "Salesforce.com"
    },
    {
      icon: <BsMicrosoft className="text-3xl text-[#38B2FF]" />,
      title: "MS Azure, SQL Azure, Azure Mobile, Signal R, Notification Hub, Azure Service Bus"
    },
    {
      icon: <SiGooglecloud className="text-3xl text-[#7ED4FF]" />,
      title: "Google App Engine"
    },
    {
      icon: <SiHeroku className="text-3xl text-[#38B2FF]" />,
      title: "Heroku"
    },
    {
      icon: <SiVmware className="text-3xl text-[#7ED4FF]" />,
      title: "VMWare"
    }
  ];

  // Cloud Migration Benefits
  const migrationBenefits = [
    {
      icon: <FaCogs className="text-3xl text-[#38B2FF]" />,
      title: "Simplicity",
      description: "No coding. Use an intuitive and configurable GUI to quickly and easily set up data migrations with no manual coding."
    },
    {
      icon: <FaRocket className="text-3xl text-[#7ED4FF]" />,
      title: "Zero Downtime Migration",
      description: "With log-based CDC technology, enables continuous replication to avoid downtime and reduce impact on source database systems."
    },
    {
      icon: <FaShieldAlt className="text-3xl text-[#38B2FF]" />,
      title: "High Performance & Security",
      description: "Efficiently transfer data over WAN with optimized data transfer technology. Ensures data integrity and secure data transfer."
    },
    {
      icon: <FaDatabase className="text-3xl text-[#7ED4FF]" />,
      title: "Universal Platform Support",
      description: "Supports many data sources, including all major RDBMS, data warehouses, and mainframe systems."
    }
  ];

  // Why Ximax Points
  const whyXimaxPoints = [
    "Keep in step with changes as needed as opposed to being stuck with what worked in the past",
    "Research staff dedicated to poring over the latest cloud developments",
    "Navigate the quickly changing waters of cloud computing",
    "Find the latest Cloud Computing Solutions and third-party providers tailored to your needs for today and tomorrow"
  ];

  // Function to handle solution click
  const handleSolutionClick = (path: string) => {
    navigate(path);
  };

  return (
    <div id='cloud-applications' className="min-h-screen bg-gray-50 -mt-8">
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
                Cloud Applications
              </h1>
            </div>
            
            <p className="text-xs md:text-base text-white/90 max-w-3xl mx-auto mb-12">
              In the last 7 years, our team has designed, developed and migrated many applications to cloud environment.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-10">
          {/* Cloud Applications Overview */}
          <div className="max-w-6xl mx-auto ">
            <div className="text-center mb-5">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Cloud <span className="text-[#38B2FF]">Applications</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#38B2FF] to-[#7ED4FF] mx-auto mb-6"></div>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed max-w-4xl mx-auto">
                <span className="font-semibold text-[#38B2FF]">Ximax</span> delivers comprehensive cloud application solutions that help enterprises embrace the economic and flexibility advantages of cloud platforms. Our team has designed, developed and migrated many applications to cloud environments including Amazon Web Services, Microsoft Azure and Google Cloud Platform.
              </p>
            </div>
          </div>

          {/* Services Grid - Cloud Services */}
          <div className="max-w-7xl mx-auto ">
            <div className="bg-gradient-to-br from-[#38B2FF]/5 to-[#7ED4FF]/5 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
                Our <span className="text-[#38B2FF]">Cloud Services</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cloudServices.map((service, index) => (
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

          {/* Cloud Platforms Section */}
          <div className="max-w-7xl mx-auto py-5 ">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center mt-10">
              Cloud <span className="text-[#38B2FF]">Platforms</span>
            </h3>
            <p className="text-xs md:text-sm text-gray-600 text-center max-w-3xl mx-auto">
              Our team can support a wide range of top cloud platforms
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
              {cloudPlatforms.map((platform, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#38B2FF] shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-[#38B2FF]/10 transition-colors duration-300">
                      {platform.icon}
                    </div>
                    <span className="text-xs md:text-sm font-semibold text-gray-800 group-hover:text-[#38B2FF] transition-colors duration-300">
                      {platform.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cloud Data Migration Section */}
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
                    Cloud Data Migration
                  </h3>
                  <p className="text-xs md:text-sm text-white/95 mb-6 leading-relaxed">
                    Accelerate your move to the cloud with easy, automated data transfer
                  </p>
                  <p className="text-xs md:text-sm text-white/95 mb-8 leading-relaxed">
                    Enterprises are embracing the economic and flexibility advantages of cloud platforms, such as Amazon Web Services, Microsoft Azure and Google Cloud Platform. But complex development efforts, performance issues and security risks can delay migrations and increase their costs. Enterprises need a simpler, faster, and safer path to accelerate data migration and realize the benefits of the cloud.
                  </p>
                  <p className="text-xs md:text-sm text-white/95 mb-8 leading-relaxed">
                    Ximax can help with its cloud-optimized data replication and transfer software. Ximax Replicate™ is a data replication and transfer solution that simplifies and accelerates data migration from many databases to many cloud platforms, efficiently and securely.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold text-xs md:text-sm">
                      Simple & Low Impact Migration
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold text-xs md:text-sm">
                      Zero Downtime
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold text-xs md:text-sm">
                      High Performance Transfer
                    </span>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Migration Benefits Section */}
          <div className="max-w-7xl mx-auto py-5">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center mt-10">
              Simple and Low Impact <span className="text-[#7ED4FF]">Migration to the Cloud</span>
            </h3>
            <p className="text-xs md:text-sm text-gray-600 text-center max-w-3xl mx-auto">
              With Ximax Replicate, enterprises gain:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-5">
              {migrationBenefits.map((benefit, index) => (
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

          {/* Universal Platform Support */}
          <div className="max-w-7xl mx-auto py-5">
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Universal <span className="text-[#38B2FF]">Platform Support</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-4">
                    Ximax Replicate supports many data sources, including all major RDBMS, data warehouses, and mainframe systems.
                  </p>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-4">
                    Migrate data to AWS, including all RDS databases, Amazon Redshift, Microsoft Azure SQL database and Warehouse, and Google Cloud SQL.
                  </p>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    Use Ximax Replicate on-premise or in the cloud.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md">
                    <FaAws className="text-3xl text-[#38B2FF] mb-2" />
                    <span className="text-xs font-semibold text-gray-800">AWS</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md">
                    <BsMicrosoft className="text-3xl text-[#7ED4FF] mb-2" />
                    <span className="text-xs font-semibold text-gray-800">Azure</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md">
                    <SiGooglecloud className="text-3xl text-[#38B2FF] mb-2" />
                    <span className="text-xs font-semibold text-gray-800">Google</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Ximax Section */}
          <div className="max-w-7xl mx-auto py-">
            <div className=" p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Why <span className="text-[#38B2FF]">Ximax</span> for Cloud Computing Solutions?
              </h3>
              <div className="max-w-4xl mx-auto">
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-6 text-center">
                  With cloud computing applications, you can keep in step with changes as needed as opposed to being stuck with what worked in the past, but might not anymore. With a research staff dedicated to poring over the latest cloud developments, we can help you navigate the quickly changing waters, finding the latest Cloud Computing Solution and third-party providers that are tailored to your needs for today and tomorrow.
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
              Ready to Accelerate Your Cloud Journey?
          </h2>
          <p className="text-white/90 text-xs md:text-sm mb-6 max-w-2xl mx-auto">
            Partner with us to design, develop and migrate your applications to the cloud
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

export default CloudApplicationsPage;