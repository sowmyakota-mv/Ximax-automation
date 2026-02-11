// components/TechIndustrySection.tsx
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TechIndustrySection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Combined array of all items (technologies + industries)
  const allItems = [
    // Technologies
    {
      id: 1,
      name: ".NET Framework",
      description: "Full-stack development using Microsoft's .NET ecosystem for enterprise applications",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-purple-600/80 to-pink-600/80",
      link: "/technology/dotnet",
      tagline: "Enterprise Development Platform"
    },
    {
      id: 2,
      name: "Java & J2EE",
      description: "Scalable enterprise applications using robust Java technologies and frameworks",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-red-600/80 to-orange-600/80",
      link: "/technology/java",
      tagline: "Robust Enterprise Solutions"
    },
    {
      id: 3,
      name: "Web Services",
      description: "Seamless integration through RESTful APIs and SOAP services for modern applications",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-blue-600/80 to-cyan-600/80",
      link: "/technology/web-services",
      tagline: "API Integration Services"
    },
    {
      id: 4,
      name: "Oracle",
      description: "Comprehensive database solutions and enterprise application development",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-red-600/80 to-yellow-600/80",
      link: "/technology/oracle",
      tagline: "Database Management Systems"
    },
    {
      id: 5,
      name: "Middleware",
      description: "Advanced integration solutions and enterprise messaging systems",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-green-600/80 to-emerald-600/80",
      link: "/technology/middleware",
      tagline: "Integration Technology"
    },
    // Industries
    {
      id: 6,
      name: "Banking & Financial Services",
      description: "Secure and compliant financial technology solutions for modern banking",
      image: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-blue-600/80 to-indigo-700/80",
      link: "/industry/banking",
      tagline: "FinTech Solutions"
    },
    {
      id: 7,
      name: "E-commerce",
      description: "Scalable online retail platforms and digital marketplaces for global commerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-orange-600/80 to-yellow-600/80",
      link: "/industry/ecommerce",
      tagline: "Digital Retail Platforms"
    },
    {
      id: 8,
      name: "Healthcare",
      description: "Advanced healthcare technology and patient management systems",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-red-600/80 to-pink-600/80",
      link: "/industry/healthcare",
      tagline: "Medical Technology"
    },
    {
      id: 9,
      name: "Manufacturing",
      description: "Industrial automation and supply chain optimization solutions",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-gray-700/80 to-blue-700/80",
      link: "/industry/manufacturing",
      tagline: "Industrial Automation"
    },
    {
      id: 10,
      name: "Telecommunication",
      description: "Advanced communication networks and service delivery platforms",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-purple-600/80 to-blue-600/80",
      link: "/industry/telecommunication",
      tagline: "Communication Networks"
    },
    {
      id: 11,
      name: "Travel, Transport & Logistics",
      description: "Comprehensive transportation and logistics management systems",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-green-600/80 to-teal-600/80",
      link: "/industry/logistics",
      tagline: "Transportation Solutions"
    }
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  const navigateToPage = (link: string) => {
    window.location.href = link;
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Title Left, Para Right */}
        <div className="px-4 sm:px-6 lg:px-8 mb-12 md:mb-16">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
            {/* Left Side - Title */}
            <div className="lg:w-2/5">
              <div>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-sky-50 text-sky-600 text-sm font-semibold mb-4">
                  Expertise & Solutions
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Complete <span className="text-sky-600">Technology & Industry</span> Portfolio
                </h2>
                <div className="h-1 w-20 bg-sky-600 mb-6"></div>
              </div>
            </div>

            {/* Right Side - Paragraph */}
            <div className="lg:w-3/5">
              <div className="lg:pl-8">
                <p className="text-lg text-gray-600 leading-relaxed">
                  We combine cutting-edge technology expertise with deep industry knowledge to deliver 
                  tailored solutions that drive business growth and innovation across various sectors.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mt-4">
                  Explore our comprehensive portfolio of technologies and industry verticals, 
                  all working together to provide end-to-end solutions for modern business challenges.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Combined Image Gallery Section - Single Row with Scrolling */}
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            {/* Images Container - 80% width */}
            <div className="w-full lg:w-[80%] relative">
              {/* Single Row Cards Container with Horizontal Scroll */}
              <div 
                ref={scrollRef}
                className="flex gap-6 pb-8 overflow-x-auto scrollbar-hide"
                style={{ 
                  scrollbarWidth: 'none', 
                  msOverflowStyle: 'none'
                }}
              >
                {allItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex-shrink-0 w-72 md:w-80 lg:w-76"
                  >
                    <div 
                      onClick={() => navigateToPage(item.link)}
                      className="group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-xl"
                    >
                      {/* Image Container - 60% height with 80% width */}
                      <div className="relative h-60 md:h-64 lg:h-72 overflow-hidden rounded-xl">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-t ${item.color}`}></div>
                        
                        {/* Content Overlay - Tagline, Title & Paragraph */}
                        <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end">
                          {/* Tagline */}
                          <div className="mb-">
                            <span className="text-white/90 text-xs font-semibold bg-black/30 px-3 py-1 rounded-full inline-block">
                              {item.tagline}
                            </span>
                          </div>
                          
                          {/* Title */}
                          <h3 className="text-2xl md:text-2xl font-bold text-white mb-">
                            {item.name}
                          </h3>
                          
                          {/* Paragraph/Description */}
                          <p className="text-white/90 text-base md:text-sm mb-2 leading-relaxed line-clamp-3">
                            {item.description}
                          </p>
                          
                          {/* Click Indicator */}
                          {/* <div className="flex items-center gap-2 text-white/90">
                            <span className="text-sm font-medium">Learn More</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-white/90 animate-pulse"></div>
                          </div> */}
                        </div>

                        {/* Hover Overlay */}
                        {/* <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-center text-white p-8">
                            <div className="text-xl font-bold mb-3">Explore {item.name}</div>
                            <div className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-4">
                              {item.tagline}
                            </div>
                            <div className="text-base mb-4 max-w-xs mx-auto">
                              {item.description}
                            </div>
                            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                              <span>View Details</span>
                              <ChevronRight className="w-4 h-4" />
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows - 20% width (Desktop only) */}
            <div className="hidden lg:flex lg:w-[20%] flex-col justify-center items-center pr-4">
              <div className="flex flex-col items-center gap-12">
                {/* Large Navigation Arrows */}
                <div className="flex flex-col items-center gap-8">
                  <button
                    onClick={scrollLeft}
                    className="p-4 rounded-full bg-white shadow-xl text-gray-700 hover:text-sky-600 hover:shadow-2xl transition-all transform hover:scale-110 active:scale-95"
                    aria-label="Scroll left"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  
                  <button
                    onClick={scrollRight}
                    className="p-4 rounded-full bg-white shadow-xl text-gray-700 hover:text-sky-600 hover:shadow-2xl transition-all transform hover:scale-110 active:scale-95"
                    aria-label="Scroll right"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden mt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-gray-600 text-sm">
                Scroll to explore {allItems.length} solutions
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={scrollLeft}
                  className="p-2.5 rounded-full bg-white shadow-lg text-gray-700 hover:text-sky-600"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="text-gray-700 text-sm font-medium">
                  {allItems.length} items
                </div>
                <button
                  onClick={scrollRight}
                  className="p-2.5 rounded-full bg-white shadow-lg text-gray-700 hover:text-sky-600"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
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
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default TechIndustrySection;