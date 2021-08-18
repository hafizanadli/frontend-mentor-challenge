import React, { useState, useEffect } from "react";

import IconMoon from "../assets/icon-moon.svg";
import IconSun from "../assets/icon-sun.svg";
import FilterSelector from "./FilterSelector";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todo = ({ handleDark }) => {
  const [todoList, setTodoList] = useState([]);
  const [showedList, setShowedList] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (filter === "all") {
      setShowedList(todoList);
    } else if (filter === "active") {
      let filteredArray = todoList.filter((el) => el.status === false);
      setShowedList(filteredArray);
    } else {
      let filteredArray = todoList.filter((el) => el.status === true);
      setShowedList(filteredArray);
    }
  }, [filter, todoList]);

  const handleCheck = (itemId) => {
    let selectedItemIndex = todoList.findIndex((el) => el.id === itemId);
    let currentList = todoList;
    currentList[selectedItemIndex].status =
      !currentList[selectedItemIndex].status;
    setTodoList([...currentList]);
  };

  const handleRemove = (itemId) => {
    setTodoList((prev) => prev.filter((el) => el.id !== itemId));
  };

  const handleClearCompleted = () => {
    let filteredArray = todoList.filter((el) => el.status === false);
    setTodoList(filteredArray);
  };

  return (
    <div className=' z-50 w-[90vw] max-w-[500px] mx-5 my-20 space-y-6 min-h-[90vh]'>
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
        showedList={showedList}
        handleCheck={handleCheck}
        handleRemove={handleRemove}
        handleClearCompleted={handleClearCompleted}
        setFilter={setFilter}
        filter={filter}
      />
      <div className='shadow-lg custom-bg rounded-md px-6 py-4 block md:hidden transition-colors'>
        <FilterSelector setFilter={setFilter} filter={filter} />
      </div>
    </div>
  );
};

export default Todo;
