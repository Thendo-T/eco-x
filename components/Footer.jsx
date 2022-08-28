import React from 'react'
import Image from "next/image";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#001648] h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-10 px-0">
        <div className="p-5">
          <ul>
            <Image
              className="pb-6 -px-12"
              src="https://ecox.vervi8.co.za/wp-content/uploads/2022/04/primary_logo_text.png"
              alt="Pepper Potts"
              width="160"
              height="50"
            />
            <div className="flex gap-6 pb-5">
              {/*Icons Section*/}
              <AiFillLinkedin className="text-4xl text-white cursor-pointer hover:text-blue-600" />
              <AiOutlineTwitter className="text-4xl text-white cursor-pointer hover:text-sky-600" />
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="pb-4 text-2xl font-bold text-slate-50">Company</p>
            <li className="font-semibold cursor-pointer text-slate-50 text-md hover:text-red-500">
              About
            </li>
            <li className="font-semibold cursor-pointer text-slate-50 text-md hover:text-red-500">
              Solutions
            </li>
            <li className="font-semibold cursor-pointer text-slate-50 text-md hover:text-red-500">
              Contact Us
            </li>
            <li className="font-semibold uppercase cursor-pointer text-slate-50 text-md hover:text-red-500">
              Faq
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="pb-4 text-2xl font-bold text-slate-50">Services</p>
            <li className="font-semibold cursor-pointer text-slate-50 text-md hover:text-red-500">
              Process Automation
            </li>
            <li className="font-semibold cursor-pointer text-slate-50 text-md hover:text-red-500">
              Process Mapping
            </li>
            <li className="font-semibold cursor-pointer text-slate-50 text-md hover:text-red-500">
              Data Insights
            </li>
            <li className="font-semibold cursor-pointer text-slate-50 text-md hover:text-red-500">
              Data Intergration
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="pb-4 text-2xl font-bold text-slate-50">Follow Us</p>
            <li className="font-semibold cursor-pointer text-slate-50 text-md hover:text-red-500">
              Facebook
            </li>
            <li className="font-semibold cursor-pointer text-slate-50 text-md hover:text-red-500">
              Twitter
            </li>
            <li className="font-semibold cursor-pointer text-slate-50 text-md hover:text-red-500">
              Instagram
            </li>
            <li className="font-semibold cursor-pointer text-slate-50 text-md hover:text-red-500">
              Youtube
            </li>
          </ul>
        </div>
        <div className="p-5">
          <div>
            <input
              className="w-3/6 py-2"
              type="email"
              name="sub-email"
              placeholder="Email"
            />
            <button className="px-6 py-2 rounded-t rounded-b bg-slate-500 text-slate-50 hover:bg-red-500">
              Subscribe
            </button>
          </div>
          <ul className="w-64 pt-5">
            <p className="text-slate-50">
              We pride ourselves as data and process experts skilled in multiple
              programming languages with a deep understanding of Enterprise
              Architecture, Artificial Intelligence and Blockchain.
            </p>
          </ul>
        </div>
      </div>
      <div className="border-t  border-t-slate-50"></div>
      <div className="p-5 bg-[#001648]">
        <ul className="flex justify-between ">
          <h1 className="font-semibold cursor-pointer  text-slate-400 text-md">
            Copyright © 2021 Pepper Potts
          </h1>
          <ul className="flex">
            <h1 className="text-slate-400">Marketing by</h1>
            <li className="px-1 text-red-500">Hachoo</li>
            <h1 className="text-slate-400">. Website designed by</h1>
            <li className="px-1 text-red-500">vervi8 Solutions</li>
          </ul>
        </ul>
      </div>
    </div>
  );
}

export default Footer