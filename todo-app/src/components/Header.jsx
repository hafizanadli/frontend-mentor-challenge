import React from "react";

const Header = ({ bgHeader }) => {
  return (
    <div
      className='absolute top-0 left-0 w-full bg-cover h-72 md:h-96'
      style={{
        backgroundImage: `url(${bgHeader})`,
      }}
    />
  );
};

export default Header;
