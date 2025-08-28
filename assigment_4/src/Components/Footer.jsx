import React from 'react'
import facebook from '../assests/facebook.svg'
import linkedIn from '../assests/LinkedIn.svg'
import googlePlus from '../assests/GooglePlus.svg'

const data = {
  "Social": [
    { icons: facebook, name: "Facebook" },
    { icons: linkedIn, name: "LinkedIn" },
    { icons: googlePlus, name: "Google +" }
  ],
  "Explore": [
    { name: "Services" },
    { name: "Team" },
    { name: "Clients" },
  ],
  "Contact": [
    { name: "Lorem Ipsum dummy address" },
    { name: "Used for Display" },
    { name: "123456789" },
  ],
  "Email": [
    { name: "mendlesoncommunication@email.com" }
  ]
}

export default function Footer() {
  return (
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-12 py-12 bg-blue-200 text-black mb-2">
        
        {/* Social Mapping */}
        <div className="flex flex-col">
          <h3 className="font-semibold mb-4">Social</h3>
          {data.Social.map((item, index) => (
            <div key={index} className="flex flex-row items-center space-x-3 mb-3">
              <img src={item.icons} alt={item.name} className="h-6 w-6" />
              <p className="text-sm">{item.name}</p>
            </div>
          ))}
        </div>

        {/* Explore Mapping */}
        <div className="flex flex-col">
          <h3 className="font-semibold mb-4">Explore</h3>
          {data.Explore.map((item, index) => (
            <p key={index} className="text-sm mb-3">{item.name}</p>
          ))}
        </div>

        {/* Contact Mapping */}
        <div className="flex flex-col">
          <h3 className="font-semibold mb-4">Contact</h3>
          {data.Contact.map((item, index) => (
            <p key={index} className="text-sm mb-3">{item.name}</p>
          ))}
        </div>

        {/* Email Mapping*/}
        <div className="flex flex-col">
          <h3 className="font-semibold mb-4">Email</h3>
          {data.Email.map((item, index) => (
            <p key={index} className="text-sm">{item.name}</p>
          ))}
        </div>
      </div>
  )
}
