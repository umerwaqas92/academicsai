"use client"
import { appLinks } from '@/utils/constants'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'


export default function SideBar() {

    const pathname = usePathname();
  return (
    <div className='flex flex-col gap-2 brder-r border-gray-200 border  w-52 h-screen  pt-28 px-2 '> 
    <br />


    
    {
        appLinks.map((link)=>{

            return <Link href={link.link} >
               
               <div className={` flex flex-row gap-2 items-center hover:bg-gray-100  ${pathname === link.link ? "bg-gray-200" : ""} rounded-md px-2`}>
               <img src={link.icon} alt="logo" className=' w-8 object-scale-down text-black' loading="eager"/>
               {link.title}
               </div>
                </Link>
        })
    }
    </div>
  )
}
