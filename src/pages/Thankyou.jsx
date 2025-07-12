import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import NavLogos from "../components/navLogos";

const ThankYouPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 10000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-white h-screen px-10 py-10">
      <div className="grid grid-cols-2 items-center">
        {/* Left logo */}
        <NavLogos />
      </div>

      <div
        className="p-[10px] rounded-[20px]"
        style={{
          background: "linear-gradient(to bottom, #E1BE23, #355C39)",
        }}
      >
        <div
          className="rounded-xl min-h-[300px] text-white pt-3 px-3 flex flex-col items-center justify-center gap-2"
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
            className="w-60 md:w-60 mx-auto"
          />

          {/* Thank you text */}
          <div className="text-center space-y-1 flex flex-col gap-0.5">
            <span
              className="text-center  leading-[139%] tracking-[3.2px] w-[800px]"
              style={{ fontSize: "32px" }}
            >
              Thank you!
            </span>
            <span
              className="text-center  leading-[139%] tracking-[3.2px] w-[800px]"
              style={{ fontSize: "32px" }}
            >
              A tree will grow in your honoree’s name.
            </span>
            <span
              className="text-center  leading-[139%] tracking-[3.2px] w-[800px]"
              style={{
                fontSize: "32px",
              }}
            >
              A living legacy.
            </span>
            <p className="text-2xl">
              Your honoree will receive their eCard within 7 days.
            </p>
          </div>

          {/* Tree image */}
          <img src="/tree.png" alt="Tree" className="w-[200px] mt-5 " />
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
