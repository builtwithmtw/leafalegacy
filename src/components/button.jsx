import React from "react";

const Button = ({ url, text = "", ...rest }) => {
  const buttonStyle = "bg-yellow-400 hover:bg-yellow-300 text-green-600";

  return (
    <a href={url}>
      <button
        {...rest}
        className={` buttonFont pl-[35px] pr-[35px] pt-[15px] pb-[15px] rounded-full font-[public-sans] tracking-[0.25em] ${buttonStyle} transition`}
      >
        {text}
      </button>
    </a>
  );
};

export default Button;
