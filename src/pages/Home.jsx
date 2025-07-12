import Button from "../components/button";
import NavLogos from "../components/navLogos";
import "../index.css"; // ✅ Ensure custom class is loaded
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen relative bg-hero">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 md:px-10">
        <NavLogos backButton={false} />
      </div>

      <div className="relative z-10 flex items-center  justify-center h-screen">
        <div className="text-center ">
          <img
            src="/logo.png"
            alt="Right Logo"
            className="w-60 md:w-100  mx-auto"
          />
          <p className="text-white text-[28px] leading-[1.41] tracking-[0.1em] text-center uppercase font-medium  mb-6">
            Plant a tree in someone’s honor
          </p>
          <Button url={"/forests"} text="CHOOSE A FOREST" green />
        </div>
      </div>
    </div>
  );
}

export default Home;
