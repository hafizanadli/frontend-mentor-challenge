import React from "react";

import ComputerImg from "../assets/image-computer.png";

const Section2 = () => {
  return (
    <div className='flex flex-col space-y-16'>
      <div className='flex flex-col justify-center items-center space-y-6'>
        <h2>Keep track of your snippets</h2>
        <p className='max-w-2xl'>
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can accessyour snippets immediately on all your devices. Our Mac and
          iOS appswill help you organize everything
        </p>
      </div>
      <div className='flex flex-col md:flex-row items-center space-y-16 md:space-y-0 '>
        <div className='w-full md:w-1/2 transform md:-translate-x-5 '>
          <img src={ComputerImg} alt='computer image' />
        </div>
        <div className='flex flex-col w-full md:w-1/2 pl-0 md:pl-36 space-y-16 '>
          {[
            {
              label: "Quick Search",
              content:
                "Easily search your snippets by content, category, web address,application, and more.",
            },
            {
              label: "iClous Sync",
              content:
                "Instantly saves and syncs snippets accross all your devices.",
            },
            {
              label: "Complete History",
              content:
                "Retrieve any snippetsfrom the first momentyou started using the app.",
            },
          ].map((el, index) => (
            <div key={el.label + index} className='space-y-3'>
              <h3 className='md:text-left'>{el.label}</h3>
              <p className='leading-7 md:text-left w-full md:w-2/3'>{el.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
