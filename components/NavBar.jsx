import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";



const NavBar = () => {
   
  const [nav,setNav] = useState(false)

  const handleNav = () =>{
    setNav(!nav)
  }
{/*Toggle function*/}
  return (
    <div className="fixed w-full h-28 shadow-md z-[100] bg-slate-50">
      {/*shape of the navigation bar*/}
      <div className="flex justify-between items-center w-full h-full px-2 md:px-10 2xl:px-16">
        <Image
          src="https://ecox.vervi8.co.za/wp-content/uploads/2022/04/EcoX_Logo_2020-1024x328.png"
          alt="ecox logo"
          width="160"
          height="60"
        />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-14 text-sm font-bold text-[#001648] cursor-pointer uppercase hover:text-red-500 hover:scale-125 duration-300">
                Home
              </li>
            </Link>
            <Link href="/#About">
              <li className="ml-14 text-sm font-bold text-[#001648] cursor-pointer uppercase hover:text-red-500 hover:scale-125 duration-300">
                About
              </li>
            </Link>
            <Link href="/#Solutions">
              <li className="ml-14 text-sm font-bold text-[#001648] cursor-pointer uppercase hover:text-red-500 hover:scale-125 duration-300">
                Solutions
              </li>
            </Link>
            <Link href="/">
              <li className="ml-14 text-sm font-bold text-[#001648] cursor-pointer uppercase hover:text-red-500 hover:scale-125 duration-300">
                Vacancies
              </li>
            </Link>
            <Link href="/#Contact">
              <li className="ml-14 text-sm font-bold text-[#001648] cursor-pointer uppercase hover:text-red-500 hover:scale-125 duration-300">
                Contact Us
              </li>
            </Link>
          </ul>
        </div>
        <div className="px-16 hidden md:flex">
          <button className="border px-6 py-2 bg-red-500 text-white uppercase rounded-t rounded-b">
            Log In
          </button>
        </div>
        <div className="md:hidden border px-1 py-1 rounded-t rounded-b bg-[#001648]">
          <AiOutlineMenu onClick={handleNav} className="text-white" size={25} />
        </div>
      </div>
      {/*Desktop Navigation bar*/}

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/50" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed w-full top-0 h-[55%] sm:h-[55%] md:h-[45%] bg-[#001648] p-10 ease-in-out duration-300"
              : "fixed left-[-100%] top-0 p-10 ease-in-out duration-300"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="https://ecox.vervi8.co.za/wp-content/uploads/2022/04/EcoX_Logo_2020-1024x328.png"
                alt="ecox Logo"
                width="125"
                height="55"
              />
              <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer">
                <AiOutlineClose onClick={handleNav} className="text-white" />
              </div>
            </div>
          </div>
          <div className="py-16 flex-col">
            <ul className="uppercase divide-y  justify-center items-center">
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="ml-14 text-sm font-bold text-white hover:text-red-500"
                >
                  Home
                </li>
              </Link>
              <Link href="/#About">
                <li
                  onClick={() => setNav(false)}
                  className="ml-14 text-sm font-bold text-white my-4 hover:text-red-500"
                >
                  About
                </li>
              </Link>
              <Link href="/#Solutions">
                <li
                  onClick={() => setNav(false)}
                  className="ml-14 text-sm font-bold text-white my-4 hover:text-red-500"
                >
                  Solutions
                </li>
              </Link>
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="ml-14 text-sm font-bold text-white my-4 hover:text-red-500"
                >
                  Vacancies
                </li>
              </Link>
              <Link href="/Contact">
                <li
                  onClick={() => setNav(false)}
                  className="ml-14 text-sm font-bold text-white my-4 hover:text-red-500"
                >
                  Contact Us
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
