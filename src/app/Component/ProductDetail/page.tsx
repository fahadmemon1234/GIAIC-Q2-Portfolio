"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaChevronRight,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";
import axios from "axios";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { decryptData } from "@/app/lib/cryptoUtils";
import { useCart } from "@/app/utility/cartContext";

interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  reviews: Review[];
  thumbnail: string;
  images: string[];
  discountPercentage: number;
  rating: number;
  brand: string;
  category: string;
  weight: number;
  returnPolicy: string;
  warrantyInformation: string;
  shippingInformation: string;
};

const ProductDetail = () => {
  const { cartCount, addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type: string) => {
    if (type === "increment") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const searchParams = useSearchParams();
  debugger;
  const ids = searchParams.get("id");
  let decryptedId: string | number | null = null;

  if (ids) {
    console.log("Encrypted ID from URL:", ids);
    const decodedId = decodeURIComponent(ids);
    decryptedId = decryptData(decodedId);

    if (!decryptedId) {
      console.log("Failed to decrypt the ID.");
    } else {
      console.log("Decrypted ID:", decryptedId);
    }
  } else {
    console.log("ID is null in URL.");
  }

  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        const allProducts = response.data.products;
        setProducts(allProducts);
        debugger;
        if (decryptedId) {
          const matchedProduct = allProducts.find(
            (item: Product) => item.id === parseInt(decryptedId)
          );
          setProduct(matchedProduct || null);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [decryptedId]);

  return (
    <>
      <section className="relative table w-full py-20 lg:py-24 md:pt-28 bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
          {product && (
            <>
              <div className="grid grid-cols-1">
                <h3 className="text-3xl leading-normal font-semibold">
                  {product.title}
                </h3>
              </div>

              <div className="relative mt-3">
                <ul className="tracking-[0.5px] mb-0 flex items-center">
                  <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-orange-500">
                    <Link href="/">Cartzio</Link>
                  </li>
                  <li className="inline-block px-[10px] text-[16px] text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180">
                    <FaChevronRight size={16} />
                  </li>
                  <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-orange-500">
                    <Link href="/">Store</Link>
                  </li>
                  <li className="inline-block px-[10px] text-[16px] text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180">
                    <FaChevronRight size={16} />
                  </li>
                  <li
                    className="inline-block uppercase text-[13px] font-bold text-orange-500"
                    aria-current="page"
                  >
                    {product.title}
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </section>

      <section className="relative md:py-24 py-16 bg-white">
        <div className="container relative">
          {product &&
            (() => {
              const finalPrice = (
                product.price *
                (1 - product.discountPercentage / 100)
              ).toFixed(2);

              return (
                <>
                  <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-6">
                    <div className="lg:col-span-5">
                      <div className="grid md:grid-cols-12 gap-3">
                        <div className="md:col-span-12">
                          <Link
                            href="#"
                            className="lightbox duration-500 group-hover:scale-105"
                            title=""
                          >
                            <Image
                              src={product.images[0]}
                              alt={product.title}
                              width={500}
                              height={500}
                              className="shadow dark:shadow-gray-700"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-7">
                      <div className="sticky top-20">
                        <h5 className="text-2xl font-semibold">
                          {product.title}
                        </h5>
                        <div className="mt-2">
                          <span className="text-slate-400 font-semibold me-1">
                            ${finalPrice}{" "}
                            <del className="text-red-600">${product.price}</del>
                          </span>
                          <ul className="list-none ruby text-orange-400">
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
                            <li className="inline text-slate-400 font-semibold">
                              4.8 (45)
                            </li>
                          </ul>
                        </div>

                        <div className="mt-4">
                          <h5 className="text-lg font-semibold">
                            Description:
                          </h5>
                          <p className="text-slate-400 mt-2">
                            {product.description}
                          </p>
                          <ul className="list-none text-slate-400 mt-4 flex gap-8">
                            <li className="mb-1 flex ms-0 items-center">
                              <h6 className="text-md font-medium text-black pr-2">
                                Category:
                              </h6>
                              {product.category}
                            </li>
                            <li className="mb-1 flex ms-0 items-center">
                              <h6 className="text-md font-medium text-black pr-2">
                                Brand:
                              </h6>
                              {product.brand}
                            </li>
                            <li className="mb-1 flex ms-0 items-center">
                              <h6 className="text-md font-medium text-black pr-2">
                                Weight:
                              </h6>
                              {product.weight}
                            </li>
                          </ul>

                          <ul className="list-none text-slate-400 mt-3">
                            <li className="mb-3 flex ms-0 items-center">
                              <h6 className="text-md font-medium text-black pr-2">
                                Warranty:
                              </h6>
                              {product.warrantyInformation}
                            </li>
                            <li className="mb-1 flex ms-0 items-center">
                              <h6 className="text-md font-medium text-black pr-2">
                                Shipping:
                              </h6>
                              {product.shippingInformation}
                            </li>
                          </ul>
                        </div>

                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-4">
                          <div className="flex items-center">
                            <h5 className="text-lg font-semibold me-2">
                              Return:
                            </h5>
                            <div className="space-x-1 text-slate-400">
                              {product.returnPolicy}
                            </div>
                          </div>

                          <div className="flex items-center">
                            <h5 className="text-lg font-semibold me-2">
                              Quantity:
                            </h5>
                            <div className="qty-icons ms-3 space-x-0.5">
                              <button
                                onClick={() =>
                                  handleQuantityChange("decrement")
                                }
                                className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-orange-500/5 hover:bg-orange-500 text-orange-500 hover:text-white"
                              >
                                -
                              </button>
                              <input
                                type="number"
                                min="0"
                                className="h-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-orange-500/5 pointer-events-none w-16 ps-4"
                                value={quantity}
                                onChange={(e) =>
                                  setQuantity(Number(e.target.value))
                                }
                                readOnly
                              />
                              <button
                                onClick={() =>
                                  handleQuantityChange("increment")
                                }
                                className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-orange-500/5 hover:bg-orange-500 text-orange-500 hover:text-white"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 space-x-1">
                          <button
                            className="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-base text-center rounded-md bg-orange-500/5 hover:bg-orange-500 text-orange-500 hover:text-white mt-2"
                            onClick={() =>
                              addToCart(product.id, product.price, quantity)
                            }
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-12 grid-cols-1 mt-6 gap-6">
                    <div className="lg:col-span-12 md:col-span-12">
                      <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
                        {product.reviews.length > 0 ? (
                          product.reviews.map((review, index) => (
                            <div key={index} className="mt-8 first:mt-0">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <div className="h-11 w-11 rounded-full shadow bg-orange-200 flex items-center justify-center text-lg font-semibold text-white">
                                    {review.reviewerName.charAt(0)}
                                  </div>
                                  <div className="ms-3 flex-1">
                                    <p className="text-lg font-semibold">
                                      {review.reviewerName}
                                    </p>
                                    <p className="text-sm text-slate-400">
                                      {new Date(
                                        review.date
                                      ).toLocaleDateString()}{" "}
                                      at{" "}
                                      {new Date(
                                        review.date
                                      ).toLocaleTimeString()}
                                    </p>
                                  </div>
                                </div>
                                <p className="text-slate-400">
                                  {review.reviewerEmail}
                                </p>
                              </div>

                              <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-800 mt-6">
                                <ul className="list-none inline-block text-orange-400">
                                  {Array.from({ length: 5 }, (_, i) => (
                                    <li key={i} className="inline">
                                      <i
                                        className={`mdi mdi-star text-lg ${
                                          i < review.rating
                                            ? "text-orange-500"
                                            : "text-gray-300"
                                        }`}
                                      ></i>
                                    </li>
                                  ))}
                                </ul>
                                <p className="text-slate-400 italic mt-2">
                                  &quot;{review.comment}&quot;
                                </p>
                              </div>
                            </div>
                          ))
                        ) : (
                          <p className="text-slate-400">
                            No reviews available.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              );
            })()}
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
