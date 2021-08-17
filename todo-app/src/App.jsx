import React, { useState, useEffect } from "react";

import bgDesktopDark from "./assets/bg-desktop-dark.jpg";
import bgDesktopLight from "./assets/bg-desktop-light.jpg";
import Header from "./components/Header";
import Todo from "./components/Todo";

function App() {
  const [bgHeader, setBgHeader] = useState(
    window.localStorage.getItem("theme") === "dark"
      ? bgDesktopDark
      : bgDesktopLight
  );

  useEffect(() => {
    if (window.localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "hsl(235, 21%, 11%)";
      setBgHeader(bgDesktopDark);
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "hsl(0, 0%, 98%)";
      setBgHeader(bgDesktopLight);
    }
  }, []);

  const handleDark = () => {
    if (window.localStorage.getItem("theme") === "light") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "hsl(235, 21%, 11%)";
      setBgHeader(bgDesktopDark);
    } else {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "hsl(0, 0%, 98%)";
      setBgHeader(bgDesktopLight);
    }
  };

  return (
    <div className='relative min-h-screen flex justify-center items-center'>
      <Header bgHeader={bgHeader} />
      <Todo handleDark={handleDark} />
    </div>
  );
}

export default App;
