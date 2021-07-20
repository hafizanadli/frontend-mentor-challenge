import React from "react";

import DevicesImg from "../assets/image-devices.png";

const Section3 = () => {
  return (
    <div className='flex flex-col items-center space-y-24'>
      <div className='flex flex-col items-center space-y-8'>
        <h2>Access Clipboard Anywhere</h2>
        <p className='max-w-lg'>
          Wheter you're on the go, or at your computer you can access all your
          Clippboard snippets in a few simple clicks.
        </p>
      </div>
      <div>
        <img src={DevicesImg} alt='devices images' />
      </div>
    </div>
  );
};

export default Section3;
