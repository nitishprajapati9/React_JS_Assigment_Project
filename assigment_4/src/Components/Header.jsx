import React from 'react'
import logo from '../assests/logo.svg'   

export default function Header() {
  const navBarItems = [
    { name: "About Us", link: "/#" },
    { name: "Services", link: "/#" },
    { name: "Team", link: "/#" },
    { name: "Client", link: "/#" },
    { name: "Contact Us", link: "/#" }
  ];

  return (
    <div className="flex flex-row justify-around items-center px-8 py-4">
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
