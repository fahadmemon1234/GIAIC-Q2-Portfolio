"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 border-b-[1px] border-gray-200">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/assets/logo/Cartziologo.png"
              className="h-[22px] w-full"
              width={100}
              height={100}
              alt="Logo"
            />
          </Link>

          <div
            className={`hidden md:flex items-center md:w-auto space-x-8`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse p-4 md:p-0 mt-4 md:mt-0 rounded-lg bg-gray-50 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              {["Home", "Products", "Shop", "Pages", "Sale", "Contact Us"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href={`/${link.toLowerCase().replace(" ", "-")}`}
                      passHref
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="flex items-center space-x-4 md:space-x-6">
            <div className="relative">
              <HiOutlineShoppingCart
                className="w-6 h-6 text-orange-500"
                aria-hidden="true"
              />
              <span className="absolute top-0 left-1 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-semibold rounded-full h-4 w-4 flex items-center justify-center">
                1
              </span>
            </div>

            <FiUser
              className="w-6 h-6 text-orange-500 rounded-full"
              aria-hidden="true"
            />

            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <FaBars className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 shadow-custom ease-in-out z-10 lg:hidden`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-black text-2xl focus:outline-none"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>

          {/* Menu Links */}
          <ul className="flex flex-col items-center space-y-4 pt-20 text-black">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
