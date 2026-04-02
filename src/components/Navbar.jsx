
import { Link } from "react-router-dom";
import { useState } from "react";
import llogo from "../assets/llogo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-600 text-white py-3">
      <div className="flex justify-between items-center px-4 md:px-12">
        
        {/* Logo */}
        <div className="flex flex-col items-center">
          <img className="w-16 h-16 md:w-24 md:h-24" src={llogo} alt="logo" />
          <h1 className="text-sm md:text-base font-semibold">FOLKS FURNITURE</h1>
        </div>

        {/* Tagline - hidden on small screens */}
        <div className="hidden lg:block">
          <strong className="font-semibold text-center">
            THINK HOME, THINK FOLKSFURNITURE
          </strong>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/">HomePage</Link>
          <Link to="/productgallery">ProductGallery</Link>
          <Link to="/about">AboutUs</Link>
          <Link to="/contact">ContactUs</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col items-center space-y-4 mt-4 md:hidden">
          <Link to="/" onClick={() => setMenuOpen(false)}>HomePage</Link>
          <Link to="/productgallery" onClick={() => setMenuOpen(false)}>ProductGallery</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>AboutUs</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>ContactUs</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;