import React, { useState } from 'react';
import { 
  FaRocket, 
  FaLightbulb, 
  FaGlobeAmericas,
  FaCaretDown,
  FaChartLine,
  FaCogs, 
  FaQuoteLeft,
  FaUsers,
  FaHandshake,
  FaEye,
  FaHeart,
  FaShieldAlt,
  FaAward,
  FaRegBuilding,
  FaCalendarAlt,
  FaMapMarkerAlt
} from 'react-icons/fa';

// Dropdown Component
interface DropdownItem {
  title: string;
  content: React.ReactNode;
}

export const AboutDropdown: React.FC<{ items: DropdownItem[] }> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className="mb-2">
          <button
            className="flex justify-between items-center w-full p-4 bg-sky-50 hover:bg-sky-100 text-sky-800 font-semibold rounded-lg transition-all duration-300"
            onClick={() => toggleDropdown(index)}
          >
            <span>{item.title}</span>
            <FaCaretDown className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="p-6 bg-white border border-t-0 border-sky-100 rounded-b-lg shadow-sm">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Icon Card Component
interface IconCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const IconCard: React.FC<IconCardProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-sky-200">
    <div className="mb-4 p-4 bg-gradient-to-br from-sky-50 to-blue-50 text-sky-600 rounded-2xl">
      {icon}
    </div>
    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 text-sm md:text-base leading-relaxed">{description}</p>
  </div>
);

// Culture Card Component
interface CultureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const CultureCard: React.FC<CultureCardProps> = ({ icon, title, description }) => (
  <div className="p-6 bg-white rounded-xl border-l-4 border-sky-500 shadow-md hover:shadow-lg transition-all duration-300">
    <div className="flex items-start gap-4">
      <div className="p-3 bg-sky-50 text-sky-600 rounded-lg">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

// Value Card Component
interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title }) => (
  <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-sky-50 to-blue-50 rounded-lg">
    <div className="p-2 bg-white text-sky-600 rounded-lg shadow-sm">
      {icon}
    </div>
    <span className="text-gray-800 font-medium text-sm md:text-base">{title}</span>
  </div>
);

// Main Component
const AboutPage: React.FC = () => {
  // Culture items
  const cultureItems = [
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Integrity",
      description: "An ethical and honest approach to business"
    },
    {
      icon: <FaHandshake className="text-2xl" />,
      title: "Trust & Openness",
      description: "Trust & Openness in business relations to ensure customer & employee satisfaction"
    },
    {
      icon: <FaCogs className="text-2xl" />,
      title: "People & Process Excellence",
      description: "Delivering value and experience to Customers with aligned and efficient Business Processes"
    },
    {
      icon: <FaLightbulb className="text-2xl" />,
      title: "Innovation & Achievement",
      description: "A quest for innovation & achievement"
    }
  ];

  // Values items
  const valueItems = [
    { icon: <FaHandshake className="text-xl" />, title: "Bonding relationship with clients" },
    { icon: <FaUsers className="text-xl" />, title: "Client Intimacy" },
    { icon: <FaShieldAlt className="text-xl" />, title: "Confidentiality with respect to work" },
    { icon: <FaGlobeAmericas className="text-xl" />, title: "Reflective atmosphere" },
    { icon: <FaHeart className="text-xl" />, title: "Integrity expressed" },
    { icon: <FaAward className="text-xl" />, title: "Independent business objectives" }
  ];

  const growthSections = [
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Accelerated Growth",
      description: "Leverage our expertise to scale your operations rapidly and efficiently with proven methodologies."
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Cost Optimization",
      description: "Reduce operational costs while maintaining quality and efficiency standards."
    },
    {
      icon: <FaGlobeAmericas className="text-3xl" />,
      title: "Global Talent Access",
      description: "Tap into our worldwide network of IT professionals and domain experts."
    },
    {
      icon: <FaCogs className="text-3xl" />,
      title: "Streamlined Operations",
      description: "Optimize your business processes with our customized technology solutions."
    }
  ];

  // Dropdown items for Company History
  const dropdownItems: DropdownItem[] = [
    {
      title: "Our Journey Since 2006",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            <strong>Ximax Automation</strong> is an IT consulting and software services company founded in March 2006. 
            Running its operations from its base in London with 100+ strong work forces, we offer Software Product Development, 
            Application Development, Web Development, Outsourced IT Managed & Infrastructure services, IT Staffing, and 
            Technology Consulting services to our clients across the globe.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-sky-600" />
              <span>Founded: March 2006</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-sky-600" />
              <span>Headquarters: London</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUsers className="text-sky-600" />
              <span>100+ Team Members</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Our Services & Solutions",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Ximax Automation furnishes both software services and products to companies ranging from startups to Fortune 500's. 
            We supply a broad range of IT applications solutions and services including; e-Business solutions, 
            Enterprise Resource Planning (ERP) Implementation and Post Implementation Support, Application Development, 
            Application Maintenance, Software Customizations, and Remote Database Administration Services.
          </p>
        </div>
      )
    },
    {
      title: "Our Expertise",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            We offer a wide range of services in the areas of analysis, design, development, and maintenance of various IT systems. 
            Our services are designed to help our clients generate revenue, reduce costs, and access information necessary to 
            operate their business on a timely basis. Ximax Automation is a leading provider of advanced software consulting and 
            development services specializing in the next generation Internet applications.
          </p>
        </div>
      )
    },
    {
      title: "Our People & Staffing",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Ximax Automation offers professional consulting services to help clients meet their staffing challenges. 
            At Ximax Automation, our strength is our People. We specialize in finding the consultant's best matched to 
            specific project requirements. Working in close collaboration with a client, our recruitment team will identify 
            which resources need to be supplemented and on what basis they should be taken on to best suit the needs of the company.
          </p>
          <p className="text-gray-700 mt-2">
            Today, businesses need to be pro-active and flexible to meet unforeseen challenges. They are also under pressure 
            to guarantee the technical competency of resources, to make cost savings and meet project deadlines. To meet such 
            challenges, companies need to be flexible. One important area is that of human resources. Companies need to hire 
            flexible resources cost-effectively, where possible avoiding taking on any long-term risk or liability.
          </p>
        </div>
      )
    }
  ];

  return (
    <div id='about-company' className="min-h-screen bg-white">
      {/* Hero Section with Gradient Background */}
      <section 
        className="pt-28 pb-24 relative overflow-visible -mb-20"
        style={{
          background: 'linear-gradient(135deg, #0A6B7E 0%, #075985 50%, #0C4A6E 100%)'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center mb-6">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-semibold border border-white/20">
                Established 2006
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              About <span className="text-sky-300">Ximax Automation</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              Pioneering IT consulting and software services since 2006, transforming businesses worldwide 
              through innovation, expertise, and a commitment to excellence.
            </p>
          </div>
        </div>

        {/* Image Gallery Section - Modern Lantern Layout */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-[90%] lg:w-[85%] mx-auto">
              {/* Desktop layout - Lantern style staggered images */}
              <div className="hidden lg:flex justify-center items-end gap-6">
                <div className="w-1/4 relative group">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl h-72">
                    <img 
                      src="/ximax-office-1.jpg" 
                      alt="Ximax Automation Team Collaboration" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                </div>
                
                <div className="w-1/4 relative group -mb-8">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl h-56">
                    <img 
                      src="/ximax-office-2.jpg" 
                      alt="Ximax Automation Innovation Hub" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                </div>
                
                <div className="w-1/4 relative group">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl h-72">
                    <img 
                      src="/ximax-office-3.jpg" 
                      alt="Ximax Automation Strategic Planning" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                </div>
                
                <div className="w-1/4 relative group -mb-8">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl h-56">
                    <img 
                      src="/ximax-office-4.jpg" 
                      alt="Ximax Automation Project Excellence" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Tablet layout */}
              <div className="hidden md:flex lg:hidden justify-center items-end gap-6">
                <div className="w-1/2 relative group">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl h-72">
                    <img 
                      src="/ximax-office-1.jpg" 
                      alt="Ximax Automation Team" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                </div>
                
                <div className="w-1/2 relative group -mb-8">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl h-56">
                    <img 
                      src="/ximax-office-2.jpg" 
                      alt="Ximax Automation Innovation" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Mobile layout */}
              <div className="flex md:hidden justify-center items-end gap-3">
                <div className="w-[48%] relative group">
                  <div className="relative overflow-hidden rounded-xl shadow-2xl h-48">
                    <img 
                      src="/ximax-office-1.jpg" 
                      alt="Ximax Automation Team" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                </div>
                
                <div className="w-[48%] relative group -mb-6">
                  <div className="relative overflow-hidden rounded-xl shadow-2xl h-36">
                    <img 
                      src="/ximax-office-2.jpg" 
                      alt="Ximax Automation Innovation" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer for images */}
      <div className="h-48 lg:h-56"></div>

      {/* About Content Section - Two Column Layout */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-50 rounded-full">
                <FaRegBuilding className="text-sky-600" />
                <span className="text-sky-700 font-semibold text-sm">About Ximax</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                IT Consulting & Software Services Company
              </h2>
              
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p className="leading-relaxed">
                  <strong>Ximax Automation</strong> is an IT consulting and software services company founded in March 2006. 
                  Running its operations from its base in London with 100+ strong work forces, Ximax Automation offers 
                  Software Product Development, Application Development, Web Development, Outsourced IT Managed & Infrastructure 
                  services, IT Staffing and Technology Consulting services to its clients across the globe.
                </p>
                
                <p className="leading-relaxed">
                  Ximax Automation furnishes both software services and products to companies ranging from startups to fortune 500's. 
                  We supply a broad range of IT applications solutions and services including; e-Business solutions, 
                  Enterprise Resource Planning (ERP) Implementation and Post Implementation Support, Application Development, 
                  Application Maintenance, Software Customizations and Remote Database Administration Services.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-2xl border border-sky-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    <FaQuoteLeft className="text-3xl text-sky-600" />
                  </div>
                  <p className="text-gray-700 text-lg italic font-medium">
                    Our strength is our People. We specialize in finding the consultant's best matched to specific project requirements.
                  </p>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  We offer a wide range of services in the areas of analysis, design, development, and maintenance of various IT systems. 
                  Our services are designed to help our clients generate revenue, reduce costs, and access information necessary to 
                  operate their business on a timely basis. Ximax Automation is a leading provider of advanced software consulting and 
                  development services specializing in the next generation Internet applications.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="text-3xl font-bold text-sky-600 mb-1">100+</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
                <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="text-3xl font-bold text-sky-600 mb-1">2006</div>
                  <div className="text-sm text-gray-600">Year Founded</div>
                </div>
                <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="text-3xl font-bold text-sky-600 mb-1">Global</div>
                  <div className="text-sm text-gray-600">Client Base</div>
                </div>
                <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="text-3xl font-bold text-sky-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staffing & Consulting Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-sky-200 rounded-full opacity-30"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-sky-50 rounded-lg">
                      <FaUsers className="text-2xl text-sky-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Our People, Our Strength</h3>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Ximax Automation offers professional consulting services to help clients meet their staffing challenges. 
                    At Ximax Automation, our strength is our People. We specialize in finding the consultant's best matched 
                    to specific project requirements. Working in close collaboration with a client, our recruitment team will 
                    identify which resources need to be supplemented and on what basis they should be taken on to best suit 
                    the needs of the company.
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed">
                    Today, businesses need to be pro-active and flexible to meet unforeseen challenges. They are also under 
                    pressure to guarantee the technical competency of resources, to make cost savings and meet project deadlines. 
                    To meet such challenges, companies need to be flexible. One important area is that of human resources. 
                    Companies need to hire flexible resources cost-effectively, where possible avoiding taking on any long-term 
                    risk or liability.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 rounded-full">
                  <FaHandshake className="text-sky-600" />
                  <span className="text-sky-700 font-semibold text-sm">Consulting Excellence</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Professional IT Staffing & Technology Consulting
                </h2>
                
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-sky-500">
                  <p className="text-gray-700 italic">
                    "We help our clients meet their staffing challenges with flexible, cost-effective solutions 
                    tailored to their specific project requirements."
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                    <span className="text-gray-700 text-sm">Startups to Fortune 500</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                    <span className="text-gray-700 text-sm">100+ IT Professionals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                    <span className="text-gray-700 text-sm">Global Delivery Model</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                    <span className="text-gray-700 text-sm">Flexible Engagement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center px-4 py-2 bg-sky-50 rounded-full text-sky-700 text-sm font-semibold mb-4">
              Our Culture
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Values That Define Us
            </h2>
            <p className="text-gray-600 text-lg">
              At Ximax Automation, we take great pride in the quality and integrity of our team. 
              We take serving our customers as seriously as we do our culture of fun, creativity and professionalism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {cultureItems.map((item, index) => (
              <CultureCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          <div className="bg-gradient-to-r from-sky-900 to-blue-900 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-4">
                  <FaEye className="text-sky-300" />
                  <span>Our Vision</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  To Be a Respected Brand
                </h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Leading the knowledge industry towards innovative, proactive and optimized business results 
                  through Information Technology solutions and services.
                </p>
              </div>
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {valueItems.map((item, index) => (
                    <ValueCard
                      key={index}
                      icon={item.icon}
                      title={item.title}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dropdown Section - Company History */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-flex items-center px-4 py-2 bg-sky-100 rounded-full text-sky-700 text-sm font-semibold mb-4">
                Company History
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Journey Since 2006
              </h2>
              <p className="text-gray-600 text-lg">
                Two decades of innovation, growth, and partnership with our clients
              </p>
            </div>
            
            <AboutDropdown items={dropdownItems} />
          </div>
        </div>
      </section>

      {/* We Help You Grow Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              We Help You Grow <span className="text-sky-600">Faster & Bigger</span>
            </h2>
            <p className="text-lg text-gray-600">
              Partner with us to accelerate your business growth with our comprehensive IT solutions 
              and outsourcing expertise
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {growthSections.map((section, index) => (
              <IconCard
                key={index}
                icon={section.icon}
                title={section.title}
                description={section.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sky-900 to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join our 100+ satisfied clients and experience the Ximax Automation difference
          </p>
          <button className="inline-flex items-center gap-3 bg-white text-sky-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl">
            Get In Touch
            <FaRocket className="text-sky-600" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;