import React from "react";
import MemoIconFacebook from "../assets/IconFacebook";
import MemoIconTwitter from "../assets/IconTwitter";
import MemoIconInstagram from "../assets/IconInstagram";

import IcLogo from "../assets/logo.svg";

const Footer = () => {
  return (
    <div className='flex flex-col items-center w-full bg-grayish-blue bg-opacity-10 '>
      <div className='max-w-7xl flex flex-col md:flex-row items-center justify-around w-full px-5 my-10 space-y-10 md:space-y-0'>
        <div className='w-full flex justify-center md:justify-start md:w-1/6'>
          <img src={IcLogo} alt='Logo' className='w-14 md:w-16' />
        </div>
        <div className='w-full md:w-4/6 '>
          <div className='text-center md:text-left grid grid-rows-none md:grid-rows-2 grid-cols-1 md:grid-cols-none grid-flow-row md:grid-flow-col gap-4 w-full md:w-3/4'>
            <p className='text-lg text-dark-grayish hover:text-strong-cyan font-semibold'>
              FAQs
            </p>
            <p className='text-lg text-dark-grayish hover:text-strong-cyan font-semibold'>
              Contact Us
            </p>
            <p className='text-lg text-dark-grayish hover:text-strong-cyan font-semibold'>
              Privacy Policy
            </p>
            <p className='text-lg text-dark-grayish hover:text-strong-cyan font-semibold'>
              Press Kit
            </p>
            <p className='text-lg text-dark-grayish hover:text-strong-cyan font-semibold'>
              Install Guide
            </p>
          </div>
        </div>
        <div className='w-full md:w-1/6 flex justify-center md:justify-end space-x-5'>
          <MemoIconFacebook className='fill-current text-dark-grayish hover:text-strong-cyan' />
          <MemoIconTwitter className='fill-current text-dark-grayish hover:text-strong-cyan' />
          <MemoIconInstagram className='fill-current text-dark-grayish hover:text-strong-cyan' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
