import ForestCard from "../components/forestCard";
import NavLogos from "../components/navLogos";
import forests from "../data/forests.json";

function ForestsPage() {
  return (
    <div className="min-h-screen bg-white px-6 md:px-12 py-10">
      {/* Logo Row - Use Grid to align left and right */}
      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center mb-12">
        <NavLogos header="CHOOSE A FOREST" />
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
