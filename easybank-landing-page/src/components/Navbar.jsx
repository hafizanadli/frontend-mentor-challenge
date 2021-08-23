import React from "react";

import Logo from "../assets/logo.svg";

const nav = [
  { title: "Home" },
  { title: "About" },
  { title: "Contact" },
  { title: "Blog" },
  { title: "Career" },
];

const Navbar = () => {
  return (
    <header className='fixed top-0 w-full bg-white z-50 flex justify-between items-center px-5 lg:px-32 py-5 md:py-0'>
      <img src={Logo} alt='easybank logo' className='h-5' />
      <ul className='nav-menu flex-1 justify-center items-center space-x-5 text-grayishBlue hidden md:flex h-20'>
        {nav.map((el, index) => (
          <li className='relative h-full flex flex-col justify-center'>
            <a href='#' className='hover:text-darkBlue peer'>
              {el.title}
            </a>
            <div className='h-1 w-0 peer-hover:w-full bg-red-500 absolute bottom-0 transition-all duration-300 ease-in-out bg-gradient-to-r from-limeGreen  to-brightCyan'></div>
          </li>
        ))}
      </ul>
      <button className='rounded-[1.2rem] bg-gradient-to-r from-limeGreen  to-brightCyan py-3 px-10 text-white hidden md:block hover:opacity-80'>
        Request Invite
      </button>
    </header>
  );
};

export default Navbar;
