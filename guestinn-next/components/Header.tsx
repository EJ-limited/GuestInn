
import { useState } from 'react';
import Button from './Button';





 export function Header() {

  let Links =[
    {name:"HOME",link:"/"},
    {name:"SERVICE",link:"/"},
    {name:"ABOUT",link:"/"},
    {name:"BLOG'S",link:"/"},
    {name:"CONTACT",link:"/"},
  ];
  let [open,setOpen]= useState(false);

  return (

    <div className='shadow-md w-full fixed top-0 left-0'>
    <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
    <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    text-gray-800'>
      <span className='text-3xl text-indigo-600 mr-1 pt-2'>
    
      </span>
      Nemon Guest Inn
    </div>
    
    <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      
      
      <div className={open ? 'close':'menu'}  >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
</svg></div> 
      
      
    </div>

    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] 
    left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-10 ':'top-[-490px]'}`}>
      {
        Links.map((link)=>(
          <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
            <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
          </li>
        ))
      }
      <div className='md:hidden' ><Button title='Get started' /></div>
      
    </ul>

    <div className='  ' >
    <Button title='Get started' />
    </div>
    </div>
  </div>
  
  );
    }
    
