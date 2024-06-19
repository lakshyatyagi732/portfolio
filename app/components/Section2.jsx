"use client"
import React,{useEffect} from 'react'
import wave from '../images/wave.png'
import wave2 from '../images/wave2.png'
import orng2 from "../images/orng2.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section2 = () => {
  useEffect(()=>{
    AOS.init()
  })
  return (
    <div  className='mt-20 w-screen h-[500px] '>
    <img data-aos="fade-up" src={wave.src} />
   <div className='w-screen  h-screen flex justify-around items-center flex-col md:flex-row'>
   <div data-aos="flip-left" className='w-screen md:w-[50vw] h-[400px] border border-[#fd6e01] rounded-lg'>

<h1 className='pt-4 text-center text-4xl font-bold font-mono'>SKILLS</h1>

<ul className='pl-[40%] list-disc flex flex-col justify-center mt-7 text-2xl font-extralight'>
<li>HTML</li>
<li>CSS</li>
<li>JAVASCRIPT</li>
<li>ReactJs</li>
<li>NextJs</li>
<li>MongoDb</li>
<li>Nodejs</li>
<li>ExpressJs</li>
</ul>

</div>

<div data-aos="flip-right" className=''>
    <img  src={orng2.src} width={340} />
</div>
   </div>

    <img  className='mt-20' src={wave2.src} />
    </div>
  )
}

export default Section2