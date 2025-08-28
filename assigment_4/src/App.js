import './App.css';
import AboutUs from './Components/AboutUs';
import Header from './Components/Header';
import React from 'react';
import Services from './Components/Services';
import OurTeam from './Components/OurTeam';
import Project from './Components/Project';
import OurClients from './Components/OurClients';
import HeroSection from './Components/HeroSection';
import Footer from './Components/Footer';


function App() {
 
  return (
    <React.Fragment>
      <Header />
      <HeroSection />
      <AboutUs />
      <Services />
      <OurTeam />
      <Project/>
      <OurClients />
      <Footer/>
    </React.Fragment>
  );
}

export default App;
