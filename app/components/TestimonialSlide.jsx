"use client";
import React, { Component } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// app/componnets/style.css
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import ReviewTweetItem from "./TestimonialItem";
import ScrollAnimation from "./AnimationHelper";






export default function SimpleSlider2() {


  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
      
      className="btn btn-sm btn-ghost  btn-circle absolute  -right-10  top-[40%] opacity-35"
        onClick={onClick}>
         <FaArrowAltCircleRight size={25} color="white" />

        </div>

    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
      className="btn btn-sm btn-ghost  btn-circle absolute  -left-10  top-[40%] opacity-35 "
      onClick={onClick}>
       <FaArrowAltCircleLeft size={25} color="white" />

      </div>
      
    );
  }

  
  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  
    responsive: [
      
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 705,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  


   
  };
  return (


   <div className=" w-full pb-20   px-14  lg:px-32    xl:px-52 bg-[#252835] ">
     <div className="slider-containe  bg-[#252835]  gap-1 " >
      <Slider {...settings}>
    <ScrollAnimation>
    <ReviewTweetItem  name={"Tom"} username={"@Tom"} tweet={"I love this app. I can't stop using it. It's so easy to use. I love the way it works. Thank you!"} hashtag={"#AI"} profilepic={"https://placehold.co/400"} />
    </ScrollAnimation>

    <ScrollAnimation>
    <ReviewTweetItem  name={"Tom"} username={"@Tom"} tweet={"I love this app. I can't stop using it. It's so easy to use. I love the way it works. Thank you!"} hashtag={"#AI"} profilepic={"https://placehold.co/400"} />
    </ScrollAnimation>   <ScrollAnimation>
    <ReviewTweetItem  name={"Tom"} username={"@Tom"} tweet={"I love this app. I can't stop using it. It's so easy to use. I love the way it works. Thank you!"} hashtag={"#AI"} profilepic={"https://placehold.co/400"} />
    </ScrollAnimation>   <ScrollAnimation>
    <ReviewTweetItem  name={"Tom"} username={"@Tom"} tweet={"I love this app. I can't stop using it. It's so easy to use. I love the way it works. Thank you!"} hashtag={"#AI"} profilepic={"https://placehold.co/400"} />
    </ScrollAnimation>
    <ScrollAnimation>
    <ReviewTweetItem  name={"Tom"} username={"@Tom"} tweet={"I love this app. I can't stop using it. It's so easy to use. I love the way it works. Thank you!"} hashtag={"#AI"} profilepic={"https://placehold.co/400"} />
    </ScrollAnimation>
    
      </Slider>
    </div>
   </div>
  );
}