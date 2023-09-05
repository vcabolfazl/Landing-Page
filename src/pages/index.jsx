import React, { useEffect, useState } from 'react'
import Button from '@/components/Button'
import SVG from "@/components/SVG"
import LandingCard from '@/components/LandingCard'
export default function page() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <SVG />

      <div className="container">
        <section className='my-16'>

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
          <nav className='sticky grid grid-cols-2 md:grid-cols-12 justify-between items-center mt-16'>
            <div className="left md:col-span-2 z-30">
              <svg className='h-10'>
                <use href='#Logo'></use>
              </svg>
            </div>

            <div className="text-right block md:hidden transition-all z-30">
              <svg className="w-9 h-9 inline-block" onClick={() => setShowMenu(status => !status)}>
                <use href='#Menu'></use>
              </svg>
              <ul className={`absolute right-0 z-30 bg-zinc-700/20 rounded-xl w-full p-3 space-y-3
            b-zinc-700 text-center top-14 text-gray ${showMenu ? "block opacity-100 translate-y-9" : "hidden opacity-0 "}`}>
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
            <div className={`fixed h-full w-full bg-black/40 inset-0 ${showMenu ? "block z-10" : "hidden"}`} onClick={() => setShowMenu(status => !status)}></div>
            <div className=" hidden md:block right text-right col-span-2">
              <Button
                title={"Get a Demo"}
                bg={true}
              />
            </div>
          </nav>

        </section>

        <section className='my-16'>
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

          <div className="">
            <div className="grid grid-cols-2 md:grid-cols-3 justify-between gap-6">
              <h2 className='col-span-2 font-SatoshiBold text-2xl md:text-3xl xl:text-5xl pb-4 title pb-2'>Powerful features to help you manage all your leads</h2>
              <p className='text-gray col-span-2 md:col-span-1'>Apsum dolor sit amet consectetur. Aliquam elementum elementum in ultrices. Dui maecenas ut eros turpis ultrices metus morbi aliquet vel.</p>
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

        </section>

        <section className='mb-16 h-fit'>
          <div className="text-center mb-16">
            <h2 className='font-SatoshiBold text-2xl md:text-3xl xl:text-5xl pb-4 title'>Essential apps that protect your</h2>
            <div className="flex  justify-center flex-wrap items-center gap-7">
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

          {/* <div className="container max-h-full absolute left-0 right-0 mx-auto z-[-1] flex justify-between rounded-2xl shadow-2xl">
            <svg className='inline-block z-[-1]  rounded-l-2xl'
              width={577}
              height={512}
              viewBox="0 0 577 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_0_309)">
                <ellipse cx={56.5} cy={493.5} rx={93.5} ry={116.5} fill="#7214FF" />
              </g>
              <defs>
                <filter
                  id="filter0_f_0_309"
                  x={-537}
                  y={-123}
                  width={1187}
                  height={1233}
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
                    result="effect1_foregroundBlur_0_309"
                  />
                </filter>
              </defs>
            </svg>
            <svg className='inline-block z-[-1]  rounded-r-2xl'
              xmlns="http://www.w3.org/2000/svg"
              width={619}
              height={512}
              viewBox="0 0 619 512"
              fill="none"
            >
              <g filter="url(#filter0_f_0_376)">
                <ellipse cx={538.5} cy={103.5} rx={105.5} ry={131.5} fill="#32CAFD" />
              </g>
              <defs>
                <filter
                  id="filter0_f_0_376"
                  x={-67}
                  y={-528}
                  width={1211}
                  height={1263}
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
                    result="effect1_foregroundBlur_0_376"
                  />
                </filter>
              </defs>
            </svg>

          </div> */}

          <div className="mt-36  grid md:grid-cols-2 items-center gap-7 justify-center">
            <div className="grid gap-y-7 items-center px-5 lg:px-14">
              <h3 className='text-2xl md:text-3xl xl:text-5xl font-SatoshiBold'>End-to-end encrypted inbox and messages</h3>
              <span>Rorem ipsum dolor sit amet consectetur. Proin dignissim tortor mauris viverra sed volutpat mauris. Amet nisi amet commodo adipiscing ut imperdiet nunc.</span>
              <Button
                title={"Learn More"}
              />
            </div>
            <div className="grid justify-center px-5">
              <img src="/assets/Images/ImageWrapper.png" alt="" />
            </div>
          </div>
          <div className="grid md:grid-cols-5 gap-9 mt-16 ">
            <div className="relative md:col-span-2 grid justify-center  items-center bg-zinc-700/20  rounded-xl shadow-2xl p-6 md:p-9">
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
            <div className="relative md:col-span-3 grid justify-center items-center bg-zinc-700/20  rounded-xl shadow-2xl pb-0 p-6 md:p-9 md:pb-0">
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

        <section className='mb-16'>
          <div className="relative p-6 md:p-12 grid md:grid-cols-2 items-center justify-between gap-10 bg-zinc-700/20 rounded-xl shadow-2xl">
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
            <div className="">
              <h2 className='font-SatoshiBold text-2xl md:text-3xl xl:text-5xl pb-4 title'>Transparent, audited, &open source</h2>
              <p className='text-gray mb-10'>Torem ipsum dolor sit amet consectetur. Nulla quisque scelerisque eget quis. Eu amet amet eu interdum.</p>
              <Button
                title={"rowse all feature"}
              />
            </div>

            <div className="grid justify-center md:justify-end">
              <img src="/assets/Images/Image.png" alt="" />
            </div>

            <div className="bg-[#060B27] p-4 pb-0 md:p-7 md:pb-0 rounded-xl relative">
              <h3 className='font-SatoshiBold text-xl md:text-2xl mb-2.5'>Product Mail</h3>
              <span className='text-gray'>Gonsectetur eque nec nunc facilisis tellus tincidunt. Malesuada maecenas ac bibendum consectetur.</span>
              <div className="w-full flex justify-center mt-8">
                <img src="/assets/Images/Imasge.png" alt="" />
              </div>
            </div>
            <div className="bg-[#060B27] p-4 pb-0 md:p-7 md:pb-0 rounded-xl relative">
              <h3 className='font-SatoshiBold text-xl md:text-2xl mb-2.5'>Product Mail</h3>
              <span className='text-gray'>Gonsectetur eque nec nunc facilisis tellus tincidunt. Malesuada maecenas ac bibendum consectetur.</span>
              <div className="w-full flex justify-center mt-8">
                <img src="/assets/Images/Imagewaper.png" alt="" />
              </div>
            </div>
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
          </div>
        </section>

        <section className='mb-16'>
          <div className="text-center">
            <h2 className='font-SatoshiBold text-2xl md:text-3xl xl:text-5xl pb-4 title'>What our clients say</h2>
            <span className='text-gray'>Rmet facilisi arcu odio urna aenean erat. Pellentesque in vitae lobortis orci tincidunt facilisis. Pulvinar lacus ultricies turpis urna sapien.</span>
          </div>
        </section >
      </div >

    </>
  )
}
