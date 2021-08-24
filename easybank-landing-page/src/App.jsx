import React, { useState } from "react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className='relative'>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
      <div
        className={`absolute bg-gradient-to-b from-black  to-white ${
          isOpen ? "opacity-75 w-full" : "opacity-0 w-0"
        }  h-full top-0 transition duration-300 ease-in-out`}
        onClick={() => setIsOpen(false)}
      />
    </main>
  );
}

export default App;
