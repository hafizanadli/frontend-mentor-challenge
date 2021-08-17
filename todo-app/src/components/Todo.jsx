import React, { useState } from "react";

import IconMoon from "../assets/icon-moon.svg";
import IconSun from "../assets/icon-sun.svg";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todo = ({ handleDark }) => {
  const [todoList, setTodoList] = useState([]);

  const handleCheck = (itemIdx) => {
    let a = todoList;
    a[itemIdx].status = !a[itemIdx].status;
    setTodoList([...a]);
  };

  const handleRemove = (itemId) => {
    setTodoList((prev) => prev.filter((el) => el.id !== itemId));
  };

  return (
    <div className=' z-50 w-[90vw] max-w-[500px] mx-5 my-20 space-y-10 min-h-[90vh]'>
      <div className='flex justify-between items-center'>
        <h1>TODO</h1>
        <button onClick={handleDark}>
          <img
            src={
              document.documentElement.classList.value === "dark"
                ? IconSun
                : IconMoon
            }
            alt='icon'
            className='transition-transform duration-500'
          />
        </button>
      </div>
      <TodoInput setTodoList={setTodoList} />
      <TodoList
        todoList={todoList}
        handleCheck={handleCheck}
        handleRemove={handleRemove}
      />
    </div>
  );
};

export default Todo;
