import React from 'react'
import Image from "next/image";
import Amazon from '../public/assets/amazon.png';
import Google from "../public/assets/google.png";
import Crayon from '../public/assets/crayon.png';
import Microsoft from '../public/assets/microsoft.png';

const Solution = () => {
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 h-screen bg-slate-50 py-[76rem] sm:py-[40rem] md:py-16">
      <div className="grid grid-cols-1">
        <div className="grid-rows-1 custom-img2 h-[490px]"></div>
        <div>
          <ul className="hidden sm:flex md:h-20">
            <Image src={Amazon} alt="Ecox associates" width="180" height="60" o />
            <Image src={Google} alt="Ecox associates" width="180" height="60" />
            <Image
              src={Microsoft}
              alt="Ecox associates"
              width="180"
              height="60"
            />
            <Image src={Crayon} alt="Ecox associates" width="180" height="60" />
          </ul>
          {/*end of desktop look*/}
          <ul className="flex sm:hidden">
            <Image src={Amazon} alt="Ecox associates" width="90" height="60" />
            <Image src={Google} alt="Ecox associates" width="90" height="60" />
            <Image
              src={Microsoft}
              alt="Ecox associates"
              width="90"
              height="60"
            />
            <Image src={Crayon} alt="Ecox associates" width="90" height="60" />
          </ul>
        </div>
      </div>
      {/*End of Column 1 which consists of 2 rows, one having a background image and the other having images of associates*/}

      <div className="grid  grid-cols-1 bg-[#001648] py-6 sm:h-[530px] md:h-[550px] mt-10S">
        <div className="grid grid-cols-1 px-16 py-6 md:px-16">
          <div className="flex items-center h-fit ">
            <div className="border-t border-t-red-500 w-[30px] sm:w-[90px]"></div>
            <h1 className="px-2 text-red-500">Industry Solutions</h1>
          </div>
          <div className="">
            <h1 className="text-xl text-red-500 sm:text-2xl md:text-4xl">
              Business process customizations and workflow to be developed at an
              unparalleled pace.
            </h1>
          </div>
          <div className="inline-grid grid-cols-2 ">
            <div className="grid grid-cols-1 ">
              <ul className="inline">
                <h1 className="py-4 text-white sm:py-2">
                  Integration to ERP systems
                </h1>
                <h1 className="py-4 text-white sm:py-2">
                  Recruitment Databases
                </h1>
                <h1 className="py-4 text-white sm:py-2">Stock Markets</h1>
                <h1 className="py-4 text-white sm:py-2">
                  Escrows and payments
                </h1>
                <h1 className="py-4 text-white sm:py-2">Contract Management</h1>
                <h1 className="py-4 text-white sm:py-2">
                  Data Analysis and Migration
                </h1>
                <h1 className="py-4 text-white sm:py-2">
                  Operating Model Analysis
                </h1>
              </ul>
            </div>
            <div className="grid grid-cols-1">
              <ul className="inline">
                <h1 className="py-4 text-white sm:py-2">Home Affairs</h1>
                <h1 className="py-4 text-white sm:py-2">
                  Verification Providers
                </h1>
                <h1 className="py-4 text-white sm:py-2">
                  Blockchain Integration
                </h1>
                <h1 className="py-4 text-white sm:py-2">Project Management</h1>
                <h1 className="py-4 text-white sm:py-2">
                  Corporate Governance
                </h1>
                <h1 className="py-4 text-white sm:py-2">
                  Real Time Monitoring and Reporting
                </h1>
                <h1 className="py-4 text-white sm:py-2">
                  Cyber Security Design
                </h1>
              </ul>
            </div>
          </div>
          {/*List*/}
        </div>
      </div>
      {/*End of Column 2*/}
    </div>
  );
}

export default Solution