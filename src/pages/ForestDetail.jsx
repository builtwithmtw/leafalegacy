import React from "react";
import { Link } from "react-router-dom";
import forests from "../data/forests.json";
import DonationForm from "../components/donationForm";
import BackButton from "../components/backButton";

const ForestDetail = () => {
  // get id from URL paths
  const forestId = window.location.pathname.split("/").pop();
  const forest = forests.find((f) => f.id === parseInt(forestId));
  if (!forest)
    return <div className="text-center text-red-500">Forest not found</div>;
  const { imageUrl, forest: forestName, description, detailImageUrl } = forest;

  return (
    <div className=" text-gray-800 relative min-h-screen bg-white px-6 md:px-12 py-10 space-y-8">
      {/* Logos */}
      <div className="grid grid-cols-2 items-center">
        {/* Left logo */}
        <div className="flex">
          <Link to="/">
            <img
              src="/logo2.png"
              alt="Left Logo"
              className="w-32 md:w-40 lg:w-48"
            />
          </Link>
        </div>

        {/* Right logo */}
        <div className="flex justify-end">
          <BackButton />
          <img
            src="/logo1.png"
            alt="Right Logo"
            className="w-32 md:w-40 lg:w-48"
          />
        </div>
      </div>

      {/* Hero Section */}
      <div
        className="min-h-[300px] bg-cover bg-center relative flex items-center justify-center rounded-xl overflow-hidden w-full"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4 ">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">{forestName}</h1>
          <p className="text-lg md:text-xl">Preserving Nature’s Legacy</p>
        </div>
      </div>

      {/* Section 2 */}
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6  mb-16 ">
        {/* Left: 2 stacked sections */}
        <div className="flex flex-col gap-6">
          <div className="bg-[#5E9063]  text-white p-6 rounded-lg flex flex-col ">
            <p className="mb-4  font-semibold text-custom-lg leading-8 tracking-widest">
              {description}
            </p>
          </div>
          {/* Image */}
          <div className="h-[484px]">
            <img
              src={detailImageUrl}
              alt="Forest view"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right: Form */}
        <div className="rounded-lg  bg-[#5E9063] p-3">
          <DonationForm />
        </div>
      </div>
    </div>
  );
};

export default ForestDetail;
