// components/Header.tsx
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Mail, Phone, Linkedin, ChevronDown, ChevronRight } from 'lucide-react';

// WhatsApp Icon Component
const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width={size} 
    height={size}
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.76.982.981-3.717-.236-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411" />
  </svg>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Dropdown data
  const dropdowns = {
    'About Us': [
      { name: 'About Company', href: '/about-company' },
      { name: 'Why Us?', href: '/why-us' },
      { name: 'Our Capabilities', href: '/capabilities' },
    ],
    'Services': [
      { name: 'Big Data & Analytics', href: '/services/big-data-analytics' },
      { name: 'Cloud Applications', href: '/services/cloud-applications' },
      { name: 'Application Development', href: '/services/application-development' },
      { name: 'Digital Transformation', href: '/services/digital-transformation' },
      { name: 'Testing & QA', href: '/services/testing-qa' },
      { name: 'ERP Development', href: '/services/erp-development' },
    ],
    'Technology': [
      { name: 'Microsoft .NET', href: '/technology/microsoft-dotnet' },
      { name: 'Java/J2EE', href: '/technology/java-j2ee' },
      { name: 'Enterprise Web Services', href: '/technology/enterprise-web-services' },
      { name: 'Middleware', href: '/technology/middleware' },
      { name: 'Oracle', href: '/technology/oracle' },
    ],
    'Industry Verticals': [
      { name: 'Banking & Financial Services', href: '/industry/banking-financial' },
      { name: 'Healthcare Solutions', href: '/industry/healthcare' },
      { name: 'E-commerce', href: '/industry/ecommerce' },
      { name: 'Manufacturing', href: '/industry/manufacturing' },
      { name: 'Telecommunication', href: '/industry/telecommunication' },
      { name: 'Travel, Transport & Logistics', href: '/industry/travel-transport-logistics' },
    ],
  };

  const contactLinks = [
    { icon: Mail, text: 'info@ximax.com', href: 'mailto:info@ximax.com' },
    { icon: Phone, text: '+1 234 567 8900', href: 'tel:+12345678900' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const handleNavigation = (href: string) => {
    // For external links (mailto, tel) use window.location
    if (href.startsWith('mailto:') || href.startsWith('tel:')) {
      window.location.href = href;
    } else {
      // For internal links, use pushState for client-side navigation
      window.history.pushState({}, '', href);
      
      // Dispatch a popstate event to notify any listeners
      const popStateEvent = new PopStateEvent('popstate', { state: {} });
      window.dispatchEvent(popStateEvent);
    }
    
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const navLinks = [
    { name: 'Home', href: '/', hasDropdown: false },
    { name: 'About Us', href: '/about', hasDropdown: true },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Technology', href: '/technology', hasDropdown: true },
    { name: 'Industry Verticals', href: '/verticals', hasDropdown: true },
    { name: 'Career', href: '/career', hasDropdown: false },
    { name: 'Contact Us', href: '/contact', hasDropdown: false },
  ];

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden lg:block fixed top-0 w-full z-50 transition-all duration-300" ref={dropdownRef}>
        {/* Top Small Header - Hidden when scrolled */}
        <div className={`bg-sky-600 text-white transition-all duration-300 ${isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'py-2 px-6'}`}>
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* All Navigation Links - Left */}
            <nav className="flex space-x-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  <button
                    onClick={() => {
                      if (link.hasDropdown) {
                        toggleDropdown(link.name);
                      } else {
                        handleNavigation(link.href);
                      }
                    }}
                    className="text-sm font-medium hover:text-sky-100 transition-colors flex items-center gap-1"
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    )}
                  </button>
                  
                  {/* Dropdown Menu */}
                  {link.hasDropdown && activeDropdown === link.name && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                      {dropdowns[link.name as keyof typeof dropdowns]?.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => handleNavigation(item.href)}
                          className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <ChevronRight className="w-4 h-4 text-sky-500" />
                            <span className="font-medium">{item.name}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Contact Links - Right */}
            <div className="flex items-center space-x-6">
              {contactLinks.map((link) => (
                <button
                  key={link.text}
                  onClick={() => handleNavigation(link.href)}
                  className="flex items-center space-x-2 text-sm hover:text-sky-100 transition-colors"
                >
                  <link.icon size={16} />
                  <span>{link.text}</span>
                </button>
              ))}
              
              {/* Social Media Icons */}
              <div className="flex items-center space-x-4 border-l border-sky-500 pl-4">
                <a
                  href="https://wa.me/12345678900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-300 transition-colors"
                  title="WhatsApp"
                >
                  <WhatsAppIcon size={18} />
                </a>
                <a
                  href="https://linkedin.com/company/ximax"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-100 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header with Logo Image - Hidden when scrolled */}
        <div className={`bg-white shadow-md transition-all duration-300 ${isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'py-'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-center items-center">
              {/* Logo Image */}
              <img 
                src="/ximax-logo1.png" 
                alt="Ximax Logo" 
                className="h-24 w-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Scrolled Header - Only shows when scrolling */}
        {isScrolled && (
          <div className="bg-white shadow-lg py-3 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
              {/* Logo/Title - Left */}
              <div className="flex items-center">
                <img 
                  src="/ximax-logo1.png" 
                  alt="Ximax Logo" 
                  className="h-10 w-auto mr-4"
                />
              </div>

              {/* Navigation Links with Dropdowns - Center */}
              <nav className="flex space-x-8">
                {navLinks.map((link) => (
                  <div key={link.name} className="relative">
                    <button
                      onClick={() => {
                        if (link.hasDropdown) {
                          toggleDropdown(link.name);
                        } else {
                          handleNavigation(link.href);
                        }
                      }}
                      className="text-gray-800 hover:text-sky-600 font-medium transition-colors text-lg flex items-center gap-1"
                    >
                      {link.name}
                      {link.hasDropdown && (
                        <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                      )}
                    </button>
                    
                    {/* Dropdown Menu for Scrolled State */}
                    {link.hasDropdown && activeDropdown === link.name && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                        {dropdowns[link.name as keyof typeof dropdowns]?.map((item) => (
                          <button
                            key={item.name}
                            onClick={() => handleNavigation(item.href)}
                            className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <ChevronRight className="w-4 h-4 text-sky-500" />
                              <span className="font-medium">{item.name}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Mobile & Tablet Header */}
      <header className="lg:hidden fixed top-0 w-full z-50" ref={dropdownRef}>
        {/* Top Small Header - Hidden when scrolled */}
        <div className={`bg-sky-600 text-white transition-all duration-300 ${isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'py-1 px-4'}`}>
          <div className="flex justify-between items-center">
            {/* Left Icons */}
            <div className="flex items-center space-x-4">
              <button onClick={() => handleNavigation('mailto:info@ximax.com')} className="hover:text-sky-100">
                <Mail size={20} />
              </button>
              <button onClick={() => handleNavigation('tel:+12345678900')} className="hover:text-sky-100">
                <Phone size={20} />
              </button>
              <a
                href="https://wa.me/12345678900"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-300"
                title="WhatsApp"
              >
                <WhatsAppIcon size={20} />
              </a>
              <a
                href="https://linkedin.com/company/ximax"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-100"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>

            {/* Hamburger Menu - Right */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1 hover:bg-sky-500 rounded"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Main Header with Logo Image - Hidden when scrolled */}
        <div className={`bg-white transition-all duration-300 ${isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'py-2'}`}>
          <div className="flex justify-center items-center">
            <img 
              src="/ximax-logo1.png" 
              alt="Ximax Logo" 
              className="h-20 w-auto max-w-full object-contain"
            />
          </div>
        </div>

        {/* Scrolled Header for Mobile - Shows when scrolled */}
        {isScrolled && (
          <div className="bg-white shadow-lg py-3 px-4 flex justify-between items-center">
            {/* Logo - Left */}
            <div className="flex items-center">
              <img 
                src="/ximax-logo1.png" 
                alt="Ximax Logo" 
                className="h-10 w-auto"
              />
            </div>

            {/* Hamburger Menu - Right */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        )}

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 max-h-[80vh] overflow-y-auto">
            <div className="px-4 py-6">
              {/* Navigation Links with Mobile Dropdowns */}
              <nav className="space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name} className="border-b border-gray-100 last:border-b-0">
                    {link.hasDropdown ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(link.name)}
                          className="w-full flex items-center justify-between text-gray-800 hover:text-sky-600 font-medium py-3 px-4 rounded-lg transition-colors"
                        >
                          <span>{link.name}</span>
                          <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {/* Mobile Dropdown Content */}
                        {activeDropdown === link.name && (
                          <div className="pl-8 pr-4 pb-3 space-y-2">
                            {dropdowns[link.name as keyof typeof dropdowns]?.map((item) => (
                              <button
                                key={item.name}
                                onClick={() => handleNavigation(item.href)}
                                className="block w-full text-left py-2.5 text-gray-600 hover:text-sky-600 transition-colors"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="w-1.5 h-1.5 rounded-full bg-sky-500"></div>
                                  <span>{item.name}</span>
                                </div>
                              </button>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <button
                        onClick={() => handleNavigation(link.href)}
                        className="block w-full text-left text-gray-800 hover:text-sky-600 hover:bg-sky-50 font-medium py-3 px-4 rounded-lg transition-colors"
                      >
                        {link.name}
                      </button>
                    )}
                  </div>
                ))}
              </nav>

              {/* Contact Information */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4 text-lg">Contact Us</h3>
                <div className="space-y-4">
                  {contactLinks.map((link) => (
                    <button
                      key={link.text}
                      onClick={() => handleNavigation(link.href)}
                      className="flex items-center space-x-3 text-gray-700 hover:text-sky-600 py-2 w-full text-left"
                    >
                      <link.icon size={20} className="text-sky-600" />
                      <span className="text-lg">{link.text}</span>
                    </button>
                  ))}
                  
                  <div className="flex space-x-4 mt-4">
                    <a
                      href="https://wa.me/12345678900"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                    >
                      <WhatsAppIcon size={20} />
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href="https://linkedin.com/company/ximax"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 bg-sky-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-sky-700 transition-colors"
                    >
                      <Linkedin size={20} />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className={`${isScrolled ? 'h-20' : 'h-32'} lg:${isScrolled ? 'h-20' : 'h-40'}`}></div>
    </>
  );
};

export default Header;