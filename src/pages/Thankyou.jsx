import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AwardComponent from "../components/awardComponent";
import "../index.css";

const ThankYouPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000); // 30 seconds

    return () => clearTimeout(timer); // Cleanup if component unmounts early
  }, [navigate]);

  return (
    <div className="bg-white min-h-screen p-10">
      <div className="grid grid-cols-2 items-center">
        {/* Left logo */}
        <Link to="/">
          <img
            src="/logo1.png"
            alt="Left Logo"
            className="w-32 md:w-40 lg:w-48"
          />
        </Link>

        {/* Right logo */}
        <div className="flex justify-end">
          <img
            src="/logo2.png"
            alt="Right Logo"
            className="w-32 md:w-40 lg:w-48"
          />
        </div>
      </div>

      <div className="rounded-xl min-h-[732px] bg-[#355C39] text-white py-12 px-6 flex flex-col items-center justify-center gap-10">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-center forro-bold">
          Leaf a Legacy
        </h1>

        {/* Thank you text */}
        <div className="text-center space-y-2">
          <p className="text-xl font-[32px]">
            All done! Thank you for planting a tree!
          </p>
          <p className="text-sm md:text-base font-[22px]">
            Your honoree will receive their eCard within 7 days
          </p>
        </div>

        {/* Tree image */}
        <img src="/tree.png" alt="Tree" className="w-[430px]" />
      </div>
    </div>
  );
};

export default ThankYouPage;
