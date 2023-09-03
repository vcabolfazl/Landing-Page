import Link from 'next/link'
import React from 'react'

export default function Button({ title , href , bg }) {
 return (
  <Link href={href ? href : "/"}>
   <button className={`font-SatoshiMedium px-7 py-3 rounded-full ${bg ? "bg-purple" : "border border-[#282D45]"}`}>
    {title}
   </button>
  </Link>
 )
}
