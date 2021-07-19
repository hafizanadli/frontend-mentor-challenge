import React, { useState } from "react";

import Footer from "./components/Footer";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

import Test from "./assets/bg-header-desktop.png";

function App() {
  return (
    <div className='flex flex-col items-center bg-no-repeat bg-header-pattern bg-contain'>
      <div className='max-w-7xl mx-5'>
        <Section1 />
        <Section2 />
        <p className='h-32'>ds</p>
        <p className='h-32'>ds</p>
        <p className='h-32'>ds</p>
        <p className='h-32'>ds</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
