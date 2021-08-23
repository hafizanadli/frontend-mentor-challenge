import React from "react";

import Mockup from "../assets/image-mockups.png";
import PatternMobile from "../assets/bg-intro-mobile.svg";
import PatternDesktop from "../assets/bg-intro-desktop.svg";

const Section1 = () => {
  return (
    <div className='bg-veryLightGray lg:min-h-[80vh] flex flex-col-reverse lg:flex-row items-center relative'>
      <div className='px-5 lg:pl-32 space-y-10 py-10 text-center lg:text-left w-full lg:w-[45vw]'>
        <h1 className='w-full '>Next generation digital banking</h1>
        <p className='w-full '>
          Take your financial life online. Your easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button className='rounded-[1.2rem] bg-gradient-to-r from-limeGreen  to-brightCyan py-3 px-10 text-white hover:opacity-80'>
          Request Invite
        </button>
      </div>
      <div
        className='section1 min-h-[30vh] lg:min-h-[80vh] xl:min-h-[85vh] lg:h-full w-full lg:w-[55vw]'
        // style={{
        //   backgroundImage: `url(${PatternMobile})`,
        //   backgroundPositionY: "3rem",
        // }}
      >
        <img
          src={Mockup}
          alt='mockup'
          className='px-5 m-auto lg:absolute lg:top-0 lg:-right-20 lg:w-[62vw] xl:w-[52vw]'
        />
      </div>
    </div>
  );
};

export default Section1;

// url(${MockupBg}) 12rem -1rem no-repeat,
