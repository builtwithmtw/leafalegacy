import ForestCard from "../components/forestCard";
import forests from "../data/forests.json";

function ForestsPage() {
  return (
    <div className="min-h-screen bg-white px-6 md:px-12 py-10">
      {/* Logo Row - Use Grid to align left and right */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 items-center mb-12">
        {/* Left logo */}

        <img
          src="/logo1.png"
          alt="Left Logo"
          className="w-32 md:w-40 lg:w-48"
        />

        {/* Right logo aligned to right */}
        <div className="flex justify-end">
          <img
            src="/logo2.png"
            alt="Right Logo"
            className="w-32 md:w-40 lg:w-48"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
        {forests.map((forest, index) => (
          <ForestCard key={index} {...forest} />
        ))}
      </div>
    </div>
  );
}

export default ForestsPage;
