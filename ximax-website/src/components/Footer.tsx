// components/Footer.tsx
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ChevronRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  
  // Navigation functions
  const navigateTo = (path: string) => {
    navigate(path);
  };

  // Quick Links
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-company' },
    { name: 'Industry Verticals', path: '/financial' },
    { name: 'Careers', path: '/career' },
    { name: 'Contact Us', path: '/contact-us' }
  ];

  // Services
  const services = [
    { name: 'Big Data & Analytics', path: '/big-data-analytics' },
    { name: 'Cloud Applications', path: '/cloud-applications' },
    { name: 'Application Development', path: '/application-development' },
    { name: 'Digital Transformation', path: '/digital-transformation' },
    // { name: 'Testing & QA', path: '/services/testing-qa' },
    { name: 'ERP Development', path: '/erp-development' }
  ];

  // Technologies
  const technologies = [
    { name: 'Microsoft .NET', path: '/microsoft-dotnet' },
    { name: 'Java/J2EE', path: '/java-j2ee' },
    { name: 'Enterprise Web Services', path: '/enterprise-web-services' },
    { name: 'Middleware', path: '/middleware' },
    { name: 'Oracle', path: '/oracle' }
  ];

  // Social Media Links
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, url: 'https://facebook.com', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Instagram className="w-5 h-5" />, url: 'https://instagram.com', label: 'Instagram' }
  ];

  return (
    <footer className="bg-sky-900 text-white pt-5 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* First Row - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Company Info with Logo */}
          <div className="space-y-6">
            <div>
              {/* Logo/Image in place of title */}
              <div className="mb-2">
                <img 
                  src="/ximax-logo.jpeg" 
                  alt="Ximax Automation" 
                  className="h-12 w-auto"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80";
                    e.currentTarget.alt = "Ximax Automation Logo";
                  }}
                />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Ximax Automation takes great pride in the quality and integrity of our team. We take serving our 
                customers as seriously as we do our culture of fun, creativity and professionalism. Our fantastic 
                team is anxious to work with your organization to make both yours and ours stronger.
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-2 pb-2 ">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigateTo(link.path)}
                    className="group flex items-center gap-2 text-gray-300 hover:text-sky-400 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-xl font-bold mb-2 pb-2">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigateTo(service.path)}
                    className="group flex items-center gap-2 text-gray-300 hover:text-sky-400 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Technology */}
          <div>
            <h3 className="text-xl font-bold mb-2 pb-2">Technology</h3>
            <div className="space-y-3">
              {technologies.map((tech, index) => (
                <button
                  key={index}
                  onClick={() => navigateTo(tech.path)}
                  className="group flex items-center gap-2 text-gray-300 hover:text-sky-400 transition-colors w-full text-left"
                >
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  {tech.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Second Row - Contact Info - Flex layout without horizontal lines */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 py-8">
          {/* Location - Flex Item */}
          <div className="flex items-start gap-4 flex-1">
            <div className="p-2 rounded-lg bg-sky-900/30 flex-shrink-0">
              <MapPin className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <p className="text-gray-300 text-xs">
                123 Automation Avenue, Suite 500<br />
                San Francisco, CA 94107<br />
                United States
              </p>
            </div>
          </div>

          {/* Phone - Flex Item */}
          <div className="flex items-start gap-4 flex-1">
            <div className="p-2 rounded-lg bg-sky-900/30 flex-shrink-0">
              <Phone className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <p className="text-gray-300 text-sm">
                +1 (555) 123-4567<br />
                +1 (555) 987-6543
              </p>
            </div>
          </div>

          {/* Email - Flex Item */}
          <div className="flex items-start gap-4 flex-1">
            <div className="p-2 rounded-lg bg-sky-900/30 flex-shrink-0">
              <Mail className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <p className="text-gray-300 text-sm">
                info@ximaxautomation.com<br />
                support@ximaxautomation.com
              </p>
            </div>
          </div>

          {/* Social Media - Flex Item */}
          <div className="flex items-start gap-4 flex-1">
            <div>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-800 hover:bg-sky-700 transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright & Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-2">
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Ximax Automation. All rights reserved.
          </div>

          {/* Legal Links */}
          {/* <div className="flex flex-wrap gap-6">
            <button 
              onClick={() => navigateTo('/privacy-policy')}
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => navigateTo('/terms-of-service')}
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </button>
            <button 
              onClick={() => navigateTo('/cookie-policy')}
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Cookie Policy
            </button>
            <button 
              onClick={() => navigateTo('/sitemap')}
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Sitemap
            </button>
          </div> */}

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-gray-400 hover:text-white text-sm flex items-center gap-1 transition-colors"
          >
            Back to Top
            <ChevronRight className="w-4 h-4 rotate-90" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;