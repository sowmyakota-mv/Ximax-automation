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
  FaRegBuilding
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

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
            className="flex justify-between items-center w-full p-4 bg-blue-50 hover:bg-blue-100 text-blue-800 font-semibold rounded-lg transition-all duration-300"
            onClick={() => toggleDropdown(index)}
          >
            <span>{item.title}</span>
            <FaCaretDown className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="p-6 bg-white border border-t-0 border-blue-100 rounded-b-lg shadow-sm">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Icon Card Component - Modified to match reference
interface IconCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const IconCard: React.FC<IconCardProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-4 hover:rounded-xl hover:shadow-lg transition-shadow duration-300">
    <div className="mb-4 p-3 bg-blue-100 text-blue-600 rounded-full">
      {icon}
    </div>
    <h3 className="text-med md:text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 text-xs md:text-sm">{description}</p>
  </div>
);

// Culture Card Component - Modified to match reference
interface CultureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const CultureCard: React.FC<CultureCardProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-4 hover:rounded-xl hover:shadow-lg transition-shadow duration-300">
    <div className="mb-4 p-3 bg-blue-100 text-blue-600 rounded-full">
      {icon}
    </div>
    <h3 className="text-med md:text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 text-xs md:text-sm">{description}</p>
  </div>
);

// Value Card Component - Modified to match reference
interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title }) => (
  <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100">
    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
      {icon}
    </div>
    <span className="text-gray-700 font-medium text-xs md:text-sm">{title}</span>
  </div>
);

// Main Component
const AboutPage: React.FC = () => {
  const navigate=useNavigate()
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

  return (
    <div id='about-company' className="min-h-screen bg-gray-50">
        {/* Hero Section with Gradient Background and Background Image */}
  <section 
    className="pt-44 md:pt-76 py-5 relative overflow-hidden min-h-[300px] md:min-h-[500px] flex items-start"
    // style={{
    //   background: 'linear-gradient(135deg, #0A6B7E 0%, #075985 50%, #0C4A6E 100%)'
    // }}
  >
    {/* Background Image Overlay */}
    <div className="absolute inset-0 z-0">
      <img 
        src="/about-us.jpg" 
        alt="Ximax Automation Background" 
        className="w-full h-full  md:object-cover opacity-44"
      />
      {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/80 mix-blend-multiply"></div> */}
    </div>
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="flex flex-col items-center justify-center text-center ">
        <div className="inline-flex items-center justify-center mb-3 ">
          <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold text-sky-800">
            About Us
          </h1>
        </div>
        
        <p className="text-xs md:text-base font-semibold text-gray-900 max-w-3xl mx-auto mb-12">
          Pioneering IT consulting and software services since 2003, transforming businesses worldwide 
          through innovation, expertise, and a commitment to excellence.
        </p>
      </div>
    </div>
  </section>

      {/* About Content Section - Two Column Layout - Modified font sizes */}
      <section className="py-5 bg-white">
  <div className="container mx-auto px-4 mt-10">
    <div className="flex flex-col lg:flex-row gap-12">
      {/* Left Column - 60% width */}
      <div className="w-full lg:w-[60%] space-y-2">
        <div className="flex items-start">
          <div className="p-3 bg-blue-100 rounded-lg mr-4 mt-1 flex-shrink-0">
            <FaRegBuilding className="text-blue-600 text-xl" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              IT Consulting & Software Services Company
            </h2>
            <p className="text-gray-700 text-xs md:text-sm text-left leading-relaxed">
              <strong>Ximax Automation</strong> is an IT consulting and software services company founded in March 2003. 
              Running its operations from its base in Bangalore with 100+ strong work forces, Ximax Automation offers 
              Software Product Development, Application Development, Web Development, Outsourced IT Managed & Infrastructure 
              services, IT Staffing and Technology Consulting services to its clients across the globe.
            </p>
            <p className="text-gray-700 text-xs md:text-sm text-left leading-relaxed mt-4">
              Ximax Automation furnishes both software services and products to companies ranging from startups to fortune 500's. 
              We supply a broad range of IT applications solutions and services including; e-Business solutions, 
              Enterprise Resource Planning (ERP) Implementation and Post Implementation Support, Application Development, 
              Application Maintenance, Software Customizations and Remote Database Administration Services.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column - 40% width */}
      <div className="w-full lg:w-[40%] space-y-2">
        <div className="flex items-start border border-blue-100 rounded-xl bg-blue-50 p-4">
          <div className="p-3 bg-blue-100 rounded-lg mr-4 mt-1 flex-shrink-0">
            <FaQuoteLeft className="text-blue-600 text-base" />
          </div>
          <div>
            <p className="text-gray-700 text-xs md:text-sm text-left leading-relaxed">
              <strong>Our strength is our People.</strong> We specialize in finding the consultant's best matched to specific project requirements.
            </p>
            <p className="text-gray-700 text-xs md:text-sm text-left leading-relaxed mt-4">
              We offer a wide range of services in the areas of analysis, design, development, and maintenance of various IT systems. 
              Our services are designed to help our clients generate revenue, reduce costs, and access information necessary to 
              operate their business on a timely basis. Ximax Automation is a leading provider of advanced software consulting and 
              development services specializing in the next generation Internet applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

     {/* Staffing & Consulting Section - Modified to match reference font sizes */}
<section className="py-5 bg-gray-50">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
      {/* Left Side - Image - 30% width on desktop, below content on mobile */}
      <div className="order-2 lg:order-1 w-full lg:w-[30%]">
        <div className="relative ">
          <div className="aspect-[3/3] lg:aspect-square relative ">
            <img 
              src="/about-img1.jpg" 
              alt="Ximax Automation Staffing & Consulting" 
              className="w-full h-full object-contain"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div> */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full">
                <FaUsers className="w-4 h-4 text-white" />
                <span className="text-white text-xs md:text-sm font-medium">100+ IT Professionals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Side - Content - 70% width on desktop, above image on mobile */}
      <div className="order-1 lg:order-2 w-full lg:w-[70%]">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FaHandshake className="text-blue-600 text-lg" />
            </div>
            <span className="text-blue-700 font-semibold text-xs md:text-sm">Consulting Excellence</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Professional IT Staffing & Technology Consulting
          </h2>
          
          <div className="bg-white p-4 rounded-xl border-l-4 border-blue-600">
            <p className="text-gray-700 italic text-xs md:text-sm">
              "We help our clients meet their staffing challenges with flexible, cost-effective solutions 
              tailored to their specific project requirements."
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
              <span className="text-gray-700 text-xs md:text-sm">Startups to Fortune 500</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
              <span className="text-gray-700 text-xs md:text-sm">100+ IT Professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
              <span className="text-gray-700 text-xs md:text-sm">Global Delivery Model</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
              <span className="text-gray-700 text-xs md:text-sm">Flexible Engagement</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Culture Section - Modified to match reference */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The Values That Define Us
            </h2>
            <p className="text-xs md:text-base text-gray-600 max-w-3xl mx-auto">
              At Ximax Automation, we take great pride in the quality and integrity of our team. 
              We take serving our customers as seriously as we do our culture of fun, creativity and professionalism.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
            {cultureItems.map((item, index) => (
              <CultureCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white text-xs mb-3">
                  <FaEye className="text-blue-300" />
                  <span>Our Vision</span>
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">
                  To Be a Respected Brand
                </h3>
                <p className="text-white/90 text-xs md:text-sm leading-relaxed">
                  Leading the knowledge industry towards innovative, proactive and optimized business results 
                  through Information Technology solutions and services.
                </p>
              </div>
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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

      {/* We Help You Grow Section */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-8">
          {/* <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              We Help You Grow <span className="text-blue-600">Faster & Bigger</span>
            </h2>
            <p className="text-xs md:text-base text-gray-600 max-w-3xl mx-auto">
              Partner with us to accelerate your business growth with our comprehensive IT solutions 
              and outsourcing expertise
            </p>
          </div> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
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
  
  <div className="container mx-auto px-4 relative z-10 mt-40 mb-20">
    <div className="text-center">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">
        Ready to Transform Your Business?
      </h2>
      <p className="text-white/90 text-xs md:text-sm mb-6 max-w-2xl mx-auto">
         Join our 100+ satisfied clients and experience the Ximax Automation difference
           </p>
      <button onClick={()=>navigate("/contact-us")} className="inline-flex items-center gap-2 bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg">
        Get In Touch
            <FaRocket className="text-blue-600" />
      </button>
    </div>
  </div>
</section>
    </div>
  );
};

export default AboutPage;