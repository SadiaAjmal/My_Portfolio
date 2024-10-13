import React from "react";

const Footer = () => {

    const currentYear = new Date().getFullYear();

  return (
    <div className=" h-48 text-white lg:px-40 md:px-10 px-3 pb-5 bg-block-bg flex items-end justify-between  bottom-0 w-full">
      <div className=" flex md:gap-3 gap-1 items-center justify-center">
        <div className="flex items-center justify-center font-semibold w-10 h-10 bg-box-bg rounded-full text-white">
          S
        </div>
        <p className=" text-xl tracking-wide">Sadia Ajmal</p>
      </div>

      <div className=" flex items-center ">
        <ul className="md:flex lg:gap-10 gap-3 items-center justify-center hidden">
          <li className=" py-1 cursor-pointer">
            Home
          </li>
          <li className=" py-1 cursor-pointer">
            About
          </li>
          <li className="  py-1 cursor-pointer">
            Process
          </li>
          <li className=" py-1 cursor-pointer">
            Projects
          </li>
          <li className=" py-1 cursor-pointer">
            Services
          </li>
          <li className=" py-1 cursor-pointer">
            Contact
          </li>

        </ul>
      </div>
<div>
<p>Copyright &copy; {currentYear} </p>
</div>
    </div>
  );
};

export default Footer;
