import Link from 'next/link'
import React from 'react'

export default function Button({ title, href, bg }) {
  return (

    // bg ? (
    <Link href={href ? href : "/"} >
      <button data-aos={`${bg ?"zoom-out-up":"zoom-out-down"}`} className={`font-SatoshiMedium px-7 py-3 rounded-full ${bg ? "bg-purple" : "border border-[#282D45]"}`}>
        {title}
      </button>
    </Link >

    // )
    //  : (<Link href={href ? href : "/"} >
    //   <button data-aos="zoom-out-down" className={`font-SatoshiMedium px-7 py-3 rounded-full border border-[#282D45]`}>
    //    {title}
    //   </button>
    //  </Link >)

  )
}
