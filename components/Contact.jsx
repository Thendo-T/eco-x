import React from "react";

const Contact = () => {
  return (
    <div className=" py-16 sm:px-6 h-screen flex justify-center items-center bg-slate-50">
      <div className="px-6">
        <h1 className="text-4xl text-[#28326C] font-bold">
          We Integrate With Your Ecosystem
        </h1>
        <p className="py-10 text-slate-800">
          Get started & tell us about your requirements
        </p>
      </div>

      <div className="mx-auto w-full max-w-2xl  bg-white p-8 shadow">
        <form className="grid grid-cols-1 gap-y-6">
          <div>
            <label htmlFor="name" className="sr-only">
              Full name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-[#28326C] focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2"
              placeholder="Full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="text"
              className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-[#28326C] focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2"
              placeholder="Email"
            />
          </div>
          <div>
            <label htmlFor="phone" className="sr-only">
              Subject
            </label>
            <input
              id="phone"
              type="text"
              name="subject"
              className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-[#28326C] focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2"
              placeholder="Subject"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-[#28326C] focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2"
              placeholder="Message"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex justify-center py-3 px-6 border border-transparent shadow text-base text-slate-50 font-medium rounded-md bg-[#28326C] hover:text-red-500 hover:bg-[#001648] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Get Quote
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
