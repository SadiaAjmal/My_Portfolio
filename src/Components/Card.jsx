import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Card = (props) => {
  return (
    <div className=" card md:w-[350px] w-[320px] mt-10 hover:scale-105 focus:scale-105 duration-75 shadow-lg rounded-lg">
      <img className=" rounded-t-lg w-[350px] h-[250px]" src={props.image} alt={props.name} />
      <p className="text-pText-clr pt-2 px-3">{props.category}</p>
      <p className="mx-0 text-[18px] p-3">{props.name}</p>
      <p className="text-pText-clr pt-2 px-3">{props.description}</p>
      <div className="flex items-center justify-center gap-3 bottom-3 p-3">
        <a href={props.link} target="blank">
          <button className="flex items-center gap-3 border-2 border-purple-500 text-custom-textclr px-2 mb-5 py-1 rounded-md hover:text-white hover:bg-box-bg focus:text-white focus:bg-box-bg">
            {props.btnStatus}
            <FaArrowRight className="w-5 h-5" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Card;
