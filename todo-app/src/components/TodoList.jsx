import React from "react";

import CheckIcon from "../assets/icon-check.svg";
import RemoveIcon from "../assets/icon-cross.svg";

const TodoList = ({ todoList, handleCheck, handleRemove }) => {
  return (
    <div className='shadow-lg bg-white'>
      {todoList.map((el, index) => (
        <div
          key={el.id}
          className='px-6 py-5 flex items-center space-x-5 border-b-2'
        >
          <div
            onClick={() => handleCheck(index)}
            className={`rounded-full bg-gray-300 ${
              el.status
                ? "bg-gradient-to-br from-blue-400 to-purple-500"
                : "bg-gray-300"
            } hover:bg-gradient-to-br from-blue-400 to-purple-500 p-0.5 cursor-pointer`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                el.status
                  ? "bg-gradient-to-br from-blue-400 to-purple-500"
                  : "bg-white"
              }`}
            >
              <img src={CheckIcon} alt='check icon' className='w-3 h-3' />
            </div>
          </div>
          <div
            onClick={() => handleCheck(index)}
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
    </div>
  );
};

export default TodoList;
