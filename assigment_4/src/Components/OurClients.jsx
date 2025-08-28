import React from 'react'
import Logo_1 from '../assests/Logos/Logo_1.svg'
import Logo_2 from '../assests/Logos/Logo_2.svg'
import Logo_3 from '../assests/Logos/Logo_3.svg'
import Logo_4 from '../assests/Logos/Logo_4.svg'
import Logo_5 from '../assests/Logos/Logo_5.svg'
import Logo_6 from '../assests/Logos/Logo_6.svg'
import Logo_7 from '../assests/Logos/Logo_7.svg'
import Logo_8 from '../assests/Logos/Logo_8.svg'
import Logo_9 from '../assests/Logos/Logo_9.svg'

const upperLogoSection = [Logo_1, Logo_2, Logo_3, Logo_4, Logo_5];
const lowerLogoSection = [Logo_6, Logo_7, Logo_8, Logo_9];

export default function OurClients() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center px-6 md:px-12 py-12 gap-8">
      
      {/* Centered Heading */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">OUR CLIENTS</h1>
        <span className="block w-16 sm:w-20 h-1 bg-gray-300 mt-2 rounded"></span>
      </div>

      {/* Upper Logo Section */}
      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 w-full place-items-center">
        {upperLogoSection.map((logo, index) => (
          <div key={index} className="flex justify-center items-center w-48 sm:place-items-center">
            <img src={logo} alt={`Client Logo ${index + 1}`} className="w-48 object-contain" />
          </div>
        ))}
      </div>

      {/* Lower Logo Section */}
      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full place-items-center">
        {lowerLogoSection.map((logo, index) => (
          <div key={index} className="flex justify-center items-center w-48">
            <img src={logo} alt={`Client Logo ${index + 6}`} className="w-48 object-contain" />
          </div>
        ))}
      </div>
    </div>
  )
}
