"use client";
import React, { useRef, useState, useEffect } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import Link from "next/link";
import Tippy from "@tippyjs/react";
import { client } from "@/app/lib/sanity";
import { fetchAllProducts } from "@/app/lib/api";

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

const ProductSlider = () => {
  

  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

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
      alert("Added to cart");
      console.log("Added to cart:", response);
    } catch (error) {
      console.error("Error adding to cart:", error);
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

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            if (swiper.params.navigation) {
              (swiper.params.navigation as any).prevEl = prevRef.current;
              (swiper.params.navigation as any).nextEl = nextRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            }
          });
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {productList.map((product) => (
          <SwiperSlide key={product._id}>
            <div className="swiper-slide">
              <div className="border border-solid border-gray-300 transition-all hover:shadow-product group">
                <div className="relative overflow-hidden">
                  <span className="font-bold uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">
                    {product.slug.current}
                  </span>

                  <Image
                    className="w-full h-[400px] object-cover"
                    src={product.image.asset.url}
                    alt={product.name}
                    loading="lazy"
                    width={432}
                    height={380}
                    quality={50}
                  />
                  <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                    <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden">
                      <li className="py-4 pl-7 md:py-5 md:pl-8">
                        <Tippy content="Add to wishlist" placement="top">
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
                        <Tippy content="Add to cart" placement="top">
                          <Link
                            href="#"
                            onClick={(e) => {
                              e.preventDefault(); // Prevent page reload
                              handleAddToCart(
                                product.price,
                                product._id,
                                product.name
                              );
                            }}
                            className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle"
                            data-tippy-content="Add to cart"
                            aria-label="Add to cart"
                          >
                            <MdOutlineShoppingBag size={25} />
                          </Link>
                        </Tippy>
                      </li>
                    </ul>
                  </div>

                  {/* tabs nav end */}
                </div>
                <div className="py-5 px-4">
                  <ul className="mb-3 text-sm capitalize">
                    <li className="flex flex-wrap items-center justify-between">
                      <span>
                        <span>Available: </span>
                        <span className="text-orange">{product.quantity}</span>
                      </span>
                    </li>
                  </ul>
                  <div className="h-2 bg-gray-600 rounded">
                    <div
                      className="h-full bg-orange rounded-l"
                      aria-label="progress bar"
                      role="progressbar"
                      style={{
                        width: "100%", // Full width since 'sold' is removed
                      }}
                    ></div>
                  </div>
                  <h3 className="mt-4">
                    <Link
                      className="block text-base hover:text-orange transition-all"
                      href={`/Component/ProductDetail/${product._id}`}
                    >
                      {product.name}
                    </Link>
                  </h3>
                  <h4 className="font-bold text-md leading-none text-orange mt-3">
                    {/* <del className="font-normal text-sm mr-1 inline-block">
                      ${((product.price * 100) / (100 - 20)).toFixed(2)}
                    </del> */}
                    ${product.price.toFixed(2)}
                    {/* <span className="font-normal text-sm text-green-600 ml-2">
                      (20% off)
                    </span> */}
                  </h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div ref={prevRef} className="swiper-button-prev"></div>
      <div ref={nextRef} className="swiper-button-next"></div>
      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          background-color: white;
          border-radius: 50%;
          border: 2px solid transparent;
          color: black;
          width: 40px;
          height: 40px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          transition: all 0.3s ease;
        }
        .swiper-button-prev {
          left: 10px;
        }
        .swiper-button-next {
          right: 10px;
        }
        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          color: rgb(252, 101, 57);
          border-color: rgb(252, 101, 57);
        }
      `}</style>
    </div>
  );
};

export default ProductSlider;
