import { useCallback } from "react";

const NavigationBar = () => {
  const handleDark = () => {
    if (window.localStorage.getItem("theme") === "light") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header className='bg-element-responsive w-full px-20 py-6 flex justify-between'>
      <h2>Where in the world?</h2>
      <button onClick={handleDark}>
        <p className='font-semibold'>Dark Mode</p>
      </button>
    </header>
  );
};

export default NavigationBar;
