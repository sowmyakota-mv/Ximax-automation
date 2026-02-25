import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import CompanyOverview from './components/CompanyOverview';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Header from './components/Header';
import ServicesSection from './components/ServiceSection';
import TechIndustrySection from './components/TechIndustrySection';
import CallToActionSectionAlt from './components/CalToActionSection';
import AboutPage from './pages/About/AboutCompany';
import WhyUsPage from './pages/About/WhyUsPage';
import CapabilitiesPage from './pages/About/CapabilitiesPage';
import BigDataAnalyticsPage from './pages/Services/BigDataAnalyticsPage';
import CloudApplicationsPage from './pages/Services/CloudApplicationPage';
import ApplicationDevelopmentPage from './pages/Services/ApplicationDevelopmentPage';
import DigitalTransformationPage from './pages/Services/DigitalTransformationPage';
import TestingQAPage from './pages/Services/TestingQAPage';
import ERPDevelopmentPage from './pages/Services/ERPDevelopmentPage';
import MicrosoftDotNetPage from './pages/Technology/MicrosoftDotNetPage';
import JavaJ2EEDevelopmentPage from './pages/Technology/JavaJ2EEDevelopmentPage';
import MiddlewarePage from './pages/Technology/MiddlewarePage';
import EnterpriseWebServicesPage from './pages/Technology/EnterpriseWebServicesPage';
import OraclePage from './pages/Technology/OraclePage';
import FinancialServicesPage from './pages/Industry Verticals/FinancialPage';
import HealthcareSolutionsPage from './pages/Industry Verticals/HealthcareSolutionsPage';
import ECommercePage from './pages/Industry Verticals/ECommercePage';
import ManufacturingPage from './pages/Industry Verticals/ManufacturingPage';
import TelecommunicationPage from './pages/Industry Verticals/TelecommunicationPage';
import LogisticsPage from './pages/Industry Verticals/LogisticsPage';
import CareerPage from './pages/CareerPage';
import ContactPage from './components/ContactSection';
import ScrollToTop from './animation/ScrollToTop';
import SAPPage from './pages/Technology/SapPage';
import VLSIPage from './pages/Technology/VLSIPage';
import MortgageServicesPage from './pages/Services/MortgageServicesPage';

function App() {
  return (
    <>
    <div className="w-full min-h-screen overflow-x-hidden overflow-y-hidden relative">
    <Router>
        <ScrollToTop/>
      <Header/>
      <Routes>
      <Route path='/' element={
      <div className="w-full">  
        <HeroSection/>
        <CompanyOverview/>
        <ServicesSection/>
        <TechIndustrySection/>
        <CallToActionSectionAlt/>
       </div> }/>
       <Route path='/about-company' element={<AboutPage/>}/>
       <Route path='/why-us' element={<WhyUsPage/>}/>
       <Route path='/capabilities' element={<CapabilitiesPage/>}/>
       <Route path='/big-data-analytics' element={<BigDataAnalyticsPage/>}/>
       <Route path='/cloud-applications' element={<CloudApplicationsPage/>}/>
       <Route path='/application-development' element={<ApplicationDevelopmentPage/>}/>
       <Route path='/digital-transformation' element={<DigitalTransformationPage/>}/>
       <Route path='/testing-qa' element={<TestingQAPage/>}/>
       <Route path='/erp-development' element={<ERPDevelopmentPage/>}/>
       <Route path='/microsoft-dotnet' element={<MicrosoftDotNetPage/>}/>
       <Route path='/java-j2ee' element={<JavaJ2EEDevelopmentPage/>}/>
       <Route path='enterprise-web-services' element={<EnterpriseWebServicesPage/>}/>
       <Route path='/middleware' element={<MiddlewarePage/>}/>
       <Route path='/oracle' element={<OraclePage/>}/>
       <Route path='/financial' element={<FinancialServicesPage/>}/>
       <Route path='/healthcare' element={<HealthcareSolutionsPage/>}/>
       <Route path='/ecommerce' element={<ECommercePage/>}/>
       <Route path='/manufacturing' element={<ManufacturingPage/>}/>
       <Route path='/telecommunication' element={<TelecommunicationPage/>}/>
       <Route path='/logistics' element={<LogisticsPage/>}/>
       <Route path='/career' element={<CareerPage/>}/>
       <Route path='/contact-us' element={<ContactPage/>}/>
       <Route path='/sap' element={<SAPPage/>}/>
       <Route path='/vlsi' element={<VLSIPage/>}/>
       <Route path='/mortgage-services' element={<MortgageServicesPage/>}/>
       </Routes> 
        <Footer/>       
        </Router>
        </div>
    </>
  );
}

export default App;