import React, { useState } from 'react'
import Button from '@/components/Button'
import SVG from "@/components/SVG"
export default function page() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <SVG />
      <div className="w-full absolute left-0 z-[-1] flex justify-between">
        <svg className='inline-block z-[-1]'
          xmlns="http://www.w3.org/2000/svg"
          width={752}
          height={1131}
          viewBox="0 0 752 1131"
          fill="none"
        >
          <g filter="url(#filter0_f_0_78)">
            <circle cx={115} cy={529} r={137} fill="#7214FF" />
          </g>
          <defs>
            <filter
              id="filter0_f_0_78"
              x={-522}
              y={-108}
              width={1274}
              height={1274}
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation={250}
                result="effect1_foregroundBlur_0_78"
              />
            </filter>
          </defs>
        </svg>
        <svg className='inline-block z-[-1]'
          xmlns="http://www.w3.org/2000/svg"
          width={544}
          height={891}
          viewBox="0 0 544 891"
          fill="none"
        >
          <g id="Ellipse 1" filter="url(#filter0_f_0_77)">
            <circle cx={485} cy={485} r={95} fill="#32CAFD" />
          </g>
          <defs>
            <filter
              id="filter0_f_0_77"
              x={0}
              y={0}
              width={970}
              height={970}
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation={195}
                result="effect1_foregroundBlur_0_77"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="container">

        <div className="w-full mt-10 text-center" data-aos="fade-up">
          <h1 className='font-SatoshiBold text-2xl md:text-3xl xl:text-5xl pb-4 title'>A CRM dashboard for engineering teams</h1>
          <p className='text-gray md:text-lg w-full xl:w-2/3 mx-auto mb-7'>Rorem ipsum dolor sit amet consectetur. Gravida convallis orci ultrices non. Ultricies tempor at ut cursus mi. Aliquam sed amet vitae orci ac penatibus consectetur.</p>
          <div className="gap-x-6 gap-y-2 my-7 flex justify-center flex-wrap">
            <Button
              title={"Get a Demo"}
              bg={true}
            />
            <Button
              title={"View Pricing"}
            />
          </div>
          <img className='mx-auto' src="/assets/Images/HeroImage.png" alt="" />
        </div>

        <nav className='sticky grid grid-cols-2 md:grid-cols-12 justify-between items-center my-16'>
          <div className="left md:col-span-2">
            <svg className='h-10'>
              <use href='#Logo'></use>
            </svg>
          </div>

          <div className="text-right block md:hidden">
            <svg className="w-9 h-9 inline-block">
              <use href='#Menu'></use>
            </svg>
            <ul className='absolute right-0 bg-zinc-700/20 rounded-xl w-full p-3 space-y-3 b-zinc-700 text-center top-14 text-gray'>
              <li className='text-white'>Home</li>
              <li>About</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="center col-span-8  hidden text-center w-full md:flex items-center justify-center">
            <ul className='flex gap-x-8 text-gray'>
              <li className='text-white'>Home</li>
              <li>About</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className=" hidden md:block right text-right col-span-2">
            <Button
              title={"Get a Demo"}
              bg={true}
            />
          </div>
        </nav>
      </div>

    </>
  )
}
