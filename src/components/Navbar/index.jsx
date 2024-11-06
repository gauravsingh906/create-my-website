import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink

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
          {/* Custom Logo as a NavLink */}
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
                className="relative font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200 group"
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
            <NavLink to="/login" className="text-gray-700 hover:underline">Login</NavLink>
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

      {/* WhatsApp Button with SVG */}
      <a
        href="https://wa.me/1234567890" // Replace with your WhatsApp phone number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-600 p-2 text-white  rounded-full shadow-lg hover:bg-green-700 transition-all duration-300"
        aria-label="Chat with us on WhatsApp"
      >

        <svg fill="#000000" height="40px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 308 308" xml:space="preserve">
          <g id="XMLID_468_">
            <path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156
		c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687
		c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887
		c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153
		c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348
		c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802
		c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922
		c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0
		c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458
		C233.168,179.508,230.845,178.393,227.904,176.981z"/>
            <path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716
		c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396
		c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z
		 M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188
		l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677
		c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867
		C276.546,215.678,222.799,268.994,156.734,268.994z"/>
          </g>
        </svg>
      </a>
    </nav>
  );
}

export function NavbarDropdown({ isOpen }) {
  return (
    <div
      className={`${isOpen ? "translate-x-0" : "-translate-x-full"
        } pt-16 md:hidden bg-white absolute top-0 left-0 w-full h-screen text-center transition-all duration-500 ease-in-out p-5 z-10`}
    >
      <div className="flex flex-col gap-16 mt-16">
        <div className="flex flex-col gap-8 items-center text-gray-700">
          {["Card", "Pricing", "Blog", "Testimonial", "Banner", "Contact"].map((link, idx) => (
            <NavLink
              key={idx}
              to={`/${link.toLowerCase()}`}
              className="text-xl hover:text-blue-600 transition-colors duration-300"
            >
              {link}
            </NavLink>
          ))}
        </div>
        <div className="flex flex-col gap-8 mt-12">
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
    </div>
  );
}
