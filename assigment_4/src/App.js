import './App.css';
import AboutUs from './Components/AboutUs';
import Header from './Components/Header';
import React from 'react';
import Services from './Components/Services';
import OurTeam from './Components/OurTeam';
import Project from './Components/Project';
import OurClients from './Components/OurClients';
import HeroSection from './Components/HeroSection';


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
    </React.Fragment>
  );
}

export default App;
