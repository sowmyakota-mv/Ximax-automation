import { useState } from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaBuilding,
  FaGlobe,
  FaCog,
  FaComment,
  FaPaperPlane,
  FaTag,
  FaCheckCircle,
  FaExclamationCircle
} from 'react-icons/fa';

const ContactPage: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    companyName: '',
    websiteUrl: '',
    subject: '',
    service: '',
    message: ''
  });

  // Submission response state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear any previous status when user starts typing again
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Simulate API call - Replace this with your actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success response
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for contacting us! We will get back to you within 24 hours.'
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        companyName: '',
        websiteUrl: '',
        subject: '',
        service: '',
        message: ''
      });
    } catch (error) {
      // Error response
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Services options for dropdown
  const serviceOptions = [
    "Big Data & Analytics",
    "Cloud Applications",
    "Application Development",
    "Digital Transformation",
    "Testing & QA",
    "ERP Development",
    "IT Outsourcing",
    "IT Consulting"
  ];

  return (
    <div id='contact' className="min-h-screen bg-gray-50 -mt-8">
      {/* Hero Section with Skyblue Theme Background */}
      <section 
  className="pt-30 py-5 relative overflow-hidden min-h-[500px] md:min-h-[400px] flex items-start"
  // style={{
  //   background: 'linear-gradient(135deg, #38B2FF 0%, #7ED4FF 50%, #B0E6FF 100%)'
  // }}
>
  {/* Background Image Overlay */}
  <div className="absolute inset-0 z-0">
    <img 
      src="/contact2.png" 
      alt="Ximax Automation Background" 
      className="w-full h-full object-bottom opacity-"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-sky-600/80 to-sky-500/80 mix-blend-multiply"></div>
  </div>
  
  <div className="container mx-auto px-4 relative z-10 mt-16 md:mt-24">
    <div className="text-center">
      <div className="inline-flex items-center justify-center mb-3">
        <h1 className="text-3xl md:text-3xl lg:text-6xl font-bold text-white">
          Contact Us
        </h1>
      </div>
    </div>
  </div>
</section>

      {/* Main Content Section */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-10">
          {/* Contact Overview - 80% width */}
          <div className="max-w-6xl mx-auto w-4/5">
            <div className="text-center mb-5">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Get In <span className="text-[#38B2FF]">Touch</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#38B2FF] to-[#7ED4FF] mx-auto mb-6"></div>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed max-w-4xl mx-auto">
                We'd love to hear from you. Whether you have a question about our services, need support, or want to discuss a potential project, our team is ready to help.
              </p>
            </div>
          </div>

          {/* Contact Info Cards - 80% width, 3 cards with gap */}
          <div className="max-w-6xl mx-auto w-4/5 py-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
              {/* Phone Card */}
              <div className="bg-white rounded-2xl p-4 border border-gray-200 hover:border-[#7ED4FF] shadow-lg hover:shadow-2xl transition-all duration-500 group text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#38B2FF]/10 to-[#7ED4FF]/10 rounded-2xl flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <FaPhone className="text-3xl text-[#38B2FF]" />
                </div>
                <h4 className="text-med md:text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#38B2FF] transition-colors duration-300">
                  Phone
                </h4>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  +1 (555) 123-4567
                </p>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  +1 (555) 987-6543
                </p>
                <p className="text-gray-500 text-xs mt-2">
                  Mon-Fri 9am-6pm
                </p>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-2xl p-4 border border-gray-200 hover:border-[#7ED4FF] shadow-lg hover:shadow-2xl transition-all duration-500 group text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#38B2FF]/10 to-[#7ED4FF]/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <FaEnvelope className="text-3xl text-[#7ED4FF]" />
                </div>
                <h4 className="text-med md:text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#38B2FF] transition-colors duration-300">
                  Email
                </h4>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  info@ximax.com
                </p>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  support@ximax.com
                </p>
                {/* <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  sales@ximax.com
                </p> */}
              </div>

              {/* Address Card */}
              <div className="bg-white rounded-2xl p-4 border border-gray-200 hover:border-[#7ED4FF] shadow-lg hover:shadow-2xl transition-all duration-500 group text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#38B2FF]/10 to-[#7ED4FF]/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <FaMapMarkerAlt className="text-3xl text-[#38B2FF]" />
                </div>
                <h4 className="text-med md:text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#38B2FF] transition-colors duration-300">
                  Address
                </h4>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  123 Business Avenue
                </p>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  London, UK EC1A 1BB
                </p>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  United Kingdom
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form & Map Section - 80% width */}
          <div className="max-w-6xl mx-auto w-5/5 py-5">
            <div className="bg-gradient-to-br from-[#38B2FF]/5 to-[#7ED4FF]/5 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Send Us a <span className="text-[#38B2FF]">Message</span>
              </h3>
              <p className="text-xs md:text-sm text-gray-600 text-center max-w-3xl mx-auto mb-10">
                Fill out the form below and we'll get back to you within 24 hours
              </p>

              {/* Submission Response Message */}
              {submitStatus.type && (
                <div className={`max-w-4xl mx-auto mb-6 p-4 rounded-lg flex items-center gap-3 ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 text-green-700 border border-green-200' 
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}>
                  {submitStatus.type === 'success' ? (
                    <FaCheckCircle className="text-lg flex-shrink-0" />
                  ) : (
                    <FaExclamationCircle className="text-lg flex-shrink-0" />
                  )}
                  <p className="text-xs md:text-sm">{submitStatus.message}</p>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Form - Left Side */}
                <div>
                  <form onSubmit={handleSubmit} className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* First Name */}
                      <div className="space-y-2">
                        <label className="flex items-center text-xs md:text-sm font-semibold text-gray-700">
                          <FaUser className="mr-2 text-[#7ED4FF]" />
                          First Name <span className="text-red-500 ml-1">*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          placeholder="Enter your first name"
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#38B2FF] focus:ring-1 focus:ring-[#38B2FF] transition-colors duration-300 text-xs md:text-sm"
                        />
                      </div>

                      {/* Last Name */}
                      <div className="space-y-2">
                        <label className="flex items-center text-xs md:text-sm font-semibold text-gray-700">
                          <FaUser className="mr-2 text-[#38B2FF]" />
                          Last Name <span className="text-red-500 ml-1">*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          placeholder="Enter your last name"
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#38B2FF] focus:ring-1 focus:ring-[#38B2FF] transition-colors duration-300 text-xs md:text-sm"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label className="flex items-center text-xs md:text-sm font-semibold text-gray-700">
                          <FaEnvelope className="mr-2 text-[#7ED4FF]" />
                          Email Address <span className="text-red-500 ml-1">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Enter your email address"
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#38B2FF] focus:ring-1 focus:ring-[#38B2FF] transition-colors duration-300 text-xs md:text-sm"
                        />
                      </div>

                      {/* Contact Number */}
                      <div className="space-y-2">
                        <label className="flex items-center text-xs md:text-sm font-semibold text-gray-700">
                          <FaPhone className="mr-2 text-[#38B2FF]" />
                          Contact Number <span className="text-red-500 ml-1">*</span>
                        </label>
                        <input
                          type="tel"
                          name="contactNumber"
                          value={formData.contactNumber}
                          onChange={handleChange}
                          required
                          placeholder="Enter your contact number"
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#38B2FF] focus:ring-1 focus:ring-[#38B2FF] transition-colors duration-300 text-xs md:text-sm"
                        />
                      </div>

                      {/* Company Name */}
                      <div className="space-y-2">
                        <label className="flex items-center text-xs md:text-sm font-semibold text-gray-700">
                          <FaBuilding className="mr-2 text-[#7ED4FF]" />
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="Enter your company name"
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#38B2FF] focus:ring-1 focus:ring-[#38B2FF] transition-colors duration-300 text-xs md:text-sm"
                        />
                      </div>

                      {/* Website URL */}
                      <div className="space-y-2">
                        <label className="flex items-center text-xs md:text-sm font-semibold text-gray-700">
                          <FaGlobe className="mr-2 text-[#38B2FF]" />
                          Website URL
                        </label>
                        <input
                          type="url"
                          name="websiteUrl"
                          value={formData.websiteUrl}
                          onChange={handleChange}
                          placeholder="https://www.example.com"
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#38B2FF] focus:ring-1 focus:ring-[#38B2FF] transition-colors duration-300 text-xs md:text-sm"
                        />
                      </div>

                      {/* Subject */}
                      <div className="space-y-2 md:col-span-2">
                        <label className="flex items-center text-xs md:text-sm font-semibold text-gray-700">
                          <FaTag className="mr-2 text-[#7ED4FF]" />
                          Subject <span className="text-red-500 ml-1">*</span>
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="Enter the subject of your message"
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#38B2FF] focus:ring-1 focus:ring-[#38B2FF] transition-colors duration-300 text-xs md:text-sm"
                        />
                      </div>

                      {/* Select Services */}
                      <div className="space-y-2 md:col-span-2">
                        <label className="flex items-center text-xs md:text-sm font-semibold text-gray-700">
                          <FaCog className="mr-2 text-[#38B2FF]" />
                          Select Services <span className="text-red-500 ml-1">*</span>
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#38B2FF] focus:ring-1 focus:ring-[#38B2FF] transition-colors duration-300 text-xs md:text-sm text-gray-700"
                        >
                          <option value="" disabled>Select a service</option>
                          {serviceOptions.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div className="space-y-2 md:col-span-2">
                        <label className="flex items-center text-xs md:text-sm font-semibold text-gray-700">
                          <FaComment className="mr-2 text-[#7ED4FF]" />
                          Message <span className="text-red-500 ml-1">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Tell us about your project or inquiry"
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#38B2FF] focus:ring-1 focus:ring-[#38B2FF] transition-colors duration-300 text-xs md:text-sm resize-none"
                        ></textarea>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center mt-8">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`inline-flex items-center gap-2 bg-gradient-to-r from-[#38B2FF] to-[#7ED4FF] hover:from-[#2A8ECC] hover:to-[#5FB4E0] text-white font-semibold px-10 py-4 rounded-lg text-sm transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100`}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <FaPaperPlane className="text-sm" />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>

                {/* Map - Right Side */}
                <div className="h-full flex items-stretch">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200 w-full h-[400px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.546437152857!2d-0.106743684230242!3d51.51411791769746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876034add2a4013%3A0x260ae6ac3d43b7e3!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: '400px' }}
                      allowFullScreen
                      loading="lazy"
                      title="Ximax Automation Location"
                      className="filter grayscale hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;