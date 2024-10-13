import React from "react";
import { GiNotebook } from "react-icons/gi";
import { SiTestinglibrary } from "react-icons/si";
import { MdLaunch } from "react-icons/md";
import { CiDesktop } from "react-icons/ci";

const Process = () => {
  return (
    <div className=" process lg:flex justify-between pt-60 md:pt-40 px-3 py-10 lg:px-40 md:px-20 bg-process-bg  space-y-5">
      <div className="  basis-[46%] flex flex-col justify-center gap-5">
        <p className=" md:text-4xl text-3xl font-semibold ">Work Process</p>
        <p>
          My work process starts with thorough planning and analysis, followed
          by iterative design, development, and testing. I prioritize
          efficiency, scalability, and continuous learning to deliver
          high-quality web solutions.
        </p>
      </div>

      <div className=" md:space-x-6 flex md:flex-row flex-col items-center justify-center basis-[46%]">
        <div className=" space-y-6">
          <div className=" h-52 w-60 bg-white rounded-lg p-5 shadow-lg mr-2 focus:scale-105 hover:scale-105">
            <GiNotebook className=" w-10 h-10 p-2 bg-purple-100 text-custom-textclr  focus:text-white focus:bg-box-bg hover:text-white hover:bg-box-bg rounded-md mb-3" />
            <p className=" font-semibold">1. Planning</p>
            <p className="px-2 text-sm">
              I define project goals, objectives, and technical requirements for
              clear direction.
            </p>
          </div>
          <div className="h-52 w-60 bg-white rounded-lg p-5 shadow-lg mr-2 focus:scale-105 hover:scale-105">
            <CiDesktop className=" w-10 h-10 p-2 bg-purple-100 text-custom-textclr  focus:text-white focus:bg-box-bg hover:text-white hover:bg-box-bg rounded-md mb-3" />
            <p className=" font-semibold">2. Development</p>
            <p className="px-2 text-sm">
              I write clean, efficient, and well-documented code for optimal
              functionality always.
            </p>
          </div>
        </div>

        <div className=" space-y-6 mt-6">
          <div className=" h-52 w-60 bg-white rounded-lg p-5 shadow-lg mr-2 focus:scale-105 hover:scale-105">
            <SiTestinglibrary className=" w-10 h-10 p-2 bg-purple-100 text-custom-textclr  focus:text-white focus:bg-box-bg hover:text-white hover:bg-box-bg rounded-md mb-3" />
            <p className=" font-semibold">3. Testing</p>
            <p className="px-2 text-sm">
              Rigorous testing ensures bug-free, high-quality solutions through
              manual checks always.
            </p>
          </div>
          <div className="h-52 w-60 bg-white rounded-lg p-5 shadow-lg mr-2 focus:scale-105 hover:scale-105">
            <MdLaunch className=" w-10 h-10 p-2 bg-purple-100 text-custom-textclr  focus:text-white focus:bg-box-bg hover:text-white hover:bg-box-bg rounded-md mb-3" />
            <p className=" font-semibold">4. Launch</p>
            <p className="px-2 text-sm">
              Seamless deployment and performance monitoring ensure optimal user
              experience always
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
