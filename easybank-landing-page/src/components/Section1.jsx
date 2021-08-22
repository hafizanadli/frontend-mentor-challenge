import React from "react";

import Mockup from "../assets/image-mockups.png";
import PatternMobile from "../assets/bg-intro-mobile.svg";
import PatternDesktop from "../assets/bg-intro-desktop.svg";

const Section1 = () => {
  return (
    <div className='bg-veryLightGray md:min-h-screen flex flex-col-reverse md:flex-row items-center'>
      <div className='bg-blue-500 px-5 lg:pl-32 space-y-10 py-10 text-center md:text-left'>
        <h1 className='w-full '>Next generation digital banking</h1>
        <p className='w-full '>
          Take your financial life online. Your easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button className='rounded-[1.2rem] bg-gradient-to-r from-limeGreen  to-brightCyan py-3 px-10 text-white'>
          Request Invite
        </button>
      </div>
      <div
        className='bg-red-500 min-h-[30vh] w-full bg-no-repeat bg-cover'
        style={{
          backgroundImage: `url(${PatternMobile})`,
          backgroundPositionY: "3rem",
        }}
      >
        <img src={Mockup} alt='mockup' className='px-5' />
      </div>
    </div>
  );
};

export default Section1;

// url(${MockupBg}) 12rem -1rem no-repeat,
