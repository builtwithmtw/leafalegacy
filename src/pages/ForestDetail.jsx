import React from 'react';
import { Link } from 'react-router-dom';
import forests from "../data/forests.json";

const ForestDetail = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add your API call here
    alert('Tree planted! (simulate API call)');
  };

  // get id from URL paths
  const forestId = window.location.pathname.split('/').pop();
  const forest = forests.find(f => f.id === parseInt(forestId));
  if (!forest) return <div className="text-center text-red-500">Forest not found</div>
  const { imageUrl,  forest: forestName } = forest;


  const coverImage = imageUrl; 
  const forestImage1 = '/forest-detail-1.jpg'; 
  const forestImage2 = '/forest-detail-2.jpg';
  const whyThisForestMatters = "Gunnison’s high alpine forests have been battered by wildfire, drought, and bark beetle infestations — leaving large swaths deforested. Guests support helps replant native spruce, aspen, and fir in a critical watershed that supports Colorado’s rivers and wildlife. Every tree planted helps build fire-resilient forests, restore habitat for elk and lynx, and preserve Colorado’s wild backbone";
  const replantPurpose = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";


  return (
    <div className=" text-gray-800 relative min-h-screen bg-white px-6 md:px-12 py-10 space-y-8">
      {/* Logos */}
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

      {/* Hero Section */}
       <div
        className="min-h-[300px] bg-cover bg-center relative flex items-center justify-center rounded-xl overflow-hidden w-full"
         style={{ backgroundImage: `url(${coverImage})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white px-4 ">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">{forestName}</h1>
          <p className="text-lg md:text-xl">Preserving Nature’s Legacy</p>
        </div>
      </div>

      {/* Section 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-[366px] my-10 gap-6 ">
        {/* Left: Text Block */}
        <div className="bg-[#5E9063] text-white p-6 rounded-lg flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-2">Rebuilding Gunnison’s Forests, One Tree at a Time</h2>
          <p className="mb-4">
            {whyThisForestMatters}
          </p>
          <a href="#donate" className=" text-white hover:text-yellow-300 ">
            PLANT A TREE
          </a>
        </div>

        {/* Right: Image */}
          <div className="h-[366px]">
          <img
            src={forestImage1}
            alt="Forest"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6  mb-16 ">
        {/* Left: 2 stacked sections */}
        <div className="flex flex-col gap-6">
          {/* Image */}
          <div className="h-[366px]">
            <img
              src={forestImage2}
              alt="Forest view"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Text + Button */}
          <div className="bg-[#5E9063] text-white p-6 rounded-lg flex flex-col justify-center h-[366px]">
            <h2 className="text-2xl font-bold mb-2">Welcome to Leaf a Legacy</h2>
            <p className="mb-4">
              {replantPurpose}
            </p>
            <button className="bg-[#E1BE23] text-black py-2 px-6 rounded-full font-semibold hover:bg-yellow-400 transition">
              PLANT A TREE
            </button>
          </div>
        </div>

        {/* Right: Form */}
        <div className="rounded-lg  bg-[#5E9063] p-3">
          <div
            id="donate"
            className="bg-gray-50 p-6 h-full flex flex-col justify-between rounded-lg"
          >
            <div>
              <h2 className="text-2xl font-bold mb-2">Support our Forest Conservation Efforts</h2>
              <p className="mb-6 text-gray-600">
                Your donations help us protect and preserve vital forest ecosystems, ensuring a sustainable future for all.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                  required
                />
                <input
                  type="text"
                  placeholder="Honoree Name"
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
                <input
                  type="number"
                  placeholder="Donation Amount (optional)"
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
                <textarea
                  placeholder="Message"
                  rows={3}
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
                <button
                  type="submit"
                  className="bg-[#E1BE23] text-black py-2 px-6 rounded-full font-semibold hover:bg-yellow-400 transition"
                >
                  PLANT A TREE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForestDetail;