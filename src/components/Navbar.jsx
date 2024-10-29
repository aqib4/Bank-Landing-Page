import { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-2 justify-between items-center  navbar"> {/* Added relative to the nav */}
      <img src={logo} className="w-[124px] h-[32px]" alt="Company Logo" />

      <div className="flex-1">
        <ul className="sm:flex hidden justify-end items-center text-white">
          {navLinks.map((navlink, index) => (
            <li
              key={navlink.id}
              className={`${
                index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
              } font-poppins font-normal cursor-pointer text-[16px]`}
            >
              <a href={`#${navlink.id}`}>{navlink.title}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Hamburger Menu Button for Small Screens */}
      <div className="sm:hidden flex justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="Menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>

      {/* Dropdown Menu for Small Screens */}
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-6 bg-black-gradient-2 absolute top-16 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar text-white`}
      >
        <ul className="list-none flex justify-end items-start flex-1 flex-col">
          {navLinks.map((navlink, index) => (
            <li
              key={navlink.id}
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                index === navLinks.length - 1 ? "mb-0" : "mb-4"
              }`}
            >
              <a href={`#${navlink.id}`}>{navlink.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
