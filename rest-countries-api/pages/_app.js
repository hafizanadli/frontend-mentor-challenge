import { useEffect } from "react";

import "tailwindcss/tailwind.css";
import NavigationBar from "../components/NavigationBar";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (window !== undefined) {
      if (window.localStorage.getItem("theme") === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <NavigationBar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
