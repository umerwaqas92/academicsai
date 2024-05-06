"use client";
import React from 'react'
import Logo from './Logo'
import { LandingPageLinks } from '@/utils/constants'
import Link from 'next/link'
import LandingActionButton from './LandingActionButton';

export default function LandingNavBar() {


    const handleClick = () => {
        const elem = document.activeElement;
        if (elem) {
          elem?.blur();
        }
      };


  return (
    <div className="fixed top-0 right-0 left-0 navbar bg-white md:py-4 py-2 w-full md:px-20 px-5 z-10" >
    <div className="navbar-start">
    <Logo />
    </div>
    <div className="navbar-center hidden lg:flex md:block">
    <ul className="menu menu-horizontal px-1  ">
      {
        LandingPageLinks.map((link)=>(
          <li key={link.link}> <Link href={link.link} >{link.title}</Link></li>
        ))
      }
    

    </ul>
  </div>
    <div className="navbar-end ">
    <div className="dropdown dropdown-end md:hidden">
        <div  tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          

        <div className='  flex flex-col gap-2  '>
        <Link href={"#"}  className="btn btn-primary rounded-full text-white ">Get Started ― It's Free</Link>

   <Link href={"#"} className="btn btn-ghost rounded-full ">Login</Link>

   </div>

          {
            LandingPageLinks.map((link)=>(
              <li key={link.link}> <Link onClick={handleClick} href={link.link} >{link.title}</Link></li>
            ))
          }
          
        </ul>
      </div>
   <div className='   flex-row gap-2 hidden md:block'>
   <Link href={"/app"} className="btn btn-ghost rounded-full ">Login</Link>
    <LandingActionButton />
   </div>
    </div>
  </div>
  )
}
