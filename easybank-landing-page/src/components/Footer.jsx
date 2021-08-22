import React from "react";

import Logo from "../assets/logo-white.svg";

import IcFacebook from "../assets/icon-facebook.svg";
import IcTwitter from "../assets/icon-twitter.svg";
import IcYoutube from "../assets/icon-youtube.svg";
import IcPinterest from "../assets/icon-pinterest.svg";
import IcInstagram from "../assets/icon-instagram.svg";

const Footer = () => {
  return (
    <footer id='footer' className='px-5 lg:px-32 py-10 lg:py-20 bg-darkBlue'>
      <div className='flex flex-col md:flex-row justify-between space-y-2 md:space-y-0'>
        <div className='flex flex-col md:flex-row space-x-0 md:space-x-20 space-y-2 md:space-y-0'>
          <div className='flex flex-col justify-between space-y-2'>
            <img
              src={Logo}
              alt='easybank logo'
              className='h-6 self-center md:self-auto'
            />
            <div className='flex self-center md:self-auto space-x-3'>
              <a href='#'>
                <img
                  src={IcFacebook}
                  alt='facebook logo'
                  className='h-5 self-center md:self-auto'
                />
              </a>
              <a href='#'>
                <img
                  src={IcYoutube}
                  alt='youtube logo'
                  className='h-5 self-center md:self-auto'
                />
              </a>
              <a href='#'>
                <img
                  src={IcTwitter}
                  alt='twitter logo'
                  className='h-5 self-center md:self-auto'
                />
              </a>
              <a href='#'>
                <img
                  src={IcPinterest}
                  alt='pinterest logo'
                  className='h-5 self-center md:self-auto'
                />
              </a>
              <a href='#'>
                <img
                  src={IcInstagram}
                  alt='instagram logo'
                  className='h-5 self-center md:self-auto'
                />
              </a>
            </div>
          </div>
          <ul className='space-y-2 text-sm text-veryLightGray text-center md:text-left'>
            <li>
              <a href='#'>About Us</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
            <li>
              <a href='#'>Blog</a>
            </li>
          </ul>
          <ul className='space-y-2 text-sm text-veryLightGray text-center md:text-left'>
            <li>
              <a href='#'>Careers</a>
            </li>
            <li>
              <a href='#'>Support</a>
            </li>
            <li>
              <a href='#'>Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div className='flex flex-col items-center md:items-end justify-between space-y-2'>
          <button className='rounded-[1.2rem] bg-gradient-to-r from-limeGreen  to-brightCyan py-3 px-6 text-white text-sm'>
            Request Invite
          </button>
          <p className='text-sm'>Easybank. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
