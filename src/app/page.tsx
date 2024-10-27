import React from "react";
import BlogCard from "@/components/BlogCard";
import BlogCardCategory from "@/components/BlogCardCategory";

const blogData = [
  {
    imageUrl: "/assets/images/Human.jpg",
    category: "News",
    title: "Human trafficking: An underreported crime in Pakistan",
    author: "Syeda Alizeh",
    date: "June 04, 2024",
  },
  {
    imageUrl: "/assets/images/india.png",
    category: "News",
    title: "Last-ditch attempt to save India’s democracy",
    author: "Chris Emmanuel",
    date: "June 06, 2024",
  },
  {
    imageUrl: "/assets/images/nvidia.jpg",
    category: "Technology",
    title: "Nvidia surpasses Apple as 'world’s most valuable company'",
    author: "News Desk",
    date: "Oct 26, 2024",
  },
  {
    imageUrl: "/assets/images/Women.jpg",
    category: " Entertainment",
    title:
      "Kate Middleton resumes royal duties after completing cancer treatment",
    author: "Pop Culture & Art",
    date: "Sep 18, 2024",
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-[#f9fafb] bottom-0 rounded-b-[50px] w-full h-full">
        <div className="max-w-screen-xl mx-auto p-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-8">
          {blogData.map((blog, index) => (
            <BlogCard
              key={index}
              imageUrl={blog.imageUrl}
              category={blog.category}
              title={blog.title}
              author={blog.author}
              date={blog.date}
            />
          ))}
        </div>
      </section>

      <section className="bg-white bottom-0 rounded-b-[50px] w-full h-full pt-20 lg:pt-25 pb-15">
        <div className="mb-12.5 text-center">
          <h2 className="text-dark mb-3.5 text-2xl font-bold sm:text-4xl xl:text-heading-3">
            Browse by Category
          </h2>
          <p className="text-gray-500 font-medium">
            Select a category to see more related content
          </p>
        </div>
        <BlogCardCategory />
      </section>
    </>
  );
}
