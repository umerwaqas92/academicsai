"use client";
import { signIn, useSession ,signOut} from 'next-auth/react'
import Link from 'next/link';
import React from 'react'

export default function page() {
  const { data: session, status } = useSession()

  console.log(session)
  return (
    <div className='flex items-center justify-center  w-full md:pr-10 z-0'>

    <div className=' flex md:flex-row flex-col  gap-2     justify-center items-start  '>
      <img src='/images/Illustration.png' className=' md:w-1/2 w-full scale-75  md:scale-95 lg:pr-32 hidden md:block ' loading="eager" />
      
      <div className='container flex flex-col  space-y-2 w-full md:min-w-[450px] lg:min-w-[500px] '>
       <div className='flex flex-row items-center justify-between'>
       <h1 className='text-3xl font-bold *:'>Signup</h1>
       <Link href={"/auth/signin"} className='link '>Signin instead</Link>
       </div>
        <p className='text-lg'>Enter your details</p>
        {/* first name,last name, */}

        <p className='text-sm text-gray-500'>First Name</p>
        <input className='input input-md input-bordered w-full  ' type="text" placeholder='First Name' />

        <p className='text-sm text-gray-500'>Last Name</p>
        <input className='input input-md  input-bordered w-full  ' type="text" placeholder='Last Name' />


        <p className='text-sm text-gray-500'>Email</p>
        <input className='input input-md input-bordered w-full  ' type="email" placeholder='Email' />
        <p className='text-sm text-gray-500'>Password</p>
        <input className='input input-md input-bordered w-full  ' type="text" placeholder='Password' />
        {/* confrim */}

        <p className='text-sm text-gray-500'>Confirm Password</p>
        <input className='input input-md input-bordered w-full  ' type="text" placeholder='Confirm Password' />
        

        <div className="flex flex-row gap-2 items-center  py-2">
        <input type="checkbox checkbox-md" defaultChecked className="checkbox" />
        <p className='text-sm text-gray-500'>By creating an account, I agree to our  <span className='link'> Terms of use</span> and <span className='link'>Privacy Policy</span> </p>
        </div>

        <button className='btn btn-md btn-primary w-full mt-5 rounded-full' onClick={() => signIn()}>Sign Up</button>
        <br />
        <div className="divider  ">OR</div>
<br />
<button className='btn btn-md btn-ghost w-full mt-5 rounded-full bg-white border-black ' onClick={() => signIn("google")}>
  <img src='/svg/googleicon.svg'/>
  Continue with Google</button>

  <br />
  <br />
  <br />





      </div>
      
       

    </div>
    </div>
  )
}
