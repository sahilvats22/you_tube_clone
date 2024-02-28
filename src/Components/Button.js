import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-5 py-2 m-2 rounded bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 transition-colors duration-300 ease-in-out">
        <span className="text-gray-900">{name}</span>
      </button>
    </div>
  );
};

export default Button;
