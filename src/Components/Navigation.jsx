import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX, FiVideo } from "react-icons/fi";
import ButtonOne from "../Button/ButtonOne";
import Logo from "../assets/logo.png";

const Navigation = () => {
  const activeClass = "text-[#222222]";
  const unActiveClass = "text-[#666666] hover:text-[#222222]";

  // State for dropdown menus and mobile menu
  const [isDropdownOpen, setDropDownOpen] = useState({
    aboutUs: false,
    giving: false,
    watchRead: false,
  });
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (key) => {
    setDropDownOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <div className="relative top-0 left-0 font-Inter w-full h-[127px] px-[24px] desktop:px-[120px] py-[39px] desktop:py-[24px] z-[100]">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex justify-center items-center my-4">
          <img src={Logo} alt="Logo" className="w-[190px] h-[109.15px] max-w-full object-contain" />
       </div>

        {/* Desktop Navigation (Hidden on Mobile) */}
        <ul className="hidden desktop:flex font-medium text-[18px] items-center gap-[32px] h-[32px]">
          <li className="relative">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeClass : unActiveClass
              }
            >
              Home
            </NavLink>
          </li>

          {/* About Us with Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => toggleDropdown("aboutUs")}
            onMouseLeave={() => toggleDropdown("aboutUs")}
          >
            <NavLink
              to="/About_Us"
              className={({ isActive }) =>
                isActive ? activeClass : unActiveClass
              }
            >
              About Us
            </NavLink>
            {isDropdownOpen.aboutUs && (
              <ul className="absolute w-full text-[16px] top-full left-0 mt-2 bg-white shadow-lg rounded">
                <li className="p-2 hover:bg-gray-100">Mission</li>
                <li className="p-2 hover:bg-gray-100">Team</li>
              </ul>
            )}
          </li>

          {/* Giving with Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => toggleDropdown("giving")}
            onMouseLeave={() => toggleDropdown("giving")}
          >
            <NavLink
              to="/Giving"
              className={({ isActive }) =>
                isActive ? activeClass : unActiveClass
              }
            >
              Giving
            </NavLink>
            {isDropdownOpen.giving && (
              <ul className="absolute text-[16px] top-full left-0 mt-2 bg-white shadow-lg rounded">
                <li className="p-2 hover:bg-gray-100">Donate</li>
                <li className="p-2 hover:bg-gray-100">Volunteer</li>
              </ul>
            )}
          </li>

          {/* Watch & Read with Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => toggleDropdown("watchRead")}
            onMouseLeave={() => toggleDropdown("watchRead")}
          >
            <NavLink
              to="/Watch_&_Read"
              className={({ isActive }) =>
                isActive ? activeClass : unActiveClass
              }
            >
              Watch & Read
            </NavLink>
            {isDropdownOpen.watchRead && (
              <ul className="absolute w-full text-[16px] top-full left-0 mt-2 bg-white shadow-lg rounded">
                <li className="p-2 hover:bg-gray-100">Articles</li>
                <li className="p-2 hover:bg-gray-100">Videos</li>
              </ul>
            )}
          </li>
        </ul>

        {/* Watch Live Button (Hidden on Mobile) */}
        <ButtonOne className="hidden desktop:flex">
          <p>Watch Live</p>
          <FiVideo height={18} width={18} />
        </ButtonOne>

        {/* Hamburger Icon (Visible on Mobile) */}
        <div className="flex desktop:hidden">
          <button onClick={toggleMobileMenu} aria-label="Toggle menu">
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="flex flex-col items-start font-medium text-[18px] gap-[16px] mt-4">
          <li>
            <NavLink
              to="/"
              onClick={toggleMobileMenu}
              className={({ isActive }) =>
                isActive ? activeClass : unActiveClass
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About_Us"
              onClick={toggleMobileMenu}
              className={({ isActive }) =>
                isActive ? activeClass : unActiveClass
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Giving"
              onClick={toggleMobileMenu}
              className={({ isActive }) =>
                isActive ? activeClass : unActiveClass
              }
            >
              Giving
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Watch_&_Read"
              onClick={toggleMobileMenu}
              className={({ isActive }) =>
                isActive ? activeClass : unActiveClass
              }
            >
              Watch & Read
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navigation;
