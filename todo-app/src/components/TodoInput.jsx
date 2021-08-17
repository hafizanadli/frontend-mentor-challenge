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
    <div className='custom-bg shadow-lg rounded-md px-8 py-5 flex items-center space-x-5'>
      <p className=''>button</p>
      <input
        ref={inputRef}
        className={"focus:outline-none"}
        placeholder='Create a new todo'
      />
    </div>
  );
};

export default TodoInput;
