// components/AboutSection.tsx

const AboutSection = () => {

  return (
    <section id="about" className="py-5 bg-white -mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="lg:w-[70%]">
            {/* Section Header */}
            <div className="mb-">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-sky-50 text-sky-600 text-sm font-semibold mb-2">
                About Our Company
              </span>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                About <span className="text-sky-600">Ximax Automation</span>
              </h2>
              <div className="h-1 w-20 bg-sky-600 mb-3"></div>
            </div>

            {/* Company Info */}
            <div className="space-y-3 mb-">
              <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold text-sky-700">Ximax Automation</span> is a premier IT consulting and software services company, bringing <span className="font-semibold">18+ years</span> of industry expertise since our foundation. We specialize in delivering cutting-edge automation and digital transformation solutions that drive business growth and operational excellence.
              </p>
              
              <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                Our comprehensive suite of services spans across analysis, design, development, and maintenance of advanced IT systems. We empower our clients to generate revenue, reduce costs, and access critical business intelligence through innovative technology solutions delivered on time, every time.
              </p>
            </div>
          </div>

          {/* Right Image & Services */}
          <div className="lg:w-[40%] mx-auto">
            {/* Main Image */}
            <div className="relative mb-">
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Ximax Automation Team Collaboration" 
                  className="w-full h-64 md:h-80 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  {/* <div className="text-sm font-semibold bg-sky-600 px-3 py-1 rounded-full inline-block">
                    Since 2006
                  </div> */}
                </div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 bg-sky-100 rounded-2xl -z-10"></div>
            </div>

            {/* Services Grid */}
            {/* <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Core Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-sky-300 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-sky-50 text-sky-600 rounded-lg group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors duration-300">
                          {service.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;