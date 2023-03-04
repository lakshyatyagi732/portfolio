import React from "react";
import Typed from "react-typed";
import laksh from "../images/lakshya.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const About = () => {
  return (
    <>

<h1
data-aos='fade-down' data-aos-duration='1000' data-aos-delay='400'
     className="text-center pt-10 font-mono font-semibold text-8xl w-screen text-[#AEE2FF]">
      
      <Typed
     strings={['', 'ABOUT ME']}
     typeSpeed={120}
     backSpeed={120}
     loop={false}
     />
     
     
     </h1>
      <div
        data-aos="fade-down"
        data-aos-duration="900"
        data-aos-delay="400"
        className="h-screen w-screen flex items-center justify-around flex-wrap-reverse md:justify-between md:items-center"
      >
        <div className="flex flex-col justify-between items-center">
        <img
            src={laksh}
            alt=""
            className="rounded-full border-indigo-800 border-8 h-[60vw] sm:h-[40vw] md:h-[40vw] lg:h-[40vw] xl:h-[20vw] 2xl:h-[20vw]"
          />

          <h1 className="font-bold text-7xl w-[90vw] text-center my-9 font-mono">
            I am {" "}
            <Typed
              strings={[" Lakshya Tyagi", " Web Developer", " CS undergrad"]}
              className="text-amber-500"
              typeSpeed={90}
              backSpeed={90}
              backDelay={20}
              loop
            />
          </h1>

          <p className="font-bold text-4xl font-serif text-center text-white w-[70vw] ml-10 pt-10 my-9 xl:my-0">
            Hello, I'm Lakshya Tyagi, a full stack web developer building
            dynamic and responsive web applications. I'm passionate using my
            skills to create seamless digital experiences that solve real-world
            problems and improve people's lives.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
