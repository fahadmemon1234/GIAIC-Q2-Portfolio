"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaRegComment, FaUser, FaCalendarAlt } from "react-icons/fa";
import TrendingPost from "../TrendingPost/page";
import { Container } from "react-bootstrap";

const blogs = [
  {
    id: 1,
    title: "Explore the Northern Lights",
    author: "Diana",
    date: "28 Mar 2008",
    comments: 5,
    category: "Travel",
    image: "/assets/img/Tree.jpeg",
    description:
      "Discover tips and tricks for planning your journey to witness the magical auroras.",
  },
  {
    id: 2,
    title: "Culinary Wonders of Asia",
    author: "John",
    date: "15 Jan 2023",
    comments: 12,
    category: "Food",
    image: "/assets/img/Tree.jpeg",
    description:
      "Explore the exotic flavors of Asia and learn about unique recipes to try at home.",
  },
  {
    id: 3,
    title: "The Art of Minimalism",
    author: "Sophia",
    date: "8 Nov 2022",
    comments: 8,
    category: "Lifestyle",
    image: "/assets/img/Tree.jpeg",
    description:
      "Learn how to simplify your life and embrace a minimalist lifestyle.",
  },
];

export default function FeatureBlog() {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const interval = setInterval(() => {
      const savedTheme = localStorage.getItem("theme");
      setTheme(savedTheme === "dark" ? "dark" : "light");
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className={`min-h-screen font-bold ${
          theme == "dark" ? " text-[white] " : "bg-gray-100 text-gray-900"
        }`}
      >
        <Container>
          <div className="container mx-auto px-6 py-10">
            <div className="mb-10">
              <h1 className="text-4xl font-bold text-center">Feature Blogs</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="cursor-pointer relative group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative w-full h-60">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>

                  <div className="p-5">
                    <span className="inline-block text-sm uppercase bg-[#f7775e] text-white py-1 px-3 rounded-full tracking-wider mb-3">
                      {blog.category}
                    </span>
                    <h2 className="text-lg font-semibold text-[#25211d]">
                      {blog.title}
                    </h2>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                      {blog.description}
                    </p>

                    <div className="flex items-center justify-between mt-4 text-gray-500 text-sm">
                      <span className="flex items-center gap-1">
                        <FaUser className="text-[#f7775e]" /> {blog.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt className="text-[#f7775e]" /> {blog.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaRegComment className="text-[#f7775e]" />{" "}
                        {blog.comments}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <TrendingPost />
    </>
  );
}
