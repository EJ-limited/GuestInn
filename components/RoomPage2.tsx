import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

function RoomPage2() {
  return (
    <div>
        <div className="flex" >
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

     <div className="w-full md:w-6/12 px-3 p-20 lg:px-6 mb-6 md:mb-0 basis-auto grow-0 shrink-0 ">
          <h2 className="text-3xl text-black p-5 text-center font-bold ">Contact us</h2>
          <p className="text-black text-[20px] font-bold items-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium, modi accusantium ipsum corporis quia asperiores
            dolorem nisi corrupti eveniet dolores ad maiores repellendus enim
            autem omnis fugiat perspiciatis? Ad, veritatis.
          </p>
        
     </div>
        </div>
      
    </div>
  )
}

export default RoomPage2
