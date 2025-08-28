import React from 'react'
import Service_Engagement_icon from '../assests/Service_Engagement_icon.svg'
import Service_Communication_icon from '../assests/Service_Communication_icon.svg'
import Service_Faliciatation_icon from '../assests/Service_Faliciatation_icon.svg'
import Consulation_Research from '../assests/Consulation_Research.svg'
import Training_Mentoring from '../assests/Training_Mentoring.svg'
import ServicesSubComponent from './SubComponents/ServicesSubComponent'

const data = [
  {
    id: 1,
    title: "Engagement",
    desc: "We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.",
    imgSrc: Service_Engagement_icon,
    side: "left"
  },
  {
    id: 2,
    title: "Communication",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus. ",
    imgSrc: Service_Communication_icon,
    side: "right"
  },
  {
    id: 3,
    title: "Facilitation",
    desc: "We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.",
    imgSrc: Service_Faliciatation_icon,
    side: "left"
  },
  {
    id: 4,
    title: "Consultation & Research",
    desc: "We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.",
    imgSrc: Consulation_Research,
    side: "right"
  },
  {
    id: 5,
    title: "Training & Mentoring",
    desc: "We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.",
    imgSrc: Training_Mentoring,
    side: "left"
  }
]

export default function Services() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center px-6 md:px-12 py-12 gap-8">
      
      {/* Centered Heading */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">SERVICES</h1>
        <span className="block w-16 sm:w-20 h-1 bg-gray-300 mt-2 rounded lg:items-start"></span>
      </div>

      {/* Placeholder for services list */}
      <div className="w-full">
        <div>
            <ServicesSubComponent data={data} />
        </div>
      </div>
    </div>
  )
}
