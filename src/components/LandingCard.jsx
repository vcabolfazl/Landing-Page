import React from 'react'

export default function LandingCard({ icon, title, desc }) {
 return (
  <div className="bg-zinc-700/20 p-3 md:p-7 rounded-md" data-aos="flip-left">
   <svg className="w-14 h-14">
    <use href={`#${icon}`}></use>
   </svg>
   <h4 className='my-4 font-SatoshiBold text-lg titleCard'>{title}</h4>
   <p className='text-gray'>{desc}</p>
  </div>
 )
}
