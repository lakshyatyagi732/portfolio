import React from "react";
import { MdMouse } from "react-icons/md";
import Typed from "react-typed";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Home = () => {
  return (
    <>

    <div className="font-serif flex items-center justify-center text-8xl m-auto w-screen">
      <span className="text-9xl text-amber-500">L</span>akshya <span className="text-8xl text-amber-500">T</span>yagi
    </div>
      <div
        data-aos="fade-down"
        data-aos-duration="900"
        className="main h-screen w-screen flex flex-col justify-center items-center mb-10"
      >
        <h1 className="text-[65px] h-48 text-slate-900 font-bold font-mono w-[100vw] text-center">
          SCROLL TO{" "}
          <Typed
            className="text-amber-500"
            strings={["VIEW", "EXPLORE", "KNOW"]}
            typeSpeed={90}
            backSpeed={90}
            loop
          />{" "}
          MORE
        </h1>
        <MdMouse 
        size={500} 
        className="mt-28 h-[20vh]" />
      </div>
    </>
  );
};

export default Home;
