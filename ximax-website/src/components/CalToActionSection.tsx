// components/CallToActionSectionAlt.tsx
import { ArrowRight } from 'lucide-react';

const CallToActionSectionAlt = () => {
  return (
    <section className="py-5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main CTA Card - 70% width */}
        <div className="w-[70%] mx-auto">
          <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Left Side - Content */}
              <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Start Your Digital Transformation Journey Today
                </h3>
                
                <p className="text-white/90 mb-8 leading-relaxed">
                  Get access to our premium suite of services with a risk-free trial. Experience the difference our expertise can make for your business.
                </p>

                {/* CTA Button */}
                <button className="group bg-white text-sky-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold text-lg w-full flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-xl">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>

              {/* Right Side - Image */}
              <div className="lg:w-1/2 relative">
                <div className="relative h-full min-h-[400px] lg:min-h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Business Success"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Overlay Content */}
                  {/* <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="text-white">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-lg font-semibold">4.9/5 Rating</span>
                      </div>
                      <p className="text-white/90 text-lg">
                        "Their solution transformed our workflow and increased productivity by 40%."
                      </p>
                      <div className="mt-4 text-white/80">
                        — Sarah Johnson, CEO at TechCorp
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSectionAlt;