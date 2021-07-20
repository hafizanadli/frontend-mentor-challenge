import React from "react";

import IcLogo from "../assets/logo.svg";

const Section1 = () => {
  return (
    <div className='flex flex-col justify-center items-center space-y-12'>
      <img src={IcLogo} alt='logo' className='my-3' />
      <div className='space-y-6  flex flex-col items-center'>
        <h1>A history of everything you copy</h1>
        <p className='text-base md:text-lg font-semibold max-w-2xl'>
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your device
        </p>
      </div>
      <div className='flex flex-col md:flex-row w-full md:w-auto space-y-5 md:space-y-0 md:space-x-5 '>
        <button className='bg-strong-cyan text-white font-semibold py-3 px-5 rounded-3xl shadow-cyan'>
          Download for iOS
        </button>
        <button className='bg-light-blue text-white font-semibold py-3 px-5 rounded-3xl shadow-blue'>
          Download for Mac
        </button>
      </div>
    </div>
  );
};

export default Section1;
