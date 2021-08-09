import React, { useRef, useState } from "react";

const Filter = ({ getCountryByRegion, setCountryList, allCountryRef }) => {
  const searchRef = useRef(null);
  const timeoutRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [region, setRegion] = useState(null);

  React.useEffect(() => {
    searchRef.current.addEventListener("keyup", function (e) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(function () {
        e.target.value
          ? setCountryList((prev) =>
              prev.filter((el) =>
                el.name.toLowerCase().includes(e.target.value)
              )
            )
          : setCountryList(allCountryRef.current);
      }, 800);
    });
  }, []);

  return (
    <div className='relative flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-10 lg:space-y-0'>
      <div className='px-4 py-2 bg-element-responsive text-very-dark-blue-txt dark:text-white-app shadow-lg flex rounded-md w-full lg:w-auto'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5 fill-current text-very-dark-blue-txt dark:text-white-app'
          viewBox='0 0 20 20'
        >
          <path
            fillRule='evenodd'
            d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
            clipRule='evenodd'
          />
        </svg>

        <input
          placeholder='Search for a country..'
          type='text'
          ref={searchRef}
          className='pl-5 bg-element-responsive focus:outline-none'
        />
      </div>
      <div className='z-50 relative'>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className='flex justify-between px-4 py-2 bg-element-responsive rounded-md shadow-lg w-52'
          type='button'
        >
          <p>{region ? region : "Filter by Region"}</p>
          <svg
            className='w-5 h-5 ml-2 -mr-1 fill-current text-very-dark-blue-bg dark:text-very-light-gray '
            viewBox='0 0 20 20'
          >
            <path
              fillRule='evenodd'
              d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
              clipRule='evenodd'
            ></path>
          </svg>
        </button>

        <div
          className={`absolute left-0 ${
            isOpen
              ? "opacity-1 visible select-open"
              : "opacity-0 invisible select-close"
          } transition-all duration-300 w-52 select mt-2 divide-y divide-gray-100 rounded-md outline-none bg-element-responsive transform -translate-y-1 shadow-lg`}
          role='menu'
        >
          <div className='px-4 py-2 flex flex-col'>
            {[
              { label: "Africa", value: "africa" },
              { label: "America", value: "americas" },
              { label: "Asia", value: "asia" },
              { label: "Europe", value: "europe" },
              { label: "Oceania", value: "oceania" },
            ].map((el) => (
              <button
                onClick={() => {
                  setRegion(el.label);
                  getCountryByRegion({ regionCode: el.value });
                  setIsOpen(false);
                }}
                key={el.value}
                className='hover:bg-dark-blue/25 rounded-sm'
              >
                <p>{el.label}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>
        {`
        .select{
            transform-origin:0% 0%;
        }
        .select-open{
          transform : rotate3d(0,0,0,0deg);
        }
        .select-close{
    
          transform : rotate3d(1,0,0,-90deg);
        }
}`}
      </style>
    </div>
  );
};

export default Filter;
