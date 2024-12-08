"use client";
import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import Link from "next/link";

const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#FFFFFF] font-Poppins">
        <div className="flex items-center justify-between px-4 py-4 sm:px-6">
          <h1 className="text-2xl font-helvetica text-gray-800">Avion</h1>

          <ul className="hidden sm:flex space-x-12 text-sm text-gray-500">
            <li>
              <a href="#" className="hover:text-gray-800">
                Plant pots
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Ceramics
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Tables
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Chairs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Crockery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Tableware
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Cutlery
              </a>
            </li>
          </ul>

          <div className="flex items-center space-x-4 text-gray-600">
            <IoIosSearch className="text-xl sm:block" />
            <Link href="/Component/ShoppingCart">
              <IoCartOutline className="text-xl cursor-pointer" />
            </Link>
            <FaRegUserCircle className="text-xl" />

            <button
              className="sm:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <HiX className="text-2xl text-gray-800" />
              ) : (
                <HiOutlineMenuAlt3 className="text-2xl text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <ul className="flex flex-col items-center space-y-4 px-6 py-4 text-sm text-gray-500 sm:hidden">
            <li>
              <a href="#" className="hover:text-gray-800">
                Plant pots
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Ceramics
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Tables
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Chairs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Crockery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Tableware
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Cutlery
              </a>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar2;
