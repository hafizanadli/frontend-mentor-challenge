import React, { useState } from "react";

import Footer from "./components/Footer";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";

function App() {
  return (
    <div className='flex flex-col bg-no-repeat bg-header-pattern bg-contain'>
      {/* <div className='max-w-7xl mx-5 space-y-36 my-36'> */}
      <div className='space-y-36 my-36 mx-5 md:mx-0 '>
        <Section1 />
        <Section2 />
        <Section4 />
        <Section5 />
        <Section6 />
      </div>
      <Footer />
    </div>
  );
}

export default App;
