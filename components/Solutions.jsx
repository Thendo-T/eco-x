import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineMobile } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { TbBulb } from "react-icons/tb";
import { IoIosPeople } from 'react-icons/io';


const Solutions = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen bg-slate-50 text-slate-800 px-10 py-80 md:py-16">
      <div className="grid-cols-1 w-1/2">
        <div>
          <div className="flex items-center h-fit ">
            <div className="border-t border-t-blue-900 w-[30px] sm:w-[90px]"></div>
            <h1 className="px-2 text-[#28326C]">Our Solutions</h1>
          </div>
          <div className="md:py-6">
            <h1 className="text-xl md:text-3xl text-[#28326C]">
              Creating a universal, integrated Eco System.
            </h1>

            <p className="py-2 md:py-8 w-3/4">
              By combining our engineering knowledge with years of hands-on
              experience implementing ERP and process optimization solutions
              Ecox was created.
            </p>
          </div>
          <button className="flex border px-7 scroll-m p-0 sm:py-2 bg-red-500 text-white rounded-t rounded-b">
            <span>
              <BsArrowRight size={20} /> get started
            </span>
          </button>
        </div>
      </div>
      {/*First column*/}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 -px-20 items-start">
        <div className="">
          <div className="text-[#28326C]"><AiOutlineMobile size={35}/></div>
          
          <h1 className="text-md md:text-lg text-red-500 font-bold uppercase">
            One Platform
          </h1>
          <p className="py-1 md:py-4 text-start">
            One Platform controls them all.Give your users a single interface
            that talks to all your legacy systems
          </p>
        </div>
        <div className="">
          <div className="text-[#28326C]"><FiSettings size={35}/></div>
          
          <h1 className="text-lg text-red-500 font-bold uppercase">
            Data Insights
          </h1>
          <p className="py-1 md:py-4 text-start">
            Eco X uses Artificial Intelligence and advanced data processing
            providing you with real time strategic insights with built in
            Workflow.
          </p>
        </div>
        <div className=" py-4">
          <div className="text-[#28326C]"><TbBulb size={35}/></div>
          
          <h1 className="text-lg text-red-500 font-bold uppercase">
            Process Mapping
          </h1>
          <p className=" py-4 text-start">
            AS-IS and TO-BE,Our exclusive partner networks brings together
            leading industry experts who will architect and implement your
            automation vision.
          </p>
        </div>
        <div className=" py-4">
          <div className="text-[#28326C]"><IoIosPeople size={35}/></div>
          
          <h1 className="text-lg text-red-500 font-bold uppercase">
            Process Automation
          </h1>
          <p className=" py-4 text-start">
            Eco X runs on Microsoft Azure, AWS or On-Premise and has thousands
            of APIs that enable real time data transfer across all protocols,
            networks and systems.
          </p>
        </div>
      </div>
      {/*Right side of the column*/}
    </div>
  );
}

export default Solutions