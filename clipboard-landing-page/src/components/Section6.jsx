import React from "react";

const Section6 = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h2>Clipboard for iOS and Mac OS</h2>
      <p className='text-center max-w-2xl mt-6'>
        Available for free on the App Store. Download for Mac or iOS, sync with
        iCloud and you're ready to start adding to your clipboard.
      </p>
      <div className='flex flex-col md:flex-row w-full md:w-auto space-y-5 md:space-y-0 md:space-x-5 mt-12'>
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

export default Section6;
