import { Link } from "react-router-dom";
import llogo from "../assets/llogo.png";

function Navbar() {
  return (
    <nav className="bg-gray-600 text-white pt-3 pb-1 flex justify-between">
      <div className="flex flex-col items-center space-x-4 ml-12">
        <img className="w-24 h-24" src={llogo} alt="" />
        <h1 className="">FOLKS FURNITURE</h1>
      </div>
      <div className="flex items-center space-x-12 mr-24">
      <div>
        <strong className="font-semibold text-center pt-8 mr-48 ">
          THINK HOME, THINK FULKFURNITURE
        </strong>
      </div>

      <div className="space-x-6 mr-12 ">
        <Link to="/">HomePage</Link>
        <Link to="/productgallery">ProductGallery</Link>
        <Link to="/about">AboutUs</Link>
        <Link to="/contact">ContactUs</Link>
      </div>
      </div>
      
    </nav>
  );
}

export default Navbar;
