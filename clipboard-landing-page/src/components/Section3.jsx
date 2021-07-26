import React from "react";

import DevicesImg from "../assets/image-devices.png";

const Section3 = () => {
  const elementRef = React.useRef(null);
  const [isAnimate, setIsAnimate] = React.useState(false);
  const [opacity, setOpacity] = React.useState(0);
  const [translate, setTranslate] = React.useState(32);

  const setAnimation = React.useCallback(() => {
    if (elementRef.current) {
      if (elementRef.current.getBoundingClientRect().y < window.innerHeight) {
        setTimeout(() => {
          setOpacity(100);
          setTranslate(0);
          setIsAnimate(true);
        }, 500);
      }
    }
  }, []);

  React.useEffect(() => {
    document.addEventListener("scroll", setAnimation);
    if (isAnimate === true) {
      document.removeEventListener("scroll", setAnimation);
    }
  }, [isAnimate]);

  return (
    <div
      ref={elementRef}
      className={`flex flex-col items-center space-y-24  transition duration-1000 ease-in-out opacity-${opacity} transform translate-y-${translate}`}
    >
      <div className='flex flex-col items-center space-y-8'>
        <h2>Access Clipboard Anywhere</h2>
        <p className='max-w-lg'>
          Wheter you're on the go, or at your computer you can access all your
          Clippboard snippets in a few simple clicks.
        </p>
      </div>
      <div>
        <img src={DevicesImg} alt='devices images' />
      </div>
    </div>
  );
};

export default Section3;
