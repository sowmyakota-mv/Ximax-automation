// components/Header.tsx
import { useState, useEffect, useRef } from 'react';
import {  useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoverDropdown, setHoverDropdown] = useState<string | null>(null);
  const desktopDropdownRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const dropdowns = {
    'About Us': [
      { name: 'About Company', href: '/about-company' },
      { name: 'Why Us?', href: '/why-us' },
      { name: 'Our Capabilities', href: '/capabilities' },
    ],
    'Services': [
      { name: 'Big Data & Analytics', href: '/big-data-analytics' },
      { name: 'Cloud Applications', href: '/cloud-applications' },
      { name: 'Application Development', href: '/application-development' },
      { name: 'Digital Transformation', href: '/digital-transformation' },
      { name: 'Testing & QA', href: '/testing-qa' },
      { name: 'ERP Development', href: '/erp-development' },
      { name: 'Mortgage Services', href: '/mortgage-services'}
    ],
    'Technology': [
      { name: 'Microsoft .NET', href: '/microsoft-dotnet' },
      { name: 'Java/J2EE', href: '/java-j2ee' },
      { name: 'Enterprise Web Services', href: '/enterprise-web-services' },
      { name: 'Middleware', href: '/middleware' },
      { name: 'Oracle', href: '/oracle' },
      { name: 'SAP', href: '/sap'},
      { name: 'VLSI', href: '/vlsi'}
    ],
    'Industry Verticals': [
      { name: 'Financial Services', href: '/financial' },
      { name: 'Healthcare Solutions', href: '/healthcare' },
      { name: 'E-commerce', href: '/ecommerce' },
      { name: 'Manufacturing', href: '/manufacturing' },
      { name: 'Telecommunication', href: '/telecommunication' },
      { name: 'Logistics', href: '/logistics' },
    ],
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Logic for Desktop
      if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setHoverDropdown(null);
      }
      // Logic for Mobile
      if (isMobileMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    // Using 'click' instead of 'mousedown' to prevent interference with mobile touch events
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  const toggleDropdown = (dropdownName: string) => {
    setActiveDropdown(prev => prev === dropdownName ? null : dropdownName);
    setHoverDropdown(null);
  };

  const handleMouseEnter = (dropdownName: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoverDropdown(dropdownName);
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setHoverDropdown(null);
      setActiveDropdown(null);
    }, 200);
  };

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleDropdownMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setHoverDropdown(null);
      setActiveDropdown(null);
    }, 200);
  };

  const handleNavigation = (href: string) => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setHoverDropdown(null);
    navigate(href);
  };

  const navLinks = [
    { name: 'Home', href: '/', hasDropdown: false },
    { name: 'About Us', href: '/about', hasDropdown: true },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Technology', href: '/technology', hasDropdown: true },
    { name: 'Industry Verticals', href: '/verticals', hasDropdown: true },
    { name: 'Career', href: '/career', hasDropdown: false },
    { name: 'Contact Us', href: '/contact-us', hasDropdown: false },
  ];

  const currentDropdown = hoverDropdown || activeDropdown;

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden lg:block fixed top-0 w-full z-50 bg-white shadow-md">
        <div className="bg-white py-3 px-6">
          <div className="max-w-7xl mx-auto flex items-center h-10">
            <div className="flex items-center">
              <button onClick={() => handleNavigation('/')} className="flex items-center">
                <img src="/ximax-logo1.png" alt="Ximax Logo" className="h-16 w-auto" />
              </button>
            </div>
            
            <nav className="flex-1 flex justify-center space-x-8" ref={desktopDropdownRef}>
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative" 
                  onMouseEnter={() => link.hasDropdown && handleMouseEnter(link.name)} 
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => link.hasDropdown ? toggleDropdown(link.name) : handleNavigation(link.href)}
                    className="text-sm font-medium text-gray-700 hover:text-sky-600 transition-colors flex items-center gap-1"
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform ${currentDropdown === link.name ? 'rotate-180' : ''}`} />
                    )}
                  </button>
                  
                  {link.hasDropdown && currentDropdown === link.name && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[100]"
                      onMouseEnter={handleDropdownMouseEnter}
                      onMouseLeave={handleDropdownMouseLeave}
                    >
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

            <div className="flex items-center space-x-4">
              <button onClick={() => window.location.href = 'mailto:info@ximax.com'} className="text-gray-600 hover:text-sky-600"><Mail size={20} /></button>
              <button onClick={() => window.location.href = 'tel:+12345678900'} className="text-gray-600 hover:text-sky-600"><Phone size={20} /></button>
              <a href="https://wa.me/12345678900" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600"><WhatsAppIcon size={20} /></a>
              <a href="https://linkedin.com/company/ximax" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-sky-600"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Header */}
      <header className="lg:hidden fixed top-0 w-full z-50" ref={mobileMenuRef}>
        <div className="bg-white shadow-md py-2 px-4">
          <div className="flex justify-between items-center h-10">
            <button onClick={() => handleNavigation('/')}>
              <img src="/ximax-logo1.png" alt="Ximax Logo" className="h-8 w-auto" />
            </button>

            <div className="flex items-center space-x-3">
              <button onClick={() => window.location.href = 'mailto:info@ximax.com'} className="text-gray-600"><Mail size={18} /></button>
              <button onClick={() => window.location.href = 'tel:+12345678900'} className="text-gray-600"><Phone size={18} /></button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
                className="p-1 hover:bg-gray-100 rounded"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 max-h-[85vh] overflow-y-auto">
            <div className="px-4 py-4">
              <nav className="space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name} className="border-b border-gray-50 last:border-b-0">
                    {link.hasDropdown ? (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleDropdown(link.name);
                          }}
                          className="w-full flex items-center justify-between text-gray-800 py-3 px-4 font-medium"
                        >
                          <span>{link.name}</span>
                          <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {activeDropdown === link.name && (
                          <div className="bg-gray-50 py-2">
                            {dropdowns[link.name as keyof typeof dropdowns]?.map((item) => (
                              <button
                                key={item.name}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleNavigation(item.href);
                                }}
                                className="block w-full text-left py-3 px-10 text-gray-600 hover:text-sky-600 border-l-2 border-transparent hover:border-sky-500"
                              >
                                {item.name}
                              </button>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <button
                        onClick={() => handleNavigation(link.href)}
                        className="block w-full text-left text-gray-800 py-3 px-4 font-medium"
                      >
                        {link.name}
                      </button>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;