import React from 'react';

function ReplantSection() {
  return (
    <div className="bg-[#5E9063] py-10 px-7 mt-4 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 rounded-2xl">
  
        {/* Left Image */}
        <div className="w-[378px] h-[210px] bg-white/85 flex items-center justify-center">
  <img
    src="/award.png"
    alt="Forest"
    className="w-[286px] h-[210px] object-contain"
  />
</div>

        {/* Right Text */}
        <div className="text-white flex-1">
          <p className="text-base leading-relaxed mb-4">
            Gunnison’s high alpine forests have been battered by wildfire, drought, and bark beetle infestations — leaving large swaths deforested. Guests support helps replant native spruce, aspen, and fir in a critical watershed that supports Colorado’s rivers and wildlife. Every tree planted helps build fire-resilient forests, restore habitat for elk and lynx, and preserve Colorado’s wild backbone.
          </p>

          <button className="mt-4 bg-[#E1BE23]  text-white  px-6 py-2 rounded-full font-semibold tracking-wide hover:bg-yellow-400 transition">
            PLANT A TREE
          </button>
        </div>
     
    </div>
  );
}

export default ReplantSection;