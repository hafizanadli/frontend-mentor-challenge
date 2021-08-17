import React from "react";

const TodoList = ({ todoList }) => {
  return (
    <div className='shadow-lg'>
      {todoList.map((el, index) => (
        <div key={el.id}>
          <p>{el.label}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
