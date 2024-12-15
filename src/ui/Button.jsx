import React from "react";

const Button = ({ children, size, openModal, type = "noclick" }) => {
  return (
    <button
      className={`bg-btn-bg py-1 text-center text-white text-[14px] border border-text-color rounded-sm outline-none  focus:outline-none hover:bg-white
         hover:text-text-color  transition-all duration-150 
        `}
      style={{ width: `${size}px` }}
      onClick={() => {
        type == "click" && openModal();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
