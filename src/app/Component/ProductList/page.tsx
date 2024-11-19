"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaHeart,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaChevronRight,
} from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { encryptData } from "@/app/lib/cryptoUtils";
import { useCart } from "@/app/utility/cartContext";

interface Product {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  thumbnail: string;
}

const ProductList = () => {
  const { cartCount, addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const [likedProducts, setLikedProducts] = useState<{
    [key: number]: boolean;
  }>({});

  const handleLikeClick = (productId: number) => {
    setLikedProducts((prevLikedProducts) => ({
      ...prevLikedProducts,
      [productId]: !prevLikedProducts[productId],
    }));
  };

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const totalPages = Math.ceil(products.length / productsPerPage);
  const currentProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <section className="relative table w-full py-20 lg:py-24 md:pt-28 bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
          <div className="grid grid-cols-1">
            <h3 className="text-3xl leading-normal font-semibold">PRODUCT</h3>
          </div>

          <div className="relative mt-3">
            <ul className="tracking-[0.5px] mb-0 flex items-center">
              <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-orange-500">
                <Link href="/">Cartzio</Link>
              </li>

              <li className="inline-block px-[10px] text-[16px] text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180">
                <FaChevronRight size={16} />
              </li>
              <li
                className="inline-block uppercase text-[13px] font-bold text-orange-500"
                aria-current="page"
              >
                PRODUCT
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="md:flex justify-between items-center mb-6">
            <span className="font-semibold">{`Showing ${
              (currentPage - 1) * productsPerPage + 1
            }-${Math.min(currentPage * productsPerPage, products.length)} of ${
              products.length
            } items`}</span>
            <div className="md:flex items-center">
              <label className="font-semibold md:me-2">Sort by:</label>
              <select className="form-select form-input md:w-36 w-full md:mt-0 mt-1 py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0">
                <option>Featured</option>
                <option>Sale</option>
                <option>Alfa A-Z</option>
                <option>Alfa Z-A</option>
                <option>Price Low-High</option>
                <option>Price High-Low</option>
              </select>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-6 gap-6">
            {currentProducts.map((product) => {
              const finalPrice =
                product.price * (1 - product.discountPercentage / 100);

              const isLiked = likedProducts[product.id] || false;

              return (
                <div key={product.id} className="group">
                  <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                    <Image
                      src={product.thumbnail}
                      alt={product.title}
                      width={300}
                      height={400}
                      className="group-hover:scale-110 duration-500"
                    />
                    <div className="absolute -bottom-20 group-hover:bottom-3 left-3 right-3 duration-500">
                      <button
                        onClick={() => addToCart(product.id, finalPrice, 1)}
                        className="py-2 px-5 inline-block font-semibold tracking-wide text-base text-center bg-slate-900 text-white w-full rounded-md duration-500"
                      >
                        Add to Cart
                      </button>
                    </div>

                    <ul className="list-none absolute top-[10px] right-4 opacity-0 group-hover:opacity-100 duration-500 space-y-1">
                      <li>
                        <button
                          onClick={() => handleLikeClick(product.id)}
                          className={`w-10 h-10 inline-flex items-center justify-center tracking-wide text-center rounded-full bg-white ${
                            isLiked ? "text-red-500" : "text-slate-900"
                          } hover:bg-slate-900 hover:text-white shadow duration-500`}
                        >
                          <FaHeart className="w-4 h-4" />
                        </button>
                      </li>
                    </ul>

                    <ul className="list-none absolute top-[10px] left-4">
                      <li>
                        <Link
                          href="/"
                          className="bg-orange-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5"
                        >
                          {product.discountPercentage}% Off
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <Link
                      href={`/Component/ProductDetail?id=${encodeURIComponent(
                        encryptData(product.id.toString())
                      )}`}
                      className="hover:text-orange-500 text-lg font-medium"
                    >
                      {product.title}
                    </Link>

                    <div className="flex justify-between items-center mt-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-semibold">
                          ${finalPrice.toFixed(2)}
                        </span>
                        <del className="text-slate-400">${product.price}</del>
                      </div>

                      <ul className="font-medium text-amber-400 list-none flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <li key={i} className="inline">
                            {i < Math.floor(product.rating) ? (
                              <FaStar />
                            ) : i < product.rating ? (
                              <FaStarHalfAlt />
                            ) : (
                              <FaRegStar />
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-12 grid-cols-1 mt-20">
            <div className="md:col-span-12 text-center">
              <nav aria-label="Page navigation example">
                <ul className="inline-flex items-center -space-x-px">
                  <li>
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      className={`p-2 ${
                        currentPage === 1
                          ? "size-[40px] inline-flex justify-center items-center text-gray-400  bg-white dark:bg-slate-900 rounded-s-3xl  border border-gray-100 dark:border-gray-800"
                          : "size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500"
                      }`}
                      disabled={currentPage === 1}
                    >
                      <FiChevronLeft className="size-5 rtl:rotate-180 rtl:-mt-1" />
                    </button>
                  </li>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <li key={page}>
                        <button
                          onClick={() => handlePageChange(page)}
                          className={`p-2 ${
                            currentPage === page
                              ? "size-[40px] inline-flex justify-center items-center bg-orange-500 text-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800"
                              : "size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500"
                          }`}
                        >
                          {page}
                        </button>
                      </li>
                    )
                  )}
                  <li>
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      className={`p-2 ${
                        currentPage === totalPages
                          ? "size-[40px] inline-flex justify-center items-center text-gray-400 bg-white dark:bg-slate-900 rounded-e-3xl border border-gray-100 dark:border-gray-800"
                          : "size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500"
                      }`}
                      disabled={currentPage === totalPages}
                    >
                      <FiChevronRight className="size-5 rtl:rotate-180 rtl:-mt-1" />
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductList;
