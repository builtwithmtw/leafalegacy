import React from 'react';

const AwardComponent = () => {
  return (
    <div className="w-[570px] h-[91px] rounded-xl bg-white/85 flex items-center justify-between px-4 shadow-md">
      {/* Left Logo */}
      <img
        src="/logo1.png"
        alt="Logo 1"
        className="h-[60px] w-auto object-contain"
      />

      {/* Right Logo */}
      <img
        src="/logo2.png"
        alt="Logo 2"
        className="h-[60px] w-auto object-contain"
      />
    </div>
  );
};

export default AwardComponent;