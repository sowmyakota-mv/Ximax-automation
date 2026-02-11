import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import CompanyOverview from './components/CompanyOverview';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Header from './components/Header';
import ServicesSection from './components/ServiceSection';
import TechIndustrySection from './components/TechIndustrySection';
import CallToActionSectionAlt from './components/CalToActionSection';

function App() {
  return (
    <>
    <Router>
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
       {/* <Route path='/license' element={<LicensePage/>}/> */}
       </Routes> 
        <Footer/>       
        </Router>
    </>
  );
}

export default App;