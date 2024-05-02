"use client";
import { signIn, useSession ,signOut} from 'next-auth/react'
import Link from 'next/link';
import React from 'react'

export default function page() {
  const { data: session, status } = useSession()

  console.log(session)
  return (
    <div className='flex items-center justify-center  w-full md:pr-10 '>

    <div className=' flex md:flex-row flex-col  gap-2 md:mt-16    justify-center items-center  w-full'>
      <img src='/images/Illustration.png' className=' md:w-1/3 w-1/2   md:scale-95 lg:pr-32 mb-20 md:mb-0' loading="eager" />
      
      <div className='container flex flex-col  space-y-2 w-full  md:min-w-[450px] lg:min-w-[500px] max-w-[600px]'>

        <div className='flex flex-row items-center justify-between'>
       <h1 className='text-3xl font-bold *:'>Sign In</h1>
       <Link href={"/auth/signup"} className='link '>Signup instead</Link>
       </div>
        <p className='text-lg'>Enter your email and password</p>
        {/* lable */}
        <p className='text-sm text-gray-500'>Email</p>
        <input className='input input-md input-bordered w-full  ' type="text" placeholder='Email' />
        <p className='text-sm text-gray-500'>Password</p>
 

        <input className='input input-md input-bordered w-full  ' type="text" placeholder='Password' />
        <button className='btn btn-md btn-primary w-full mt-5 rounded-full' onClick={() => {

        }}>Sign In</button>
<br />
        <div className="divider  ">OR</div>
<br />
<button className='btn btn-md btn-ghost w-full mt-5 rounded-full bg-white border-black ' onClick={() => signIn("google")}>
  <img src='/svg/googleicon.svg'/>
  Continue with Google</button>


      </div>

      <br />
      <br />
      <br />

      
       

    </div>
    </div>
  )
}
