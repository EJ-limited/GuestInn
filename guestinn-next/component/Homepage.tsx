import { motion } from 'framer-motion'
import React from 'react'
import Button from './Button'

type props = {
  
}
 
function Homepage  ( {}:props) {
 
   


    


  return (
    <section  className='grid h-screen place-items-center' >
     
        {/* Used frame motion for the the transition */}
        <  motion.div className='' 
     initial={{
        x:-500,
       opacity:0,
        scale:0.5 
  
      }}
  
      animate={{
        x: - 0,
        opacity:1,
        scale:1
      }}
  
      transition={{
        duration:1.5,
      }} >

            <h1 className="space-y-3 font-semibold tracking-wide text-5xl lg:text-6xl xl:text-7xl" >
                <span className=" bg-white sm:hidden sm:text-[30px] xl:text-[60px]  bg-clip-text text-transparent  grid  place-items-center " > Welcome To </span>
                <span className="block font-bold md:text-[100px] text-white font-serif " > Nemon Guest inn </span>
                
            </h1>
            <div className=" grid  place-items-center " >
                <Button title="more info" /> 
               
            </div>
        </motion.div>
     
      
   
       
      
    </section>
  )
}

export default Homepage
 