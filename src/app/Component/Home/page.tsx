"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { SlBasketLoaded } from "react-icons/sl";
import { IoMdBluetooth } from "react-icons/io";
import { PiBatteryFullBold } from "react-icons/pi";
import { MdTouchApp } from "react-icons/md";
import { BsVolumeUpFill } from "react-icons/bs";
import { GiWaterDrop } from "react-icons/gi";
import Link from "next/link";
import ProductSlider from "../ProductSlider/page";
import BlogSlider from "../BlogSlider/page";

const Main = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025/01/20").getTime(); // Set the target date here

    // Function to update the countdown values
    const updateCountdown = () => {
      const now = new Date().getTime();
      const remainingTime = targetDate - now;

      if (remainingTime <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        // Update the state with the new countdown values
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    // Update the countdown every second
    const interval = setInterval(updateCountdown, 1000);

    // Initial countdown update
    updateCountdown();

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  const [showVideo, setShowVideo] = useState(false);

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

      {/* <!-- Banner section start --> */}
      <section
        className="pt-24 pb-24 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/banner/bg.webp')" }}
      >
        <div className="container">
          <div className="w-full flex items-center -mx-4 flex-wrap justify-end px-4">
            <div className="lg:w-2/4 xl:w-2/5">
              <span className="text-md font-normal text-white block mb-8">
                #Action Feature
              </span>
              <h2 className="font-playfair font-bold text-white text-4xl lg:text-xl xl:text-5xl mb-10">
                Ultimate comfort.
              </h2>
              <hr className="w-16 h-1 bg-white mb-10 border-0" />
              <ul>
                <li className="flex items-center text-white text-md md:text-3xl mb-10">
                  <span className="block text-4xl mr-5">
                    <IoMdBluetooth size={30} />
                  </span>{" "}
                  Smart Connectivity
                </li>
                <li className="flex items-center text-white text-md md:text-3xl mb-10">
                  <span className="block text-4xl mr-5">
                    <PiBatteryFullBold size={30} />
                  </span>{" "}
                  Long lasting battery
                </li>
                <li className="flex items-center text-white text-md md:text-3xl mb-10">
                  <span className="block text-4xl mr-5">
                    <MdTouchApp size={30} />
                  </span>{" "}
                  Touch Control Panel
                </li>
                <li className="flex items-center text-white text-md md:text-3xl mb-10">
                  <span className="block text-4xl mr-5">
                    <BsVolumeUpFill size={30} />
                  </span>{" "}
                  Volume Up Control
                </li>
                <li className="flex items-center text-white text-md md:text-3xl mb-10">
                  <span className="block text-4xl mr-5">
                    <GiWaterDrop size={30} />
                  </span>{" "}
                  Water Dust Proof
                </li>
              </ul>
              <Link
                href="#"
                className="bg-white transition-all hover:bg-orange hover:text-white px-5 md:px-12 py-3 md:py-4 xl:py-4 rounded-full text-orange capitalize font-medium text-sm lg:text-md inline-block leading-normal"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Banner section end --> */}

      {/* // <!-- Product section start --> */}
      <section className="product-section pt-24 pb-24">
        <div className="container">
          <div className="grid grid-rows-1 grid-flow-col gap-4">
            <div className="text-center mb-14">
              <h2 className="font-playfair font-bold text-orange text-4xl lg:text-xl mb-4">
                Deal Collection
              </h2>
              <p className="font-normal text-black text-base">
                There are many variations of passages of Lorem
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-start-1 md:col-start-3 col-span-12 md:col-span-8">
              {/* <!-- countdown start --> */}

              <div className="relative py-4 p-4 before:absolute before:w-full before:empty before:block before:h-full before:z-10 before:shadow-deal before:inset-x-2 before:top-2 after:absolute after:w-full after:empty after:block after:h-full after:z-10 after:shadow-deal after:inset-x-3 after:top-3 mb-12">
                <div className="countdown item-1 flex flex-wrap justify-center pt-4">
                  <div className="countdown__item flex flex-wrap items-baseline flex-col sm:flex-row mr-5">
                    <span className="countdown__time mr-1 text-lg lg:text-4xl text-dark font-500">
                      {timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}
                    </span>
                    <span className="countdown__text capitalize text-base text-dark font-400">
                      Days
                    </span>
                  </div>
                  <div className="countdown__item flex flex-wrap items-baseline flex-col sm:flex-row mr-5">
                    <span className="countdown__time mr-1 text-lg lg:text-4xl text-dark font-500">
                      {timeLeft.hours < 10
                        ? `0${timeLeft.hours}`
                        : timeLeft.hours}
                    </span>
                    <span className="countdown__text capitalize text-base text-dark font-400">
                      Hours
                    </span>
                  </div>
                  <div className="countdown__item flex flex-wrap items-baseline flex-col sm:flex-row mr-5">
                    <span className="countdown__time mr-1 text-lg lg:text-4xl text-dark font-500">
                      {timeLeft.minutes < 10
                        ? `0${timeLeft.minutes}`
                        : timeLeft.minutes}
                    </span>
                    <span className="countdown__text capitalize text-base text-dark font-400">
                      Minutes
                    </span>
                  </div>
                  <div className="countdown__item flex flex-wrap items-baseline flex-col sm:flex-row">
                    <span className="countdown__time mr-1 text-lg lg:text-4xl text-dark font-500">
                      {timeLeft.seconds < 10
                        ? `0${timeLeft.seconds}`
                        : timeLeft.seconds}
                    </span>
                    <span className="countdown__text capitalize text-base text-dark font-400">
                      Seconds
                    </span>
                  </div>
                </div>
              </div>
              {/* <!-- countdown end --> */}
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <section className="relative -m-4">
                <div className="product-carousel overflow-hidden p-4">
                  <ProductSlider />
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* // // <!-- Product section end --> */}

      {/* <!-- Vedio Banner section start --> */}
      <section className="vedio-banner-section relative h-sm-b-h md:h-full">
        <Image
          className="object-cover h-full w-full"
          src="/assets/images/banner/video-bg.webp"
          alt="banner image"
          loading="lazy"
          width={1920}
          height={902}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full xl:max-w-3xl lg:px-10 px-4">
          <h3 className="font-playfair font-bold text-orange text-lg sm:text-4xl lg:text-xl mb-3 md:mb-10">
            The Right Headphones
          </h3>
          <p className="font-medium text-white text-base mb-4 md:mb-10">
            In ornare quam viverra orci sagittis. Duis ultricies lacus sed
            turpis tincidunt id aliquet risus. Arcu felis bibendum ut tristique
            et.
          </p>

          <button
            onClick={() => setShowVideo(true)}
            className="inline-block play-vedio"
          >
            <Image
              src="/assets/images/icon/play.webp"
              alt="play image"
              loading="lazy"
              width={50}
              height={50}
            />
          </button>
        </div>
        {showVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50">
            <div className="relative w-full max-w-3xl">
              <button
                onClick={() => setShowVideo(false)}
                style={{ paddingBottom: "8px" }}
                className="absolute top-0 right-0 m-4 text-black text-4xl bg-white rounded-full w-12 h-12 flex items-center justify-center"
              >
                &times;
              </button>
              <iframe
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/pONeWAzDsQg"
                frameBorder="0"
                allow="accelerometer; autoplay; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </section>

      {/* <!-- Vedio Banner section end --> */}

      {/* <!-- Blog section start --> */}
      <section className="blog-carousel-section pt-24 pb-24">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <div className="section-title text-center pb-14">
                <h3 className="font-playfair font-bold text-orange text-4xl lg:text-xl mb-4">
                  Latest Blog
                </h3>
                <p className="font-normal text-black text-base">
                  There are many variations of passages of Lorem
                </p>
              </div>
            </div>
            <div className="col-span-12">
              <section className="relative -m-4">
                <div
                  className="blog-carousel overflow-hidden"
                  style={{ padding: "1.8rem;" }}
                >
                  <BlogSlider />
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Blog section end --> */}
    </div>
  );
};

export default Main;
