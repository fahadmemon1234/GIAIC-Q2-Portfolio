"use client";
import React, { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

const BlogSlider = () => {
  const blogs = [
    {
      id: 1,
      title: "Donec tellus Nulla lorem",
      date: "21 April, 2021",
      comments: 0,
      imageUrl: "/assets/images/blog/blog1.webp",
    },
    {
      id: 2,
      title: "Vestibulum ante ipsum",
      date: "15 March, 2021",
      comments: 5,
      imageUrl: "/assets/images/blog/blog2.webp",
    },
    {
      id: 3,
      title: "Pellentesque habitant morbi",
      date: "10 February, 2021",
      comments: 3,
      imageUrl: "/assets/images/blog/blog3.webp",
    },
    {
      id: 4,
      title: "Fusce vel facilisis ante",
      date: "5 January, 2021",
      comments: 2,
      imageUrl: "/assets/images/blog/blog4.webp",
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
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id}>
            <div className="swiper-slide">
              <div className="border border-solid border-gray-300 p-[20px] group">
                <div className="mb-6">
                  <Link href="#">
                    <Image
                      className="transform group-hover:scale-110 transition-transform duration-500 w-full h-full"
                      src={blog.imageUrl}
                      alt={blog.title}
                      loading="lazy"
                      width={600}
                      height={400}
                      quality={80}
                    />
                  </Link>
                </div>
                <h3>
                  <Link
                    href="#"
                    className="block text-base hover:text-orange transition-all font-medium pb-[10px]"
                  >
                    {blog.title}
                  </Link>
                </h3>
                <div className="blog-meta">
                  <ul className="flex flex-wrap items-center pb-[10px]">
                    <li>
                      <span className="text-sm">{blog.date}</span>
                      <span className="inline-block mx-2">/</span>
                    </li>
                    <li>
                      <span className="text-sm">{blog.comments} comments</span>
                    </li>
                  </ul>
                </div>

                <p className="font-normal text-black text-sm mb-[25px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore...
                </p>
                <Link
                  className="bg-white transition-all hover:bg-orange hover:border-orange hover:text-white text-dark capitalize font-medium text-sm inline-block border border-solid border-gray-300 px-8 py-4 leading-none mb-[10px]"
                  href="#"
                >
                  blog details
                </Link>
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

export default BlogSlider;
