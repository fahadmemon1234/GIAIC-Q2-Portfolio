"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoGrid } from "react-icons/io5";
import Image from "next/image";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { SlBasketLoaded } from "react-icons/sl";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import Tippy from "@tippyjs/react";
import { client } from "@/app/lib/sanity";
import { fetchAllProducts } from "@/app/lib/api";
import Navbar from "../Navbar/page";
import Footer from "../Footer/page";
import { toast, Slide } from "react-toastify";

interface Product {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  name: string;
  slug: {
    current: string;
  };
  description: string;
  price: number;
  quantity: number;
  features: string[];
  dimensions: {
    width: string;
    height: string;
    depth: string;
    _type: string;
  };
  image: {
    asset: {
      _id: string;
      url: string;
    };
  };
}

const Shop = () => {
  const [activeTab, setActiveTab] = useState("grid");

  const [productList, setproductList] = useState<Product[]>([]);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        const data = await fetchAllProducts();
        if (data) {
          setproductList(data);
        }
      } catch (error) {
        console.error("Error fetching hero card data:", error);
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const handleAddToCart = async (
    price: number,
    productId: string,
    productName: string
  ) => {
    try {
      const doc = {
        _type: "addToCart",
        productId: productId,
        productName: productName,
        price: price,
        quantity: 1, // Default quantity
      };

      const response = await client.create(doc);
      // alert("Added to cart");
      // console.log("Added to cart:", response);

      toast.success("Item added to cart successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
    } catch (error) {
      // console.error("Error adding to cart:", error);
      toast.error("Failed to add item to cart", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
    }
  };

  const [likedProducts, setLikedProducts] = useState([]);

  const toggleLike = (productId) => {
    setLikedProducts(
      (prevLikedProducts) =>
        prevLikedProducts.includes(productId)
          ? prevLikedProducts.filter((id) => id !== productId) // Unlike
          : [...prevLikedProducts, productId] // Like
    );
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(productList.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const displayedProducts = productList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <Navbar />
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

                  <p className="my-2 sm:my-0">
                    Showing{" "}
                    {Math.min(
                      (currentPage - 1) * itemsPerPage + 1,
                      productList.length
                    )}{" "}
                    - {Math.min(currentPage * itemsPerPage, productList.length)}{" "}
                    of {productList.length} results
                  </p>
                </div>
                <div className="shop-select flex items-center space-x-4 mr-12">
                  <label
                    htmlFor="Show"
                    className="text-gray-700 font-medium whitespace-nowrap"
                  >
                    Show:
                  </label>
                  <select className="form-control border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring focus:ring-orange-500 focus:outline-none">
                    <option value="6">6</option>
                    <option value="12">12</option>
                    <option value="24">24</option>
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
                      {displayedProducts.map((product) => (
                        <div
                          key={product._id}
                          className="w-full md:w-1/2 lg:w-1/3 2xl:w-1/4 px-4 my-4"
                        >
                          <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative">
                            <div className="relative overflow-hidden">
                              <span className="font-bold uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">
                                {product.slug.current}
                              </span>

                              <Image
                                className="w-full h-[300px]"
                                src={product.image.asset.url}
                                alt={product.name}
                                loading="lazy"
                                width={432}
                                height={480}
                                quality={50}
                              />

                              {/* Actions start */}
                              <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden">
                                  <li className="py-4 pl-7 md:py-5 md:pl-8">
                                    <Tippy
                                      content="Add to wishlist"
                                      placement="top"
                                    >
                                      <button
                                        onClick={() => toggleLike(product._id)}
                                        className="text-dark flex items-center justify-center text-md hover:text-orange"
                                        aria-label="Add to wishlist"
                                      >
                                        {likedProducts.includes(product._id) ? (
                                          <FaHeart size={25} color="red" />
                                        ) : (
                                          <FaRegHeart size={25} />
                                        )}
                                      </button>
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
                                        onClick={(e) => {
                                          e.preventDefault(); // Prevent page reload
                                          handleAddToCart(
                                            product.price,
                                            product._id,
                                            product.name
                                          );
                                        }}
                                      >
                                        <MdOutlineShoppingBag size={20} />
                                      </Link>
                                    </Tippy>
                                  </li>
                                </ul>
                              </div>
                              {/* Actions end */}
                            </div>

                            <div className="py-5 px-4">
                              <h4>
                                <Link
                                  className="block text-base hover:text-orange transition-all"
                                  href={`/Component/ProductDetail/${product._id}`}
                                >
                                  {product.name}
                                </Link>
                              </h4>
                              <h5 className="font-bold text-md leading-none text-orange mt-3">
                                ${product.price}
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
                      {displayedProducts.map((product) => (
                        <div key={product._id} className="w-full px-4 mb-7">
                          <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative flex flex-wrap flex-col md:flex-row">
                            <div className="relative overflow-hidden md:w-1/3">
                              <span
                                className={`font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute right-3`}
                              >
                                {product.slug.current}
                              </span>

                              <Image
                                className="md:absolute w-full md:h-[300px] md:object-cover"
                                src={product.image.asset.url}
                                alt={product.name}
                                loading="lazy"
                                width={432}
                                height={480}
                                quality={50}
                              />
                            </div>

                            <div className="py-5 px-4 flex-1">
                              <h4>
                                <Link
                                  className="block text-md hover:text-orange transition-all mb-2"
                                  href={`/Component/ProductDetail/${product._id}`}
                                >
                                  {product.name}
                                </Link>
                              </h4>
                              <p className="text-sm">{product.description}</p>

                              <h5 className="font-bold text-md leading-none text-orange mt-4 mb-4">
                                ${product.price}
                              </h5>

                              <ul className="flex items-center">
                                <li className="mr-2">
                                  <button
                                    onClick={() => toggleLike(product._id)}
                                    className="text-dark flex items-center justify-center text-md hover:text-orange"
                                    aria-label="Add to wishlist"
                                  >
                                    {likedProducts.includes(product._id) ? (
                                      <FaHeart size={25} color="red" />
                                    ) : (
                                      <FaRegHeart size={25} />
                                    )}
                                  </button>
                                </li>
                                <li className="mr-2">
                                  <Link
                                    href="#modal-addto-cart"
                                    className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange modal-toggle"
                                    aria-label="Add to cart"
                                    data-tippy-content="Add to cart"
                                    onClick={(e) => {
                                      e.preventDefault(); // Prevent page reload
                                      handleAddToCart(
                                        product.price,
                                        product._id,
                                        product.name
                                      );
                                    }}
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
                <ul className="pagination flex items-center justify-center mt-6">
                  <li className="mx-2">
                    <button
                      onClick={() =>
                        handlePageChange(Math.max(currentPage - 1, 1))
                      }
                      className="flex items-center justify-center w-11 h-11 bg-white shadow text-orange transition-all hover:bg-orange hover:text-white"
                    >
                      <FaAngleLeft size={15} />
                    </button>
                  </li>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <li key={page} className="mx-2">
                        <button
                          onClick={() => handlePageChange(page)}
                          className={`flex items-center justify-center w-11 h-11 bg-white shadow ${
                            page === currentPage
                              ? "text-black bg-orange active:bg-orange"
                              : "text-black"
                          } transition-all hover:bg-orange hover:text-white`}
                        >
                          {page}
                        </button>
                      </li>
                    )
                  )}
                  <li className="mx-2">
                    <button
                      onClick={() =>
                        handlePageChange(Math.min(currentPage + 1, totalPages))
                      }
                      className="flex items-center justify-center w-11 h-11 bg-white shadow text-orange transition-all hover:bg-orange hover:text-white"
                    >
                      <FaAngleRight size={15} />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* <!-- blog grid section end --> */}
    </>
  );
};

export default Shop;
