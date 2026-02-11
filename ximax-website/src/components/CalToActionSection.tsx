// components/CallToActionSectionAlt.tsx
import { ArrowRight } from 'lucide-react';

const CallToActionSectionAlt = () => {
  return (
    <section className="py-5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Card - 70% width */}
        <div className="w-[70%] mx-auto">
          <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl shadow-2xl overflow-hidden relative">
            {/* Left Side - Content */}
            <div className="relative z-10 p-8 md:p-12 lg:p-16 text-white max-w-lg">
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

            {/* Right Side - Image overlapping on background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <div className="absolute right-0 top-0 bottom-0 w-1/2 lg:w-2/3">
                <img 
                  src="/caltoaction.png"
                  alt="Business Success"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Gradient Overlay - fading into the blue background */}
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500/90 via-sky-500/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSectionAlt;