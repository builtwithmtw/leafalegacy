import React from 'react';
import AwardComponent from '../components/awardComponent';
import '../index.css';

const ThankYouPage = () => {
  return (
    <div className='bg-white min-h-screen p-10'>
      <div className=" rounded-xl min-h-[732px] bg-[#355C39] text-white py-12 px-6 flex flex-col items-center justify-center gap-10">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-center forro-bold">
        Leaf a Legacy
      </h1>

      {/* Award Component */}
      <AwardComponent />

      {/* Thank you text */}
      <div className="text-center space-y-2">
        <p className="text-xl font-semibold ">Thank you</p>
        <p className="text-sm md:text-base font-[22px]">
          Your honoree will receive their eCard within 7 days
        </p>
      </div>

      {/* Tree image */}
      <img
        src="/tree.png"
        alt="Tree"
        className="w-[430px]   "
      />

      {/* Button */}
       <button className="mt-4 bg-[#E1BE23]  text-white  px-6 py-2 rounded-full font-semibold tracking-wide hover:bg-yellow-400 transition">
            PLANT A TREE
          </button>
    </div>
    </div>
  );
};

export default ThankYouPage;