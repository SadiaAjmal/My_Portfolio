import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const DiscussionBlock = () => {
  return (
    <div className=" text-center py-10 px-3 space-y-7 flex flex-col justify-center items-center text-white bg-block-bg ">
      <div className="  space-y-3">
        {" "}
        <p className="md:text-4xl text-3xl font-semibold">
          Do you have Project Idea?
        </p>
        <p className="md:text-4xl text-3xl font-semibold">
          Let's discuss your project!
        </p>
      </div>
      <p className=" px-10 w-96  text-center">
        Ready to materialize your project concept into a captivating digital
        experience.
      </p>

      <div className="flex justify-center md:justify-start">
        <a href="mailto:sadiaajmal463@gmail.com" target="blank">
          <button className="flex items-center gap-3 bg-box-bg text-white my-5 px-5 focus:bg-purple-600 hover:bg-purple-600 py-2 rounded-md">
            Lets discuss togather
            <FaArrowRight className="w-6 h-6" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default DiscussionBlock;
