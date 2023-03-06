import React from 'react'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader


function Servicepage() {
  return (
    <div className="lg:flex" >
      
      <div className=" relative flex flex-col z-30  shadow-2xl bg-white p-10 m-5  ">
      <p className="italic text-xs absolute right-2 top-2 text-gray-400 ">
        category
      </p>
      <div>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="/img/banner.jpg" />
          
        </div>
        <div>
          <img loading="lazy" src="/img/banner-1.jpg" />
        </div>
        <div>
          <img loading="lazy" src="/img/banner-3.jpg" />
        </div>
      </Carousel>
      </div>
     
      <h4 className="my-3 ">title</h4>
      <div className="flex">
       
      
         
      </div>
      <p className=" text-xs line-clamp-2 my-2 ">Room type</p>
    
      <button
        className=" button p-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-500 border border-yellow-300 focus:outline-none  rounded-sm 
        focus:ring-2 focus:ring-yellow-500 active:from-yellow-500 mt-auto "
      >
        View
      </button>
    </div> 

    <div className=" relative flex flex-col z-30 bg-white p-10 m-5  ">
      <p className="italic text-xs absolute right-2 top-2 text-gray-400 ">
        category
      </p>
      <div>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="/img/banner.jpg" />
          
        </div>
        <div>
          <img loading="lazy" src="/img/banner-1.jpg" />
        </div>
        <div>
          <img loading="lazy" src="/img/banner-3.jpg" />
        </div>
      </Carousel>
      </div>
     
      <h4 className="my-3 ">title</h4>
      <div className="flex">
       
      
         
      </div>
      <p className=" text-xs line-clamp-2 my-2 ">Room type</p>
    
      <button
        className=" button p-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-500 border border-yellow-300 focus:outline-none  rounded-sm 
        focus:ring-2 focus:ring-yellow-500 active:from-yellow-500 mt-auto "
      >
        View
      </button>
    </div> 

  

    </div>
  )
}

export default Servicepage
