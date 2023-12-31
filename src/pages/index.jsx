import React, { useEffect, useState } from 'react'
import Button from '@/components/Button'
import SVG from "@/components/SVG"
import LandingCard from '@/components/LandingCard'
import Slider from '@/components/Slider'
import Link from 'next/link'
export default function page() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <SVG />
      {/* --> Start Header */}
      <header className="w-full left-0 right-0 fixed z-50 bg-[#060B27] top-0 py-5 px-5">

        <nav className={`container grid grid-cols-2 md:grid-cols-12 justify-between items-center top-0`}>

          {/* Logo */}
          <div className="md:col-span-2 z-30">
            <svg className='h-10'>
              <use href='#Logo'></use>
            </svg>
          </div>

          {/* Start Hamburger Menu */}
          <div className="text-right block md:hidden transition-all z-30">
            <svg className="w-9 h-9 inline-block" onClick={() => setShowMenu(status => !status)}>
              <use href='#Menu'></use>
            </svg>
            <ul className={`absolute right-0 z-30 bg-zinc-700/20 rounded-b-xl w-full p-3 space-y-3
            b-zinc-700 text-center top-11 text-gray ${showMenu ? "block opacity-100 translate-y-9" : "hidden opacity-0 "}`}>
              <li className='text-white'>Home</li>
              <li>About</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Blog</li>
            </ul>
          </div>
          {/* End Hamburger Menu */}

          {/* Start Header Menu */}
          <div className="col-span-8  hidden text-center w-full md:flex items-center justify-center">
            <ul className='flex gap-x-8 text-gray transition'>
              <li className='text-white'>Home</li>
              <li>About</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Blog</li>
            </ul>
          </div>
          {/* End Header Menu */}

          {/* Demo Btn */}
          <div className=" hidden md:block right text-right col-span-2">
            <Button
              title={"Get a Demo"}
              bg={true}
            />
          </div>
        </nav>

        {/* Background under the menu in mobile mode */}
        <div className={`fixed h-full w-full bg-black/40 inset-0 ${showMenu ? "block z-10" : "hidden"}`} onClick={() => setShowMenu(status => !status)}></div>

      </header>
      {/* End Header <-- */}

      <div className="container">

        {/* --> Start section One */}
        <section className='my-32'>

          {/* Start Background svgs */}
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
          {/* End Background svgs */}

          <div className="w-full mt-10 text-center mb-16">

            {/* The main text of the page */}
            <h1 className='font-SatoshiBold text-2xl md:text-3xl xl:text-5xl pb-4 title' data-aos="fade-down">A CRM dashboard for engineering teams</h1>
            <p className='text-gray md:text-lg w-full xl:w-2/3 mx-auto mb-7' data-aos="zoom-in">Rorem ipsum dolor sit amet consectetur. Gravida convallis orci ultrices non. Ultricies tempor at ut cursus mi. Aliquam sed amet vitae orci ac penatibus consectetur.</p>
            <div className="gap-x-6 gap-y-2 my-7 flex justify-center flex-wrap">
              <Button
                title={"Get a Demo"}
                bg={true}
              />
              <Button
                title={"View Pricing"}
              />
            </div>
            <img data-aos="zoom-in" className='mx-auto' src="/assets/Images/HeroImage.png" alt="" />
          </div>

        </section>
        {/* End section One <-- */}

        {/* --> Start introduction Section */}
        <section className='my-16'>

          {/* Start Background svgs */}
          <div className="w-full absolute left-0 z-[-1] flex justify-between">
            <svg className='inline-block z-[-1]'
              xmlns="http://www.w3.org/2000/svg"
              width={752}
              height={1131}
              viewBox="0 0 752 1131"
              fill="none"
            >
              <g filter="url(#filter0_f_0_78)">
                <circle cx={115} cy={529} r={137} fill="#549227" />
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
                <circle cx={485} cy={485} r={95} fill="#E91E63" />
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
          {/* End Background svgs */}

          {/* Start Box of introduction cards */}
          <div className="">
            <div className="grid grid-cols-2 md:grid-cols-3 justify-between gap-6">
              {/* Title */}
              <h2 className='col-span-2 font-SatoshiBold text-2xl md:text-3xl xl:text-5xl pb-4 title' data-aos="fade-left">Powerful features to help you manage all your leads</h2>
              <p className='text-gray col-span-2 md:col-span-1' data-aos="fade-right">Apsum dolor sit amet consectetur. Aliquam elementum elementum in ultrices. Dui maecenas ut eros turpis ultrices metus morbi aliquet vel.</p>
              <LandingCard
                icon={"group"}
                title={"User information"}
                desc={"Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis."}
              />
              <LandingCard
                icon={"hands"}
                title={"Deal tracking"}
                desc={"Worem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis."}
              />
              <LandingCard
                icon={"direction"}
                title={"Pipeline management"}
                desc={"Worem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis."}
              />
              <LandingCard
                icon={"Docs"}
                title={"Reporting dashboard"}
                desc={"Worem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis."}
              />
              <LandingCard
                icon={"groupMassege"}
                title={"Meeting scheduling"}
                desc={"Worem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis."}
              />
              <LandingCard
                icon={"userMail"}
                title={"Email tracking"}
                desc={"Worem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis."}
              />
            </div>

          </div>
          {/* End Box of introduction cards */}

        </section>
        {/* End introduction Section <-- */}

        {/* --> Start Section Inbox and encrypted messages */}
        <section className='mb-16 h-fit'>
          {/* Start Title */}
          <div className="text-center mb-16">
            <h2 className='font-SatoshiBold text-2xl md:text-3xl xl:text-5xl pb-4 title' data-aos="zoom-out">Essential apps that protect your</h2>
            <div className="flex  justify-center flex-wrap items-center gap-7" data-aos="zoom-out">
              <div className="font-SatoshiBold text-base md:text-3xl xl:text-5xl pb-2 title flex justify-center items-center gap-x-2">
                <svg className="w-11 h-8">
                  <use href='#email'></use>
                </svg>
                Email,
              </div>
              <div className="font-SatoshiBold text-base md:text-3xl xl:text-5xl pb-2 title flex justify-center items-center gap-x-2">
                <svg className="w-8 h-8">
                  <use href='#Calendar'></use>
                </svg>
                Events,
              </div>
              <div className="font-SatoshiBold text-base md:text-3xl xl:text-5xl pb-2 title flex justify-center items-center gap-x-2">
                <svg className="w-10 h-8">
                  <use href='#folder'></use>
                </svg>
                Files,
              </div>
              <div className="font-SatoshiBold text-base md:text-3xl xl:text-5xl pb-2 title flex justify-center items-center gap-x-2">
                <svg className="w-7 h-8">
                  <use href='#document'></use>
                </svg>
                Documents
              </div>
            </div>
          </div>
          {/* End Title */}

          {/* Start Body Section */}
          <div className="mt-36  grid md:grid-cols-2 items-center gap-7 justify-center">

            {/* Start Left Side */}
            <div className="grid gap-y-7 items-center px-5 lg:px-14">
              <h3 className='text-2xl md:text-3xl xl:text-5xl font-SatoshiBold' data-aos="flip-right">End-to-end encrypted inbox and messages</h3>
              <span data-aos="flip-up">Rorem ipsum dolor sit amet consectetur. Proin dignissim tortor mauris viverra sed volutpat mauris. Amet nisi amet commodo adipiscing ut imperdiet nunc.</span>
              <Button
                title={"Learn More"}
              />
            </div>
            {/* End Left Side */}

            {/* Start Right Side */}
            <div className="grid justify-center px-5">
              <img src="/assets/Images/ImageWrapper.png" alt="" data-aos="zoom-out-left" />
            </div>
            {/* End Right Side */}

          </div>
          {/* End Body Section */}


          {/* Start Background svgs */}
          <div className="grid md:grid-cols-5 gap-9 mt-16 ">
            <div className="relative md:col-span-2 grid justify-center  items-center bg-zinc-700/20  rounded-xl shadow-2xl p-6 md:p-9" data-aos="fade-up-right">
              <svg className='absolute top-0 right-0 z-[-1]'
                xmlns="http://www.w3.org/2000/svg"
                width={395}
                height={356}
                viewBox="0 0 395 356"
                fill="none"
              >
                <g filter="url(#filter0_f_0_437)">
                  <circle cx={309} cy={97} r={59} fill="#41E88D" />
                </g>
                <defs>
                  <filter
                    id="filter0_f_0_437"
                    x={0}
                    y={-212}
                    width={618}
                    height={618}
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
                      stdDeviation={125}
                      result="effect1_foregroundBlur_0_437"
                    />
                  </filter>
                </defs>
              </svg>
              <div className="grid">
                <img src="/assets/Images/Phone.png" className='mx-auto mb-8 z-[-2]' alt="" />
                <h3 className='font-SatoshiBold text-xl md:text-3xl my-3 px-6'>Mobile applications</h3>
                <span className='text-gray px-6'>Prem ipsum dolor sit amet consectetur. Viverra sed dignissim risus aliquet condimentum. Vulputate varius feugiat egestas congue </span>
              </div>
            </div>
            <div className="relative md:col-span-3 grid justify-center items-center bg-zinc-700/20  rounded-xl shadow-2xl pb-0 p-6 md:p-9 md:pb-0" data-aos="fade-up-left">
              <svg className='absolute top-0 right-0 z-[-1] w-fit'
                xmlns="http://www.w3.org/2000/svg"
                width={689}
                height={183}
                viewBox="0 0 689 183"
                fill="none"
              >
                <mask
                  id="mask0_0_439"
                  style={{
                    maskType: "alpha",
                  }}
                  maskUnits="userSpaceOnUse"
                  x={0}
                  y={0}
                  width={689}
                  height={183}
                >
                  <rect
                    x={0.5}
                    y={0.5}
                    width={688}
                    height={182}
                    rx={9.5}
                    fill="#0E1330"
                    stroke="#282D45"
                  />
                </mask>
                <g mask="url(#mask0_0_439)">
                  <g filter="url(#filter0_f_0_439)">
                    <circle cx={109} cy={464} r={83} fill="#2D55FB" />
                  </g>
                  <g filter="url(#filter1_f_0_439)">
                    <circle cx={583} cy={110} r={65} fill="#7214FF" />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_f_0_439"
                    x={-324}
                    y={31}
                    width={866}
                    height={866}
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
                      stdDeviation={175}
                      result="effect1_foregroundBlur_0_439"
                    />
                  </filter>
                  <filter
                    id="filter1_f_0_439"
                    x={268}
                    y={-205}
                    width={630}
                    height={630}
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
                      stdDeviation={125}
                      result="effect1_foregroundBlur_0_439"
                    />
                  </filter>
                </defs>
              </svg>
              <div className="mb-9 md:px-9">
                <h3 className='font-SatoshiBold text-xl md:text-3xl mb-3'>Upload, share, and preview any file</h3>
                <span className='text-gray'>Tellus et adipiscing sit sit mauris pharetra bibendum. Ligula massa netus nulla ultricies purus.</span>
              </div>
              <img src="/assets/Images/imageWraper.png" className='mx-auto' alt="" />
              <svg className='absolute bottom-0 left-0 inline-block z-[-1] w-full'
                xmlns="http://www.w3.org/2000/svg"
                width={529}
                height={393}
                viewBox="0 0 529 393"
                fill="none"
              >
                <g filter="url(#filter0_f_0_533)">
                  <circle cx={109} cy={281} r={70} fill="#2D55FB" />
                </g>
                <defs>
                  <filter
                    id="filter0_f_0_533"
                    x={-311}
                    y={-139}
                    width={840}
                    height={840}
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
                      stdDeviation={175}
                      result="effect1_foregroundBlur_0_533"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          {/* End Background svgs */}

          <div className="w-full flex flex-wrap items-center justify-center my-16 gap-x-6 gap-y-2">
            <Button
              title={"Get a Started"}
              bg={true}
            />
            <Button
              title={"Browse all feature"}
            />
          </div>
        </section>
        {/* End Section Inbox and encrypted messages <-- */}

        {/* --> Start source Sectipon */}
        <section className='mb-16'>

          <div className="relative p-6 md:p-12 grid md:grid-cols-2 items-center justify-between gap-10 bg-zinc-700/20 rounded-xl shadow-2xl">

            {/* Start Background svgs */}
            <svg className='absolute top-0 left-0 inline-block w-full'
              xmlns="http://www.w3.org/2000/svg"
              width={711}
              height={682}
              viewBox="0 0 711 682"
              fill="none"
            >
              <g filter="url(#filter0_f_0_543)">
                <circle cx={112.5} cy={83.5} r={98.5} fill="#7214FF" />
              </g>
              <defs>
                <filter
                  id="filter0_f_0_543"
                  x={-486}
                  y={-515}
                  width={1197}
                  height={1197}
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
                    result="effect1_foregroundBlur_0_543"
                  />
                </filter>
              </defs>
            </svg>
            {/* End Background svgs */}

            {/* Start Top Left Side */}
            <div className="">

              {/* Title */}
              <h2 className='font-SatoshiBold text-2xl md:text-3xl xl:text-5xl pb-4 title' data-aos="flip-left">Transparent, audited, &open source</h2>
              <p className='text-gray mb-10' data-aos="flip-up">Torem ipsum dolor sit amet consectetur. Nulla quisque scelerisque eget quis. Eu amet amet eu interdum.</p>
              <Button
                title={"rowse all feature"}
              />
            </div>
            {/* End Top Left Side */}

            {/* Start Top Right Side */}
            <div className="grid justify-center md:justify-end">
              <img src="/assets/Images/Image.png" alt="" data-aos="fade-up" data-aos-anchor-placement="center-bottom" />
            </div>
            {/* End Top Right Side */}

            {/* Start Botton Left Side */}
            <div className="bg-[#060B27] p-4 pb-0 md:p-7 md:pb-0 rounded-xl relative" data-aos="flip-down">
              <h3 className='font-SatoshiBold text-xl md:text-2xl mb-2.5'>Product Mail</h3>
              <span className='text-gray'>Gonsectetur eque nec nunc facilisis tellus tincidunt. Malesuada maecenas ac bibendum consectetur.</span>
              <div className="w-full flex justify-center mt-8">
                <img src="/assets/Images/Imasge.png" alt="" />
              </div>
            </div>
            {/* End Botton Left Side */}
            {/* Start Botton Right Side */}
            <div className="bg-[#060B27] p-4 pb-0 md:p-7 md:pb-0 rounded-xl relative" data-aos="flip-up">
              <h3 className='font-SatoshiBold text-xl md:text-2xl mb-2.5'>Product Mail</h3>
              <span className='text-gray'>Gonsectetur eque nec nunc facilisis tellus tincidunt. Malesuada maecenas ac bibendum consectetur.</span>
              <div className="w-full flex justify-center mt-8">
                <img src="/assets/Images/Imagewaper.png" alt="" />
              </div>
            </div>
            {/* End Botton Right Side */}

            {/* Start Background svgs */}
            <svg className='absolute inline-block bottom-0 right-0 '
              xmlns="http://www.w3.org/2000/svg"
              width={725}
              height={717}
              viewBox="0 0 725 717"
              fill="none"
            >
              <g filter="url(#filter0_f_0_544)">
                <circle cx={586} cy={586} r={86} fill="#32CAFD" />
              </g>
              <defs>
                <filter
                  id="filter0_f_0_544"
                  x={0}
                  y={0}
                  width={1172}
                  height={1172}
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
                    result="effect1_foregroundBlur_0_544"
                  />
                </filter>
              </defs>
            </svg>
            {/* End Background svgs */}
          </div>
        </section>
        {/* End source Sectipon <-- */}

        {/* --> Start Comments Section */}
        <section className='mb-16'>
          <div className="text-center">

            {/* Title */}
            <h2 className='font-SatoshiBold text-2xl md:text-3xl xl:text-5xl pb-4 title'>What our clients say</h2>
            <span className='text-gray'>Rmet facilisi arcu odio urna aenean erat. Pellentesque in vitae lobortis orci tincidunt facilisis. Pulvinar lacus ultricies turpis urna sapien.</span>
          </div>
          <div className="relative mt-16">
            <Slider />
          </div>
        </section >
        {/* End Comments Section <-- */}

        {/* --> Start Discord Section */}
        <section className='mb-16'>
          <img src="/assets/Images/Default Container.png" className='w-full' alt="" data-aos="zoom-in-down" />
        </section>
        {/* End Discord Section <-- */}

        {/* --> Start New Products Section */}
        <section className='mb-36'>
          <div className="grid grid-cols-2 md:grid-cols-5 justify-between items-center">
            {/* Title */}
            <h2 className='md:col-span-4 font-SatoshiBold text-2xl md:text-3xl xl:text-5xl title'>Product in the news</h2>
            <div className="flex justify-end">
              <Button
                title={"Browse all news"}
                bg={true}
              />
            </div>
          </div>
          {/* Start Products Box */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {/*  */}
            <div className="p-5 bg-zinc-700/20 shadow-2xl rounded-xl" data-aos="flip-left">
              <img src="/assets/Images/Blogimage.png" className='w-full' alt="" />
              <h4 className='font-SatoshiBold text-xl md:text-2xl mt-5 mb-4'>Product Mail is taking on Gmail by betting on privacy</h4>
              <span className='text-gray'>Ramet consectetur. Est porttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.</span>
              <hr className='text-gray  my-5' />
              <div className="flex justify-between">
                <p className='text-gray'>February 8, 2023</p>
                <p className='flex items-center gap-1'>Read more
                  <svg className='w-4 h-4'>
                    <use href='#arrow-right'></use>
                  </svg>
                </p>
              </div>

            </div>
            {/*  */}
            <div className="p-5 bg-zinc-700/20 shadow-2xl rounded-xl" data-aos="flip-up">
              <img src="/assets/Images/BlogImage2.png" className='w-full' alt="" />
              <h4 className='font-SatoshiBold text-xl md:text-2xl mt-5 mb-4'>Wants You To Sign Out Of Google Workspace Forever</h4>
              <span className='text-gray'>Est porttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.</span>
              <hr className='text-gray  my-5' />
              <div className="flex justify-between">
                <p className='text-gray'>February 8, 2023</p>
                <p className='flex items-center gap-1'>Read more
                  <svg className='w-4 h-4'>
                    <use href='#arrow-right'></use>
                  </svg>
                </p>
              </div>

            </div>
            {/*  */}
            <div className="p-5 bg-zinc-700/20 shadow-2xl rounded-xl" data-aos="flip-right">
              <img src="/assets/Images/BlogImage3.png" className='w-full' alt="" />
              <h4 className='font-SatoshiBold text-xl md:text-2xl mt-5 mb-4'>The Best Email Encryption Services for 2023</h4>
              <span className='text-gray'>Dorttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.</span>
              <hr className='text-gray  my-5' />
              <div className="flex justify-between">
                <p className='text-gray'>February 8, 2023</p>
                <p className='flex items-center gap-1'>Read more
                  <svg className='w-4 h-4'>
                    <use href='#arrow-right'></use>
                  </svg>
                </p>
              </div>

            </div>
            {/*  */}
          </div>
          {/* End Prodocts Box */}
        </section>
        {/* End New Products Section <-- */}

        {/* --> Start Footer Section */}
        <footer className='relative'>

          {/* Start Background Svgs */}
          <svg className='hidden xl:inline-block absolute w-fit z-[-1]'
            width={1242}
            height={586}
            viewBox="0 0 1242 586"
            fill="none"
          >
            <g filter="url(#filter0_f_0_912)">
              <circle cx={621} cy={327} r={121} fill="#7214FF" />
            </g>
            <defs>
              <filter
                id="filter0_f_0_912"
                x={0}
                y={-294}
                width={1242}
                height={1242}
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
                  result="effect1_foregroundBlur_0_912"
                />
              </filter>
            </defs>
          </svg>
          {/* Start Background Svgs */}

          <div className="grid grid-cols-2 md:grid-cols-5 justify-between py-10 gap-7">
            {/* Start first column */}
            <div className="col-span-2">
              <svg className='h-10 mb-9'>
                <use href='#Logo'></use>
              </svg>
              <form className='px-7 py-10  rounded-xl bg-zinc-700/20'>
                <p className='font-SatoshiBold text-2xl mb-5 '>Subscribe to our newsletter</p>
                <input className='w-full px-7 py-4 bg-inherit rounded-full border-1' type="email" placeholder='Enter your email' />
                <input className='w-full px-7 py-4 bg-purple rounded-full mt-4 font-SatoshiMedium' type="submit" value={"Subscribe"} />
              </form>
            </div>
            {/* End first column */}

            {/* Start Last column */}
            <div className="grid justify-end">
              <p className='font-SatoshiBold text-lg'>Pages</p>
              <ul className='space-y-6 text-gray mt-9'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Blog post</li>
                <li>Pricing</li>
                <li>Pricing single</li>
              </ul>
            </div>
            {/* End Last column */}

            {/* Start third column  */}
            <div className="grid justify-end h-fit">
              <p className='font-SatoshiBold text-lg'>Utility Pages</p>
              <ul className='space-y-6 text-gray mt-9'>
                <li>Style guide</li>
                <li>Password protected</li>
                <li>404 Not found</li>
                <li>Licenses</li>
                <li>Changelog</li>
              </ul>
            </div>
            {/* End third column  */}

            {/* Start fourth column   */}
            <div className="grid justify-end">
              <ul className='space-y-6 text-gray mt-16'>
                <li>Features</li>
                <li>Careers</li>
                <li>Careers single</li>
                <li>Request a demo</li>
                <li>Login</li>
                <li>Sign Up</li>
              </ul>
            </div>
            {/* End fourth column   */}

          </div>
          <hr />

          {/*  Start Footer below */}
          <div className="flex flex-wrap gap-5 justify-between items-center my-9">
            <p className='font-SatoshiMedium text-gray' >Copyright © Product | Developed by <Link target='_blank' className='text-white font-SatoshiBold text-lg ' href={"https://github.com/vcabolfazl"}>Abolfazl Sharifi</Link> - Designed  by <Link className='text-white font-SatoshiBold text-lg' href={"https://webflow.com"} target='_blank'>Webflow</Link></p>
            <div className="flex gap-x-4 left-0 right-0 mx-auto md:mx-0">
              <Link href={"/"} className='flex items-center justify-center p-1 rounded-xl border'>
                <svg className="w-8 h-8">
                  <use href='#instagrom'></use>
                </svg>
              </Link>
              <Link href={"/"} className='flex items-center justify-center p-1 rounded-xl border'>
                <svg className="w-8 h-8">
                  <use href='#twiter'></use>
                </svg>
              </Link>
              <Link href={"/"} className='flex items-center justify-center p-1 rounded-xl border'>
                <svg className="w-8 h-8">
                  <use href='#linkdin'></use>
                </svg>
              </Link>
              <Link href={"/"} className='flex items-center justify-center p-1 rounded-xl border'>
                <svg className="w-8 h-8">
                  <use href='#facebook'></use>
                </svg>
              </Link>
            </div>
          </div>
          {/*  End Footer below */}
        </footer>
        {/* End Footer Section <-- */}

      </div >

    </>
  )
}
