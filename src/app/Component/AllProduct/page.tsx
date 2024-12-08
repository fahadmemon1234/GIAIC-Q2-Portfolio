"use client";
import { Navbar1 } from "../Navbar/page";
import { Footer1 } from "../Footer/page";
import Image from "next/image";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

interface FilterOption {
  name: string;
  options: string[];
}

const AllProduct = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const filters: FilterOption[] = [
    { name: "Category", options: ["Electronics", "Clothing", "Home Decor"] },
    { name: "Product type", options: ["New", "Used", "Refurbished"] },
    { name: "Price", options: ["Under $50", "$50-$100", "Over $100"] },
    { name: "Brand", options: ["Apple", "Samsung", "Sony"] },
  ];

  return (
    <>
      <Navbar1 />
      <div className="relative w-full">
        <Image
          src="/assets/img/bg.jpeg"
          alt="Background with a dark texture and a wooden object on the right"
          className="w-[1440px] h-[209px] object-cover"
          width={1440}
          height={209}
          quality={100}
          priority
        />
        <div className="container font-helvetica absolute bottom-[520px] md:bottom-[480px] left-4 z-10 text-white text-4xl md:text-2xl text-center md:text-left">
          All products
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between items-center p-4 container">
        <div className="space-x-8 hidden md:flex">
          {filters.map((filter, index) => (
            <div key={index} className="relative">
              <div
                className="flex items-center space-x-1 cursor-pointer"
                onClick={() => toggleDropdown(filter.name)}
              >
                <span className="text-gray-800 pr-2">{filter.name}</span>
                <FaCaretDown className="text-gray-800" />
              </div>
              {openDropdown === filter.name && (
                <div className="absolute mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg z-20">
                  <ul className="p-2 space-y-2 text-gray-700">
                    {filter.options.map((option, idx) => (
                      <li
                        key={idx}
                        className="hover:bg-gray-100 p-2 cursor-pointer"
                        onClick={() => {
                          setOpenDropdown(null);
                        }}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex gap-8">
          <div className="relative flex md:hidden">
            <div
              className="flex items-center space-x-1 cursor-pointer bg-gray-100 md:bg-transparent py-4 px-10 md:py-0 md:px-0"
              onClick={() => toggleDropdown("Filter")}
            >
              <span className="text-gray-800 pr-2">Filter</span>
              <FaCaretDown className="text-gray-800" />
            </div>
            {openDropdown === "Filter" && (
              <div className="absolute mt-14 w-40 bg-white border border-gray-300 rounded shadow-lg z-20">
                <ul className="p-2 space-y-2 text-gray-700">
                  {filters.map((filter, index) => (
                    <li
                      key={index}
                      className="hover:bg-gray-100 p-2 cursor-pointer"
                      onClick={() => {
                        setOpenDropdown(null);
                      }}
                    >
                      {filter.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="relative flex">
            <div
              className="flex items-center space-x-1 cursor-pointer bg-gray-100 md:bg-transparent py-4 px-10 md:py-0 md:px-0"
              onClick={() => toggleDropdown("Sorting")}
            >
              <span className="text-gray-800">Sorting by:</span>
              <span className="text-gray-800 hidden md:inline pl-10 pr-2">
                Date added
              </span>
              <FaCaretDown className="text-gray-800" />
            </div>
            {openDropdown === "Sorting" && (
              <div className="absolute mt-14 md:mt-5 w-40 bg-white border border-gray-300 rounded shadow-lg z-20">
                <ul className="p-2 space-y-2 text-gray-700">
                  {[
                    "Newest",
                    "Oldest",
                    "Price: Low to High",
                    "Price: High to Low",
                  ].map((option, idx) => (
                    <li
                      key={idx}
                      className="hover:bg-gray-100 p-2 cursor-pointer"
                      onClick={() => {
                        setOpenDropdown(null);
                      }}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer1 />
    </>
  );
};

export default AllProduct;
