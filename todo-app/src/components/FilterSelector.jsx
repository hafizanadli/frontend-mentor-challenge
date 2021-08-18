import React from "react";

const FilterSelector = ({ filter, setFilter }) => {
  return (
    <div className='flex justify-center items-center space-x-2'>
      <div className=' cursor-pointer' onClick={() => setFilter("all")}>
        <p
          className={`hover:text-black dark:hover:text-white ${
            filter === "all" ? "text-brightBlue" : ""
          }`}
        >
          All
        </p>
      </div>
      <div
        className='hover:text-black dark:hover:text-white cursor-pointer'
        onClick={() => setFilter("active")}
      >
        <p
          className={`hover:text-black dark:hover:text-white ${
            filter === "active" ? "text-brightBlue" : ""
          }`}
        >
          Active
        </p>
      </div>
      <div
        className='hover:text-black dark:hover:text-white cursor-pointer'
        onClick={() => setFilter("completed")}
      >
        <p
          className={`hover:text-black dark:hover:text-white ${
            filter === "completed" ? "text-brightBlue" : ""
          }`}
        >
          Completed
        </p>
      </div>
    </div>
  );
};

export default FilterSelector;
