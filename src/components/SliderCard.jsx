import React from 'react'

export default function SliderCard({ AvatarSrc, userName, job, desc, gradient }) {
 return (
  <div className="relative">
   <div className=" mx-6 bg-[#0E1330] p-6 z-10 rounded-xl shadow-2xl">
    <div className="grid grid-cols-4 mb-6">
     <div className="col-span-3 flex gap-x-2.5 items-start md:items-center">
      <img src={AvatarSrc} className="w-10 h-10  mt-1 md:mt-0" alt="" />
      <div className="">
       <p>{userName}</p>
       <span className='text-xs text-gray'>{job}</span>
      </div>
     </div>
     <div className="grid justify-end">
      <svg className="w-[57px] h-[41px]">
       <use href='#GUME'></use>
      </svg>
     </div>
    </div>
    <p>{desc}</p>
   </div>
   <div className="my-0"> ‌</div>
   <div className="w-full absolute bottom-0 p-6 rounded-2xl z-[-1]" style={{ background: `${gradient ? gradient : "linear-gradient(45deg, #383838, #6b6b6b, #9e9e9e)"}`, }}> ‌ </div>
  </div>
 )
}
