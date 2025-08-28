import React from 'react'

export default function TeamComponent({data}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 w-full">
      {data.map((member) => (
        <div key={member.id} className="flex flex-col items-center text-center">
          <img src={member.imgSrc} alt={member.name} className="w-64 h-64 mb-4" />
          <p className="text-lg">{member.name}</p>
        </div>
      ))}
    </div>
  )
}
