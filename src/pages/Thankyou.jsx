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

      <div
        className="p-[10px] rounded-[20px]"
        style={{
          background: "linear-gradient(to bottom, #E1BE23, #355C39)",
        }}
      >
        <div
          className="rounded-xl min-h-[631px] text-white py-6 px-6 flex flex-col items-center justify-center gap-10"
          style={{
            backgroundImage: `
        linear-gradient(to bottom, #01010100, #355C39),
        url('/thanks.jpg')
      `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Heading */}
          <img
            src="/logo.png"
            alt="Right Logo"
            className="w-60 md:w-100 mx-auto"
          />

          {/* Thank you text */}
          <div className="text-center space-y-2">
            <p
              className="text-center  leading-[139%] tracking-[3.2px]"
              style={{
                fontSize: "32px",
              }}
            >
              Thank you – a tree will grow in your honoree’s name, a living
              legacy
            </p>
            <p className="text-2xl">
              Your honoree will receive their eCard within 7 days
            </p>
          </div>

          {/* Tree image */}
          <img src="/tree.png" alt="Tree" className="w-[430px]" />
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
