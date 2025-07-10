import React from "react";

const Button = ({ url, green, text = "", ...rest }) => {
  const buttonStyle = green
    ? "bg-green-700 hover:bg-green-800"
    : "bg-yellow-500 hover:bg-yellow-600";

  return (
    <a href={url}>
      <button
        {...rest}
        className={`text-white buttonFont pl-[35px] pr-[35px] pt-[15px] pb-[15px] rounded-full font-[public-sans] tracking-[0.25em] ${buttonStyle} transition`}
      >
        {text}
      </button>
    </a>
  );
};

export default Button;
