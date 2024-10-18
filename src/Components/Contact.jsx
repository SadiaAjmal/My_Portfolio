import React from "react";

import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ecc63bc2-b725-4491-8ed0-197d40286d31");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();

      setTimeout(() => {
        setResult("");
      }, 3000);
    } else {
      console.log("Error", data);
      setResult(data.message);

      setTimeout(() => {
        setResult("");
      }, 3000);
    }
  };

  return (
    <div className=" contact px-3 lg:px-34 xl:px-40  md:px-20 flex items-center justify-center bg-custom-bg h-[115vh] md:h-[85vh] lg:h-[85vh] relative">
      <div className=" contact-card top-3 lg:bottom-[-20%] bottom-[-10%] box-border md:p-16 p-5 rounded-lg mt-5 shadow-lg bg-white absolute bg-contact-bg mx-3 md:mx-20 my-5 lg:flex justify-between ">
        <div className="  basis-[48%] space-y-3 mb-10">
          <div className="flex  items-center">
            <h1 className="  flex md:text-4xl text-2xl font-semibold mr-3">
              Let's discuss your project
            </h1>
          </div>
          <p className=" leading-7 md:leading-9 tracking-wide">
            I'm always open to explore new opportunities and connecting with
            like-minded individuals. Feel free to reach out to me through the
            contact information given below:
          </p>

          <li className=" list-none">
            <div className=" flex items-center">
              <SiGmail className=" w-5 h-5 mr-5 rounded-sm bg-box-bg text-white  p-1 cursor-pointer" />
              <a
                href="mailto:sadiaajmal463@gmail.com"
                target="blank"
                className=" text-black focus:text-custom-textclr hover:text-custom-textclr"
              >
                Send me an Email
              </a>
            </div>
          </li>
          <li className=" list-none">
            <div className=" flex items-center">
              <FaLinkedinIn className="  w-5 h-5 mr-5 rounded-sm bg-box-bg text-white  p-1 cursor-pointer" />
              <a
                href="https://www.linkedin.com/in/sadia-ajmal"
                target="_blank"
                className=" text-black focus:text-custom-textclr hover:text-custom-textclr"
              >
                Visit my LinkedIn profile
              </a>
            </div>
          </li>
          <li className=" list-none">
            <div className=" flex items-center ">
              <FaGithub className=" w-5 h-5 mr-5 rounded-sm bg-box-bg text-white  p-1 cursor-pointer" />
              <a
                href="https://github.com/SadiaAjmal"
                target="_blank"
                className=" text-black focus:text-custom-textclr hover:text-custom-textclr"
              >
                Visit my GitHub profile
              </a>
            </div>
          </li>
        </div>

        <div className=" basis-[48%] mb-10">
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className=" block w-full bg-slate-100 p-3 outline-none border-none mb-5 mt-1 resize-none rounded-md"
            />

            <label>Email Address</label>
            <input
              type="email"
              name="Email"
              placeholder="example@mail.com"
              required
              className=" block w-full bg-slate-100 p-3 outline-none border-none mb-5 mt-1 resize-none rounded-md"
            />

            <label>Write your Message</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Write your message here"
              required
              className=" block w-full bg-slate-100 p-3 outline-none border-none mb-5 mt-1 resize-none rounded-md"
            ></textarea>

            <div className=" flex mb-3">
              <button
                type="submit"
                className="bg-box-bg text-white mt-5 px-5 focus:bg-purple-600 hover:bg-purple-600 py-2 rounded-md font-semibold"
              >
                Submit Now
              </button>
            </div>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
