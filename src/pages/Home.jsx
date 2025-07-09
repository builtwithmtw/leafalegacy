import "../index.css"; // ✅ Ensure custom class is loaded
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen relative bg-hero">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 md:px-10">
        {/* Left logo */}
        <Link to="/">
          <img
            src="/logo2.png"
            alt="Left Logo"
            className="w-32 md:w-40 lg:w-48"
          />
        </Link>

        {/* Right logo */}
        <img
          src="/logo1.png"
          alt="Right Logo"
          className="w-32 md:w-40 lg:w-48"
        />
      </div>

      <div className="relative z-10 flex items-center justify-center h-screen">
        <div className="text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 farro-bold">
            LEAF A LEGACY
          </h1>
          <p className="text-white text-[28px] leading-[1.41] tracking-[0.1em] text-center uppercase font-medium font-[Montserrat] mb-6">
            Plant a tree in someone’s honor
          </p>
          <a href="/forests">
            <button className="bg-green-700 text-white px-6 py-2 rounded-full tracking-widest text-sm hover:bg-green-800 transition">
              CHOOSE A FOREST
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
