import React from "react";
import {
  Link,
  animateScroll as scroll,
} from "react-scroll";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className=" h-48 text-white lg:px-40 md:px-10 px-3 py-3 pt-[10%] bg-block-bg flex items-end justify-between bottom-0 w-full">
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
          <li className=" py-1 cursor-pointer">Home</li>
          <li className=" py-1 cursor-pointer">About</li>
          <li className="  py-1 cursor-pointer">Process</li>
          <li className=" py-1 cursor-pointer">Projects</li>
          <li className=" py-1 cursor-pointer">Services</li>
          <li className=" py-1 cursor-pointer">Contact</li>
        </ul>
      </div>
      <div className=" h-10 flex items-center">
        <p>Copyright &copy; {currentYear} </p>
      </div>
    </div>
  );
};

export default Footer;
