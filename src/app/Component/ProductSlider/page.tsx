"use client";
import React, { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import Link from "next/link";

const ProductSlider = () => {
  const products = [
    {
      id: 1,
      title: "Airpod product ideas",
      sold: 10,
      available: 12,
      discount: "-11%",
      price: 130,
      originalPrice: 110,
      imageUrl: "/assets/images/products/lg/product1.webp",
    },
    {
      id: 2,
      title: "Headphone XYZ",
      sold: 20,
      available: 5,
      discount: "-20%",
      price: 150,
      originalPrice: 190,
      imageUrl: "/assets/images/products/lg/product2.webp",
    },
    {
      id: 3,
      title: "Wireless Speaker",
      sold: 15,
      available: 8,
      discount: "-15%",
      price: 200,
      originalPrice: 235,
      imageUrl: "/assets/images/products/lg/product3.webp",
    },
    {
      id: 4,
      title: "Smart Watch Pro",
      sold: 5,
      available: 15,
      discount: "-10%",
      price: 250,
      originalPrice: 280,
      imageUrl: "/assets/images/products/lg/product4.webp",
    },

    {
      id: 5,
      title: "Airpod product ideas",
      sold: 10,
      available: 12,
      discount: "-11%",
      price: 130,
      originalPrice: 110,
      imageUrl: "/assets/images/products/lg/product1.webp",
    },
    {
      id: 6,
      title: "Headphone XYZ",
      sold: 20,
      available: 5,
      discount: "-20%",
      price: 150,
      originalPrice: 190,
      imageUrl: "/assets/images/products/lg/product2.webp",
    },
    {
      id: 7,
      title: "Wireless Speaker",
      sold: 15,
      available: 8,
      discount: "-15%",
      price: 200,
      originalPrice: 235,
      imageUrl: "/assets/images/products/lg/product3.webp",
    },
    {
      id: 8,
      title: "Smart Watch Pro",
      sold: 5,
      available: 15,
      discount: "-10%",
      price: 250,
      originalPrice: 280,
      imageUrl: "/assets/images/products/lg/product4.webp",
    },
  ];

  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

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
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="swiper-slide">
              <div className="border border-solid border-gray-300 transition-all hover:shadow-product group">
                <div className="relative overflow-hidden">
                  <span className="font-bold uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">
                    Sale
                  </span>
                  <span className="font-bold uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">
                    {product.discount}
                  </span>
                  <Image
                    className="w-full h-full"
                    src={product.imageUrl}
                    alt={product.title}
                    loading="lazy"
                    width={432}
                    height={480}
                    quality={80}
                  />
                  <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                    <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden">
                      <li className="py-4 pl-7 md:py-5 md:pl-8">
                        <Link
                          href="whishlist.html"
                          className="text-dark flex items-center justify-center text-md hover:text-orange"
                          data-tippy-content="Add to wishlist"
                          aria-label="Add to wishlist"
                        >
                          <FaRegHeart size={25} />
                        </Link>
                      </li>

                      <li className="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8">
                        <Link
                          href="#modal-addto-cart"
                          className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle"
                          data-tippy-content="Add to cart"
                          aria-label="Add to cart"
                        >
                          <MdOutlineShoppingBag size={25} />
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* tabs nav start */}

                  <div className="p-2 bg-gray-200 shadow absolute left-2 right-2 -bottom-40 group-hover:bottom-2 z-20 transition-all duration-500 ease-linear">
                    <ul className="tab-nav flex flex-wrap items-center justify-center">
                      <li className="mx-1">
                        <Link
                          href="#product4"
                          className="w-8 h-8 overflow-hidden rounded-full block"
                        >
                          <Image
                            src={"/assets/images/products/sm/product1.webp"}
                            alt="product image"
                            loading="lazy"
                            width={45}
                            height={50}
                            quality={80}
                          />
                        </Link>
                      </li>
                      <li className="mx-1">
                        <Link
                          href="#product5"
                          className="w-8 h-8 overflow-hidden rounded-full block"
                        >
                          <Image
                            src={"/assets/images/products/sm/product2.webp"}
                            alt="product image"
                            loading="lazy"
                            width={45}
                            height={50}
                            quality={80}
                          />
                        </Link>
                      </li>
                      <li className="mx-1">
                        <Link
                          href="#product6"
                          className="w-8 h-8 overflow-hidden rounded-full block"
                        >
                          <Image
                            src={"/assets/images/products/sm/product3.webp"}
                            alt="product image"
                            loading="lazy"
                            width={45}
                            height={50}
                            quality={80}
                          />
                        </Link>
                      </li>
                      <li className="mx-1">
                        <Link
                          href="#product7"
                          className="w-8 h-8 overflow-hidden rounded-full block"
                        >
                          <Image
                            src={"/assets/images/products/sm/product4.webp"}
                            alt="product image"
                            loading="lazy"
                            width={45}
                            height={50}
                            quality={80}
                          />
                        </Link>
                      </li>
                      <li className="mx-1">
                        <Link
                          href="#product8"
                          className="w-8 h-8 overflow-hidden rounded-full block"
                        >
                          <Image
                            src={"/assets/images/products/sm/product5.webp"}
                            alt="product image"
                            loading="lazy"
                            width={45}
                            height={50}
                            quality={80}
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* tabs nav end */}
                </div>
                <div className="py-5 px-4">
                  <ul className="mb-3 text-sm capitalize">
                    <li className="flex flex-wrap items-center justify-between">
                      <span>
                        <span>Sold: </span>
                        <span className="text-orange">{product.sold}</span>
                      </span>
                      <span>
                        <span>Available: </span>
                        <span className="text-orange">{product.available}</span>
                      </span>
                    </li>
                  </ul>
                  <div className="h-2 bg-gray-600 rounded">
                    <div
                      className="h-full bg-orange rounded-l"
                      aria-label="progress bar"
                      role="progressbar"
                      style={{
                        width: `${
                          (product.sold / (product.sold + product.available)) *
                          100
                        }%`,
                      }}
                      aria-valuenow={product.sold}
                      aria-valuemin={0}
                      aria-valuemax={product.sold + product.available}
                    ></div>
                  </div>
                  <h3 className="mt-4">
                    <Link
                      className="block text-base hover:text-orange transition-all"
                      href="single-product.html"
                    >
                      {product.title}
                    </Link>
                  </h3>
                  <h4 className="font-bold text-md leading-none text-orange mt-3">
                    <del className="font-normal text-sm mr-1 inline-block">
                      ${product.originalPrice.toFixed(2)}
                    </del>
                    ${product.price.toFixed(2)}
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
