"use client"
import React from 'react'
import Logo from './Logo'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '../context/AuthContext'
import LogoutBtn from './LogoutBtn'

export default function AppNavBar() {
  // const { data: session, status } = useSession()
    const { user,isLogin,signOut } = useAuth();
// 

const pathname = usePathname();

// "loading" | "authenticated" | "unauthenticated"
    
  return (
    <div className="fixed top-0 right-0 w-full navbar  z-20 bg-white border-b border-gray-200 ">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">
    <img src="/images/academics.ai.png" alt="logo" className=' w-40 object-scale-down' loading="eager" />

    </a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      {/* <li><a>Link</a></li>
      <li>
        <details>
          <summary>
            Parent
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li> */}

      {/* {
        status === "unauthenticated" ?       <Link href={"/auth/signin"}  className="btn btn-ghost btn-md">Login</Link>:null
      } */}

      {
        !isLogin ?           <Link href={"/auth/signin"}  className="btn btn-md btn-ghost ">Login</Link>:   <LogoutBtn />
      }
     
    </ul>
  </div>
</div>
  )
}
