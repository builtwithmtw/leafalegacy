import React from "react";

const TextArea = ({
  name,
  placeholder,
  value,
  onChange,
  required = false,
  rows = 4,
}) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      rows={rows}
      className="w-full border border-gray-300 rounded-[16px] px-5 py-4 text-[18px] font-light tracking-wide outline-none focus:ring-2 focus:ring-green-500 transition resize-none"
    />
  );
};

export default TextArea;
