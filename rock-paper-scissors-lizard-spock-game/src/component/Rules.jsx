import React from "react";

import IcClose from "../assets/icon-close.svg";
import IcRules from "../assets/image-rules-bonus.svg";

const Rules = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <div className='fixed bottom-10 right-1/2 lg:right-10 transform translate-x-1/2 lg:translate-x-0'>
        <button
          onClick={() => setOpen(true)}
          className='text-white border lg:border-2 border-white rounded-lg p-3 font-semibold w-32 lg:w-40 text-sm lg:text-xl tracking-widest'
        >
          RULES
        </button>
      </div>
      {open && (
        <div>
          <div className='fixed bg-black w-screen h-screen top-0 left-0 bg-opacity-60 hidden lg:block' />
          <div className='fixed flex flex-col items-center justify-around bg-white w-screen h-screen lg:w-auto lg:h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg p-10 space-y-5 z-60'>
            <div className='flex justify-center lg:justify-between w-full'>
              <p className='text-2xl font-semibold text-screen-1'>RULES</p>
              <button
                onClick={() => setOpen(false)}
                className='hidden lg:block'
              >
                <img src={IcClose} alt='close button' />
              </button>
            </div>
            <img src={IcRules} alt='rules' />
            <button onClick={() => setOpen(false)} className='block lg:hidden'>
              <img src={IcClose} alt='close button' />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rules;
