import React from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CalToActionSection: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <section className="w-full py-8 relative z-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="w-[90%] md:w-[80%] mx-auto">
          <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#38B2FF]/10 to-[#7ED4FF]/10 shadow-2xl border border-[#38B2FF]/20">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-0">

              {/* Left */}
              <div className="sm:col-span-2 lg:col-span-2 p-12 flex items-center">
                <div className="w-full">

                  <h2 className="text-lg md:text-4xl font-bold text-gray-900 mb-4">
                    Ready to Transform Your 
                    <span className="text-[#38B2FF] block">Business with Cloud & AI?</span>
                  </h2>

                  <p className="text-gray-600 mb-2 leading-relaxed text-sm md:text-base">
                    Partner with Ximax Automation to leverage cutting-edge big data, cloud applications, and AI development solutions. Our expert team delivers tailored IT strategies that drive growth, optimize operations, and accelerate your digital transformation journey.
                  </p>

                  <button 
                    onClick={() => navigate("/contact-us")} 
                    className="group relative px-6 py-3 bg-gradient-to-r from-[#38B2FF] to-[#7ED4FF] border-2 border-transparent text-white rounded-full font-semibold text-sm md:text-base hover:from-[#2A8ECC] hover:to-[#5FB4E0] transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl active:scale-105 flex items-center justify-center"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Talk to Our Experts
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>

                </div>
              </div>

              {/* Right */}
              <div className="lg:col-span-1 relative sm:-ml-16 md:-ml-8">
                <div className="h-full min-h-[200px] flex items-center justify-center p-2">
                  <div className="relative z-10 text-center">
                    <div className="w-60 h-60 md:h-84 md:w-84 mx-auto flex items-center justify-center">
                      <img
                        src="/caltoaction.png"
                        alt="Ximax Automation Technology Solutions"
                        className="w-full h-full object-cover md:mt-16"
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CalToActionSection;