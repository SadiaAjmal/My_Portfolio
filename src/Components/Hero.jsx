import React from "react";
import my_img from "../assets/dpw.jpg";
import About from "../Components/About";

const Hero = () => {
  return (
    <div className="hero lg:px-34 xl:px-40 justify-center flex sm:h-[180vh] lg:h-[150vh] md:h-[110vh]  bg-custom-bg px-3 md:py-5  md:px-20 ">
      <div className="relative md:flex  md:pt-40 pt-24 pb-10 justify-between">
        <div className=" basis-[48%] space-y-1 tracking-wider items-center justify-center flex-col">
          <p className="md:text-4xl text-3xl font-semibold ">Hello, I'm</p>
          <p className=" md:text-4xl text-3xl font-semibold ">Sadia Ajmal</p>
          <p className=" pt-4 ">
            I'm a Frontend Web Developer. I Strive to build beautiful and
            immersive web applications through carefully crafted code and
            user-centric design.
          </p>

          <div className="flex justify-center md:justify-start">
            <a href="mailto:sadiaajmal463@gmail.com" target="blank">
              <button className="bg-box-bg text-white my-5 px-5 focus:bg-purple-600 hover:bg-purple-600 py-2 rounded-md font-semibold">
                Contact
              </button>
            </a>
          </div>
        </div>

        <div className=" flex justify-center ">
          <img
            className=" h-auto md:h-80 w-60 md:w-72 rounded-md shadow-lg "
            src={my_img}
            alt="My Image"
          />
        </div>
      </div>

    </div>
  );
};

export default Hero;

//   lg:h-[150vh] lg:bottom-[-60%]       <div className="hero-about lg:px-20 absolute md:bottom-[-20%] bottom-[-120%] lg:bottom-[-70%]"><About /></div>
