"use client"
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2"
import { useEffect } from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

export default function Home() {
  // useEffect(()=>{
  //   AOS.init()
  // })
  return (
   <>
    <Header />
    <Section1 />
    <Section2 />
   </>
  );
}
