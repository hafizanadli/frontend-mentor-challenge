import React from "react";

const ItemButton = ({ func, iconSrc, iconAlt, fill, position }) => {
  return (
    <button
      onClick={func}
      className={`flex items-center justify-center absolute w-1/3 h-1/3 lg:w-1/2 lg:h-1/2 rounded-full bg-gradient-to-b ${fill} ${position}`}
    >
      <div className='flex items-center justify-center w-3/4 h-3/4 rounded-full bg-white border-t-6 border-gray-300'>
        <img src={iconSrc} alt={iconAlt} className='h-1/2' />
      </div>
    </button>
  );
};

export default ItemButton;
