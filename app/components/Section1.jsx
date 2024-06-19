"use client"

import React, { useEffect } from 'react'
import img1 from '../images/orng.png'
import { ReactTyped } from "react-typed";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const Section1 = () => {


  return (
    <div data-aos="fade-up"  className='mt-12 flex justify-around items-center w-screen h-90vh '>
   <div>
   <img className='border_for_orange' width={340} src={img1.src} />
   </div>

<div className=' w-[600px] h-[400px]'>
<div className='font-semibold'>Hi I am </div>
<div className='font-semibold text-xl text-[#fd6e01]'>Lakshya Tyagi</div>

<div className='text-6xl'>Full Stack <span className='text-[#fd6e01]'>Web</span></div>
<div className='text-7xl pl-[16.7rem] text-[#fd6e01] overflow-hidden select-none'>
    <ReactTyped
       strings={[
        "Designer",
        "Developer",
        "Debugger",
      ]}
      typeSpeed={40}
      backSpeed={50}
      attr="placeholder"
      loop
    >
      <input className='bg-[#252525] placeholder:text-[#fd6e01]' disabled type="text" />
    </ReactTyped></div>

<div className='mt-4 font-mono'> As a full-stack web developer, I have honed my skills in designing, developing, and debugging web applications</div>

<button className='bg-[#fd6e01] px-4 py-2 rounded-md mt-4'>Hire Me</button>

</div>

    </div>
  )
}

export default Section1