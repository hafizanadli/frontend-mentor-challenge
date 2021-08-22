import React from "react";

import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <header className='fixed top-0 w-full bg-white z-50 flex justify-between items-center py-5 px-5 lg:px-32'>
      <img src={Logo} alt='easybank logo' className='h-5' />
      <ul className='nav-menu flex-1 justify-center items-center space-x-5 text-grayishBlue hidden md:flex'>
        <li>
          <a href=''>Home</a>
        </li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Career</li>
      </ul>
      <button className='rounded-[1.2rem] bg-gradient-to-r from-limeGreen  to-brightCyan py-3 px-10 text-white hidden md:block'>
        Request Invite
      </button>
    </header>
  );
};

export default Navbar;
