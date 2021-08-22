import React from "react";

import IcOnline from "../assets/icon-online.svg";
import IcBudgeting from "../assets/icon-budgeting.svg";
import IcOnboarding from "../assets/icon-onboarding.svg";
import IcApi from "../assets/icon-api.svg";

const Section2 = () => {
  const list = [
    {
      title: "Online Banking",
      desc: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
      icon: IcOnline,
    },
    {
      title: "Simple Budgeting",
      desc: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
      icon: IcBudgeting,
    },
    {
      title: "Fast Onboarding",
      desc: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
      icon: IcOnboarding,
    },
    {
      title: "Open API",
      desc: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
      icon: IcApi,
    },
  ];
  return (
    <div className='px-5 lg:px-32 py-10 lg:py-20 bg-lightGrayishBlue space-y-10'>
      <section className='text-center md:text-left space-y-8'>
        <h2>Why choose Easybank?</h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </section>
      <section className='flex flex-col md:flex-row space-y-8 md:space-y-0 space-x-0 md:space-x-10'>
        {list.map((el, index) => (
          <div
            className='space-y-5 flex flex-col items-center md:items-start text-center md:text-left'
            key={index}
          >
            <img src={el.icon} alt='icon' />
            <h3>{el.title}</h3>
            <p>{el.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Section2;
