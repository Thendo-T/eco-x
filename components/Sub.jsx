import React from 'react'
import { RiFileShield2Line, Ri24HoursLine } from "react-icons/ri";
import { GoDatabase } from "react-icons/go";
import { IoRocketOutline, IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Sub = () => {
  return (
    <div className="grid grid-rows-2 py-10 bg-slate-50 gap-10">
      <div className="grid grid-rows-1 grid-cols-4 gap-2 px-10">
        <div className="grid-cols-1 border border-red-500/40 w-5/6 px-2">
          <RiFileShield2Line className="py-1 text-red-500" size={50} />
          <h1 className="text-2xl text-slate-900">Process Optimisation</h1>
          <p className="text-slate-800">
            Business process optimization, across industries.
          </p>
        </div>
        <div className="grid-cols-1 border border-red-500/40 w-5/6 px-2">
          <GoDatabase className="py-1 text-red-500" size={50} />
          <h1 className="text-2xl text-slate-900">Data Integration</h1>
          <p className="text-slate-800">
            Migrate data across any protocol or systems with real time
            verification.
          </p>
        </div>
        <div className="grid-cols-1 border border-red-500/40 w-5/6 px-2">
          <IoRocketOutline className="py-1 text-red-500" size={50} />
          <h1 className="text-2xl text-slate-900">Rapid Customization</h1>
          <p className="text-slate-800">
            A Low Code Architecture allows for the creation of custom workflow
            with built in Delegation of Authority.
          </p>
        </div>
        <div className="grid-cols-1 border border-red-500/40 w-5/6 px-2">
          <Ri24HoursLine className="py-1 text-red-500" size={50} />
          <h1 className="text-2xl text-slate-900">Customer Experience</h1>
          <p className="text-slate-800">
            Platform as a Service with 24/7 Human Support.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center bg-[#001648]">
        <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
          <div className="rounded-full bg-red-500 text-slate-50 shadow-lg shadow-slate-400 p-3 cursor-pointer">
            <IoLocationOutline size={25} />
          </div>
          <div className="grid-rows-2 text-slate-50">
            <p>Head Office</p>
            <p>JHB South</p>
          </div>

          <div className="rounded-full bg-red-500 text-slate-50 shadow-lg shadow-slate-400 p-3 cursor-pointer">
            <AiOutlineMail size={25} />
          </div>
          <div className="grid-rows-2 text-slate-50">
            <p>Email</p>
            <p>contact@ppotts.com</p>
          </div>
          <div className="rounded-full bg-red-500 text-slate-50 shadow-lg shadow-slate-400 p-3 cursor-pointer">
            <BsTelephone size={25} />
          </div>
          <div className="grid-rows-2 text-slate-50">
            <p>Any Queries</p>
            <p>(+27) 83 567 9000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sub