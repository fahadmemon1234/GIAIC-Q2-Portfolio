"use client";
import { useState, FormEvent } from "react";
import React from "react";
import BlogCard from "@/components/BlogCard";
import BlogCardCategory from "@/components/BlogCardCategory";
import Image from "next/image";
import { blogShort } from "@/lib/blogData";

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/save-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Email saved successfully!");
      } else {
        setMessage("Failed to save email");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <section className="bg-[#f9fafb] bottom-0 rounded-b-[50px] w-full h-full">
        <div className="max-w-screen-xl mx-auto p-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-8">
          {blogShort.map((blog, index) => (
            <BlogCard
              key={index}
              imageUrl={blog.imageUrl}
              category={blog.category}
              title={blog.title}
              author={blog.author}
              date={blog.date}
              id={blog.id}
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

      <section className="py-12 bg-gray-100 relative overflow-hidden z-10">
        <div className="absolute left-0 top-0 w-full h-full -z-1">
          <Image
            src={
              "https://clarity-tailwind.preview.uideck.com/images/bg-dots.svg"
            }
            layout="fill"
            objectFit="cover"
            alt="dots"
          />
        </div>

        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0  relative">
          <div className="mb-5 bg-white shadow-1 p-4 w-full shadow-1 rounded-[10px] py-9 px-4 sm:px-8 xl:px-10">
            <div className="flex flex-wrap items-center justify-between gap-10">
              <div className="max-w-[455px] w-full">
                <h3 className="font-semibold text-heading-6 text-black mb-3">
                  Subscribe to Newsletter
                </h3>
                <p>
                  Provide your email to get email notification when we launch
                  new products or publish new articles
                </p>
              </div>
              <div className="max-w-[494px] w-full">
                <form>
                  <div className="flex items-center gap-5">
                    <div className="max-w-[350px] w-full">
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="rounded-md border border-gray-3 bg-white placeholder:text-black-5 w-full py-3 px-5 outline-none"
                      />
                    </div>
                    <button
                      onClick={handleSubmit}
                      className="font-medium rounded-md text-white bg-black flex py-3.5 px-5 cursor-pointer hover:opacity-90 transition-all ease-linear duration-300"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
                {message && (
                  <p className="mt-3 text-sm text-gray-700">{message}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
