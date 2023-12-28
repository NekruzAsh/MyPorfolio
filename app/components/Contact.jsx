import React from "react";
import Link from "next/link";

import { HiChevronDoubleUp } from "react-icons/hi";
import { IoIosMail } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";



const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen ">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <h2 className=" uppercase text-[#f44336] py-4">Contact</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-gray-400 rounded-xl p-4 bg-[#222222]">
            <div className="lg:p-4 h-full">
              <div className="text-white">
                <h2 className="py-2">Nekruz Ashrapov</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for Summer 2024 Co-op/Internship. <br /> If you
                  have any opportunities, insights, or questions please reach
                  out to me at:
                </p>
                <div className="flex items-center">
                  <span className="text-[#f44336]"><IoIosMail size={25} /></span>{" "}
                  <span className="ml-2">ashrapnz@mail.uc.edu</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#f44336]"><IoLogoLinkedin size={25} /></span>{" "}
                  <a className="ml-2 hover:text-[#f44336]" href="https://www.linkedin.com/in/nekruzash/" target="_blank">Nekruz | LinkedIn</a>
                </div>
                
              </div>
            </div>
          </div>

          <div className="col-span-3 w-full h-auto bg-[#222222] shadow-md shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form method="POST" action="https://getform.io/f/6d5bba2d-1ebe-4f38-80a4-03e0c4dbd955">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col ">
                    <label className="uppercase text-sm py-2 text-white">Name</label>
                    <input
                      className="text-white border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      placeholder="Jane Doe"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 text-white">Email</label>
                    <input
                      className="text-white border-2 rounded-lg p-3 flex border-gray-300"
                      type="email"
                      placeholder="janedoe@gmail.com"
                      name="email"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 text-white">Subject</label>
                  <input
                    className="text-white border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    placeholder="Subject"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 text-white">Message</label>
                  <textarea
                    className="text-white border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    placeholder="Message"
                    name="message"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button className="text-white bg-[#f44336] font-bold rounded border-b-2 border-gray-600 hover:border-gray-800 hover:text-gray-800 shadow-md py-2 px-6 inline-flex items-center">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/#home">
            <div className=" bg-[#222222] shadow-md shadow-gray-400 rounded-full p-4 cursor-pointer hover:scale-110 ease-in duration-200">
              <HiChevronDoubleUp className="m-auto text-[#f44336]" size={25} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
