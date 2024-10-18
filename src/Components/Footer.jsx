import React from "react";
import {
  Link,
  animateScroll as scroll,
} from "react-scroll";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className=" h-48 text-white lg:px-34 xl:px-40  md:px-10 px-3 py-3 pt-[10%] bg-block-bg flex items-end justify-between bottom-0 w-full">
      <Link
        to="hero"
        activeClass="text-purple-500 font-semibold"
        smooth={true}
        offset={0}
        duaration={300}
      >
        <div className=" flex md:space-x-5 space-x-1 items-center justify-center cursor-pointer">
          <div className="flex items-center justify-center font-semibold w-10 h-10 bg-box-bg rounded-full text-white">
            S
          </div>
          <p className="  tracking-wider">Sadia Ajmal</p>
        </div>
      </Link>

      <div className=" h-10 flex items-center ">
        <ul className="lg:flex lg:gap-10 gap-3 items-center justify-center hidden">
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
              <Link to="contact" smooth={true} offset={-50} duaration={300}>
                Contact
              </Link>
            </li>
        </ul>
      </div>
      <div className=" h-10 flex items-center">
        <p>Copyright &copy; {currentYear} </p>
      </div>
    </div>
  );
};

export default Footer;
