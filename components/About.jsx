import React from "react";
import { FaUsers, FaMedal } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";

const About = () => {
  return (
    <div className="grid h-screen grid-cols-1 mt-20 md:grid-cols-2 bg-slate-50 text-slate-800 py-80 md:py-5 md:scroll-py-24">
      <div className="grid items-start grid-cols-1 gap-2 p-10 md:grid-cols-2">
        <div className=" md:border-r md:border-r-slate-400">
          <h1 className="text-lg font-bold text-red-500 uppercase">Experts</h1>
          <p className="py-4 text-start">
            We pride ourselves as data and process experts skilled in multiple
            programming languages with a deep understanding of Enterprise
            Architecture, Artificial Intelligence and Blockchain.
          </p>
        </div>
        <div>
          <h1 className="text-lg font-bold text-red-500 uppercase">
            Methodology
          </h1>

          <p className="py-4 text-start">
            Adopting a low code methodology with unparalleled integration to
            legacy systems we are transitioning enterprises from old ways of
            working into the future of work.
          </p>
        </div>
        <div className="py-4 md:border-r md:border-r-slate-400">
          <h1 className="text-lg font-bold text-red-500 uppercase">
            Architecture
          </h1>
          <p className="py-4 text-start">
            We pride ourselves as data and process experts skilled in multiple
            programming languages with a deep understanding of Enterprise
            Architecture, Artificial Intelligence and Blockchain.
          </p>
        </div>
        <div className="py-4 ">
          <h1 className="text-lg font-bold text-red-500 uppercase">
            Solutions
          </h1>
          <p className="py-4 text-start">
            By combining our engineering knowledge with years of hands-on
            experience implementing ERP and process optimization solutions Eco X
            was created.
          </p>
        </div>
      </div>
      {/*Left side of main column*/}

      <div className="grid grid-cols-1 px-6 mt-10 text-slate-800 md:px-16">
        <div className="flex items-center h-fit ">
          <div className="border-t border-t-blue-900 w-[90px]"></div>
          <h1 className="px-2 text-[#28326C]">Unique Identity</h1>
        </div>
        <div>
          <h1 className="text-4xl ">
            We partner with industry experts for business processes.
          </h1>
        </div>
        <div className="grid items-start grid-cols-2 gap-2 px-4 mt-10">
          <div className="grid grid-cols-2 ">
            <div>
              <FaUsers size={25} />
            </div>
            <div className="grid grid-rows-2">
              <h1>15k</h1>
              <h1>Number of users</h1>
            </div>
          </div>
          <div className="grid grid-cols-2 ">
            <div>
              <FaMedal size={25} />
            </div>
            <div className="grid grid-rows-2">
              <h1>1</h1>
              <h1>Industry Awards</h1>
            </div>
          </div>
          <div className="grid grid-cols-2 ">
            <div>
              <GrMapLocation size={25} />
            </div>
            <div className="grid grid-rows-2">
              <h1>5</h1>
              <h1>Countries Worldwide</h1>
            </div>
          </div>
          <div className="grid grid-cols-2 ">
            <div>
              <FiSettings size={25} />
            </div>
            <div className="grid grid-rows-2">
              <h1>47</h1>
              <h1>Process Modules</h1>
            </div>
          </div>
        </div>
        <div className="py-10">
          <p>
            Pepper Potts Pty Ltd is a South African based technology company
            that specializes in integrated business systems, enterprise
            integration, data aggregation, process automation and business
            intelligence
          </p>
        </div>
      </div>
      {/*Second part of main column*/}
    </div>
  );
};

export default About;
