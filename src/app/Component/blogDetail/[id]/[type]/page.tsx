"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";
import { Playfair_Display, Open_Sans } from "next/font/google";
import { FaRegComment, FaUser } from "react-icons/fa";
import TrendingPost from "@/app/Component/TrendingPost/page";
import { fetchHeroCardById } from "@/app/lib/api";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
  variable: "--font-open-sans",
});

interface HeroCard {
  id: number;
  title: string;
  category: {
    title: string;
  };
  author: string;
  createdDate: string;
  imageUrl: {
    asset: {
      url: string;
    };
  };
  description1: string;
  subHeading: string;
  subDescription: string;
}

const BlogDetail = ({ params }: { params: { id: string; type: string } }) => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const interval = setInterval(() => {
      const savedTheme = localStorage.getItem("theme");
      setTheme(savedTheme === "dark" ? "dark" : "light");
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Fetch hero card Start

  const [heroCard, setHeroCard] = useState<HeroCard | null>(null);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        let data;
        if (params.type === "heroSection") {
          data = await fetchHeroCardById(parseFloat(params.id));

          if (data) {
            setHeroCard(data);
          }
        }
      } catch (error) {
        console.log("Error fetching hero card data:", error);
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, [params.id, params.type]);

  // Fetch hero card End

  return (
    <>
      <div
        className={`pb-10 ${theme == "dark" ? "text-[white]" : "bg-[#f9f9f9]"}`}
      >
        <div className="relative w-full h-[400px]">
          <Image
            src={heroCard?.imageUrl.asset.url || "/assets/img/tree.jpeg"}
            alt={heroCard?.title || "Default Alt Text"}
            layout="fill"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1
              className="text-white text-[35px] md:text-[50px] font-bold text-center px-4"
              style={{
                fontFamily: playfair.style.fontFamily,
              }}
            >
              {heroCard?.title}
            </h1>
          </div>
        </div>

        <Container>
          <div className="text-center mt-8">
            <span
              className={`inline-block   text-sm px-4 py-1 rounded-full uppercase tracking-wider ${
                theme == "dark"
                  ? "bg-[white] text-[#25211d]"
                  : "bg-[#25211d] text-white"
              }`}
            >
              {heroCard?.category.title}
            </span>
            <div className="mt-4 text-[#a5a6aa]">
              <span className="mr-4 flex items-center justify-center gap-2">
                <FaUser
                  className={`${
                    theme == "dark" ? "text-white" : "text-[#25211d]"
                  }`}
                />
                <strong>{heroCard?.author}</strong>
              </span>
              <span className="mr-4">
                {heroCard?.createdDate
                  ? new Date(heroCard.createdDate).toLocaleDateString("en-US", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })
                  : "Date not available"}
              </span>
              <span className="flex items-center gap-2">
                <FaRegComment /> 0 Comments
              </span>
            </div>
          </div>

          <div className="text-[#25211d] mt-8 leading-relaxed">
            <p
              className="text-[18px] text-[#7a7e83] mb-6"
              style={{
                fontFamily: openSans.style.fontFamily,
              }}
            >
              {heroCard?.description1}
            </p>

            {heroCard?.subHeading && (
              <h2
                className={`text-[25px] font-semibold mb-4 ${
                  theme === "dark" ? "text-white" : "text-[#25211d]"
                }`}
                style={{
                  fontFamily: playfair.style.fontFamily,
                }}
              >
                {heroCard.subHeading}
              </h2>
            )}

            {heroCard?.subDescription && (
              <p
                className="text-[18px] text-[#7a7e83] mb-6"
                style={{
                  fontFamily: openSans.style.fontFamily,
                }}
              >
                {heroCard.subDescription}
              </p>
            )}
          </div>
        </Container>

        <div className="bg-[#fbf7f4] text-[#25211d] py-12 mt-10 border-t border-b border-[#a0522d]">
          <Container>
            <h3
              className="text-center text-[26px] font-bold mb-8 text-[#f7775e]"
              style={{
                fontFamily: playfair.style.fontFamily,
              }}
            >
              Share Your Thoughts
            </h3>
            <form className="mt-6 max-w-[600px] mx-auto space-y-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white border border-gray-300 text-[#25211d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f7775e] placeholder-gray-500"
                />
                <span className="absolute right-4 top-[50%] transform -translate-y-[50%] text-gray-500">
                  <i className="far fa-user"></i>
                </span>
              </div>

              <div className="relative">
                <textarea
                  placeholder="Write your comment..."
                  className="w-full px-4 py-3 bg-white border border-gray-300 text-[#25211d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f7775e] placeholder-gray-500 h-[150px]"
                ></textarea>
                <span className="absolute right-4 top-[20px] text-gray-500">
                  <i className="far fa-comment"></i>
                </span>
              </div>

              <button
                type="submit"
                className="w-full bg-[#f7775e] py-3 rounded-lg text-lg font-semibold text-white hover:bg-[#e0654c] transition-colors duration-300"
              >
                Post Comment
              </button>
            </form>
          </Container>
        </div>

        <div className="mt-16 py-10 px-6 rounded-lg mb-16">
          <Container>
            <h3
              className={`text-[24px] ont-bold mb-6 ${
                theme == "dark" ? "text-white" : "text-[#25211d]"
              }`}
              style={{
                fontFamily: playfair.style.fontFamily,
              }}
            >
              Comments
            </h3>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-[#f7775e] text-white text-xl font-bold">
                  D
                </div>

                <div className="flex-1">
                  <h4
                    className={`font-semibold text-[18px] ${
                      theme == "dark" ? "text-white" : "text-[#25211d]"
                    }`}
                  >
                    Diana
                  </h4>
                  <p className="text-[#7a7e83] mt-1 text-[16px] leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing industry.
                    Great post!
                  </p>
                  <span className="text-[#a5a6aa] text-sm">
                    Posted on: 01 Dec 2024
                  </span>
                </div>
              </div>

              <hr />

              <div className="flex items-start gap-4">
                <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-[#f7775e] text-white text-xl font-bold">
                  J
                </div>

                <div className="flex-1">
                  <h4
                    className={`font-semibold text-[18px] ${
                      theme == "dark" ? "text-white" : "text-[#25211d]"
                    }`}
                  >
                    John
                  </h4>
                  <p className="text-[#7a7e83] mt-1 text-[16px] leading-relaxed">
                    Amazing journey! Id love to visit Canada someday.
                  </p>
                  <span className="text-[#a5a6aa] text-sm">
                    Posted on: 30 Nov 2024
                  </span>
                </div>
              </div>
              <hr />
            </div>
          </Container>
        </div>

        <TrendingPost />
      </div>
    </>
  );
};

export default BlogDetail;
