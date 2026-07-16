import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(false);

  const desktopLink =
    "relative px-4 py-2 text-gray-700 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full";

  const desktopActive =
    "relative px-4 py-2 font-semibold text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-black";

  const mobileLink =
    "block py-2 px-4 text-gray-700 hover:bg-gray-100 transition";

  const mobileActive =
    "block py-2 px-4 font-semibold text-black bg-gray-100";

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <div className="text-lg font-semibold text-gray-900">
          Kuwait Gorkhali Samaj
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center">
          <NavLink to="/" className={({ isActive }) => isActive ? desktopActive : desktopLink}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? desktopActive : desktopLink}>
            About Us
          </NavLink>
          <NavLink to="/vision" className={({ isActive }) => isActive ? desktopActive : desktopLink}>
            Our Vision
          </NavLink>
          <NavLink to="/mission" className={({ isActive }) => isActive ? desktopActive : desktopLink}>
            Our Mission
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? desktopActive : desktopLink}>
            Contact Us
          </NavLink>
        </nav>

        {/* MOBILE HAMBURGER → X */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-8 h-8 focus:outline-none"
          aria-label="Menu"
        >
          <span
            className={`absolute left-0 top-1/2 w-8 h-[2px] bg-black transition-all duration-300 ${
              open ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute left-0 top-1/2 w-8 h-[2px] bg-black transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-1/2 w-8 h-[2px] bg-black transition-all duration-300 ${
              open ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      {/* MOBILE SLIDE-DOWN MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="border-t border-gray-200 bg-white">
          <NavLink to="/" onClick={handleClick}
            className={({ isActive }) => isActive ? mobileActive : mobileLink}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={handleClick}
            className={({ isActive }) => isActive ? mobileActive : mobileLink}>
            About Us
          </NavLink>
          <NavLink to="/vision" onClick={handleClick}
            className={({ isActive }) => isActive ? mobileActive : mobileLink}>
            Our Vision
          </NavLink>
          <NavLink to="/mission" onClick={handleClick}
            className={({ isActive }) => isActive ? mobileActive : mobileLink}>
            Our Mission
          </NavLink>
          <NavLink to="/contact" onClick={handleClick}
            className={({ isActive }) => isActive ? mobileActive : mobileLink}>
            Contact Us
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
