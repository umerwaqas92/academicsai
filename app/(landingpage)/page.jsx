"use client";
import React,{useState} from 'react'
import LandingNavBar from '../components/LandingNavBar'
import LandingFooter from '../components/LandingFooter'

import { FaCheck } from "react-icons/fa6";
import LandingActionButton from '../components/LandingActionButton';

import { FaTwitter } from "react-icons/fa";
import SimpleSlider2 from '../components/TestimonialSlide';
import { PricingList } from '@/utils/constants';
import PricingCard from '../components/ParicingCard';
import PricingCardActive from '../components/ParicingCardActive';
import ScrollAnimation from '../components/AnimationHelper';





function IconCheck({title}){

    return (
        <div className=' flex flex-row items-center gap-2'>
    <div className='container flex w-10 h-10 bg-[#F8FCFB] border-[#DEF7F0] border rounded-full text-[#47BEB9] flex-shrink-0 text-center   justify-center items-center bg-opacity-70 '>
    <FaCheck />
    </div>
    <h2 className=''>{title}</h2>
   </div>

       
    )
}


export default function page() {

    const [PricingMonthly,setPricingMonthly] = useState(false)
  return (
    <>
     


     <LandingNavBar />
    <div className=' flex flex-col  md:px-20 px-5 justify-center items-center mt-20' >
   
    {/* header */}
    {/* public/images/bg_frame01.png */}
    <div className='  bg-gradient-to-r from-white to-[#ADF6E4]  rounded-2xl md:mt-5 w-full'>
    <div className=" flex flex-col w-full items-center  md:bg-[url('../public/images/Untitleddesign(65).png')]  bg-[url('../public/images/bg-frame-phone.png')]  bg-cover   md:h-[600px] h-[450px]  justify-center rounded-2xl  ">
        {/* <img src="images/bg_frame01.png" alt="logo"  className='w-full object-cover h-96' /> */}
        <div className=' flex flex-col max-w-3xl'>
<ScrollAnimation>
        
        <h1 className='text-5xl text-[#160647] text-center font-black  '>What Do You Need To <span className='text-[#DDCD86]'>Write?</span></h1>
</ScrollAnimation>
        
        <div className=' px-10'>
<ScrollAnimation>

        <input className='input input-bordered w-full mt-5 border-accent  ' type="text" placeholder='Tell academics.ai what you want to create...' />
        </ScrollAnimation>

        </div>
            </div>
    </div>


    </div>

    {/* results section */}
    <div className='flex md:flex-row flex-col  w-full items-center justify-center gap-8 '>
    <ScrollAnimation>
        <div className='md:w-[450px] w-full  md:-mt-40 bg-white rounded-md p-1 '>
        
       
        <img src="images/Group 257.png" alt="results image"  className=' object-scale-down ' />
       

        </div>
        </ScrollAnimation>
            <div className=' flex flex-col  max-w-md gap-1'>
                <ScrollAnimation>        <h1 className="text-black text-2xl font-bold leading-tight">Create content efficiently and quickly with great AI writing tools</h1>
</ScrollAnimation>
<ScrollAnimation>        <p className="text-gray-600 text-sm  ">Write academic papers, research papers, and more with a variety of AI writing tools. </p>
</ScrollAnimation>
        </div>
    </div>


    

    {/* How it works */}
    <div className=' flex flex-col mt-20'>
    <h1 className='text-5xl text-[#160647] text-center font-black py-10 '><ScrollAnimation>How it works?</ScrollAnimation></h1>
    <div className=' flex md:flex-row flex-col-reverse items-center justify-center gap-8'>

<ScrollAnimation>    <img src="images/Auto Layout Horizontal.png" alt="How it works image"  className=' object-scale-down w-[450px] ' />
</ScrollAnimation>
    <div className=' flex flex-row flex-shrink-0  flex-none gap-2'>
<ScrollAnimation>
    
    <div className='container w-8 h-8 bg-[#F8FCFB] border-[#DEF7F0] border rounded-full text-black flex-shrink-0 text-center p-1  justify-center items-center bg-opacity-70 '>1</div>


</ScrollAnimation>
    <div className=' flex flex-col  max-w-md gap-1'>
        <h1 className="text-black text-2xl font-bold leading-tight"><ScrollAnimation>Enter your research project</ScrollAnimation></h1>

<ScrollAnimation>        <p className="text-gray-600 text-sm  ">Choose from emails, social posts, long-form blog posts, and more! </p>
</ScrollAnimation>
        </div>

    </div>
    </div>

    </div>

    {/* line */}
<ScrollAnimation>    <img src="images/Vector.png" alt="line"  className=' w-full object-scale-down  max-w-md pb-5 px-10 md:px-0' />
</ScrollAnimation>

 {/* How it works 1 */}
 <div className=' flex flex-col'>

    <div className=' flex md:flex-row flex-col items-center justify-center gap-8'>
   
    <div className=' flex flex-row flex-shrink-0  flex-none gap-2'>
<ScrollAnimation>

    <div className='container w-8 h-8 bg-[#F8FCFB] border-[#DEF7F0] border rounded-full text-black flex-shrink-0 text-center p-1  justify-center items-center bg-opacity-70 '>2</div>


</ScrollAnimation>
    <div className=' flex flex-col  max-w-md gap-1'>
<ScrollAnimation>        <h1 className="text-black text-2xl font-bold leading-tight">Give academics.ai a bit of context</h1>
</ScrollAnimation>
<ScrollAnimation>        <p className="text-gray-600 text-sm  ">Enter a few sentences about your brand and products. </p>
</ScrollAnimation>
        </div>

    </div>
    <img src="images/Auto Layout Horizontal.png" alt="How it works image"  className=' object-scale-down w-[450px] ' />
    </div>

    </div>

    {/* line */}
    <ScrollAnimation>
    <img src="images/Vector.png" alt="line"  className=' w-full object-scale-down transform -scale-x-100 max-w-md pb-5 px-10 md:px-0' />

    </ScrollAnimation>
    {/* How it works 2 */}
 <div className=' flex flex-col'>

<div className=' flex md:flex-row  flex-col-reverse items-center justify-center gap-8'>
<ScrollAnimation>

<img src="images/Image (6).png" alt="How it works image"  className=' object-scale-down w-[450px] ' />

</ScrollAnimation>
<div className=' flex flex-row flex-shrink-0  flex-none gap-2'>
<ScrollAnimation>

<div className='container w-8 h-8 bg-[#F8FCFB] border-[#DEF7F0] border rounded-full text-black flex-shrink-0 text-center p-1  justify-center items-center bg-opacity-70 '>3</div>
 </ScrollAnimation>

<div className=' flex flex-col  max-w-md gap-1'>
<ScrollAnimation>

    <h1 className="text-black text-2xl font-bold leading-tight">Sift through the results</h1>

</ScrollAnimation>
<ScrollAnimation>

    <p className="text-gray-600 text-sm  ">Our AI content generator gives you multiple options for each campaign that you’re working on. </p>
</ScrollAnimation>
    </div>

</div>
</div>

</div>

{/* line */}
<ScrollAnimation>

<img src="images/vector_final.png" alt="line"  className=' w-full object-scale-down  max-w-xs pb-5 px-10 md:px-0 md:-ml-80' />

</ScrollAnimation>
<div className=' flex flex-row flex-shrink-0  flex-none gap-2'>
<ScrollAnimation>

<div className='container w-8 h-8 bg-[#F8FCFB] border-[#DEF7F0] border rounded-full text-black flex-shrink-0 text-center p-1  justify-center items-center bg-opacity-70 '>4</div>
</ScrollAnimation>
<div className=' flex flex-col  max-w-md gap-1'>
<ScrollAnimation>

    <h1 className="text-black text-2xl font-bold leading-tight">Edit, polish, and publish</h1>

</ScrollAnimation>
<ScrollAnimation>

    <p className="text-gray-600 text-sm  ">Use academics.ai’s editor to rewrite paragraphs and polish up sentences. Then, just copy and paste the work into your CMS for publishing. </p>
</ScrollAnimation>
    </div>

</div>
</div>


{/* section */}
<div className='flex flex-col bg-[#252835] w-full mt-20 items-center justify-center'>
    <ScrollAnimation>
<h1 className='text-5xl text-white text-center font-black py-10 px-5 '>What our customers say</h1></ScrollAnimation>
<ScrollAnimation>
    <p className='text-center text-white text-sm max-w-xl mb-10 text-opacity-65'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
    </ScrollAnimation>
    {/* name,username,tweet,hashtag,profilepic */}

    

    {/* <div className='flex flex-wrap gap-2 md:mx-52 items-center justify-center'>
   

   
    </div> */}



</div>

<SimpleSlider2 />



{/* pricing */}




<div className=" flex justify-center flex-col items-center  md:bg-[url('../public/images/bg_frame1.png')]  bg-[url('../public/images/bg_frame1_phone.png')] bg-cover w-full   mt-20 py-20 " >
{/* title,price,desc,featuresList,notFeaturesList,buttonText,note */}
<ScrollAnimation>
<div className=' flex flex-row gap-2 mb-10'>
    
<h1 className={` text-md ${PricingMonthly==false?'text-primary':'text-black'} font-bold `} >Pay Monthly</h1>

<input 
    value={PricingMonthly}
    onChange={(e)=>{

        setPricingMonthly(e.target.checked)
        console.log(e.target.checked)
        
    }}
type="checkbox" className="toggle [--tglbg:white] bg-primary hover:bg-primary border-primary"   />
<h1 className={` text-md ${PricingMonthly==true?'text-primary':'text-black'} font-bold `} >Pay Yearly</h1>
{
PricingMonthly==true?<h2 className=' bg-secondary px-5 py-1 rounded-full text-white text-xs w-fit   -mr-5 scale-95   '>Save 25%!</h2>:<h2 className=' bg-secondary px-5 py-1 rounded-full text-white text-xs w-fit   -mr-5  opacity-0 scale-95   '>Save 25%!</h2>

}


</div>
</ScrollAnimation>
<div className='flex md:flex-row flex-col lg:gap-5 gap-2 sm:items-center items-start justify-center w-full px-20 md:px-10 '>
{
    PricingList.map((item)=>{
        return(
           item.active?  <ScrollAnimation><PricingCardActive key={item.title} {...item} PricingMonthly={PricingMonthly} /></ScrollAnimation>:  <ScrollAnimation><PricingCard key={item.title} {...item} PricingMonthly={PricingMonthly}/></ScrollAnimation>

        )
}
    )
}
</div>


</div>



{/* call of action Ready to level-up? */}



<div className=' flex flex-col  md:px-20 px-5 justify-center items-center mt-20' >

<div className=' flex flex-col mt-20 items-center'>

    <ScrollAnimation><h1 className='text-5xl text-[#160647] text-center font-black py-10 '>Ready to level-up?</h1></ScrollAnimation>

<ScrollAnimation>
    <p className='text-center text-gray-600 text-sm max-w-sm mb-10'>Write 10x faster, engage your audience, & never struggle with the blank page again.</p>
    </ScrollAnimation>

    <ScrollAnimation>
    <LandingActionButton  btnSize={"btn-lg"} />
    </ScrollAnimation>

    <div className=' flex md:flex-row flex-col items-center justify-center gap-8 py-5'>
   

   {
    ["No credit card required","2,000 free words per month","90+ content types to explore"].map((item)=>{

        return <ScrollAnimation > <IconCheck key={item} title={item} /></ScrollAnimation>
    })
   }
   
   

    </div>

    </div>

    
    </div>


    <br />
    <br />

    <LandingFooter />
    </>
  )
}
