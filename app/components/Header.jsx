"use client"
import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {

  const [mob, setMob] = useState(false)

  useEffect(()=>{
    AOS.init({
      duration: 900
    })
  })
  return (
   

<>
<div data-aos="zoom-in" className='bg-[#252525] text-gray-50  items-center justify-around mt-5 hidden sm:flex w-screen m-0'>
    {/* DIV FOR LOGO */}
    <div>
<h1 className='font-bold text-3xl'>LAKSHYA</h1>
</div>
    {/*  */}

   {/* DIV FOR MENU */}
   <div>
<ul className='flex space-x-5'>
    <li>Home</li>
    <li>About</li>
    <li>Projects</li>
    <li>Contact</li>


</ul>
</div>
   {/*  */}

   {/* DIV FOR DOWNLOAD CV */}
   <div>
<button className='bg-[#fd6e01] px-4 py-2 rounded-md'>DOWNLOAD CV</button>

</div>
   {/*  */}
    </div>
  <div className='w-screen flex justify-around items-center sm:hidden '>
    <div>
      <button  onClick={()=>{
  setMob(true)
}} className='font-serif rotate-90 '>|||</button>
    </div>

    <div>
      <span>LAKSHYA</span>
    </div>

    <div>
      <button className='bg-[#fd6e01] px-4 py-1 rounded-md'>CV</button>
    </div>
  </div>
  {
    mob && (
      <SubHeader mob={mob} setMob={setMob} /> 
    )
  }
</>
  )
}

export default Header


const SubHeader = (props)=>{
  return(
    <>
<div className='w-screen h-screen bg-orange-500 fixed top-0 left-0 z-[99]'>
<button className='text-gray-50 font-bold text-4xl' onClick={()=>{
  props.setMob(false)
}}>X</button>

<span>HEADER COMING SOON!!</span>
</div>
    </>
  )
}