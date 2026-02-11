// components/HeroSection.tsx
import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Code, Cpu, Cloud, Users, Target, Globe } from "lucide-react";

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [slideAnimations, setSlideAnimations] = useState<Record<string, boolean>>({});
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const timeoutRefs = useRef<number[]>([]);

  // Clear all timeouts on unmount
  useEffect(() => {
    return () => {
      timeoutRefs.current.forEach(clearTimeout);
    };
  }, []);

  // Combined slides array with content and images
  const slides = [
    {
      image: "/digital-bghero.png",
      fallbackImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      title: "Digital Transformation Services",
      tagline: "Our Expertise",
      description: "Transform your business with cutting-edge digital solutions. We help organizations adapt, innovate, and thrive in the digital era through strategic technology implementation.",
      icon: <Globe className="w-8 h-8" />,
      buttonText: "Explore Services",
      color: "from-sky-600 to-blue-700"
    },
    {
      image: "/app-bghero.png",
      fallbackImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      title: "Enterprise Application Development",
      tagline: "Our Expertise",
      description: "Build robust, scalable enterprise solutions tailored to your business needs. Our full-stack development services deliver secure, efficient, and future-proof applications.",
      icon: <Code className="w-8 h-8" />,
      buttonText: "View Projects",
      color: "from-sky-600 to-blue-700"
    },
    {
      image: "/cloud-bghero.png",
      fallbackImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      title: "Cloud Computing & DevOps Solutions",
      tagline: "Our Services",
      description: "Accelerate your digital journey with our cloud and DevOps expertise. Streamline operations, enhance scalability, and improve deployment efficiency.",
      icon: <Cloud className="w-8 h-8" />,
      buttonText: "Learn More",
      color: "from-sky-600 to-blue-700"
    },
    {
      image: "/ai-bghero.png",
      fallbackImage: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      title: "AI & Machine Learning Implementation",
      tagline: "Innovation",
      description: "Leverage artificial intelligence to gain competitive advantage. Our AI/ML solutions drive intelligent automation and data-driven decision making.",
      icon: <Cpu className="w-8 h-8" />,
      buttonText: "Discover AI",
      color: "from-sky-600 to-blue-700"
    },
    {
      image: "/fullstack-bghero.png",
      fallbackImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      title: "Full-Stack Development & UI/UX Design",
      tagline: "Technology",
      description: "Create exceptional digital experiences with our full-stack development and user-centric design services. From concept to deployment, we've got you covered.",
      icon: <Users className="w-8 h-8" />,
      buttonText: "See Portfolio",
      color: "from-sky-600 to-blue-700"
    },
    {
      image: "/amazing-bghero.png",
      fallbackImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      title: "Let's Build Something Amazing Together",
      tagline: "Our Moto",
      description: "Collaborate with our expert team to turn your vision into reality. We combine innovation, expertise, and passion to deliver exceptional results.",
      icon: <Target className="w-8 h-8" />,
      buttonText: "Start Project",
      color: "from-sky-600 to-blue-700"
    }
  ];

  // Handle image error
  const handleImageError = (index: number) => {
    console.error(`Failed to load image for slide ${index}: ${slides[index].image}`);
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  // Start animations for current slide
  const startAnimationsForSlide = (slideIndex: number) => {
    // Clear any existing animations for this slide
    setSlideAnimations(prev => ({ 
      ...prev, 
      [`${slideIndex}_image`]: false,
      [`${slideIndex}_tagline`]: false,
      [`${slideIndex}_title`]: false,
      [`${slideIndex}_description`]: false,
      [`${slideIndex}_buttons`]: false
    }));

    // Start staggered animations with timeouts
    const timeout1 = window.setTimeout(() => {
      setSlideAnimations(prev => ({ ...prev, [`${slideIndex}_image`]: true }));
    }, 100);
    
    const timeout2 = window.setTimeout(() => {
      setSlideAnimations(prev => ({ ...prev, [`${slideIndex}_tagline`]: true }));
    }, 400);
    
    const timeout3 = window.setTimeout(() => {
      setSlideAnimations(prev => ({ ...prev, [`${slideIndex}_title`]: true }));
    }, 700);
    
    const timeout4 = window.setTimeout(() => {
      setSlideAnimations(prev => ({ ...prev, [`${slideIndex}_description`]: true }));
    }, 1000);
    
    const timeout5 = window.setTimeout(() => {
      setSlideAnimations(prev => ({ ...prev, [`${slideIndex}_buttons`]: true }));
    }, 1300);

    timeoutRefs.current.push(timeout1, timeout2, timeout3, timeout4, timeout5);
  };

  // Preload all images on component mount
  useEffect(() => {
    const preloadImages = () => {
      const promises = slides.map((slide, index) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = slide.image;
          img.onload = () => {
            console.log(`Successfully loaded: ${slide.image}`);
            resolve(true);
          };
          img.onerror = () => {
            console.warn(`Failed to load: ${slide.image}, will use fallback when needed`);
            handleImageError(index);
            // Preload fallback image
            const fallbackImg = new Image();
            fallbackImg.src = slide.fallbackImage;
            fallbackImg.onload = () => resolve(true);
            fallbackImg.onerror = () => {
              console.error(`Failed to load fallback for slide ${index}`);
              resolve(true); // Resolve anyway to continue
            };
          };
        });
      });

      Promise.all(promises)
        .then(() => {
          setImagesLoaded(true);
          // Start animations for initial slide
          startAnimationsForSlide(0);
        })
        .catch((error) => {
          console.error('Error in preloading:', error);
          setImagesLoaded(true);
          startAnimationsForSlide(0);
        });
    };

    preloadImages();
  }, []);

  // Auto slide every 5 seconds
  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = window.setInterval(() => {
      const nextSlide = (currentSlide + 1) % slides.length;
      setCurrentSlide(nextSlide);
      startAnimationsForSlide(nextSlide);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [currentSlide, imagesLoaded, slides.length]);

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    
    setCurrentSlide(index);
    startAnimationsForSlide(index);
  };

  const nextSlide = () => {
    const next = (currentSlide + 1) % slides.length;
    setCurrentSlide(next);
    startAnimationsForSlide(next);
  };

  const prevSlide = () => {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(prev);
    startAnimationsForSlide(prev);
  };

  // Helper function to check if animation is active for current slide
  const isAnimationActive = (type: string) => {
    return slideAnimations[`${currentSlide}_${type}`] || false;
  };

  return (
    <section id="/" className="relative w-full h-screen overflow-hidden">
      {/* Loading Skeleton */}
      {!imagesLoaded && (
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-gray-900 to-gray-800 animate-pulse">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white">
              <div className="w-12 h-12 border-4 border-sky-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-center">Loading hero images...</p>
            </div>
          </div>
        </div>
      )}

      {/* Slides Container - 70% height */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          const useFallback = imageErrors[index];
          
          return (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                isActive
                  ? "opacity-100 z-10" 
                  : "opacity-0 z-0"
              }`}
            >
              {/* Background Image with animation - 70% height */}
              <div className={`absolute top-0 left-0 w-full h-[70%] transition-all duration-1000 ease-out transform ${
                isAnimationActive('image')
                  ? 'scale-100 opacity-100' 
                  : 'scale-110 opacity-0'
              }`}>
                <img 
                  src={useFallback ? slide.fallbackImage : slide.image} 
                  alt={slide.title} 
                  className="w-full h-full object-cover"
                  loading="eager"
                  onError={() => handleImageError(index)}
                />
              </div>
              
              {/* Black Gradient Overlay - Bottom Heavy for 70% */}
              <div className="absolute top-0 left-0 w-full h-[70%] bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              
              {/* Skyblue Accent Gradient */}
              <div className={`absolute top-0 left-0 w-full h-[70%] bg-gradient-to-br ${slide.color}/10 opacity-20`}></div>
            </div>
          );
        })}
      </div>

      {/* Content Container - Center of height with left alignment */}
      <div className="absolute inset-0 z-20 flex items-center justify-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-start justify-between">
            {/* Left Content - Takes 2/3 width */}
            <div className="lg:w-2/3 text-white">
              {/* Tagline - Comes from bottom */}
              <div className={`mb-2 transition-all duration-700 ease-out transform ${
                isAnimationActive('tagline')
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}>
                <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  {slides[currentSlide].icon}
                  <span className="text-sky-300 font-semibold text-sm tracking-wider">
                    {slides[currentSlide].tagline}
                  </span>
                </span>
              </div>

              {/* Title - Comes from bottom after tagline */}
              <div className={`transition-all duration-700 ease-out transform delay-150 ${
                isAnimationActive('title')
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-12 opacity-0'
              }`}>
                <h1 className="text-3xl font-bold mb-2 leading-tight max-w-3xl">
                  {slides[currentSlide].title}
                </h1>
              </div>

              {/* Description - Comes from bottom after title */}
              <div className={`transition-all duration-700 ease-out transform delay-300 ${
                isAnimationActive('description')
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-16 opacity-0'
              }`}>
                <p className="text-base text-gray-200 mb-2 max-w-2xl leading-relaxed">
                  {slides[currentSlide].description}
                </p>
              </div>

              {/* Buttons - Comes from bottom after description */}
              <div className={`transition-all duration-700 ease-out transform delay-450 ${
                isAnimationActive('buttons')
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              }`}>
                <div className="flex flex-wrap gap-3">
                  <button className="group bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-lg font-semibold text-base flex items-center gap-2 transition-all duration-300 hover:shadow-xl hover:shadow-sky-600/25">
                    {slides[currentSlide].buttonText}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Navigation Controls */}
            <div className="lg:w-1/3 flex justify-end mt-8 lg:mt-0">
              <div className="flex flex-col items-end gap-4">
                {/* Slide Navigation Dots */}
                {/* <div className="flex gap-2">
                  {slides.map((_, dotIndex) => (
                    <button
                      key={dotIndex}
                      onClick={() => goToSlide(dotIndex)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        dotIndex === currentSlide
                          ? 'bg-sky-500 w-8'
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                      aria-label={`Go to ${slides[dotIndex].title}`}
                    />
                  ))}
                </div> */}

                {/* Arrow Navigation */}
                <div className="flex gap-3">
                  <button
                    onClick={prevSlide}
                    className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors active:scale-95"
                    aria-label="Previous slide"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={nextSlide}
                    className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors active:scale-95"
                    aria-label="Next slide"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dots - Bottom Center */}
      {/* {imagesLoaded && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 lg:hidden z-30">
          <div className="flex justify-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-sky-500' : 'bg-white/30'
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )} */}

    </section>
  );
};

export default HeroSection;