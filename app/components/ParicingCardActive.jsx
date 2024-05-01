import React from 'react'
import { FaCheck } from 'react-icons/fa6'
import { MdOutlineClear } from "react-icons/md";

export default function PricingCardActive({title,price,desc,featuresList,notFeaturesList,buttonText,note,PricingMonthly}){

    const index=PricingMonthly===true?1:0


    function IconCheckTitle({title}){

        return (
            <div className=' flex flex-row items-center gap-2'>
        <div className='container flex w-6 h-6 bg-[#DEF7F0] border-[#DEF7F0] border rounded-full text-[#47BEB9] flex-shrink-0 text-center   justify-center items-center bg-opacity-70 '>
        <FaCheck />
        </div>
        <h2 className=' text-md'>{title}</h2>
       </div>
    
           
        )
    }
    return (
        <div className='bg-white rounded-2xl flex flex-col  border-4 border-[#47BEB9]  py-2 px-10 md:w-80 w-full min-h-[650px] max-w-96 scale-95'>

<div className=' w-full flex justify-end'>

<h2 className=' bg-secondary px-5 py-1 rounded-full text-white text-xs w-fit   -mr-5   '>Most Popular</h2>

</div>
            <div className='flex flex-col items-center gap-2 mt-5 '>

            <h1 className='text-md font-bold  text-secondary '>{title}</h1>





            <div className=' flex flex-row w-full items-center justify-center gap-1'>
            <span className=' text-xl font-semibold '>$</span>
            <h1 className='text-6xl font-black text-secondary'>
               
                {price[index]}</h1>
            </div>
           
            <h1 className='text-lg'>{desc[index]}</h1>
            {/* note */}
            <p className='text-2xl  bg-gradient-to-r from-[#47BEB9]  to-[#DDCD86] inline-block text-transparent bg-clip-text text-center'>{note[index]}</p>

            <button className='btn  btn-primary w-full rounded-full text-white'>{buttonText}</button>
        <br />
        <br />


          {
            featuresList.map((feature)=>(
                <div className=' flex flex-row items-center gap-2 justify-start w-full'>
                <div className='container flex w-6 h-6 bg-[#DEF7F0] border-[#DEF7F0] border rounded-full text-[#47BEB9] flex-shrink-0 text-center   justify-center items-center bg-opacity-70 '>
                <FaCheck />
                </div>
                <h2 className=' text-sm'>{feature}</h2>
               </div>
            ))
          }

          {
            notFeaturesList.map((feature)=>(
                <div className=' flex flex-row items-center gap-2 justify-start w-full'>
                <div className='container flex w-6 h-6 bg-[#42859C] border-[#42859C] border rounded-full text-[#99A8A8] flex-shrink-0 text-center   justify-center items-center bg-opacity-10 border-opacity-15 '>
                <MdOutlineClear  />
                </div>
                <h2 className=' text-sm'>{feature}</h2>
               </div>
            ))
          }

<br />
        <br />




            </div>
        </div>
    )
    

}
