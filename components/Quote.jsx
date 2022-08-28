import React from 'react'

const Quote = React.forwardRef(
  (
    {
      heading = "WE PROVIDE HIGH QUALITY SERVICES & INNOVATIVE SOLUTIONS FOR THE RELIABLE GROWTH",

    },
    ref
  ) => {
    return (
      <div
        {...{ ref }}
        className="grid grid-cols-1 custom-img3 h-screen text-slate-50"
      >
        <div className="flex flex-col col-span-1 justify-center items-center p-10 gap-6">
          <h2 className="text-5xl font-bold uppercase text-slate-50">{heading}</h2>
          <button className="px-4 py-2 border-2 bg-red-600 border-red-600 rounded-t-md rounded-b-md font-bold uppercase">
            Get a quote
          </button>
        </div>
        
      </div>
    );
  }
);


Quote.displayName = "Quote";

export default Quote;