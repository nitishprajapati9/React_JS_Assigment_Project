import React from 'react'
import aboutUs from '../assests/about_us.svg'
import Engagement_icon from '../assests/Engagement_icon.svg'
import Communication_icon from '../assests/Communication_icon.svg'
import Card from './SubComponents/Card'


export default function AboutUs() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-around items-center px-6 md:px-12 py-12 gap-8">
      
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img 
          src={aboutUs} 
          alt="About Us" 
          className="w-3/4 sm:w-2/3 md:max-w-md lg:max-w-lg"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-start gap-6 text-center md:text-left">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">ABOUT US</h1>
          <span className="block w-16 sm:w-20 h-1 bg-gray-300 mt-2 mx-auto md:mx-0 rounded"></span>
        </div>

        <p className="text-gray-600 leading-relaxed px-2 text-justify sm:px-0">
          We are a passionate team dedicated to delivering the best solutions for our clients. 
          Our focus is on innovation, collaboration, and excellence in everything we do. 
          With years of expertise and a client-first approach, we strive to make a meaningful 
          impact in the industry.
        </p>

        <div className='flex flex-row justify-center md:justify-start gap-4'>
          <Card imgSrc={Engagement_icon} name={"Engagement"} desc={"We are engagement specialists, who have led projects at all levels of the IAP2 spectrum.READ MORE"}/>
          <div>
          <Card imgSrc={Communication_icon} name={"Communication"} desc={"We are award-winning leaders in communications and campaign management.READ MORE"}/>
          </div>
        </div>

    
      </div>
    </div>
  )
}
