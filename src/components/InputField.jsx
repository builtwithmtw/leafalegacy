import React from "react";

const InputField = ({
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full border  border-gray-300 rounded-[16px] px-5 py-4 text-[18px]  font-light tracking-wide outline-none focus:ring-2 focus:ring-green-500 transition"
    />
  );
};

export default InputField;
