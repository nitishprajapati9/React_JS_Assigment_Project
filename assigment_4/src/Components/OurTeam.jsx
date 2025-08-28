import React from 'react'
import Team_no_1 from '../assests/Team_no_1.svg'
import Team_no_2 from '../assests/Team_no_2.svg'
import Team_no_3 from '../assests/Team_no_3.svg'
import TeamComponent from './SubComponents/TeamComponent'
const data = [
    {
        id:1,
        name:"Jessica D'Souza",
        imgSrc:Team_no_1
    },
    {
        id:2,
        name:"Johny Williams",
        imgSrc:Team_no_2
    },
    {
        id:3,
        name:"Sanya R",
        imgSrc:Team_no_3
    }
]


export default function OurTeam() {
  return (
     <div className="container mx-auto flex flex-col justify-center items-center px-6 md:px-12 py-12 gap-8">
          
          {/* Centered Heading */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">OUR TEAM</h1>
            <span className="block w-16 sm:w-20 h-1 bg-gray-300 mt-2 rounded lg:items-start"></span>
          </div>
    
          {/* Placeholder for services list */}
            <TeamComponent data={data} />
        </div>
  )
}
