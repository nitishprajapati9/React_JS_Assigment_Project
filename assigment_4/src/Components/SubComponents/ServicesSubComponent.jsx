import React from 'react'

export default function ServicesSubComponent({ data }) {
  return (
    <div className="flex flex-col gap-12">
      {data.map((item) => (
        <div
          key={item.id}
          className={`flex flex-col md:flex-row items-center gap-6 ${
            item.side === 'right' ? 'md:flex-row-reverse' : ''
          }`}
        >
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={item.imgSrc}
              alt={item.title}
              className="w-3/4 sm:w-2/3 md:max-w-md lg:max-w-lg"
            />
          </div>

          {/* Text */}
          <div
            className={`w-full md:w-1/2 flex flex-col justify-center gap-4 px-2 sm:px-0 ${
              item.side === 'right'
                ? 'sm:text-end items-end '
                : 'text-left items-start'
            }`}
          >
            <h2 className="text-xl sm:text-2xl font-bold">{item.title}</h2>
            <p className="text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
