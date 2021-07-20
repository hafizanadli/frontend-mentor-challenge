import React from "react";

import IcList from "../assets/icon-blacklist.svg";
import IcText from "../assets/icon-text.svg";
import IcPreview from "../assets/icon-preview.svg";

const Section4 = () => {
  return (
    <div className='space-y-24'>
      <div className='flex flex-col items-center'>
        <h2>Supercharge your workflow</h2>
        <p className='text-center max-w-2xl mt-6'>
          We've got the tools to boost your productivity.
        </p>
      </div>
      <div className='flex flex-col md:flex-row space-y-10 md:space-y-0 space-x-5 justify-around'>
        <div className='flex flex-col items-center'>
          <img src={IcList} alt='icon create blacklist' className='mb-6' />
          <h3 className='my-3'>Create blacklist</h3>
          <p className='text-base text-center leading-7 max-w-xs'>
            Ensure sensitiveinformation never makes its way to your clipboard by
            excluding certain sources
          </p>
        </div>
        <div className='flex flex-col items-center'>
          <img src={IcList} alt='icon create blacklist' className='mb-6' />
          <h3 className='my-3'>Plain text snippets</h3>
          <p className='text-base text-center leading-7 max-w-xs'>
            Remove unwanted formatting from copied text for a consistent look
          </p>
        </div>
        <div className='flex flex-col items-center'>
          <img src={IcList} alt='icon create blacklist' className='mb-6' />
          <h3 className='my-3'>Sneak preview</h3>
          <p className='text-base text-center leading-7 max-w-xs'>
            Quick preview of all snippets on your Clipboard for easy access
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section4;
