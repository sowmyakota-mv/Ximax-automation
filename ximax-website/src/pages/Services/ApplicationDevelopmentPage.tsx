import {
  FaCheckCircle,
  FaCloud,
  FaCogs,
  FaChartLine,
  FaFilter,
  FaServer,
  FaApple,
  FaAndroid,
  FaPhp,
  FaJava,
  FaPython,
  FaMicrosoft,
  FaRocket,
  FaHome,
} from 'react-icons/fa';
import { SiJavascript, SiMysql } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

const ApplicationDevelopmentPage: React.FC = () => {
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
    // {
    //   icon: <FaCode className="text-2xl text-[#38B2FF]" />,
    //   title: "Application Development",
    //   description: "Custom software product development, web development and application maintenance services",
    //   path: "/application-development"
    // },
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

  // Application Maintenance Services
  const appMaintenanceServices = [
    "Server Side Management",
    "Portal Maintenance",
    "Application Maintenance",
    "24/7 Production Support",
    "Security"
  ];

  // Our Services Include
  const ourServicesInclude = [
    "IT and Business Process Consulting",
    "Application Design, Development & Maintenance",
    "Legacy Application Migration",
    "Enterprise Application Integration",
    "Re-engineering",
    "Data Conversion, Migration and Maintenance",
    "Database Administration",
    "Security and Infrastructure support",
    "Application Hosting",
    "Offshore Outsourcing"
  ];

  // Benefits
  const benefits = [
    "Significant reduction of maintenance costs",
    "Timely release of programs and enhancements",
    "Improved knowledge management",
    "Portfolio optimization",
    "Cost variability for cyclical businesses",
    "Ongoing alignment with industry trends"
  ];

  // Technologies
  const technologies = [
    { icon: <FaMicrosoft className="text-3xl text-[#38B2FF]" />, name: ".NET" },
    { icon: <SiJavascript className="text-3xl text-[#7ED4FF]" />, name: "JavaScript" },
    { icon: <SiMysql className="text-3xl text-[#38B2FF]" />, name: "SQL" },
    { icon: <FaPhp className="text-3xl text-[#7ED4FF]" />, name: "PHP" },
    { icon: <FaJava className="text-3xl text-[#38B2FF]" />, name: "Java" },
    { icon: <FaPython className="text-3xl text-[#7ED4FF]" />, name: "Python" },
    { icon: <FaAndroid className="text-3xl text-[#38B2FF]" />, name: "Android" },
    { icon: <FaApple className="text-3xl text-[#7ED4FF]" />, name: "iOS" }
  ];

  // Function to handle solution click
  const handleSolutionClick = (path: string) => {
    navigate(path);
  };

  return (
    <div id='application-development' className="min-h-screen bg-gray-50 -mt-8">
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
                Application Development
              </h1>
            </div>
            
            <p className="text-xs md:text-base text-white/90 max-w-3xl mx-auto mb-12">
              Businesses today are embracing rapid web application development to propel growth and proficiency. 
              They're recognizing the need to enhance their productivity and efficiency, and provide better customer service 
              – all of which is possible with application development processes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-10">
          {/* Application Development Overview */}
          <div className="max-w-6xl mx-auto ">
            <div className="text-center mb-5">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Application <span className="text-[#38B2FF]">Development</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#38B2FF] to-[#7ED4FF] mx-auto mb-6"></div>
              <p className="text-xs md:text-sm text-left text-gray-700 leading-relaxed max-w-4xl mx-auto">
  <span className="font-semibold text-[#38B2FF]">Ximax</span> engineers high-performance, custom-tailored applications from the ground up or through legacy modernization. We specialize in cloud-native architectures, IoT solutions, and microservices, ensuring exceptional scalability and interoperability across web and mobile platforms. Utilizing languages like Java, Python, and C#, our team delivers innovative, automated, and user-friendly software designed to streamline complex corporate and consumer-facing environments.
</p>
            </div>
          </div>

          {/* Why Ximax Section */}
          <div className="max-w-7xl mx-auto py-5">
            <div className="bg-gradient-to-br from-[#38B2FF]/5 to-[#7ED4FF]/5 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Why <span className="text-[#38B2FF]">Ximax</span> for Application Development Services?
              </h3>
              <div className="max-w-4xl mx-auto ">
                <p className="text-xs md:text-sm text-left text-gray-700 leading-relaxed mb-6 text-center">
                  Ximax has a proven track record of offering application development services to a range of businesses, from small SMBs and SMEs to Fortune 500 companies. We provide our clients with end-to-end application development services, and understand that each business is unique. We customize the app development process depending on the type, size and nature of each business, as well as the specific requirements of the project.
                </p>
                <p className="text-xs md:text-sm text-left text-gray-700 leading-relaxed mb-6 text-center">
                  Our dedicated R&D team stays up-to-date with advances in the field to provide our clients with robust, intuitive and efficient app development solutions – solutions that give companies a competitive edge. Our skilled software engineers have a wide range of experience in developing high-end applications that are secure, scalable and bug-free.
                </p>
              </div>
            </div>
          </div>

          {/* Services Grid - Application Development Services */}
          {/* <div className="max-w-7xl mx-auto ">
            <div className="bg-gradient-to-br from-[#38B2FF]/5 to-[#7ED4FF]/5 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
                Our <span className="text-[#38B2FF]">Application Development Services</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {appDevServices.map((service, index) => (
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
          </div> */}

          {/* Creating the Right Custom App Section */}
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
                    Creating the Right Custom App at the Right Price
                  </h3>
                  <p className="text-xs md:text-sm text-white/95 mb-6 leading-relaxed">
                    Ximax custom application developers are experts with Microsoft .NET, JavaScript, SQL, PHP, & the mobile and web application technologies that you need to power your business applications. For over a decade, we've been delivering high quality custom application development services, custom software development, mobile apps, and web applications to mid-market clients across many industries.
                  </p>
                  <p className="text-xs md:text-sm text-white/95 mb-8 leading-relaxed">
                    Ximax brings together consulting expertise in custom application development, data management, integration, and software advisory services to provide complete end-to-end digital solutions for your biggest business challenges.
                  </p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Application Maintenance Services Section */}
          <div className="max-w-7xl mx-auto py-5">
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Application <span className="text-[#38B2FF]">Maintenance Services</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-4">
                    Our approach takes a complete view of technology, information design and services. We first understand domain, technology sitemap, and applications, then optimize and align team structures to deliver improved application support. With minimum downtime and volatility, your applications stay optimally geared to provide rapid responses to key change requests and business requests.
                  </p>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-4">
                    The data can be accessed from any part of the world with out any delay in time. The whole software will be uploaded in to a secured server which have a secondary server back up also for making the data safe.
                  </p>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    By leveraging our delivery model, we have helped our customers achieve significant cost savings in their maintenance spends. We have established metrics-based processes to handle transition and remote delivery of maintenance. We assume total responsibility for maintaining existing IT applications and have consistently delivered high service levels. Use of exclusive and third-party tools aid us in delivering the best to our customers.
                  </p>
                </div>
                <div>
                  <h4 className="text-med md:text-xl font-semibold text-gray-800 mb-4">
                    Our Application Maintenance Services:
                  </h4>
                  <div className="space-y-3">
                    {appMaintenanceServices.map((service, index) => (
                      <div key={index} className="flex items-start">
                        <FaCheckCircle className="text-[#7ED4FF] text-lg mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-xs md:text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="max-w-7xl mx-auto py-5">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center mt-10">
              <span className="text-[#7ED4FF]">Benefits</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#38B2FF] hover:scale-105"
                >
                  <FaCheckCircle className="text-[#38B2FF] text-xl mt-1 mr-4 flex-shrink-0" />
                  <span className="text-gray-800 text-xs md:text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Our Services Include Section */}
          <div className="max-w-7xl mx-auto py-5">
            <div className="bg-gradient-to-br from-[#38B2FF]/5 to-[#7ED4FF]/5 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Our <span className="text-[#38B2FF]">Services Include</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ourServicesInclude.map((service, index) => (
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
                  Our Services help customers to: Improve business focus, Achieve higher quality and productivity, 
                  Shorten project schedules, Utilize highly specialized knowledge, Add staff without overhead, Reduce overall IT cost
                </p>
              </div>
            </div>
          </div>

          {/* Technology Stack Section */}
          <div className="max-w-7xl mx-auto py-5">
            <div className="rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Our <span className="text-[#38B2FF]">Technology Stack</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                {technologies.map((tech, index) => (
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
             Ready to Build Your Custom Application?
          </h2>
          <p className="text-white/90 text-xs md:text-sm mb-6 max-w-2xl mx-auto">
            Partner with us to develop robust, scalable and high-performance applications tailored to your business needs
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

export default ApplicationDevelopmentPage;