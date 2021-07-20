import React from "react";

import GoogleLogo from "../assets/logo-google.png";
import IbmLogo from "../assets/logo-ibm.png";
import MicrosoftLogo from "../assets/logo-microsoft.png";
import HpLogo from "../assets/logo-hp.png";
import VectorLogo from "../assets/logo-vector-graphics.png";

const Section5 = () => {
  return (
    <div className='flex justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-16'>
        <img src={GoogleLogo} alt='Google Logo' />
        <img src={IbmLogo} alt='Ibm Logo' />
        <img src={MicrosoftLogo} alt='Microsoft Logo' />
        <img src={HpLogo} alt='Hp Logo' />
        <img src={VectorLogo} alt='Vector Logo' />
      </div>
    </div>
  );
};

export default Section5;
