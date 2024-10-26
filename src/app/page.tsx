import React from "react";
import Navbar from "@/components/Navbar";
import BlogCard from "@/components/BlogCard";

const blogData = [
  {
    imageUrl: "/assets/images/Nature.jpg",
    category: "Technology",
    title: "14 August Article",
    author: "Adrio Devid",
    date: "Sep 10, 2025",
  },
  {
    imageUrl: "/assets/images/Nature.jpg",
    category: "Science",
    title: "New Breakthroughs in Quantum Computing",
    author: "Jane Doe",
    date: "Oct 5, 2025",
  },
  {
    imageUrl: "/assets/images/Nature.jpg",
    category: "Architecture",
    title: "Exploring Minimalist Interior Designs",
    author: "John Smith",
    date: "Nov 12, 2025",
  },
  // Additional blog data entries can go here
];

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="bg-[#f9fafb] bottom-0 rounded-b-[50px] w-full h-full">
        <div className="max-w-screen-xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
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
    </>
  );
}
