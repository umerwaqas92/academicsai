import React from 'react'
import { FaTwitter } from 'react-icons/fa6'

export default function ReviewTweetItem({name,username,tweet,hashtag,profilepic}){

    return (
       <div className=' md:px-5 px-2'>
         <div className="flex items-start p-2 border border-gray-200 rounded-lg bg-white w-full z-0   ">
       
  
       <div className="flex flex-col">
       <div className="flex flex-row items-center gap-2 ">
         <img className="w-10 h-10 rounded-full object-cover container" src={profilepic} alt="Profile Pic" />
         <div className='flex flex-col '>
           <h3 className="font-bold text-sm ">{name}</h3>
         <p className=" text-blue-500 text-xs ">{username}</p>
           </div>
        

           <FaTwitter className=' text-blue-500 ml-20 ' size={25} />

       </div>

         <p className="mt-2 text-sm">{tweet}</p>
         <p className="mt-2 text-blue-500 text-sm">{hashtag}</p>
       </div>
     </div>
       </div>
    )

    
}
  
