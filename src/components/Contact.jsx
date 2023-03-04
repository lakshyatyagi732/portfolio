import React from "react";
import { SiHackerrank } from "react-icons/si";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { GrMail } from "react-icons/gr";
import Typed from 'react-typed'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Contact = () => {
  return (
    <>
    <h1
data-aos='zoom-in' data-aos-duration='1000' data-aos-delay='400'
     className="text-center pt-10 font-mono font-semibold text-8xl w-screen text-[#F2CD5C]"><Typed
     strings={['', 'CONTACT LINKS']}
     typeSpeed={80}
     backSpeed={80}
     loop={false}
     /></h1>
      <div className="h-screen w-screen flex flex-col items-center justify-center"
      data-aos='zoom-in' data-aos-duration='1000' data-aos-delay='400'
      >

        
        <ul className="list-none flex flex-col bg-[#F2CD5C] rounded-3xl h-[70vh] md:h-[80vh] w-[30vh] md:w-[40vh] justify-center lg:bg-transparent lg:flex-row">
            <hr className="w-2 md:hidden border-2 border-black h-28" />
          <li className=" items-center flex flex-col text-center my-auto  mx-6">
            <SiHackerrank  
            
            className=" w-[10vw] h-[8vh] lg:h-[9vh] "
            size={300} />

            <a className='rounded-3xl lg:text-2xl lg:w-40 bg-black w-96 text-6xl text-white hover:text-sky-500 transition-all duration-500  hover:bg-black hover:rounded-xl hover:px-6'
              target="_blank"
              rel="noreferrer"
              href="https://www.hackerrank.com/lakshyatyagi732"
            >
              HackerRank
            </a>
          </li>

            <hr className="w-2 md:hidden border-2 border-black h-28" />
          <li className=" items-center flex flex-col text-center my-auto  mx-6">
            <AiOutlineLinkedin 


            className=" w-[10vw] h-[8vh] lg:h-[9vh] "
            size={300} />
            <a className='rounded-3xl lg:text-2xl lg:w-40 bg-black w-96 text-6xl text-white hover:text-sky-500 transition-all duration-500  hover:bg-black hover:rounded-xl hover:px-6'
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/lakshyatyagi83/"
            >
              LinkedIn
            </a>
          </li>
            <hr className="w-2 md:hidden border-2 border-black h-28" />
          <li className=" items-center flex flex-col text-center my-auto  mx-6">
            <FaInstagramSquare 


            className=" w-[10vw] h-[8vh] lg:h-[9vh] "
            size={300} />
            <a className='rounded-3xl lg:text-2xl bg-black w-96 lg:w-32 text-6xl text-white hover:text-sky-500 transition-all duration-500  hover:bg-black hover:rounded-xl hover:px-6'
              target="_blank"
              
              rel="noreferrer"
              href="https://www.instagram.com/lakshyatyagi.83/"
            >
              Instagram
            </a>
          </li>

            <hr className="w-2 md:hidden border-2 border-black h-28" />
          <li className=" items-center flex flex-col text-center my-auto  mx-6">
            <VscGithub 


            className=" w-[10vw] h-[8vh] lg:h-[9vh] "
            size={300} />
            <a className='rounded-3xl lg:text-2xl lg:w-40 bg-black w-96 text-6xl text-white hover:text-sky-500 transition-all duration-500  hover:bg-black hover:rounded-xl hover:px-6'
              target="_blank"
              
              rel="noreferrer"
              href="https://github.com/lakshyatyagi732"
            >
              Github
            </a>
          </li>

            <hr className="w-2 md:hidden border-2 border-black h-28" />
          <li className=" items-center flex flex-col text-center my-auto  mx-6">
            <GrMail 


            className=" w-[10vw] h-[8vh] lg:h-[9vh] "
            size={300} />
            <a className='rounded-3xl lg:text-2xl lg:w-40 bg-black w-96 text-6xl text-white hover:text-sky-500 transition-all duration-500  hover:bg-black hover:rounded-xl hover:px-6'
              target="_blank"
              
              rel="noreferrer"
              href="mailto: lakshyatyagi732@gmail.com"
            >
              Send Email
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Contact;
