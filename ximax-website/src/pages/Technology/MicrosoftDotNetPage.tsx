import { Server } from 'lucide-react';
import { BsMicrosoft } from 'react-icons/bs';
import {
  FaCheckCircle,
  FaCloud,
  FaDatabase,
  FaCogs,
  FaDesktop,
  FaMobile,
  FaShareAlt,
  FaWindows,
  FaMicrosoft,
  FaJava,
  FaGlobe,
  FaNetworkWired,
  FaRocket,
  FaServer,
  FaMicrochip
} from 'react-icons/fa';
import { 
  SiDotnet,
  SiSharp,
} from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

const MicrosoftDotNetPage: React.FC = () => {
  const navigate = useNavigate();

  // Technology Portfolio Data
const technologyPortfolio = [
//   {
//     icon: <FaMicrosoft className="text-2xl text-[#38B2FF]" />,
//     title: "Microsoft .NET",
//     description: "Full-stack development using Microsoft's .NET ecosystem for building robust, scalable enterprise applications and web solutions",
//     path: "/technology/microsoft-dotnet"
//   },
  {
    icon: <FaJava className="text-2xl text-[#7ED4FF]" />,
    title: "Java/J2EE",
    description: "Enterprise-grade Java development with J2EE, Spring Boot, Hibernate, and microservices architecture for mission-critical applications",
    path: "/java-j2ee"
  },
  {
    icon: <FaGlobe className="text-2xl text-[#38B2FF]" />,
    title: "Enterprise Web Services",
    description: "Comprehensive web services including RESTful APIs, SOAP services, API gateway implementations, and seamless system integration",
    path: "/enterprise-web-services"
  },
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

  // Industries
  const industries = [
    "Investment Banking & Financial Services",
    "Business Information & Media Services",
    "Travel and Hospitality",
    "ISVs/SaaS",
    "Retail and Consumer Goods",
    "Telecommunications"
  ];

  // End-to-end services
  const endToEndServices = [
    "Rich Internet Applications and Web clients (including Silverlight-based)",
    "Desktop and SmartClient applications",
    "Microsoft Server based solutions (MS SQL Server, MS BizTalk)",
    "MS SharePoint Server integration",
    "Custom Application Development Services",
    "Software porting to .NET platform",
    "Mixed unmanaged/managed development",
    "Visual Studio Integration Partner (VSIP)",
    "Mobile solutions",
    "Application Maintenance & Support",
    "Application Testing Services",
    "Infrastructure Management Services"
  ];

  // .NET Tools and Technologies
  const dotNetTechnologies = [
    {
      icon: <SiDotnet className="text-3xl text-[#38B2FF]" />,
      title: "Component / Architecture: .NET, COM+, SOA, .NET Enterprise Services"
    },
    {
      icon: <SiSharp className="text-3xl text-[#7ED4FF]" />,
      title: "Languages: C#, F#, C++/CLI, VB.NET, PowerShell, T-SQL"
    },
    {
      icon: <FaCloud className="text-3xl text-[#38B2FF]" />,
      title: "App. Servers and Web Platforms: IIS, ASP.NET, Commerce Server .NET"
    },
    {
      icon: <FaShareAlt className="text-3xl text-[#7ED4FF]" />,
      title: "Business Process Management and Workflow: SharePoint Server, BizTalk Server, WF"
    },
    {
      icon: <BsMicrosoft className="text-3xl text-[#38B2FF]" />,
      title: "Portals: MS SharePoint"
    },
    {
      icon: <FaDatabase className="text-3xl text-[#7ED4FF]" />,
      title: "Data exchange: WCF/WF, ADO.NET, Entity Framework, LINQ"
    },
    {
      icon: <FaDesktop className="text-3xl text-[#38B2FF]" />,
      title: "GUI: ASP.NET WebForms, ASP.NET MVC, WinForms, WPF, Silverlight, XAML"
    },
    {
      icon: <Server className="text-3xl text-[#7ED4FF]" />,
      title: "DB and OlAP: MS SQL Server, MS SSIS, MS SSAS, MS SSRS"
    },
    {
      icon: <FaMicrosoft className="text-3xl text-[#38B2FF]" />,
      title: "Cloud Computing: Windows Azure, SQL Azure, BPOS"
    },
    {
      icon: <FaMobile className="text-3xl text-[#7ED4FF]" />,
      title: "Mobile Technologies: Windows CE, Windows Phone 7"
    },
    {
      icon: <FaWindows className="text-3xl text-[#38B2FF]" />,
      title: "Low-level Programming: WinAPI (32-bit and 64-bit), Windows Kernel, Windows Driver Kit"
    },
    {
      icon: <FaCogs className="text-3xl text-[#7ED4FF]" />,
      title: "Deployment Technology: Windows Installer, ClickOnce"
    }
  ];

  // Function to handle solution click
  const handleSolutionClick = (path: string) => {
    navigate(path);
  };

  return (
    <div id='microsoft-dotnet' className="min-h-screen bg-gray-50 -mt-8">
      {/* Hero Section with Skyblue Theme Background */}
      <section 
        className="pt-52 py-5 relative overflow-hidden min-h-[300px] md:min-h-[440px] flex items-start"
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
        Microsoft .NET
      </h1>
    </div>
    
    <p className="text-xs md:text-sm text-white/90 text-center max-w-xl mx-auto mb-12">
      We sustain a large pool of experienced engineers with major focus on .NET technology, leveraged by our Microsoft Competency Center and .NET Lab.
    </p>
  </div>
</div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-10">
          {/* Microsoft .NET Overview */}
          <div className="max-w-6xl mx-auto ">
            <div className="text-center mb-5">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Microsoft <span className="text-[#38B2FF]">.NET</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#38B2FF] to-[#7ED4FF] mx-auto mb-6"></div>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed max-w-4xl mx-auto">
                <span className="font-semibold text-[#38B2FF]">Ximax</span> has been a trusted Microsoft vendor and a development partner since 2006. Today, we operate a dedicated Microsoft Competency Center staffed by professionals with the expertise and experience to deliver customer tailored solutions developed with the latest Microsoft technologies.
              </p>
            </div>
          </div>

          {/* FloorEdge Advantage - Industries */}
          <div className="max-w-7xl mx-auto ">
            <div className="bg-gradient-to-br from-[#38B2FF]/5 to-[#7ED4FF]/5 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                <span className="text-[#38B2FF]">Ximax</span> Advantage
              </h3>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
                More than just professionals with deep technical knowledge, our people have also worked in many industries and for companies of all sizes. They bring business specific insights to your projects and have a proven track record in all the following industries:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {industries.map((industry, index) => (
                  <div 
                    key={index} 
                    className="flex items-start bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#7ED4FF]"
                  >
                    <FaCheckCircle className="text-[#7ED4FF] text-lg mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 text-xs md:text-sm font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* End-to-end services Section */}
          <div className="max-w-7xl mx-auto py-5 ">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center mt-10">
              End-to-end <span className="text-[#38B2FF]">Services</span>
            </h3>
            <p className="text-xs md:text-sm text-gray-600 text-center max-w-3xl mx-auto mb-8">
              As a company of over 1,500 professionals, IT consultants, and software engineers, we have built our reputation on developing, customizing and implementing complex applications, and delivering innovative services and solutions. We offer your company:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {endToEndServices.map((service, index) => (
                <div 
                  key={index} 
                  className="flex items-start bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#7ED4FF] hover:scale-105"
                >
                  <FaCheckCircle className="text-[#7ED4FF] text-lg mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-800 text-xs md:text-sm font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* .NET Tools and Technologies Section */}
          {/* <div className="max-w-7xl mx-auto py-5">
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
                    .NET Tools and Technologies
                  </h3>
                  <p className="text-xs md:text-sm text-white/95 mb-6 leading-relaxed">
                    From components to clouds
                  </p>
                  <p className="text-xs md:text-sm text-white/95 mb-8 leading-relaxed">
                    In the rapidly evolving world of tools and technology, Ximax has expertise in virtually all Microsoft .NET development products.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold text-xs md:text-sm">
                      Microsoft Competency Center
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold text-xs md:text-sm">
                      .NET Lab
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold text-xs md:text-sm">
                      Trusted Microsoft Vendor
                    </span>
                  </div>
                </div>
              </div> */}
              {/* Decorative elements */}
              {/* <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            </div>
          </div> */}

          {/* .NET Technologies Grid */}
          <div className="max-w-7xl mx-auto py-5">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center mt-10">
              .NET <span className="text-[#38B2FF]">Technology Stack</span>
            </h3>
            <p className="text-xs md:text-sm text-gray-600 text-center max-w-3xl mx-auto mb-8">
              We leverage the full spectrum of Microsoft .NET development products and technologies
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dotNetTechnologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#38B2FF] shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-[#38B2FF]/10 transition-colors duration-300 flex-shrink-0">
                      {tech.icon}
                    </div>
                    <span className="text-xs md:text-sm font-semibold text-gray-800 group-hover:text-[#38B2FF] transition-colors duration-300">
                      {tech.title}
                    </span>
                  </div>
                </div>
              ))}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-8">
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
             Ready to Build Your .NET Solution?
          </h2>
          <p className="text-white/90 text-xs md:text-sm mb-6 max-w-2xl mx-auto">
            Partner with our Microsoft Competency Center to develop tailored solutions with the latest Microsoft technologies
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

export default MicrosoftDotNetPage;