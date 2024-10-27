"use client";
import React, { useState } from "react";
import Image from "next/image";

const categories = [
  { name: "All" },
  { name: "Entertainment" },
  { name: "Sports" },
  { name: "Business" },
  { name: "Life & Style" },
  { name: "News" },
];

const blogData = [
  {
    imageUrl: "/assets/images/james.png",
    title:
      "James Franco opens up about redemption, 'Hey Joe' film, & the end of his friendship with Seth Rogen",
    previewText:
      "James Franco discusses his latest film Hey Joe and how his Hollywood hiatus reshaped his life.",
    author: "Pop Culture",
    date: "Oct 26, 2024",
    category: "Entertainment",
  },
  {
    imageUrl: "/assets/images/circket.jpeg",
    title:
      "Barcelona shatter Real Madrid’s unbeaten run with 4-0 Clasico triumph",
    previewText:
      "Lewandowski hits double, Yamal becomes youngest Clasico scorer to end Real Madrid’s 42-game unbeaten LaLiga streak",
    author: "Reuters",
    date: "Oct 27, 2024",
    category: "Sports",
  },
  {
    imageUrl: "/assets/images/gold.jpg",
    title:
      "Gold prices rebound by Rs2,000 per tola locally as international rates rise",
    previewText:
      "This price hike followed a $22 rise in the international bullion market, where gold reached $2,748 per ounce, impacting local rates.",
    author: "News Desk",
    date: "June 06, 2024",
    category: "Business",
  },
  {
    imageUrl: "/assets/images/nvidia.jpg",
    title: "Nvidia surpasses Apple as 'world’s most valuable company'",
    previewText:
      "By mid-day trading, both companies were neck and neck in market value, each sitting around $3.52 trillion.",
    author: "News Desk",
    date: "Oct 26, 2024",
    category: "News",
  },
  {
    imageUrl: "/assets/images/Alizeh.jpg",
    title:
      "Alizeh Shah takes stand against online critics, embraces self-expression",
    previewText:
      "Actress Alizeh Shah stands firm against critics, confidently embracing her unique style during her vacation in the US.",
    author: "News Desk",
    date: "Oct 27, 2024",
    category: "Life & Style",
  },
  {
    imageUrl: "/assets/images/imran.jpg",
    title: "IHC sets one-month deadline for decision on Iddat case appeal",
    previewText:
      "On February 3, Imran and Bushra Bibi were sentenced in the Iddat Nikkah case. Twenty days later, the appeal against the verdict was filed.",
    author: "Our Correspondent",
    date: "June 13, 2024",
    category: "News",
  },
];

const BlogCardCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const activeClass = "bg-black border-black text-white";
  const inactiveClass = "bg-gray border-gray-3 text-black";

  const filteredBlogData =
    selectedCategory === "All"
      ? blogData
      : blogData.filter((blog) => blog.category === selectedCategory);

  return (
    <>
      <div
        className="pt-5"
        x-data="{ selectedCategory: 'All', activeClass: 'bg-black border-black text-white', inactiveClass: 'bg-gray border-gray-3 text-black',}"
      >
        <div className="flex flex-wrap justify-center gap-4 items-center mb-15">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`rounded-full border py-2.5 px-6 font-medium ease-in duration-200 hover:bg-black hover:border-black hover:text-white ${
                selectedCategory === category.name ? activeClass : inactiveClass
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      <br />

      <div className="max-w-screen-xl mx-auto p-4 gap-y-6 gap-x-8">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogData.map((blog, index) => (
            <div
              key={index}
              id={index + "t"}
              className="group bg-white p-4 rounded-lg shadow-lg transition-transform"
            >
              <div className="mb-6 overflow-hidden rounded-[10px] transition-transform group-hover:scale-105">
                <Image
                  src={blog.imageUrl}
                  alt="Blog image"
                  className="w-full h-[250px] object-cover transition-transform duration-300"
                  width={300}
                  height={500}
                />
              </div>

              <h3 className="mb-3.5">
                <span className="block text-dark font-bold text-xl relative">
                  <span className="bg-gradient-to-r from-primary/50 to-primary/40 bg-[length:0px_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ease-in-out group-hover:bg-[length:100%_3px]">
                    {blog.title}
                  </span>
                </span>
              </h3>

              <p className="text-gray-600 mb-4">{blog.previewText}</p>

              <div className="mt-auto pt-4 border-t border-gray-200">
                <div className="flex flex-wrap gap-3 items-center justify-between mt-4.5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex items-center gap-3">
                      <div className="flex w-6 h-6 rounded-full overflow-hidden">
                        <Image
                          src={blog.imageUrl}
                          alt="Author"
                          width={24}
                          height={24}
                        />
                      </div>
                      <p className="text-sm">{blog.author}</p>
                    </span>

                    <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>

                    <p className="text-sm text-gray-400">{blog.date}</p>
                  </div>

                  <span className="inline-flex text-blue-700 bg-blue-100 font-medium text-sm py-1 px-3 rounded-full">
                    {blog.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="flex justify-center font-medium text-black border border-black rounded-md py-3 px-7 hover:bg-black hover:text-white ease-in duration-200 mx-auto mt-12 lg:mt-17">
          Browse all Posts
        </button>
      </div>
    </>
  );
};

export default BlogCardCategory;
