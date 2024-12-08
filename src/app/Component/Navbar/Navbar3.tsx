"use client";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Link from "next/link";

const Navbar3 = () => {
  return (
    <>
      <nav className="bg-[#FFFFFF] sm:block">
        <div className="flex items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-helvetica text-gray-800">Avion</h1>

          <div className="flex items-center space-x-4 text-gray-600">
            <div className="justify-center space-x-10 text-sm text-gray-500 pr-10 hidden md:flex">
              <Link href="/Component/About" className="hover:text-gray-800">
                About us
              </Link>
              <a href="#" className="hover:text-gray-800">
                Contact
              </a>
              <a href="#" className="hover:text-gray-800">
                Blog
              </a>
            </div>
            <IoIosSearch className="text-xl hidden md:block" />
            <Link href="/Component/ShoppingCart">
              <IoCartOutline className="text-xl hidden md:block cursor-pointer" />
            </Link>
            <FaRegUserCircle className="text-xl hidden md:block" />

            <div className="md:hidden block">
              <button>
                <HiOutlineMenuAlt3 className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex container md:hidden justify-start md:justify-center bg-[#f9f9f9] space-x-12 py-5 text-sm text-gray-500 overflow-x-auto">
        <a href="#" className="hover:text-gray-800">
          All products
        </a>
        <a href="#" className="hover:text-gray-800">
          Plant pots
        </a>
        <a href="#" className="hover:text-gray-800">
          Ceramics
        </a>
        <a href="#" className="hover:text-gray-800">
          Tables
        </a>
        <a href="#" className="hover:text-gray-800">
          Chairs
        </a>
        <a href="#" className="hover:text-gray-800">
          Crockery
        </a>
        <a href="#" className="hover:text-gray-800">
          Tableware
        </a>
        <a href="#" className="hover:text-gray-800">
          Cutlery
        </a>
      </div>

      <div className="hidden md:flex justify-start md:justify-center bg-[#f9f9f9] space-x-12 py-5 text-sm text-gray-500 overflow-x-auto">
        <a href="#" className="hover:text-gray-800">
          All products
        </a>
        <a href="#" className="hover:text-gray-800">
          Plant pots
        </a>
        <a href="#" className="hover:text-gray-800">
          Ceramics
        </a>
        <a href="#" className="hover:text-gray-800">
          Tables
        </a>
        <a href="#" className="hover:text-gray-800">
          Chairs
        </a>
        <a href="#" className="hover:text-gray-800">
          Crockery
        </a>
        <a href="#" className="hover:text-gray-800">
          Tableware
        </a>
        <a href="#" className="hover:text-gray-800">
          Cutlery
        </a>
      </div>
    </>
  );
};

export default Navbar3;
