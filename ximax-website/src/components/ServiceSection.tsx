// components/ServicesSection.tsx
import { Code, Cloud, Database, Shield } from 'lucide-react';

const ServicesSection = () => {
  // Main services cards data
  const mainServices = [
    {
      id: 1,
      title: "Custom Software Development",
      description: "Bespoke software solutions tailored to your business needs using modern technologies. We deliver scalable, high-performance applications from concept to deployment with agile methodologies.",
      icon: <Code className="w-6 h-6" />,
      color: "bg-sky-100 text-sky-600",
      borderColor: "border-b-sky-500"
    },
    {
      id: 2,
      title: "Cloud Infrastructure Solutions",
      description: "Comprehensive cloud services including migration, architecture design, and managed operations. We leverage AWS, Azure, and Google Cloud for scalability, security, and cost-efficiency.",
      icon: <Cloud className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-600",
      borderColor: "border-b-sky-500"
    },
    {
      id: 3,
      title: "Advanced Data Analytics & BI",
      description: "Unlock data insights with our analytics solutions including data warehouses, real-time analytics, and BI dashboards. We help predict trends and optimize operations through data-driven decisions.",
      icon: <Database className="w-6 h-6" />,
      color: "bg-green-100 text-green-600",
      borderColor: "border-b-sky-500"
    },
    {
      id: 4,
      title: "Cybersecurity & Compliance",
      description: "Protect digital assets with comprehensive security services including vulnerability assessments and compliance frameworks. We ensure protection against threats while maintaining regulatory compliance.",
      icon: <Shield className="w-6 h-6" />,
      color: "bg-red-100 text-red-600",
      borderColor: "border-b-sky-500"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-sky-50 text-sky-600 text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive <span className="text-sky-600">IT Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We deliver end-to-end technology solutions that transform businesses and drive growth. 
            Our expertise spans across various domains, ensuring comprehensive coverage for all your IT needs.
          </p>
        </div>

        {/* Main Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainServices.map((service) => (
            <div
              key={service.id}
              className="bg-sky-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full border-b-4 border-sky-500"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-lg ${service.color} flex-shrink-0`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;