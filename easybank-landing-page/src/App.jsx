import React from "react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";

import MockupBg from "./assets/image-mockups.png";
import PatternDesktop from "./assets/bg-intro-desktop.svg";

function App() {
  return (
    <main className='relative'>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
      <div className='flex'>
        <div className='w-10 h-10 bg-darkBlue' />
        <div className='w-10 h-10 bg-limeGreen' />
        <div className='w-10 h-10 bg-brightCyan' />
        <div className='w-10 h-10 bg-white' />
        <div className='w-10 h-10 bg-lightGrayishBlue' />
        <div className='w-10 h-10 bg-grayishBlue' />
        <div className='w-10 h-10 bg-veryLightGray' />
      </div>
    </main>
  );
}

export default App;
