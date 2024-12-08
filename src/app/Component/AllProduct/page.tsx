"use client";
import Navbar1 from "../Navbar/page";
import Footer1 from "../Footer/page";
import Image from "next/image";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import Link from "next/link";

interface FilterOption {
  name: string;
  options: string[];
}

const listings = [
  {
    image: "/assets/img/chair.jpg",
    alt: "A modern black chair with wooden legs",
    title: "The Dandy chair",
    price: "£250",
  },
  {
    image: "/assets/img/vaseset.jpg",
    alt: "A set of rustic vases on a pedestal",
    title: "Rustic Vase Set",
    price: "£155",
  },
  {
    image: "/assets/img/vase.jpg",
    alt: "A single sleek vase on a white surface",
    title: "The Silky Vase",
    price: "£125",
  },
  {
    image: "/assets/img/lamp.jpg",
    alt: "A modern hanging lamp with a blue background",
    title: "The Lucy Lamp",
    price: "£399",
  },
  {
    image: "/assets/img/modernlamp.jpg",
    alt: "A modern black chair with wooden legs",
    title: "The Dandy chair",
    price: "£250",
  },
  {
    image: "/assets/img/vaseyellow.jpg",
    alt: "A set of rustic vases on a pedestal",
    title: "Rustic Vase Set",
    price: "£155",
  },
  {
    image: "/assets/img/table.jpg",
    alt: "A single sleek vase on a white surface",
    title: "The Silky Vase",
    price: "£125",
  },
  {
    image: "/assets/img/chair5.jpg",
    alt: "A modern hanging lamp with a blue background",
    title: "The Lucy Lamp",
    price: "£399",
  },
  {
    image: "/assets/img/chair.jpg",
    alt: "A modern black chair with wooden legs",
    title: "The Dandy chair",
    price: "£250",
  },
  {
    image: "/assets/img/vaseset.jpg",
    alt: "A set of rustic vases on a pedestal",
    title: "Rustic Vase Set",
    price: "£155",
  },
  {
    image: "/assets/img/vase.jpg",
    alt: "A single sleek vase on a white surface",
    title: "The Silky Vase",
    price: "£125",
  },
  {
    image: "/assets/img/lamp.jpg",
    alt: "A modern hanging lamp with a blue background",
    title: "The Lucy Lamp",
    price: "£399",
  },
];

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
      <div className="relative w-[482px] md:w-[1349px] h-[209px] mx-auto">
        <Image
          src="/assets/img/bg.jpeg"
          alt="Background with a dark texture and a wooden object on the right"
          className="w-[1440px] h-[209px] object-cover"
          width={1440}
          height={209}
          quality={100}
          priority
        />
        <div className="container pt-0 md:pt-20 absolute inset-0 flex items-center justify-center md:justify-start font-helvetica text-white text-4xl md:text-2xl z-10">
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
        <div className="flex gap-5">
          <div className="relative flex md:hidden">
            <div
              className="flex items-center space-x-1 cursor-pointer bg-gray-100 md:bg-transparent py-4 px-6 md:py-0 md:px-0"
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
              className="flex items-center space-x-1 cursor-pointer bg-gray-100 md:bg-transparent py-4 px-6 md:py-0 md:px-0"
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

      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-14">
          {listings.map((listing, index) => (
            <Link key={index} href={"/Component/ProductListing"}>
              <div className="pb-3">
                <div className="w-full h-[300px]">
                  <Image
                    src={listing.image}
                    alt={listing.alt}
                    width={300}
                    height={400}
                    quality={100}
                    priority
                    className="object-cover h-full w-full"
                  />
                </div>
                <h2 className="text-lg font-normal text-gray-900 mt-4">
                  {listing.title}
                </h2>
                <p className="text-gray-500">{listing.price}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center text-center mt-10 mb-10">
          <Link href={"/Component/AllProduct"}>
            <button className="bg-gray-100 lg:block text-gray-500 font-light py-4 px-6 w-full lg:w-44">
              View collection
            </button>
          </Link>
        </div>
      </div>
      <Footer1 />
    </>
  );
};

export default AllProduct;
