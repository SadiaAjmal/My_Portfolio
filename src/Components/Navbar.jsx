import React from "react";
import { useState } from "react";
import { IoMenuOutline, IoClose } from "react-icons/io5";
//import {  NavLink } from "react-router-dom";
import {
  Link,
  NavLink,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const menu = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <nav className=" lg:px-40 md:px-10 px-3 py-3 bg-white flex items-center justify-between fixed top-0 z-10 w-full">
        <div className=" flex md:gap-3 gap-1 items-center justify-center">
          <div className="flex items-center justify-center font-semibold w-10 h-10 bg-box-bg rounded-full text-white">
            S
          </div>
          <p className=" text-2xl  font-semibold tracking-wide">SADIA AJMAL</p>
        </div>

        <div className=" flex items-center ">
          <ul className="md:flex lg:gap-10 gap-3 items-center justify-center hidden">
            <li className="border-purple-500 hover:text-purple-600 hover:border-b-2 py-1 cursor-pointer">
              <Link to="hero" activeClass="text-purple-500 font-semibold" smooth={true} offset={0} duaration={300}>
                Home
              </Link>
            </li>
            <li className=" border-purple-500 focus:text-purple-600  hover:text-purple-600 hover:border-b-2  py-1 cursor-pointer">
              <Link  to="about" smooth={true} offset={-130} duaration={300}>
                About
              </Link>
            </li>
            <li className=" border-purple-500 focus:text-purple-600  hover:text-purple-600 hover:border-b-2  py-1 cursor-pointer">
              <Link to="process" smooth={true} offset={50} duaration={300}>
                Process
              </Link>
            </li>
            <li className="border-purple-500 focus:text-purple-600   hover:border-b-2 py-1 hover:text-purple-600 cursor-pointer">
              <Link to="projects" smooth={true} offset={-100} duaration={300}>
                Projects
              </Link>
            </li>
            <li className="border-purple-500 focus:text-purple-600  hover:text-purple-600 hover:border-b-2 py-1 cursor-pointer">
              <Link to="services" smooth={true} offset={-50} duaration={300}>
                Services
              </Link>
            </li>

            <Link to="contact" smooth={true} offset={0} duaration={300}>
              <button className=" bg-box-bg focus:bg-purple-600  text-white px-4 py-2 rounded-md font-semibold">
                Contact
              </button>
            </Link>
          </ul>
        </div>

        {/*___________________________Responsive Menu_________________________________*/}

        <div className=" px-3 md:hidden block">
          <ul
            className={` h-screen bg-custom-bg text-center duration-500  space-y-10 w-[60%] shadow-lg  fixed mt-12 ${
              toggle ? "right-[0]" : "right-[-100%]"
            }`}
          >
            <li className=" focus:text-purple-600 pb-2 cursor-pointer">
              <Link to="hero" smooth={true} offset={0} duaration={300}>
                Home
              </Link>
            </li>
            <li className=" pb-2 focus:text-purple-600  cursor-pointer">
              <Link to="about" smooth={true} offset={-60} duaration={300}>
                About
              </Link>
            </li>
            <li className="focus:text-purple-600  py-1 cursor-pointer">
              <Link to="process" smooth={true} offset={150} duaration={300}>
                Process
              </Link>
            </li>
            <li className="py-1 focus:text-purple-600 cursor-pointer">
              <Link to="projects" smooth={true} offset={-100} duaration={300}>
                Projects
              </Link>
            </li>
            <li className="py-1 focus:text-purple-600 cursor-pointer">
              <Link to="services" smooth={true} offset={-50} duaration={300}>
                Services
              </Link>
            </li>
            <li className="py-1 focus:text-purple-600 cursor-pointer">
              <Link
                to="contact"
                smooth={true}
                offset={-50}
                duaration={300}
              >
              Contact
              </Link>
            </li>
          </ul>

          <div className=" md:mr-5 block place-content-center text-black cursor-pointer md:hidden">
            {toggle ? (
              <IoClose onClick={menu} className=" p-1 rounded-full h-8 w-8" />
            ) : (
              <IoMenuOutline
                onClick={menu}
                className="  h-8 w-8 p-1 rounded-full"
              />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
