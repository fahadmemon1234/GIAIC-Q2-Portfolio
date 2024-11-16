"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaHeart, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

interface Product {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  thumbnail: string;
}

const FeatureProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        const sortedProducts = response.data.products.sort(
          (a: Product, b: Product) => b.id - a.id
        );
        setProducts(sortedProducts);
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
        <div className="container relative">
          <div className="grid items-end md:grid-cols-2 mb-6">
            <div className="md:text-start text-center">
              <h5 className="font-semibold text-3xl leading-normal mb-4">
                Popular Items
              </h5>
              <p className="text-slate-400 max-w-xl">
                Popular items in this week
              </p>
            </div>
            <div className="md:text-end hidden md:block">
              <Link
                className="flex justify-end items-center text-slate-400 hover:text-orange-500"
                href="/shop-grid"
              >
                See More Items <AiOutlineArrowRight className="ml-1" />
              </Link>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-6 gap-6">
            {products.slice(0, 4).map((product) => {
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
                  </div>

                  <div className="mt-4">
                    <Link
                      href={`/product-detail-one/${product.id}`}
                      className="hover:text-orange-500 text-lg font-medium"
                    >
                      {product.title}
                    </Link>

                    <div className="flex justify-between items-center mt-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-semibold">
                          ${product.price}
                        </span>
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
        </div>
      </section>
    </>
  );
};

export default FeatureProduct;
