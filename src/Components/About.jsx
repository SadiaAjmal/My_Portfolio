import React from "react";
import my_img from "../assets/dpb.jpg";
import { HiOutlineDownload } from "react-icons/hi";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import resume from "../assets/SadiaAjmal'sResume.pdf";

const About = () => {
  return (
<div className=" h-0">
    <div className=" z-[2] md:top-[85%] sm:top-[90%] absolute lg:px-20 lg:mx-40 mx-3  md:mx-10 about bg-white box-border  md:p-16 px-3 py-8 pb-16 rounded-lg mt-10 shadow-lg flex lg:flex-row flex-col-reverse items-center justify-between">
      <div className=" order-2 basis-[58%] lg:space-y-5 space-y-3">
        <p className=" md:text-4xl text-3xl font-semibold ">
          I'm Frontend Web Developer.
        </p>
        <p>
          As a driven front-end developer, I'm excited to launch my career.
          Proficient in HTML, CSS, JavaScript and React Js, I'm passionate about
          crafting user-friendly interfaces. Currently exploring latest trends
          and best practices through online courses and personal projects.
        </p>
        <p>
          Feel free to explore my portfolio, and let's connect to discuss
          potential opportunities{" "}
        </p>
        <div className=" flex items-center justify-center">
          <a href={resume} download={resume}>
            <button className=" flex items-center gap-3 border-2 border-purple-500 text-custom-textclr px-6 mb-5 py-2 rounded-md hover:text-white hover:bg-box-bg focus:text-white focus:bg-box-bg">
              <HiOutlineDownload className="w-6 h-6" />
              Download Resume
            </button>{" "}
          </a>
        </div>
      </div>

      <div className=" mb-5 justify-center flex items-center order-1 basis-[40%] relative">
        <img
          className=" rounded-lg h-auto md:w-72 w-60"
          src={my_img}
          alt="My Image"
        />

        <div className=" px-5 flex justify-center items-center shadow-lg py-2 bg-white absolute box-border rounded-md bottom-[-20px]">
          <ul className=" flex items-center justify-evenly gap-5">
            <li className=" list-none">
              <div className=" flex items-center">
                <a href="mailto:sadiaajmal463@gmail.com" target="blank">
                  <SiGmail className=" w-8 h-8 rounded-sm  hover:bg-box-bg hover:text-white focus:text-white focus:bg-box-bg text-custom-textclr p-1 cursor-pointer" />
                </a>
              </div>
            </li>
            <li className=" list-none">
              <div className=" flex items-center">
                <a
                  href="https://www.linkedin.com/in/sadia-ajmal"
                  target="_blank"
                  className=" hover:text-blue-300"
                >
                  {" "}
                  <FaLinkedinIn className=" w-8 h-8 rounded-sm focus:text-white focus:bg-box-bg hover:bg-box-bg hover:text-white text-custom-textclr p-1 cursor-pointer" />
                </a>
              </div>
            </li>
            <li className=" list-none">
              <div className=" flex items-center ">
                <a
                  href="https://github.com/SadiaAjmal"
                  target="_blank"
                  className=" hover:text-blue-300"
                >
                  <TbBrandGithubFilled className=" w-8 h-8 rounded-sm focus:text-white focus:bg-box-bg hover:text-white hover:bg-box-bg text-custom-textclr p-1 cursor-pointer" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
</div>
  );
};

export default About;
