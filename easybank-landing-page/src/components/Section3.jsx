import React from "react";

import ImgCurrency from "../assets/image-currency.jpg";
import ImgConfetti from "../assets/image-confetti.jpg";
import ImgRestaurant from "../assets/image-restaurant.jpg";
import ImgPlane from "../assets/image-plane.jpg";

const Section3 = () => {
  const list = [
    {
      title: "Receive money with any currency with no fees",
      desc: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
      img: ImgCurrency,
      writer: "Claire Robinson",
    },
    {
      title: "Treat yourself without worrying about money",
      desc: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
      img: ImgRestaurant,
      writer: "Wildon Hutton",
    },
    {
      title: "Fast Onboarding",
      desc: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
      img: ImgPlane,
      writer: "Claire Robinson",
    },
    {
      title: "Open API",
      desc: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
      img: ImgConfetti,
      writer: "Claire Robinson",
    },
  ];
  return (
    <div className='px-5 lg:px-32 py-10 lg:py-20 bg-veryLightGray space-y-10 md:space-y-20'>
      <h2>Latest Articles</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
        {list.map((el, index) => (
          <div key={index} className='bg-white rounded-lg'>
            <div
              className='w-full h-52 bg-no-repeat bg-cover rounded-t-lg'
              style={{ backgroundImage: `url(${el.img})` }}
            />
            <div className='p-5 space-y-3'>
              <p className='text-xs'>{el.writer}</p>
              <h4>{el.title}</h4>
              <p className='text-sm'>{el.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
