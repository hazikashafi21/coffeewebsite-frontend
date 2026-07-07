import { Link } from "react-router-dom";
import { FaCoffee, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[rgba(53,31,22,0.85)] backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2 text-white text-2xl md:text-3xl font-bold">
          <FaCoffee className="text-[#e6b566]" />
          <span>Coffee Haven</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="/"
            className="text-white font-medium hover:text-[#e6b566] transition duration-300"
          >
            Home
          </a>

          <a
            href="#menu"
            className="text-white font-medium hover:text-[#e6b566] transition duration-300"
          >
            Menu
          </a>

          <a
            href="#about"
            className="text-white font-medium hover:text-[#e6b566] transition duration-300"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-white font-medium hover:text-[#e6b566] transition duration-300"
          >
            Contact
          </a>

          <Link
            to="/order"
            className="bg-[#e6b566] text-[#3f2418] px-6 py-3 rounded-full font-semibold hover:-translate-y-1 transition duration-300"
          >
            Order Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#4a2c20] overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 py-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6">

          <a
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-white text-lg hover:text-[#e6b566]"
          >
            Home
          </a>

          <a
            href="#menu"
            onClick={() => setMenuOpen(false)}
            className="text-white text-lg hover:text-[#e6b566]"
          >
            Menu
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="text-white text-lg hover:text-[#e6b566]"
          >
            About
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-white text-lg hover:text-[#e6b566]"
          >
            Contact
          </a>

          <Link
            to="/order"
            onClick={() => setMenuOpen(false)}
            className="bg-[#e6b566] text-[#3f2418] px-6 py-3 rounded-full font-semibold hover:-translate-y-1 transition duration-300"
          >
            Order Now
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;