import React from "react";
import Image from "next/image";
import { SlBasketLoaded } from "react-icons/sl";
import Link from "next/link";

const Main = () => {
  return (
    <div>
      {/* <!-- Hero section start --> */}
      <section className="hero-section relative">
        <div className="hero-slider overflow-hidden">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div
                className="swiper-slide 2xl:h-screen lg:h-700px xs:h-600px flex flex-wrap items-center px-4 md:px-10 2xl:px-24 py-6 lg:py-0  bg-no-repeat bg-left-top xl:bg-right bg-cover"
                style={{
                  backgroundImage: "url('/assets/images/hero/slide1.webp')",
                }}
              >
                <div className="grid grid-cols-12">
                  <div className="col-span-12">
                    <div className="slider-content md:max-w-[500px] lg:max-w-[600px] 2xl:max-w-[800px]">
                      <span className="text-lg font-normal text-primary block mb-3">
                        #Feel The Rhythm.
                      </span>
                      <h1 className="font-playfair font-bold text-orange text-3xl sm:text-4xl lg:text-5xl 2xl:text-7xl mb-5">
                        Walk Up Your Passion{" "}
                        <span className="md:block mt-5">
                          Listen Good Music.
                        </span>
                      </h1>
                      <hr className="w-16 h-1 bg-orange mb-7 border-0" />
                      <p className="font-normal text-primary text-sm lg:text-md">
                        Experience the decibels like your ears deserve to. Safe
                        for the ears, very for the heart. A treat to your ears.
                      </p>
                      <div className="inline-block mt-8 lg:mt-12">
                        <Link
                          className="flex flex-wrap items-center bg-primary transition-all hover:bg-orange hover:text-white px-3 md:px-4 xl:px-10 py-3 md:py-4 xl:py-5 rounded-full text-orange capitalize font-medium text-sm lg:text-md leading-normal"
                          href="#"
                        >
                          Explore More
                          <SlBasketLoaded className="ml-3 xl:ml-5" size={20} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Hero section end --> */}

      {/* <!-- Feartured section start --> */}
      <section className="pt-24">
        <div className="container">
          <div className="flex items-center -mx-4 flex-wrap">
            <div className="w-full md:w-1/2 px-4  order-last md:order-first">
              <Image
                className="mt-8 md:mt-0 w-full h-full lg:pr-14 xl:pr-20"
                src={"/assets/images/featured-products/product1.webp"}
                alt="product image"
                loading="lazy"
                width={512}
                height={647}
              />
            </div>

            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-md font-normal text-primary block mb-4">
                FEATURED PRODUCT
              </h2>
              <h3 className="font-playfair font-bold text-orange text-[30px] sm:text-[36px] xl:text-[48px] leading-tight mb-5">
                Minimal Headphone <br />
                For Music Lover
              </h3>
              <hr className="w-16 h-1 bg-orange mb-7 border-0" />
              <p className="font-normal text-primary text-base xl:text-md">
                When an unknown printer took a galley of type and scrambled it
                to make a type specimen book. sint occaeca Excepteur sint
                occaecat cupidatat non proident.
              </p>
              <Link
                href="#"
                className="bg-primary transition-all hover:bg-orange
                     hover:text-white px-5 md:px-12 py-3 md:py-4 xl:py-4 
                     rounded-full text-orange capitalize font-medium text-sm 
                     lg:text-md inline-block mt-8 leading-normal"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Feartured section end --> */}

      {/* <!-- Feartured section start --> */}
      <section className="pt-24 pb-24">
        <div className="container">
          <div className="flex items-center -mx-4 flex-wrap">
            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-md font-normal text-primary block mb-4">
                MINIMAL PRODUCT
              </h2>
              <h3 className="font-playfair font-bold text-orange text-[30px] sm:text-[36px] xl:text-[48px] leading-tight mb-5">
                Minimal Headphone <br />
                For Music Lover
              </h3>
              <hr className="w-16 h-1 bg-orange mb-7 border-0" />
              <p className="font-normal text-primary text-base xl:text-md">
                When an unknown printer took a galley of type and scrambled it
                to make a type specimen book. sint occaeca Excepteur sint
                occaecat cupidatat non proident.
              </p>
              <Link
                href="#"
                className="bg-primary transition-all hover:bg-orange 
                    hover:text-white px-5 md:px-12 py-3 md:py-4 xl:py-4 
                    rounded-full text-orange capitalize font-medium text-sm 
                    lg:text-md inline-block mt-8 leading-normal"
              >
                Buy Now
              </Link>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <Image
                className="mt-8 md:mt-0 w-full h-full"
                src={"/assets/images/featured-products/product2.webp"}
                alt="product image"
                loading="lazy"
                width={612}
                height={723}
              />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Feartured section end --> */}
    </div>
  );
};

export default Main;
