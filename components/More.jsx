import React from 'react'

const More = React.forwardRef(
  (
    {
      heading = "Dedicated Developers",
      message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    ref
  ) => {
    return (
      <div
        {...{ ref }}
        className="grid  grid-cols-1 md:grid-cols-2 custom-img h-[373px] top-0 md:py-28 md:min-h-screen text-white"
      >
        <div className="flex flex-col col-span-1 justify-center items-center p-10">
          <h2 className="text-5xl font-bold">{heading}</h2>
          <p className="py-5 text-xl max-w-[500px]">{message}</p>
          <button className="px-4 py-2 border-2 border-white rounded-t-md rounded-b-md font-bold">
            Learn more
          </button>
        </div>
        <div className="relative col-span-1">
          <div className="relative md:absolute w-full md:w-2/3 h-[373px] md:h-96 md:bg-[#001648]/90 bg-[#001648] md:-top-[200px] right-0">
            <div className="uppercase py-12 divide-y justify-center items-center">
              <h1 className="ml-14 p-5 text-sm font-bold text-white hover:text-red-500 cursor-default">
                Integrated Business Systems
              </h1>
              <h1 className="ml-14 p-5  text-sm font-bold text-white hover:text-red-500 cursor-default">
                Enterprise Integration
              </h1>
              <h1 className="ml-14 p-5  text-sm font-bold text-white hover:text-red-500 cursor-default">
                Data Aggregation
              </h1>
              <h1 className="ml-14 p-5  text-sm font-bold text-white hover:text-red-500 cursor-default">
                Process Automation
              </h1>
              <h1 className="ml-14 p-5  text-sm font-bold text-white hover:text-red-500 cursor-default">
                Business Intelligence
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
);


More.displayName = "More";

export default More;