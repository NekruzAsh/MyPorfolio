import React from "react";
import Link from "next/link";

import { FiGithub, FiLinkedin} from "react-icons/fi";
import { SiDevpost } from "react-icons/si";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full lg:h-[150%] flex justify-center items-center"
    >
      <div className="max-w-[760px] m-auto lg:px-2 md:px-20 md:py-16 px-2 py-2 w-full">
        <p className="text-lg text-[#f44336] py-2 text-center">
          03. What's Next?
        </p>
        <h2 className=" text-[#BFD0E3] py-4 text-center md:text-[60px] mx-auto">
          Get In Touch
        </h2>
        <p className="text-[#7899BD] text-[17px] py-4 text-center mx-10 mb-10">
          If you have any opportunities, insights, or just want to say hi,
          please message me. I will get back to you as soon as possible!
        </p>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-full w-full h-auto bg-[#0F1D2D] shadow-lg rounded-sm lg:p-4">
            <div className="p-4">
              <form
                method="POST"
                action="https://getform.io/f/6d5bba2d-1ebe-4f38-80a4-03e0c4dbd955"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col ">
                    <label className=" text-md py-2 text-[#7899BD]">
                      Your Name
                    </label>
                    <input
                      className="text-[#f3f7fc] bg-[#2e3846] rounded-sm p-3 flex"
                      type="text"
                      placeholder="What's your name?"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className=" text-md py-2 text-[#7899BD]">
                      Your Email
                    </label>
                    <input
                      className="text-[#f3f7fc] bg-[#2e3846] rounded-sm p-3 flex"
                      type="email"
                      placeholder="What's your email?"
                      name="email"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className=" text-md py-2 text-[#7899BD]">
                    Your Subject
                  </label>
                  <input
                    className="text-[#f3f7fc] bg-[#2e3846] rounded-sm p-3 flex"
                    type="text"
                    placeholder="What's your subject?"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className=" text-md py-2 text-[#7899BD]">
                    Your Message
                  </label>
                  <textarea
                    className="text-[#f3f7fc] bg-[#2e3846] rounded-sm p-3"
                    rows="10"
                    placeholder="What do you want to say?"
                    name="message"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <div className="button-borders mt-4">
                  <button class="primary-button">
                    Send
                  </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-4 items-center mt-10 lg:hidden md:hidden">
          <a
            href="https://github.com/NekruzAsh"
            target="_blank"
            className="text-[#7899BD] hover:text-[#f44336] transition-colors duration-500"
          >
            <FiGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/nekruzash/"
            target="_blank"
            className="text-[#7899BD] hover:text-[#f44336] transition-colors duration-500"
          >
            <FiLinkedin size={24} />
          </a>
          <a
            href="https://devpost.com/NekruzAsh?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
            target="_blank"
            className="text-[#7899BD] hover:text-[#f44336] transition-colors duration-500"
          >
            <SiDevpost size={24} />
          </a>
        </div>
        <div className="text-sm text-center md:mt-36 mt-4 text-[#7899BD] cursor-pointer">
          <a
            className="hover:text-[#f44336] transition-colors duration-500"
            href="https://github.com/NekruzAsh/MyPortfolio.git"
            target="_blank"
          >
            Designed and Built by Nekruz Ashrapov
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
