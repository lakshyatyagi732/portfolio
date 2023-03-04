import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import ScaleLoader from 'react-spinners/ScaleLoader'
import { useState, useEffect } from "react";

// import Typed from 'react-typed'


const App = () => {

  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
setLoading(false);
    },2000)
  },[])

  return (
    <>

{
  loading ? <div className="w-[100vw] h-[100vh] flex justify-center align-middle bg-black fixed top-0 left-0">
  <ScaleLoader
  className="my-auto"
    color="#36d7b7"
    height={600}
    width={15}
    margin={15}
  />
  </div>

:

<>
<hr className="w-screen border-4 border-black" />
      <Home />
      <hr className="w-screen border-4 border-black" />
      <About />
      <hr className="w-screen border-4 border-black" />
      <Contact />
      <hr className="w-screen border-4 border-black" />
</>
    
}
</>
          
  );
};

export default App;
