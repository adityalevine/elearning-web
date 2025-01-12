import { useState } from "react";
import { Button } from "./ui/button";
import { IoMenu } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full py-4 fixed bg-[#D9D9D9] z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/login">
            <Button variant="ghost">LOGIN</Button>
          </Link>
        </div>

        {/* Menu untuk desktop */}
        <div className="hidden md:flex justify-center items-center gap-8">
          <Link to="/">
            <p
              className={`${
                isActive("/") ? "text-blue-400" : "text-black"
              } hover:text-blue-400`}
            >
              BERANDA
            </p>
          </Link>

          <Link to="/program">
            <p
              className={`${
                isActive("/program") ? "text-blue-400" : "text-black"
              } hover:text-blue-400`}
            >
              PROGRAM
            </p>
          </Link>

          <Link to="/mentor">
            <p
              className={`${
                isActive("/mentor") ? "text-blue-400" : "text-black"
              } hover:text-blue-400`}
            >
              MENTOR
            </p>
          </Link>
        </div>

        {/* Hamburger Menu untuk mobile */}
        <div className="md:hidden flex items-center">
          <Button variant="ghost" onClick={toggleMenu}>
            <IoMenu className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Dropdown menu untuk mobile */}
      {menuOpen && (
        <div className="md:hidden mt-4 px-4 py-2 bg-[#D9D9D9]">
          <Link to="/">
            <p
              className={`${
                isActive("/") ? "text-blue-400" : "text-black"
              } py-2 hover:text-blue-400`}
            >
              BERANDA
            </p>
          </Link>

          <Link to="/program">
            <p
              className={`${
                isActive("/program") ? "text-blue-400" : "text-black"
              } py-2 hover:text-blue-400`}
            >
              PROGRAM
            </p>
          </Link>

          <Link to="/mentor">
            <p
              className={`${
                isActive("/mentor") ? "text-blue-400" : "text-black"
              } py-2 hover:text-blue-400`}
            >
              MENTOR
            </p>
          </Link>
        </div>
      )}
    </header>
  );
};
