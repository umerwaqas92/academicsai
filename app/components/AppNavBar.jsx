"use client"
import React from 'react'
import Logo from './Logo'
import { signOut ,useSession} from 'next-auth/react'

export default function AppNavBar() {
  const { data: session, status } = useSession()
    
  return (
    <div className="fixed top-0 right-0 w-full navbar  z-20 bg-white ">
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
      {
        status === "authenticated" ?       <button onClick={() => signOut()} className="btn btn-ghost btn-md">Logout</button>:null
      }
    </ul>
  </div>
</div>
  )
}
