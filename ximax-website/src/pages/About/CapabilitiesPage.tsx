import React, { useState } from 'react';
import { 
  FaRocket, 
  FaCaretDown,
  FaQuoteLeft,
  FaUsers,
  FaHandshake,
  FaRegBuilding,
  FaCode,
  FaPencilRuler,
  FaProjectDiagram,
  FaUserTie,
  FaClipboardList,
  FaNetworkWired
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// Dropdown Component
interface DropdownItem {
  title: string;
  content: React.ReactNode;
}

export const CapabilitiesDropdown: React.FC<{ items: DropdownItem[] }> = ({ items }) => {
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

// Main Component
const CapabilitiesPage: React.FC = () => {
  const navigate=useNavigate()
  // Capabilities items for the grid
  const capabilityItems = [
    {
      icon: <FaPencilRuler className="text-3xl" />,
      title: "Design Excellence",
      description: "Our designers continually study and refine their feel for the aesthetic, improving their understanding in user experience."
    },
    {
      icon: <FaCode className="text-3xl" />,
      title: "Development Innovation",
      description: "Our developers employ new and interesting technologies, looking for solutions that are elegant, functional and in line with best practices."
    },
    {
      icon: <FaProjectDiagram className="text-3xl" />,
      title: "Software Architecture",
      description: "Our software architects design solutions that are easy to maintain and extensible for the future."
    },
    {
      icon: <FaUserTie className="text-3xl" />,
      title: "Business Analysis",
      description: "Our business analysts identify problems and work with architects to design solutions ensuring ongoing business agility and strong ROI."
    },
    {
      icon: <FaClipboardList className="text-3xl" />,
      title: "Project Management",
      description: "Our project managers measure progress & encourage communication so you can make informed decisions, delivering solutions in a timely manner."
    },
    {
      icon: <FaNetworkWired className="text-3xl" />,
      title: "Professional Network",
      description: "We draw on a large network of trusted professional colleagues with skills in testing, documentation, graphics, network operations and training."
    }
  ];

  // Teamwork & Commitment items
  const cultureItems = [
    {
      icon: <FaUsers className="text-2xl" />,
      title: "Teamwork",
      description: "Each professional in Ximax Automation is a team player who can work independently and in unity with other team members, keeping in mind common goals set with clients."
    },
    {
      icon: <FaHandshake className="text-2xl" />,
      title: "Commitment and Dedication",
      description: "We make sure that you have our 100% commitment and dedication to working hard to ensure that goals set are attained in a timely manner, expectations are met and that you get the most out of partnering with Ximax Automation."
    }
  ];

  return (
    <div id='capabilities' className="min-h-screen bg-gray-50">
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
      className="w-full h-full md:object-cover opacity-44"
    />
    {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/80 mix-blend-multiply"></div> */}
  </div>
  
  <div className="container mx-auto px-4 relative z-10">
    <div className="flex flex-col items-center justify-center text-center">
      <div className="inline-flex items-center justify-center mb-3">
        <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold">
          <span className="text-sky-800">Our Capabilities</span>{' '}
          {/* <span className="text-blue-600">Us</span> */}
        </h1>
      </div>
      
      <p className="text-xs md:text-base text-gray-900 font-semibold max-w-3xl mx-auto mb-12">
       Bringing proven commercial software design and development experience to bear on the computing problems that clients face.
            </p>
    </div>
  </div>
</section>
      
      {/* Introduction Section - Two Column Layout */}
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
                    Excellence in Every Delivery
                  </h2>
                  <p className="text-gray-700 text-xs md:text-sm text-left leading-relaxed">
                    <strong>Ximax Automation</strong> brings proven commercial software design and development experience to bear on the computing problems that clients face. We take great pride in the quality and integrity of our team.
                  </p>
                  <p className="text-gray-700 text-xs md:text-sm text-left leading-relaxed mt-4">
                    We take serving our customer as seriously as we do our culture of fun, creativity and professionalism. Our fantastic team is anxious to work with your organization, to make both yours and ours stronger.
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
                    <strong>Our strength is our People.</strong> Each professional brings unique expertise while working together toward common goals.
                  </p>
                  <p className="text-gray-700 text-xs md:text-sm text-left leading-relaxed mt-4">
                    All our trusted professional colleagues are available for reference, bringing skills in software development, testing, project management, documentation, graphics design, network operations, and training.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid Section */}
      <section className="py-5 bg-gray-50">
        <div className="container mx-auto px-4 mt-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What We <span className="text-blue-600">Excel At</span>
            </h2>
            <p className="text-xs md:text-base text-gray-600 max-w-3xl mx-auto">
              Our multidisciplinary team brings together expertise across the entire software development lifecycle
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
            {capabilityItems.map((item, index) => (
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

      {/* Teamwork & Commitment Section */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Core Values</span>
            </h2>
            <p className="text-xs md:text-base text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and relationships with clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 max-w-4xl mx-auto">
            {cultureItems.map((item, index) => (
              <CultureCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
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
        Ready to Work With Our Team?
      </h2>
      <p className="text-white/90 text-xs md:text-sm mb-6 max-w-2xl mx-auto">
        Partner with Ximax Automation and experience the difference our capabilities can make for your business
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

export default CapabilitiesPage;