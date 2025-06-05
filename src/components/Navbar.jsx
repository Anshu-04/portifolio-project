import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md border border-cyan-400 rounded-2xl shadow-md px-4 md:px-8 py-3 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%] max-w-3xl z-50 hover:shadow-cyan-500/50 transition-all duration-300">
      {/* Mobile Menu Button - Only visible on small screens */}
      <div className="md:hidden flex justify-end">
        <button onClick={toggleMenu} className="text-white">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Menu - Hidden on mobile unless menu is open */}
      <ul className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center md:justify-center gap-4 md:gap-8 text-white font-semibold text-lg`}>
        <li className="hover:text-[#bcccdc] transition duration-200 cursor-pointer">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
        </li>
        <li className="hover:text-[#bcccdc] transition duration-200 cursor-pointer">
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
        </li>
        <li className="hover:text-[#bcccdc] transition duration-200 cursor-pointer">
          <Link to="/project" onClick={() => setIsMenuOpen(false)}>Projects</Link>
        </li>
        <li className="hover:text-[#bcccdc] transition duration-200 cursor-pointer">
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;