"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogData, blogShort } from "@/lib/blogData";

const categories = [
  { name: "All" },
  { name: "Entertainment" },
  { name: "Sports" },
  { name: "Business" },
  { name: "Life & Style" },
  { name: "News" },
];

const AllBlogCard = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const activeClass = "bg-black border-black text-white";
  const inactiveClass = "bg-gray border-gray-3 text-black";

  const filteredBlogData =
    selectedCategory === "All"
      ? [...blogData, ...blogShort]
      : [
          ...blogData.filter((blog) => blog.category === selectedCategory),
          ...blogShort.filter((blog) => blog.category === selectedCategory),
        ];

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
          {filteredBlogData.map((blog) => (
            <div
              key={blog.id}
              className="group bg-white p-4 rounded-lg shadow-lg transition-transform"
            >
              <Link href={`/posts/${blog.id}`}>
                <div className="mb-6 overflow-hidden rounded-[10px] transition-transform group-hover:scale-105">
                  <Image
                    src={blog.imageUrl}
                    alt="Blog image"
                    className="w-full h-[250px] object-cover transition-transform duration-300"
                    width={300}
                    height={250}
                    quality={100}
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
                            quality={100}
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
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllBlogCard;
