import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleOpen = () => setIsOpen((prev) => !prev);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
    if (window.scrollY > 50) setIsOpen(false); // Close the menu if user scrolls
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-20 transition-all duration-500 ${scrolled ? "bg-white bg-opacity-90 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20 relative">
          <NavLink
            to="/"
            className="flex items-center space-x-2 text-2xl font-bold transition-colors duration-300"
            activeClassName="text-blue-600"
          >
            <span className="text-blue-600">Create</span>
            <span className="text-teal-600">My</span>
            <span className="text-orange-500">Website</span>
          </NavLink>

          {/* Hamburger Menu for Mobile */}
          <div
            onClick={handleOpen}
            className={`flex flex-col gap-1 cursor-pointer md:hidden transition-all duration-300 ${isOpen ? "transform rotate-90" : ""
              }`}
            aria-label="Toggle mobile menu"
          >
            <span
              className={`w-6 h-0.5 bg-gray-900 rounded transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""
                }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-900 rounded transition-all duration-300 ${isOpen ? "opacity-0" : ""
                }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-900 rounded transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
            ></span>
          </div>

          {/* Navbar Links for Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {["Card", "Pricing", "Blog", "Testimonial", "Banner", "Contact"].map((link, idx) => (
              <NavLink
                key={idx}
                to={`/${link.toLowerCase()}`}
                className="relative font-semibold text-gray-950 hover:text-blue-600 transition-colors duration-200 group"
                activeClassName="text-blue-600"
                exact
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
          </div>

          {/* Button Links */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/login" className="text-gray-900 font-bold hover:underline">Login</NavLink>
            <NavLink to="/start-free">
              <button className="text-white bg-blue-600 hover:bg-blue-700 py-3 px-6 rounded-full transition-all duration-300">
                Start Free
              </button>
            </NavLink>
          </div>
        </div>

        {/* Navbar Menu for Mobile */}
        <NavbarDropdown isOpen={isOpen} />
      </div>
    </nav>
  );
}

export function NavbarDropdown({ isOpen }) {
  return (
    <div
      className={`${isOpen ? "translate-x-0" : "-translate-x-full"
        } pt-16 md:hidden bg-white absolute top-0 left-0 w-1/2 h-screen text-center transition-all duration-500 ease-in-out p-5 z-10`}
    >
      <div className="flex flex-col gap-10 mt-10 items-center text-gray-700">
        {["Card", "Pricing", "Blog", "Testimonial", "Banner", "Contact"].map((link, idx) => (
          <NavLink
            key={idx}
            to={`/${link.toLowerCase()}`}
            className="text-xl hover:text-blue-600 transition-colors duration-300"
            onClick={() => setIsOpen(false)} // Close menu on click
          >
            {link}
          </NavLink>
        ))}
      </div>
      <div className="flex flex-col gap-6 mt-10">
        <NavLink to="/login" className="text-xl underline text-gray-700">
          Login
        </NavLink>
        <NavLink to="/start-free">
          <button className="w-full py-3.5 border border-blue-600 text-white bg-blue-600 font-medium rounded-lg transition-all duration-300">
            Start Free
          </button>
        </NavLink>
      </div>
    </div>
  );
}
