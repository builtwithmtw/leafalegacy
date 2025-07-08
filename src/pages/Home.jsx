import React from 'react';
import '../index.css'; // ✅ Ensure custom class is loaded

function Home() {
  return (
    <div className="h-screen relative bg-hero">
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex items-center justify-center h-screen">
        <div className="text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 .farro-bold">LEAF A LEGACY</h1>
          <p className="text-white text-lg md:text-xl font-medium mb-6 font-[Montserrat]">Plant a tree in someone’s honor</p>
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