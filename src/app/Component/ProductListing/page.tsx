"use client";
import Navbar2 from "../Navbar/Navbar2";
import TopBar from "../topBar/page";
import Listing3 from "../Listings/Listing3";
import Features1 from "../Features/page";
import Email from "../Email/page";
import Footer2 from "../Footer/Footer2";
import Image from "next/image";
import React, { useState } from "react";

const ProductListing = () => {
  const [value, setValue] = useState<number>(1);

  const handleIncrement = () => {
    setValue((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setValue((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <>
      <TopBar />
      <Navbar2 />

      {/* Product Detail */}

      <div className="flex flex-col md:flex-row mb-10">
        <div className="flex-1">
          <Image
            src="/assets/img/chair1.jpg"
            alt="A modern living room with a grey sofa, decorative pillows, and plants on cylindrical stands"
            width={600}
            height={400}
            quality={100}
            priority
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center p-8 md:p-16 bg-white container">
          <h1 className="text-2xl md:text-4xl font-helvetica text-gray-900 mb-4">
            The Dandy Chair
          </h1>
          <p className="text-1xl md:text-2xl text-gray-700 mb-12">£250</p>
          <h2 className="text-sm font-helvetica text-gray-900 mb-2">
            Description
          </h2>
          <p className="text-gray-500 mb-6">
            A timeless design, with premium materials features as one of our
            most popular and iconic pieces. The dandy chair is perfect for any
            stylish living space with beech legs and lambskin leather
            upholstery.
          </p>
          <ul className="list-disc list-inside text-gray-500 mb-12 pl-3">
            <li>Premium material</li>
            <li>Handmade upholstery</li>
            <li>Quality timeless classic</li>
          </ul>
          <h2 className="text-sm font-helvetica text-gray-900 mb-7">
            Dimensions
          </h2>
          <div className="flex mb-10 gap-8">
            <div className="">
              <p className="text-gray-700 text-sm font-helvetica mb-4">
                Height
              </p>
              <p className="text-gray-500 text-sm font-helvetica">110cm</p>
            </div>
            <div className="border-r border-gray-300 md:border-0"></div>
            <div className="">
              <p className="text-gray-700 text-sm font-helvetica mb-4">Width</p>
              <p className="text-gray-500 text-sm font-helvetica">75cm</p>
            </div>
            <div className="border-r border-gray-300 md:border-0"></div>
            <div>
              <p className="text-gray-700 text-sm font-helvetica mb-4">Depth</p>
              <p className="text-gray-500 text-sm font-helvetica">50cm</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center mb-6">
            <p className="text-gray-700 text-sm font-helvetica mr-4 hidden md:block mb-3">
              Amount:
            </p>
            <p className="text-gray-700 text-sm font-helvetica mr-4 block md:hidden mb-3">
              Quantitity:
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-56 sm:gap-8 sm:w-auto w-full mb-4 sm:mb-0">
              <div className="flex-1 flex items-center bg-gray-100 text-gray-500 w-full sm:w-auto">
                <button
                  className="px-2 py-1 text-gray-400 cursor-pointer"
                  onClick={handleDecrement}
                  disabled={value <= 1}
                >
                  -
                </button>
                <input
                  type="text"
                  className="w-full sm:w-12 bg-transparent text-center"
                  value={value}
                  readOnly
                />
                <button
                  className="px-2 py-1 text-gray-400 cursor-pointer"
                  onClick={handleIncrement}
                >
                  +
                </button>
              </div>
              <div className="sm:ml-4 w-full sm:w-auto">
                <button className="bg-[#2a254b] text-white font-thin px-6 py-3 w-full sm:w-auto">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Listing3 />
      <Features1 />
      <Email />
      <Footer2 />
    </>
  );
};
export default ProductListing;
