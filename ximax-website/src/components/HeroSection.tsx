// components/HeroSection.tsx
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Code, Cpu, Cloud, Users, Target, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const intervalRef = useRef<number | null>(null);
  const animationTimeoutRef = useRef<number | null>(null);

  // Combined slides array with optimized image paths
  const slides = [
    {
      image: "/digital-bghero.jpg",
      title: "Digital Transformation Services",
      tagline: "Our Expertise",
      description: "Transform your business with cutting-edge digital solutions. We help organizations adapt, innovate, and thrive in the digital era through strategic technology implementation.",
      icon: <Globe className="w-8 h-8" />,
      buttonText: "Explore Services",
      color: "from-sky-600 to-blue-700",
      path: "/digital-transformation"
    },
    {
      image: "/app-bghero.webp",
      title: "Enterprise Application Development",
      tagline: "Our Expertise",
      description: "Build robust, scalable enterprise solutions tailored to your business needs. Our full-stack development services deliver secure, efficient, and future-proof applications.",
      icon: <Code className="w-8 h-8" />,
      buttonText: "View Projects",
      color: "from-sky-600 to-blue-700",
      path: "/application-development"
    },
    {
      image: "/cloud-bghero.webp",
      title: "Cloud Computing & DevOps Solutions",
      tagline: "Our Services",
      description: "Accelerate your digital journey with our cloud and DevOps expertise. Streamline operations, enhance scalability, and improve deployment efficiency.",
      icon: <Cloud className="w-8 h-8" />,
      buttonText: "Learn More",
      color: "from-sky-600 to-blue-700",
      path: "/cloud-applications"
    },
    {
      image: "/ai-bghero.webp",
      title: "AI & Machine Learning Implementation",
      tagline: "Innovation",
      description: "Leverage artificial intelligence to gain competitive advantage. Our AI/ML solutions drive intelligent automation and data-driven decision making.",
      icon: <Cpu className="w-8 h-8" />,
      buttonText: "Discover AI",
      color: "from-sky-600 to-blue-700",
      path: "/big-data-analytics"
    },
    {
      image: "/fullstack-bghero.webp",
      title: "Full-Stack Development & UI/UX Design",
      tagline: "Technology",
      description: "Create exceptional digital experiences with our full-stack development and user-centric design services. From concept to deployment, we've got you covered.",
      icon: <Users className="w-8 h-8" />,
      buttonText: "See Portfolio",
      color: "from-sky-600 to-blue-700",
      path: "/application-development"
    },
    {
      image: "/amazing-bghero.webp",
      title: "Let's Build Something Amazing Together",
      tagline: "Our Moto",
      description: "Collaborate with our expert team to turn your vision into reality. We combine innovation, expertise, and passion to deliver exceptional results.",
      icon: <Target className="w-8 h-8" />,
      buttonText: "Start Project",
      color: "from-sky-600 to-blue-700",
      path: "/about-company"
    }
  ];

  // Preload all images on mount
  useEffect(() => {
    const loadAllImages = async () => {
      const loadedState = new Array(slides.length).fill(false);
      
      // Load all images in parallel
      const loadPromises = slides.map((slide, index) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = slide.image;
          img.onload = () => {
            loadedState[index] = true;
            setImagesLoaded([...loadedState]);
            resolve(true);
          };
          img.onerror = () => {
            console.error(`Failed to load image: ${slide.image}`);
            loadedState[index] = true; // Mark as loaded anyway to prevent stuck loading
            setImagesLoaded([...loadedState]);
            resolve(true);
          };
        });
      });

      await Promise.all(loadPromises);
      setIsInitialLoading(false);
    };

    loadAllImages();
  }, []);

  // Auto slide
  useEffect(() => {
    if (isInitialLoading) return;

    const startInterval = () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      intervalRef.current = window.setInterval(() => {
        if (!isAnimating) {
          setCurrentSlide(prev => (prev + 1) % slides.length);
        }
      }, 5000);
    };

    startInterval();
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [isInitialLoading, isAnimating, slides.length]);

  // Animation trigger
  useEffect(() => {
    setIsAnimating(true);
    if (animationTimeoutRef.current) window.clearTimeout(animationTimeoutRef.current);
    animationTimeoutRef.current = window.setTimeout(() => {
      setIsAnimating(false);
    }, 1500);
  }, [currentSlide]);

  const nextSlide = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  const handleButtonClick = (path: string) => {
    navigate(path);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Initial Loading indicator with company name */}
      {isInitialLoading && (
        <div className="absolute inset-0 z-50 bg-gradient-to-r from-sky-600 to-blue-600 flex flex-col items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Ximax Automation</h1>
            <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
            {/* <p className="text-white/80 text-sm mt-4">Loading amazing experiences...</p> */}
          </div>
        </div>
      )}

      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image */}
            <div className="absolute top-0 left-0 w-full h-[80%]">
              {imagesLoaded[index] && (
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute top-0 left-0 w-full h-[80%] bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Content Container - Always show once initial loading is done */}
      {!isInitialLoading && (
        <div className="absolute inset-0 z-20 flex items-center justify-start">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col lg:flex-row items-start justify-between">
              {/* Left Content */}
              <div className="lg:w-2/3 text-white">
                {/* Tagline */}
                <div className={`mb-2 transition-all duration-700 transform ${
                  !isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                }`}>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                    <span className="text-sky-300 font-semibold text-sm tracking-wider">
                      {slides[currentSlide].tagline}
                    </span>
                  </span>
                </div>

                {/* Title */}
                <div className={`transition-all duration-700 delay-100 transform ${
                  !isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2 leading-tight max-w-3xl">
                    {slides[currentSlide].title}
                  </h1>
                </div>

                {/* Description */}
                <div className={`transition-all duration-700 delay-200 transform ${
                  !isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
                }`}>
                  <p className="text-sm text-gray-200 mb-2 max-w-2xl leading-relaxed">
                    {slides[currentSlide].description}
                  </p>
                </div>

                {/* Button */}
                <div className={`transition-all duration-700 delay-300 transform ${
                  !isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-28 opacity-0'
                }`}>
                  <div className="flex flex-wrap gap-3">
                    <button 
                      onClick={() => handleButtonClick(slides[currentSlide].path)}
                      className="group bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-lg font-semibold text-lg flex items-center gap-2 transition-all duration-300 hover:shadow-xl hover:shadow-sky-600/25"
                    >
                      {slides[currentSlide].buttonText}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="lg:w-1/3 flex justify-end mt-8 lg:mt-0">
                <div className="flex gap-3">
                  <button
                    onClick={prevSlide}
                    className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                    aria-label="Previous slide"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={nextSlide}
                    className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
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
      )}
    </section>
  );
};

export default HeroSection;