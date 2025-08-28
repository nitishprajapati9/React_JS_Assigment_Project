import React from 'react'
import Project_Name from '../assests/Project_Name.svg'
import Project_Name_2 from '../assests/Project_Name_2.svg'
import Project_Name_3 from '../assests/Project_Name_3.svg'

export default function Project() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center px-6 md:px-12 py-12 gap-8">
      
      <div className="flex flex-col items-center text-center">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">OUR PROJECTS</h1>
        <span className="block w-16 sm:w-20 h-1 bg-gray-300 mt-2 rounded"></span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 place-items-center">
        
        <div className="flex justify-center">
          <img 
            src={Project_Name} 
            alt="Project 1" 
            className="w-full"
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-4">
          <img 
            src={Project_Name_2} 
            alt="Project 2" 
            className="w-full"
          />
          <img 
            src={Project_Name_3} 
            alt="Project 3" 
            className="w-ful"
          />
        </div>
      </div>
    </div>
  )
}
