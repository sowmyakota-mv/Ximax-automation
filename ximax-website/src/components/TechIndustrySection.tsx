// components/TechIndustrySection.tsx
import { useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TechIndustrySection: React.FC = () => {
  // Combined array of all items (technologies + industries)
  const allItems = [
    // Technologies
    {
      id: 1,
      name: ".NET Framework",
      description: "Full-stack development using Microsoft's .NET ecosystem for enterprise applications",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/microsoft-dotnet",
      tagline: "Enterprise Development Platform",
      shortDesc: "Enterprise-grade .NET solutions",
      hoverDesc: "Build and deploy robust enterprise applications using Microsoft's powerful .NET framework. Our expertise spans ASP.NET, .NET Core, and modern C# development for scalable solutions."
    },
    {
      id: 2,
      name: "Java & J2EE",
      description: "Scalable enterprise applications using robust Java technologies and frameworks",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/java-j2ee",
      tagline: "Robust Enterprise Solutions",
      shortDesc: "Scalable Java applications",
      hoverDesc: "Leverage the power of Java and J2EE for mission-critical enterprise applications. We deliver scalable, secure, and high-performance solutions using Spring Boot, Hibernate, and microservices architecture."
    },
    {
      id: 3,
      name: "Web Services",
      description: "Seamless integration through RESTful APIs and SOAP services for modern applications",
      image: "/web-service.jpg",
      link: "/enterprise-web-services",
      tagline: "API Integration Services",
      shortDesc: "RESTful & SOAP APIs",
      hoverDesc: "Connect your systems seamlessly with our comprehensive web services solutions. We specialize in RESTful API design, SOAP services, and API gateway implementations for modern applications."
    },
    {
      id: 4,
      name: "Oracle",
      description: "Comprehensive database solutions and enterprise application development",
      image: "/oracle.jpg",
      link: "/oracle",
      tagline: "Database Management Systems",
      shortDesc: "Enterprise database solutions",
      hoverDesc: "Optimize your data management with Oracle database expertise. We provide end-to-end Oracle solutions including PL/SQL development, database optimization, and enterprise application integration."
    },
    {
      id: 5,
      name: "Middleware",
      description: "Advanced integration solutions and enterprise messaging systems",
      image: "/middleware.jpg",
      link: "/middleware",
      tagline: "Integration Technology",
      shortDesc: "Advanced integration solutions",
      hoverDesc: "Enable seamless communication between enterprise systems with our middleware solutions. We implement IBM WebSphere, Oracle Fusion, and open-source messaging platforms for robust integration."
    },
    // Industries
    {
      id: 6,
      name: "Banking & Financial Services",
      description: "Secure and compliant financial technology solutions for modern banking",
      image: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/financial",
      tagline: "FinTech Solutions",
      shortDesc: "Secure banking solutions",
      hoverDesc: "Transform financial services with our secure and compliant FinTech solutions. We deliver core banking systems, payment gateways, and regulatory technology for modern financial institutions."
    },
    {
      id: 7,
      name: "E-commerce",
      description: "Scalable online retail platforms and digital marketplaces for global commerce",
      image: "/e-commerce.jpg",
      link: "/ecommerce",
      tagline: "Digital Retail Platforms",
      shortDesc: "Scalable retail platforms",
      hoverDesc: "Launch and scale your online retail business with our e-commerce expertise. We build custom digital marketplaces, shopping cart solutions, and omnichannel platforms for global commerce."
    },
    {
      id: 8,
      name: "Healthcare",
      description: "Advanced healthcare technology and patient management systems",
      image: "/healthcare.jpg",
      link: "/healthcare",
      tagline: "Medical Technology",
      shortDesc: "Healthcare technology",
      hoverDesc: "Advance patient care with our innovative healthcare technology solutions. We develop EHR systems, telemedicine platforms, and medical practice management software for healthcare providers."
    },
    {
      id: 9,
      name: "Manufacturing",
      description: "Industrial automation and supply chain optimization solutions",
      image: "/manufacture.jpg",
      link: "/manufacturing",
      tagline: "Industrial Automation",
      shortDesc: "Industrial automation",
      hoverDesc: "Optimize your manufacturing operations with Industry 4.0 solutions. We implement MES, supply chain management, and IoT platforms for smart factory automation and process optimization."
    },
    {
      id: 10,
      name: "Telecommunication",
      description: "Advanced communication networks and service delivery platforms",
      image: "/telecommunication.jpg",
      link: "/telecommunication",
      tagline: "Communication Networks",
      shortDesc: "Advanced networks",
      hoverDesc: "Build next-generation communication networks with our telecom expertise. We deliver OSS/BSS solutions, 5G readiness, and network management systems for telecommunications providers."
    },
    {
      id: 11,
      name: "Travel, Transport & Logistics",
      description: "Comprehensive transportation and logistics management systems",
      image: "/logistics.jpg",
      link: "/logistics",
      tagline: "Transportation Solutions",
      shortDesc: "Logistics management",
      hoverDesc: "Streamline your logistics operations with our comprehensive transportation solutions. We develop fleet management systems, route optimization, and real-time tracking platforms for global supply chains."
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      const container = document.querySelector('.scroll-container');
      if (container) {
        const { scrollLeft, scrollWidth, clientWidth } = container;
        const maxScroll = scrollWidth - clientWidth;
        const cardWidth = getCardWidth();
        
        if (scrollLeft >= maxScroll - 10) {
          // Reset to beginning
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll right by exactly one card width
          container.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Manual scroll functions
  const scrollContainer = (direction: 'left' | 'right') => {
    const container = document.querySelector('.scroll-container');
    if (container) {
      const cardWidth = getCardWidth();
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Get card width including gap
  const getCardWidth = (): number => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 304 + 24;
      if (window.innerWidth >= 768) return 320 + 24;
    }
    return 288 + 24;
  };

  const navigateToPage = (link: string): void => {
    window.location.href = link;
  };

  return (
    <section className="py-5 bg-white">
      <div className="max-w-7xl mx-auto mt-10">
        {/* Section Header - Title Left, Para Right */}
        <div className="px-4 sm:px-6 lg:px-8 mb-5">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
            {/* Left Side - Title */}
            <div className="lg:w-2/5">
              <div>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-800 text-xs md:text-sm font-semibold mb-4">
                  Expertise & Solutions
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Complete <span className="text-gray-900">Technology & Industry</span> Portfolio
                </h2>
                <div className="h-1 w-20 bg-gray-900 mb-6"></div>
              </div>
            </div>

            {/* Right Side - Paragraph */}
            <div className="lg:w-3/5">
              <div className="lg:pl-8 md:mt-8">
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  We combine cutting-edge technology expertise with deep industry knowledge to deliver 
                  tailored solutions that drive business growth and innovation across various sectors.
                </p>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed mt-4">
                  Explore our comprehensive portfolio of technologies and industry verticals, 
                  all working together to provide end-to-end solutions for modern business challenges.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Combined Image Gallery Section - Single Row with Scrolling */}
        <div className="relative px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex gap-8">
            {/* Images Container - 80% width */}
            <div className="w-full lg:w-[80%] relative">
              {/* Single Row Cards Container with Horizontal Scroll */}
              <div 
                className="scroll-container flex gap-6 pb-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
                style={{ 
                  scrollbarWidth: 'none', 
                  msOverflowStyle: 'none'
                }}
              >
                {allItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex-shrink-0 w-72 md:w-80 lg:w-76 snap-start"
                  >
                    <div 
                      onClick={() => navigateToPage(item.link)}
                      className="group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-500 hover:shadow-xl"
                    >
                      {/* Image Container - 60% height with 80% width */}
                      <div className="relative h-60 md:h-64 lg:h-72 overflow-hidden rounded-xl">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:opacity-0"
                        />
                        
                        {/* Gradient Overlay - Default state - Single color */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-800/70 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
                        
                        {/* Light Blue Overlay on Hover - Solid color without gradient */}
                        <div className="absolute inset-0 bg-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                          <h3 className="text-med md:text-xl font-bold text-white mb-3">
                            {item.name}
                          </h3>
                          <p className="text-xs md:text-sm text-white/90 mb-4 max-w-xs line-clamp-3">
                            {item.hoverDesc}
                          </p>
                          <div className="flex items-center gap-2">
                            <span className="text-xs md:text-sm font-medium text-white">Learn More</span>
                            <ChevronRight className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        
                        {/* Content Overlay - Default State */}
                        <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end group-hover:opacity-0 transition-opacity duration-300">
                          {/* Tagline */}
                          <div className="mb-2">
                            <span className="text-white/90 text-xs font-semibold bg-black/30 px-3 py-1 rounded-full inline-block">
                              {item.tagline}
                            </span>
                          </div>
                          
                          {/* Title */}
                          <h3 className="text-med md:text-xl font-bold text-white mb-1">
                            {item.name}
                          </h3>
                          
                          {/* Paragraph/Description */}
                          <p className="text-white/90 text-xs md:text-sm leading-relaxed line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows - 20% width (Desktop only) */}
            <div className="hidden lg:flex lg:w-[20%] flex-col justify-center items-center pr-4 md:mt-20">
              <div className="flex flex-col items-center gap-12">
                {/* Large Navigation Arrows - Horizontal layout with navy blue background */}
                <div className="flex flex-row items-center gap-8">
                  <button
                    onClick={() => scrollContainer('left')}
                    className="p-4 bg-[#1e3a8a] text-white hover:bg-[#1e40af] transition-all transform hover:scale-110 active:scale-95 rounded-full"
                    aria-label="Scroll left"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  
                  <button
                    onClick={() => scrollContainer('right')}
                    className="p-4 bg-[#1e3a8a] text-white hover:bg-[#1e40af] transition-all transform hover:scale-110 active:scale-95 rounded-full"
                    aria-label="Scroll right"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation - Single Image Left and Right */}
          <div className="lg:hidden mt-8">
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={() => scrollContainer('left')}
                className="p-3 bg-[#1e3a8a] text-white hover:bg-[#1e40af] rounded-full"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              {/* <div className="text-gray-600 text-xs md:text-sm font-medium">
                {allItems.length} Solutions
              </div> */}
              <button
                onClick={() => scrollContainer('right')}
                className="p-3 bg-[#1e3a8a] text-white hover:bg-[#1e40af] rounded-full"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom CSS */}
      <style >{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .snap-x {
          scroll-snap-type: x mandatory;
        }
        .snap-start {
          scroll-snap-align: start;
        }
      `}</style>
    </section>
  );
};

export default TechIndustrySection;