import React, { useState } from 'react';
import { 
  FaGlobeAmericas,
  FaCaretDown,
  FaCogs, 
  FaQuoteLeft,
  FaUsers,
  FaHandshake,
  FaIndustry,
  FaLaptopCode,
  FaCheckCircle
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// Dropdown Component
interface DropdownItem {
  title: string;
  content: React.ReactNode;
}

export const WhyDropdown: React.FC<{ items: DropdownItem[] }> = ({ items }) => {
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

// Icon Card Component
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

// Value Card Component
// interface ValueCardProps {
//   icon: React.ReactNode;
//   title: string;
// }

// const ValueCard: React.FC<ValueCardProps> = ({ icon, title }) => (
//   <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100">
//     <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
//       {icon}
//     </div>
//     <span className="text-gray-700 font-medium text-xs md:text-sm">{title}</span>
//   </div>
// );

// Main Component
const WhyUsPage: React.FC = () => {
  const navigate=useNavigate()
  // Advantage items
  const advantageItems = [
    {
      icon: <FaIndustry className="text-3xl" />,
      title: "Industry Specialist",
      description: "Powerhouse of industry-specific IT solutions for transportation, logistics, energy, utilities, facilities, manufacturing and banking & finance."
    },
    {
      icon: <FaLaptopCode className="text-3xl" />,
      title: "Full Portfolio of Services",
      description: "Software development, solution consulting, IT project management, BPO, IT education and training, and support."
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Customer-Centric Engagement",
      description: "Our focus is on you, our goals and strategies are driven by your needs and success."
    },
    {
      icon: <FaCogs className="text-3xl" />,
      title: "Proven Service Methodology",
      description: "Unique, customizable methodology delivering leading-edge, reliable, cost-effective solutions."
    }
  ];

  // Partnership items
  const partnershipItems = [
    { icon: <FaCheckCircle className="text-xl" />, title: "IBM" },
    { icon: <FaCheckCircle className="text-xl" />, title: "Linux/Open Source" },
    { icon: <FaCheckCircle className="text-xl" />, title: "SAP" },
    { icon: <FaCheckCircle className="text-xl" />, title: "Oracle" },
    { icon: <FaCheckCircle className="text-xl" />, title: "Unisys" },
    { icon: <FaCheckCircle className="text-xl" />, title: "HP" }
  ];

  // Dropdown items for Why Us
  const dropdownItems: DropdownItem[] = [
    {
      title: "Powerhouse of Industry-Specific IT Solutions",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 text-xs md:text-sm">
            As an industry specialist, Ximax Automation has grown into a software powerhouse over the years addressing the demands and needs of several industries that include transportation & logistics, energy and utilities, facilities, manufacturing and banking & finance. Also, it has over a dozen custom "niche" and enterprise applications under their name and has utilized industry standard packages in active partnerships with IBM, Linux/Open Source, SAP, Oracles, Unisys, HP and other large system integrators.
          </p>
        </div>
      )
    },
    {
      title: "Full Portfolio of Specialized Services",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 text-xs md:text-sm">
            Ximax Automation range of services are specific and customized to the needs and demands of your business. These include software application development, solution consulting, IT project management, business process outsourcing, IT education and training and support. With the objective of keeping our customers happy, these services will ensure that Ximax Automation will keep your IT system up and running, IT support will always be available to provide the service you need and by allowing us to take care of your IT needs, you could focus more on growing your business.
          </p>
        </div>
      )
    },
    {
      title: "Customer-Centric Engagement",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 text-xs md:text-sm">
            Ximax Automation's true commitment to our customers is demonstrated by the way we do business with them and our years of experience as a specialized solutions and service provider across different industries. Because our customers are the most important, our focus is on you, our goals and strategies are driven by you.
          </p>
        </div>
      )
    },
    {
      title: "Proven Service Methodology",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 text-xs md:text-sm">
            Being a specialized solution and service provider for many years now, Ximax Automation makes use of a proven service methodology which is unique and can be customized to meet the needs and demands of different businesses. We make use of our expertise to ensure that our customers are provided with leading-edge, reliable, cost-effective and flexible industry-specific solutions and/or specialized services that meets the needs and demands of their business yielding productivity, profitability and financial success.
          </p>
        </div>
      )
    }
  ];

  return (
    <div id='why-us' className="min-h-screen bg-gray-50">
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
      className="w-full h-full md:object-contain md:object-cover opacity-44"
    />
    {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/80 mix-blend-multiply"></div> */}
  </div>
  
  <div className="container mx-auto px-4 relative z-10">
    <div className="flex flex-col items-center justify-center text-center">
      <div className="inline-flex items-center justify-center mb-3">
        <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold">
          <span className="text-sky-800">Why Ximax Automation?</span>{' '}
          {/* <span className="text-blue-600">Us</span> */}
        </h1>
      </div>
      
      <p className="text-xs md:text-base text-gray-900 font-semibold max-w-3xl mx-auto mb-12">
         In achieving financial success, it takes a perfect combination of having the right IT solution 
              that addresses the unique needs of your business and partnering with the right people.
            </p>
    </div>
  </div>
</section>

      {/* Main Content Section - Two Column Layout 60/40 */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-10">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column - 60% width */}
            <div className="w-full lg:w-[60%] space-y-2">
              <div className="flex items-start">
                <div className="p-3 bg-blue-100 rounded-lg mr-4 mt-1 flex-shrink-0">
                  <FaHandshake className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Focus on What You Do Best, We'll Take Care of the Rest
                  </h2>
                  <p className="text-gray-700 text-xs md:text-sm text-left leading-relaxed">
                    <strong>The risks involved in partnering with wrong solution providers are high</strong> and can result in costly and irreparable business mistakes. Hence, it is important to work with the right IT partner, an industry specialist. An industry specialist is a partner you can trust that will lead you to get insights, support and expertise that will propel your business to succeed.
                  </p>
                  <p className="text-gray-700 text-xs md:text-sm text-left leading-relaxed mt-4">
                    We are an industry specialist, and with us, you get to experience the Ximax Automation advantage. Hand-in-hand, Ximax Automation will work with you in achieving optimum productivity and financial success.
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
                  <p className="text-gray-700 text-xs md:text-sm text-left leading-relaxed italic font-medium">
                    "Finding the ideal IT partner is equally important as finding the right solution for your business."
                  </p>
                  <p className="text-gray-600 text-xs md:text-sm text-left leading-relaxed mt-3">
                    With our years of experience as a specialized solutions and service provider across different industries, our focus is on you, our goals and strategies are driven by you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partnerships Section */}
      <section className="py-5 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Side - Content - 70% width on desktop */}
            <div className="order-1 lg:order-1 w-full lg:w-[70%]">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <FaGlobeAmericas className="text-blue-600 text-lg" />
                  </div>
                  <span className="text-blue-700 font-semibold text-xs md:text-sm">Strategic Partnerships</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  Active Partnerships with Industry Leaders
                </h2>
                
                <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                  Ximax Automation has utilized industry standard packages in active partnerships with IBM, 
                  Linux/Open Source, SAP, Oracles, Unisys, HP and other large system integrators.
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3 mt-4">
                  {partnershipItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <FaCheckCircle className="text-blue-600 text-xs md:text-sm" />
                      <span className="text-gray-700 text-xs md:text-sm font-medium">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Side - Image - 30% width on desktop */}
            <div className="order-2 lg:order-2 w-full lg:w-[30%]">
              <div className="relative">
                <div className="aspect-[4/3] lg:aspect-square relative">
                  <img 
                    src="/about-img1.jpg" 
                    alt="Ximax Automation Strategic Partnerships" 
                    className="w-full h-full object-contain"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div> */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full">
                      <FaHandshake className="w-4 h-4 text-white" />
                      <span className="text-white text-xs md:text-sm font-medium">Trusted Partners</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The <span className="text-blue-600">Ximax Automation</span> Advantage
            </h2>
            <p className="text-xs md:text-base text-gray-600 max-w-3xl mx-auto">
              As an industry specialist, we offer a powerhouse of industry-specific IT solutions and specialized services
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            {advantageItems.map((item, index) => (
              <IconCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Why Us Dropdown Section */}
      <section className="py-5 bg-gray-50">
        <div className="container mx-auto px-4 mt-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Ximax Automation?
              </h2>
              <p className="text-xs md:text-base text-gray-600">
                Our commitment to excellence and customer success drives everything we do
              </p>
            </div>
            
            <WhyDropdown items={dropdownItems} />
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
        Ready to Experience the Ximax Automation Advantage?
      </h2>
      <p className="text-white/90 text-xs md:text-sm mb-6 max-w-2xl mx-auto">
        Partner with an industry specialist you can trust. Let us help you achieve optimum productivity and financial success.
      </p>
      <button onClick={()=>navigate("/contact-us")} className="inline-flex items-center gap-2 bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg">
        Partner With Us
        <FaHandshake className="text-blue-600" />
      </button>
    </div>
  </div>
</section>
    </div>
  );
};

export default WhyUsPage;