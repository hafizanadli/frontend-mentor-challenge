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
    <header className='bg-element-responsive w-full px-20 py-6 flex justify-between shadow-md'>
      <h2>Where in the world?</h2>
      <button onClick={handleDark} className='flex items-center space-x-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5 fill-current text-very-dark-blue-txt dark:text-white-app'
          viewBox='0 0 20 20'
        >
          <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
        </svg>
        <p className='font-semibold mt-1'>Dark Mode</p>
      </button>
    </header>
  );
};

export default NavigationBar;
