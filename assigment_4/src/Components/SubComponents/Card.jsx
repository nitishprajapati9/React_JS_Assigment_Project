import React from 'react'

export default function Card({ imgSrc, name, desc }) {
  return (
    <div className="flex flex-col items-center sm:items-start text-center sm:text-left w-full sm:w-auto">
      <img src={imgSrc} alt={name} className="w-16 h-16 mb-3" />
      <p className="font-bold text-lg">{name}</p>
      <p className="text-gray-600 leading-relaxed mt-2">
        {desc}
      </p>
    </div>
  )
}
