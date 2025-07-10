import React from "react";
import { Link } from "react-router-dom";

function ForestCard({
  imageUrl = "/background.jpg",
  state = "California",
  forest = "Tahoe National Forest",
  id = 1,
}) {
  return (
    <Link to={`/forest/${id}`} className="block w-full max-w-sm">
      <div
        className="relative rounded-2xl overflow-hidden h-[400px] bg-cover bg-center text-white shadow-lg transition-transform duration-300 hover:scale-[1.01]"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {/* Top-right Country Tag */}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Bottom Content */}
        <div className="absolute bottom-6 left-6 right-6 z-10">
          <h2 className="text-xl  font-[32px] tracking-wide">{state}</h2>
          <p className="text-lg font-semibold tracking-wide">{forest}</p>
          {/* Read More (optional visual hint) */}
        </div>
      </div>
    </Link>
  );
}

export default ForestCard;
