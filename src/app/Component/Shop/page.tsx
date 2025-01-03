"use client";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { IoGrid } from "react-icons/io5";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { SlBasketLoaded } from "react-icons/sl";
import { useState } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import Tippy from "@tippyjs/react";

const Shop = () => {
  const products = [
    {
      id: 1,
      title: "Batin crofessor pampden",
      price: "$130.00",
      oldPrice: "$110.00",
      imageUrl: "/assets/images/products/drone/product1.webp",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      labels: ["Sale", "-11%"],
    },
    {
      id: 2,
      title: "Example Product 2",
      price: "$150.00",
      oldPrice: "$120.00",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      imageUrl: "/assets/images/products/drone/product2.webp",
      labels: ["New", "-15%"],
    },
    {
      id: 3,
      title: "Example Product 3",
      price: "$180.00",
      oldPrice: "$160.00",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      imageUrl: "/assets/images/products/drone/product3.webp",
      labels: ["Hot", "-10%"],
    },
  ];

  const [activeTab, setActiveTab] = useState("grid");

  return (
    <>
      <div className="py-14 bg-white"></div>
      {/* <!-- Hero section start --> */}
      <div className="py-9 bg-gray-light">
        <div className="container">
          <div className="grid grid-cols-12 gap-x-4">
            <div className="col-span-12">
              <nav>
                <ul className="flex flex-wrap items-center justify-center">
                  <li className="mr-5">
                    <Link
                      href="/"
                      className="text-dark font-medium text-base uppercase transition-all hover:text-orange relative before:w-5 before:h-1px before:empty before:absolute before:top-3 before:bg-dark before:transform before:rotate-115 before:-right-5"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="text-dark font-medium text-base uppercase mr-5">
                    Shop
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Hero section end --> */}

      {/* <!-- blog grid section start --> */}

      <div className="py-24">
        <div className="container">
          <div className="flex flex-wrap flex-col lg:flex-row">
            <div id="shoptab" className="flex-1">
              <div className="flex flex-wrap justify-between items-center px-4">
                <div className="flex flex-wrap">
                  <div className="shop-select flex items-center space-x-4 mr-12">
                    <label
                      htmlFor="SortBy"
                      className="text-gray-700 font-medium whitespace-nowrap"
                    >
                      Sort by:
                    </label>
                    <select
                      id="SortBy"
                      className="form-control border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring focus:ring-orange-500 focus:outline-none"
                    >
                      <option value="manual">Featured</option>
                      <option value="best-selling">Best Selling</option>
                      <option value="title-ascending">
                        Alphabetically, A-Z
                      </option>
                      <option value="title-descending">
                        Alphabetically, Z-A
                      </option>
                      <option value="price-ascending">
                        Price, low to high
                      </option>
                      <option value="price-descending">
                        Price, high to low
                      </option>
                      <option value="created-descending">
                        Date, new to old
                      </option>
                      <option value="created-ascending">
                        Date, old to new
                      </option>
                    </select>
                  </div>

                  <p className="my-2 sm:my-0">Showing 1 - 9 of 9 result</p>
                </div>
                <div className="shop-select flex items-center space-x-4 mr-12">
                  <label
                    htmlFor="Show"
                    className="text-gray-700 font-medium whitespace-nowrap"
                  >
                    Show:
                  </label>
                  <select className="form-control border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring focus:ring-orange-500 focus:outline-none">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                <div>
                  <ul className="shop-tab-nav flex flex-wrap items-center">
                    <li
                      className={`cursor-pointer ${
                        activeTab === "grid" ? "text-orange" : "text-gray-500"
                      }`}
                      onClick={() => setActiveTab("grid")}
                    >
                      <IoGrid size={20} />
                    </li>
                    <li
                      className={`ml-5 cursor-pointer ${
                        activeTab === "list" ? "text-orange" : "text-gray-500"
                      }`}
                      onClick={() => setActiveTab("list")}
                    >
                      <IoIosMenu size={25} />
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                {activeTab === "grid" && (
                  <div id="grid" className={`shop-tab-content`}>
                    <div className="flex flex-wrap -my-4 -px-4">
                      {products.map((product) => (
                        <div
                          key={product.id}
                          className="w-full md:w-1/2 lg:w-1/3 2xl:w-1/4 px-4 my-4"
                        >
                          <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative">
                            <div className="relative overflow-hidden">
                              {product.labels.map((label, index) => (
                                <span
                                  key={index}
                                  className={`font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-${
                                    3 + index * 7
                                  } right-3`}
                                >
                                  {label}
                                </span>
                              ))}
                              <Image
                                className="w-full h-full"
                                src={product.imageUrl}
                                alt={product.title}
                                loading="lazy"
                                width={432}
                                height={480}
                                quality={80}
                              />

                              {/* Actions start */}
                              <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden">
                                  <li className="py-4 pl-7 md:py-5 md:pl-8">
                                    <Tippy
                                      content="Add to wishlist"
                                      placement="top"
                                    >
                                      <Link
                                        href="whishlist.html"
                                        className="text-dark flex items-center justify-center text-md hover:text-orange"
                                        aria-label="Add to wishlist"
                                        data-tippy-content="Add to wishlist"
                                      >
                                        <FaRegHeart size={20} />
                                      </Link>
                                    </Tippy>
                                  </li>

                                  <li className="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8">
                                    <Tippy
                                      content="Add to cart"
                                      placement="top"
                                    >
                                      <Link
                                        href="#modal-addto-cart"
                                        className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle"
                                        aria-label="Add to cart"
                                        data-tippy-content="Add to cart"
                                      >
                                        <MdOutlineShoppingBag size={20} />
                                      </Link>
                                    </Tippy>
                                  </li>
                                </ul>
                              </div>
                              {/* Actions end */}

                              {/* Variants start */}
                              <div className="p-2 bg-gray-200 shadow absolute left-2 right-2 -bottom-40 group-hover:bottom-2 z-20 transition-all duration-500 ease-linear">
                                <ul className="flex flex-wrap items-center justify-center mb-3">
                                  {["sm", "m", "l", "xl", "xxl"].map((size) => (
                                    <li
                                      key={size}
                                      className="mx-1 leading-none"
                                    >
                                      <button className="text-sm">
                                        {size}
                                      </button>
                                    </li>
                                  ))}
                                </ul>
                                <ul className="flex flex-wrap items-center justify-center">
                                  {[
                                    "bg-orange",
                                    "bg-primary",
                                    "bg-indigo-600",
                                    "bg-dark",
                                  ].map((color, index) => (
                                    <li
                                      key={index}
                                      className="mx-1 leading-none"
                                    >
                                      <button
                                        className={`w-4 h-4 rounded-full ${color}`}
                                        aria-label="colors"
                                      ></button>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              {/* Variants end */}
                            </div>

                            <div className="py-5 px-4">
                              <h4>
                                <Link
                                  className="block text-base hover:text-orange transition-all"
                                  href="#"
                                >
                                  {product.title}
                                </Link>
                              </h4>
                              <h5 className="font-bold text-md leading-none text-orange mt-3">
                                <del className="font-normal text-sm mr-1 inline-block">
                                  {product.oldPrice}
                                </del>
                                {product.price}
                              </h5>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* <!-- list view --> */}
                {activeTab === "list" && (
                  <div id="list" className={`shop-tab-content`}>
                    <div className="flex flex-wrap -mb-7 -px-4">
                      {products.map((product) => (
                        <div key={product.id} className="w-full px-4 mb-7">
                          <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative flex flex-wrap flex-col md:flex-row">
                            <div className="relative overflow-hidden md:w-1/3">
                              {product.labels.map((label, index) => (
                                <span
                                  key={index}
                                  className={`font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-${
                                    3 + index * 7
                                  } right-3`}
                                >
                                  {label}
                                </span>
                              ))}

                              <Image
                                className="md:absolute w-full md:h-full md:object-cover"
                                src={product.imageUrl}
                                alt={product.title}
                                loading="lazy"
                                width={432}
                                height={480}
                                quality={80}
                              />
                            </div>

                            <div className="py-5 px-4 flex-1">
                              <h4>
                                <Link
                                  className="block text-md hover:text-orange transition-all mb-2"
                                  href="#"
                                >
                                  {product.title}
                                </Link>
                              </h4>
                              <p className="text-sm">{product.description}</p>

                              <h5 className="font-bold text-md leading-none text-orange mt-4 mb-4">
                                <del className="font-normal text-sm mr-1 inline-block">
                                  ${product.oldPrice}
                                </del>
                                ${product.price}
                              </h5>

                              <ul className="flex items-center">
                                <li className="mr-2">
                                  <Link
                                    href="whishlist.html"
                                    className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange"
                                    aria-label="Add to wishlist"
                                    data-tippy-content="Add to wishlist"
                                  >
                                    <FaRegHeart size={20} />
                                  </Link>
                                </li>
                                <li className="mr-2">
                                  <Link
                                    href="#modal-addto-cart"
                                    className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange modal-toggle"
                                    aria-label="Add to cart"
                                    data-tippy-content="Add to cart"
                                  >
                                    <SlBasketLoaded size={20} />
                                    <span className="text-sm ml-2">
                                      Add to cart
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-12">
                <ul className="pagination flex flex-wrap items-center justify-center">
                  <li className="mx-2">
                    <Link
                      className="flex flex-wrap items-center justify-center  w-11 h-11 bg-white shadow text-orange leading-none transition-all hover:bg-orange hover:text-white"
                      href="#"
                    >
                      <FaAngleLeft size={15} />
                    </Link>
                  </li>

                  <li className="mx-2">
                    <Link
                      className="flex flex-wrap items-center justify-center  w-11 h-11 bg-white shadow text-orange leading-none transition-all hover:bg-orange hover:text-white active"
                      href="#"
                    >
                      1
                    </Link>
                  </li>
                  <li className="mx-2">
                    <Link
                      className="flex flex-wrap items-center justify-center  w-11 h-11 bg-white shadow text-orange leading-none transition-all hover:bg-orange hover:text-white"
                      href="#"
                    >
                      2
                    </Link>
                  </li>
                  <li className="mx-2">
                    <Link
                      className="flex flex-wrap items-center justify-center  w-11 h-11 bg-white shadow text-orange leading-none transition-all hover:bg-orange hover:text-white"
                      href="#"
                    >
                      3
                    </Link>
                  </li>
                  <li className="mx-2">
                    <Link
                      className="flex flex-wrap items-center justify-center  w-11 h-11 bg-white shadow text-orange leading-none transition-all hover:bg-orange hover:text-white"
                      href="#"
                    >
                      <FaAngleRight size={15} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- blog grid section end --> */}
    </>
  );
};

export default Shop;
