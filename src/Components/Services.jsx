import React from "react";

const Services = () => {
  return (
    <div className="services lg:flex justify-between items-center px-3 lg:h-screen py-10 lg:px-34 xl:px-40  md:px-20 bg-process-bg space-y-5">
      <div className="basis-[46%] flex flex-col justify-center gap-3">
        <p className="md:text-4xl text-3xl font-semibold">What I do?</p>
        <p>
          I develop responsive web interfaces using React, Next.js, Tailwind,
          and other front-end technologies to deliver seamless user experiences.
        </p>
        <div className="flex justify-center md:justify-start">
          <a href="mailto:sadiaajmal463@gmail.com" target="blank">
            <button className="bg-box-bg text-white my-5 px-5 focus:bg-purple-600 hover:bg-purple-600 py-2 rounded-md font-semibold">
              Contact
            </button>
          </a>
        </div>
        <div></div>
      </div>

      <div className=" space-y-6 mx-3 flex flex-col items-center justify-center basis-[46%]">
        <div className=" space-y-3 bg-white rounded-lg p-5 shadow-lg focus:scale-105 hover:scale-105">
          <p className=" font-semibold">Languages</p>
          <p className=" text-sm">
            Expert in HTML, CSS, JavaScript, and React. Building dynamic,
            interactive web applications. Delivering efficient, user-friendly
            interfaces.
          </p>
        </div>

        <div className=" space-y-3 bg-white rounded-lg p-5 shadow-lg  focus:scale-105 hover:scale-105">
          <p className=" font-semibold">Design & Styling</p>
          <p className=" text-sm">
            Utilizing CSS3, Tailwind, Bootstrap, Chakra UI, and Sass. Crafting
            responsive, visually stunning designs. Enhancing user experience
            through intuitive styling.
          </p>
        </div>

        <div className=" space-y-3 bg-white rounded-lg p-5 shadow-lg focus:scale-105 hover:scale-105">
          <p className=" font-semibold">Libraries and Framework</p>
          <p className=" text-sm">
            Leveraging Next.js, React Router DOM, and other libraries.
            Optimizing performance, navigation, and scalability. Building
            high-performance, responsive web applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
