import { Link } from "react-router-dom";
import BackButton from "./backButton";

const NavLogos = ({ header = "", backButton = true }) => {
  return (
    <>
      <div className="flex">
        <Link to="/">
          <img
            src="/logo1.png"
            alt="Left Logo"
            className="w-32 md:w-40 lg:w-48"
          />
        </Link>
      </div>

      {header && (
        <span className="text-center text-5xl font-semibold text-green-600">
          {header}
        </span>
      )}

      {/* Right logo */}
      <div className="flex justify-end">
        {backButton && <BackButton />}
        <img
          src="/logo2.png"
          alt="Right Logo"
          className="w-32 md:w-40 lg:w-48"
        />
      </div>
    </>
  );
};

export default NavLogos;
