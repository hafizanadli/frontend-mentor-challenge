import React from "react";

import { AppContext } from "../context/AppContext";

import IcLogo from "../assets/logo-bonus.svg";

const Header = () => {
  const { score } = React.useContext(AppContext);
  return (
    <div className='border-2 lg:border-4 border-header-outline rounded-md lg:rounded-2xl p-3 lg:py-6 lg:px-8 flex items-center justify-between w-full lg:w-1/2 '>
      <div>
        <img src={IcLogo} className='h-16 lg:h-full' />
      </div>
      <div className='bg-white rounded-md lg:rounded-lg text-center py-2 lg:py-5 w-1/3 h-full'>
        <p className='text-xs lg:text-lg text-score-text font-medium'>SCORE</p>
        <p className='text-4xl lg:text-7xl text-dark-text font-semibold'>
          {score}
        </p>
      </div>
    </div>
  );
};

export default Header;
