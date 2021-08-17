import React, { useRef, useEffect } from "react";
import { nanoid } from "nanoid";

const TodoInput = ({ setTodoList }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        setTodoList((prev) => [
          ...prev,
          { id: nanoid(), label: inputRef.current.value, status: false },
        ]);
        inputRef.current.value = null;
      }
    });
  }, []);

  return (
    <div className='custom-bg shadow-lg rounded-md px-6 py-5 flex items-center space-x-5'>
      <div className='w-9 h-9 border-2 border-gray-300 rounded-full' />
      <input
        ref={inputRef}
        className={"focus:outline-none"}
        placeholder='Create a new todo'
      />
    </div>
  );
};

export default TodoInput;
