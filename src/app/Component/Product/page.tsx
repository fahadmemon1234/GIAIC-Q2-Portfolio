"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaHeart, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { encryptData } from "@/app/utility/page";

interface Product {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  thumbnail: string;
}

const Product = () => {
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

  return (
    <>
      <section className="relative md:py-24 py-16">
        <div className="container relative md:mt-1 mt-1">
          <div className="grid grid-cols-1 justify-center text-center mb-6">
            <h5 className="font-semibold text-3xl leading-normal mb-4">
              New Arrival Products
            </h5>
            <p className="text-slate-400 max-w-xl mx-auto">
              Shop the latest products from the most popular collections
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-6 gap-6">
            {products.slice(0, 8).map((product) => {
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
                      <Link
                        href="/shop-cart"
                        className="py-2 px-5 inline-block font-semibold tracking-wide text-base text-center bg-slate-900 text-white w-full rounded-md duration-500"
                      >
                        Add to Cart
                      </Link>
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

          <div className="flex justify-center">
            <button
              type="button"
              className="mt-11 text-blue-700 border border-blue-700 bg-transparent hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-600 dark:text-blue-600 dark:hover:bg-blue-600 dark:hover:text-white dark:focus:ring-blue-800 transition duration-300 ease-in-out"
            >
              See more
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
