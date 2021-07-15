import React from "react";

const ButtonTip = ({ value, label, tip, custom, dispatch }) => {
  return (
    <button
      onClick={() => dispatch({ type: "setTip", value: value })}
      className={`hover:bg-strong-cyan hover:bg-opacity-50 hover:text-very-dark-cyan font-bold rounded-md py-2 text-2xl ${
        tip == value && !custom
          ? "bg-strong-cyan text-very-dark-cyan"
          : "bg-very-dark-cyan text-white"
      }`}
    >
      {label}%
    </button>
  );
};

export default ButtonTip;
