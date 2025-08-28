import React from 'react'
import logo from '../assests/logo.svg'   
import blueClip from '../assests/blueClip.svg'
import purpleClip from '../assests/purpleClip.svg'
export default function Header() {
  const navBarItems = [
    { name: "About Us", link: "/#" },
    { name: "Services", link: "/#" },
    { name: "Team", link: "/#" },
    { name: "Client", link: "/#" },
    { name: "Contact Us", link: "/#" }
  ];

  return (

    <div className="relative flex flex-row justify-around items-center px-8 py-4">
       {/* <div className="absolute top-0 left-0 w-20 h-20 bg-cyan-400 transform rotate-45"> */}
          <img className="absolute top-0 left-0 w-20 h-auto" src={blueClip} />
          <img className="absolute top-0 right-0 w-25 h-auto scale-110" src={purpleClip} />

       {/* </div> */}
      {/* <div className="absolute top-0 right-0 w-80 h-80 bg-purple-300 rounded-full transform translate-x-40 -translate-y-40 opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-400 rounded-full transform translate-x-30 translate-y-30 opacity-80"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 rounded-full transform -translate-x-48 translate-y-48 opacity-60"></div>
     */}
      <div>
        <img src={logo} alt="Logo" className="h-12 w-auto" />
      </div>
      <div className="flex space-x-6">
        {navBarItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="text-gray-700 hover:text-blue-500 font-medium"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}
