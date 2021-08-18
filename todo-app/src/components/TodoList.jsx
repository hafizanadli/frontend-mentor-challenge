import React from "react";

import CheckIcon from "../assets/icon-check.svg";
import RemoveIcon from "../assets/icon-cross.svg";
import FilterSelector from "./FilterSelector";

const showedList = ({
  showedList,
  handleCheck,
  handleRemove,
  handleClearCompleted,
  setFilter,
  filter,
}) => {
  return (
    <div className='shadow-lg custom-bg rounded-md transition-colors'>
      {showedList.map((el, index) => (
        <div
          key={el.id}
          className='px-6 py-5 flex items-center space-x-5 border-b-[1px] border-gray-300 dark:border-gray-500'
        >
          <div
            onClick={() => handleCheck(el.id)}
            className={`rounded-full bg-gray-300 ${
              el.status
                ? "bg-gradient-to-br from-blue-400 to-purple-500"
                : "bg-gray-300 dark:bg-gray-500"
            } hover:bg-gradient-to-br from-blue-400 to-purple-500 p-0.5 cursor-pointer transition-colors`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                el.status
                  ? "bg-gradient-to-br from-blue-400 to-purple-500"
                  : "custom-bg"
              }`}
            >
              {el.status ? (
                <img src={CheckIcon} alt='check icon' className='w-3 h-3' />
              ) : null}
            </div>
          </div>
          <div
            onClick={() => handleCheck(el.id)}
            className={`flex-1 truncate cursor-pointer ${
              el.status ? "line-through opacity-30" : ""
            }`}
          >
            {el.label}
          </div>
          <div onClick={() => handleRemove(el.id)} className='cursor-pointer'>
            <img src={RemoveIcon} alt='check icon' className='w-5 h-5' />
          </div>
        </div>
      ))}
      <div className='px-6 py-4 flex items-center justify-between'>
        <div className='text-sm'>
          {showedList.filter((el) => el.status === false).length} items left
        </div>
        <div className='flex-1 hidden md:block'>
          <FilterSelector filter={filter} setFilter={setFilter} />
        </div>
        <div
          className='text-sm cursor-pointer hover:text-black dark:hover:text-white'
          onClick={handleClearCompleted}
        >
          Clear Completed
        </div>
      </div>
    </div>
  );
};

export default showedList;
