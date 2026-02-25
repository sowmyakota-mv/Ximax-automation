import {
  FaCheckCircle,
  FaRocket,
  FaMicrochip,
  FaCode,
  FaProjectDiagram,
  FaChartLine,
  FaCube,
  FaServer,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const VLSIPage: React.FC = () => {
  const navigate = useNavigate();

  // Technology Portfolio Data
  const technologyPortfolio = [
    {
      icon: <FaMicrochip className="text-2xl text-[#38B2FF]" />,
      title: "Embedded Systems",
      description: "Comprehensive embedded solutions for automotive, consumer electronics, aerospace, and medical devices with cutting-edge technology",
      path: "/embedded-systems"
    },
    {
      icon: <FaCube className="text-2xl text-[#7ED4FF]" />,
      title: "VLSI Design",
      description: "End-to-end ASIC design services from RTL to GDSII, including RTL Design, Verification, Synthesis, DFT, and Physical Design",
      path: "/vlsi-design"
    },
    {
      icon: <FaProjectDiagram className="text-2xl text-[#38B2FF]" />,
      title: "Design Implementation",
      description: "Complete RTL to GDSII implementation in Synopsys & Cadence flows across 32nm, 45nm, 65nm, 90nm, and 130nm technologies",
      path: "/design-implementation"
    },
    {
      icon: <FaCode className="text-2xl text-[#7ED4FF]" />,
      title: "RTL Design",
      description: "Expert RTL design using Verilog, VHDL, and SystemVerilog with comprehensive simulation and verification",
      path: "/rtl-design"
    },
    {
      icon: <FaChartLine className="text-2xl text-[#38B2FF]" />,
      title: "Physical Design",
      description: "Complete physical design services including floorplanning, CTS, place & route, timing closure, and physical verification",
      path: "/physical-design"
    },
  {
    icon: <FaServer className="text-2xl text-[#7ED4FF]" />,
    title: "SAP",
    description: "Comprehensive SAP implementation, customization, and integration services including SAP S/4HANA, SAP Fiori, and SAP Business Suite for enterprise resource planning",
    path: "/sap"
  },
//   {
//     icon: <FaMicrochip className="text-2xl text-[#38B2FF]" />,
//     title: "VLSI",
//     description: "Advanced VLSI design and verification services including ASIC design, FPGA implementation, RTL coding, and semiconductor solutions for hardware development",
//     path: "/vlsi"
//   }
  ];

  // VLSI Services
  const vlsiServices = [
    "RTL Design, Implementation (SV, Verilog, VHDL,) & Simulation",
    "Synthesis & Timing Analysis",
    "DFT (Design for Testability)",
    "Formal Verification",
    "Full Custom Activity (AMS) - STD cell, I/O development & verification",
    "Custom layout and Physical Verification",
    "Extraction & Characterization",
    "Spice Simulation",
    "Different models / View generation"
  ];

  // Design Implementation Services
  const designServices = [
    "Synthesis / STA",
    "Physical Design - Floorplan",
    "Clock distribution (CTS, HTree etc) and analysis",
    "Scan rest itching",
    "Place & Route",
    "Timing closure",
    "DFM (Design for Manufacturing)",
    "Physical verification (DRC/LVS)"
  ];

  // Verification Services
  const verificationServices = [
    "Chip and System level verification",
    "Verification flow and Methodologies",
    "Set up Verification environment",
    "Test benches and Test Plan development"
  ];

  // Technologies by node
//   const nodeTechnologies = [
//     {
//       icon: <FaMicrochip className="text-3xl text-[#38B2FF]" />,
//       title: "32nm Technology"
//     },
//     {
//       icon: <FaMicrochip className="text-3xl text-[#7ED4FF]" />,
//       title: "45nm Technology"
//     },
//     {
//       icon: <FaMicrochip className="text-3xl text-[#38B2FF]" />,
//       title: "65nm Technology"
//     },
//     {
//       icon: <FaMicrochip className="text-3xl text-[#7ED4FF]" />,
//       title: "90nm Technology"
//     },
//     {
//       icon: <FaMicrochip className="text-3xl text-[#38B2FF]" />,
//       title: "130nm Technology"
//     },
//     {
//       icon: <FaCogs className="text-3xl text-[#7ED4FF]" />,
//       title: "Synopsys & Cadence Flows"
//     }
//   ];

  // Function to handle solution click
  const handleSolutionClick = (path: string) => {
    navigate(path);
  };

  return (
    <div id='vlsi-design' className="min-h-screen bg-gray-50 -mt-8">
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
                  VLSI & Embedded
                </h1>
              </div>
              
              <p className="text-xs md:text-sm text-white/90 text-center max-w-xl mx-auto mb-12">
                Ximax provides comprehensive VLSI and embedded solutions with expertise spanning from RTL design to finished chips, serving industries from automotive to aerospace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-10">
          {/* Embedded Systems Overview */}
          <div className="max-w-6xl mx-auto ">
            <div className="text-center mb-5">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Embedded <span className="text-[#38B2FF]">Systems</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#38B2FF] to-[#7ED4FF] mx-auto mb-6"></div>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Considering the vast scope of this field, ranging from the automobile to consumer electronics and aerospace, the demand for this technology for product development and applications will also continue to grow over time. The use of electronic items is becoming more pervasive in everyone's lives with the use of mobiles, home appliances and more recently use of insulin pumps inside the body, thus providing a chance for you to make a successful career in embedded systems.
              </p>
            </div>
          </div>

          {/* VLSI Overview */}
          <div className="max-w-6xl mx-auto py-5">
            <div className="text-center mb-5">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                <span className="text-[#38B2FF]">VLSI</span> Design
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#38B2FF] to-[#7ED4FF] mx-auto mb-6"></div>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Ximax has different engagement models, from consulting to Final delivery of chips. We provide consulting services in all ASIC Design domains.
              </p>
            </div>
          </div>

          {/* VLSI Services Grid */}
          <div className="max-w-7xl mx-auto py-5">
            <div className="bg-gradient-to-br from-[#38B2FF]/5 to-[#7ED4FF]/5 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                <span className="text-[#38B2FF]">VLSI</span> Services
              </h3>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
                Ximax team expertise in Design Implementation encompasses flows/methodologies from front-end to the back-end. The core-skills include RTL Design, Verification, RTL Synthesis, Timing Analysis, DFT, Formal Verification, Physical Design Closure (Floor planning, Clock Tree Synthesis, P&R, Timing, Noise, Power & IR-Drop/Electro migration Analysis and Physical Verification).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {vlsiServices.map((service, index) => (
                  <div 
                    key={index} 
                    className="flex items-start bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#7ED4FF]"
                  >
                    <FaCheckCircle className="text-[#7ED4FF] text-lg mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 text-xs md:text-sm font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Design Implementation Section */}
          <div className="max-w-7xl mx-auto py-5">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center mt-10">
              Design <span className="text-[#38B2FF]">Implementation</span>
            </h3>
            <p className="text-xs md:text-sm text-gray-600 text-center max-w-3xl mx-auto mb-8">
              The services in Design Implementation encompass complete RTL to GDSII implementation in Synopsys & Cadence flows in 32nm, 45nm, 65nm, 90nm, 130nm.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Design Services */}
              <div className="bg-gradient-to-br from-[#38B2FF]/5 to-[#7ED4FF]/5 rounded-3xl p-6 md:p-8">
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">
                  <span className="text-[#38B2FF]">Implementation</span> Services
                </h4>
                <div className="space-y-3">
                  {designServices.map((service, index) => (
                    <div 
                      key={index} 
                      className="flex items-start bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <FaCheckCircle className="text-[#7ED4FF] text-lg mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-800 text-xs md:text-sm font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verification Services */}
              <div className="bg-gradient-to-br from-[#38B2FF]/5 to-[#7ED4FF]/5 rounded-3xl p-6 md:p-8">
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">
                  <span className="text-[#38B2FF]">Verification</span> Services
                </h4>
                <div className="space-y-3">
                  {verificationServices.map((service, index) => (
                    <div 
                      key={index} 
                      className="flex items-start bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <FaCheckCircle className="text-[#7ED4FF] text-lg mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-800 text-xs md:text-sm font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Info */}
            {/* <div className="mt-8 p-6 bg-gradient-to-br from-[#38B2FF]/5 to-[#7ED4FF]/5 rounded-3xl">
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                Green Technosoft has credentials in working on Physical Design expertise across complex blocks and has experience with timing closure on flat as well as hierarchical designs.
              </p>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed mt-4">
                We have a successfully executed turn key projects – Spec to Tested Chips, Consultation services we have right from RTL design to Finished chips. We have good relations with multiple Semiconductor fabs, can give you cost effective solution.
              </p>
            </div> */}
          </div>

          {/* Technologies by Node */}
          {/* <div className="max-w-7xl mx-auto py-5">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center mt-10">
              Technology <span className="text-[#38B2FF]">Nodes</span>
            </h3>
            <p className="text-xs md:text-sm text-gray-600 text-center max-w-3xl mx-auto mb-8">
              We support a wide range of technology nodes with Synopsys & Cadence flows
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nodeTechnologies.map((tech, index) => (
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
          </div> */}
        </div>
      </section>

      {/* Services Portfolio Section */}
      <section className="py-5 bg-gray-50">
        <div className="container mx-auto px-4 mt-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
            Our <span className="text-[#7ED4FF]">Technology Portfolio</span>
          </h2>
          <p className="text-xs md:text-sm text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Explore our comprehensive range of VLSI and embedded technology services designed to transform your business
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
              Ready to Start Your VLSI Project?
            </h2>
            <p className="text-white/90 text-xs md:text-sm mb-6 max-w-2xl mx-auto">
              Partner with Green Technosoft for end-to-end ASIC design services from RTL to finished chips
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

export default VLSIPage;