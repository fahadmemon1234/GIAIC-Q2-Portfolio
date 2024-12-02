"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button, Container } from "react-bootstrap";

const blogPosts = [
  {
    id: 1,
    title: "Mastering React.js in 2024",
    description:
      "Discover the best practices, tips, and resources to become a React expert.",
    imageUrl: "/assets/img/tree.jpeg",
    category: "web-development",
    date: "November 25, 2024",
    author: "John Doe",
  },
  {
    id: 2,
    title: "Top 10 UI/UX Design Trends",
    description:
      "Explore the emerging trends in UI/UX design that will shape 2024.",
    imageUrl: "/assets/blog/uiux.png",
    category: "design",
    date: "November 20, 2024",
    author: "Jane Smith",
  },
  {
    id: 3,
    title: "Mastering React.js in 2024",
    description:
      "Discover the best practices, tips, and resources to become a React expert.",
    imageUrl: "/assets/img/tree.jpeg",
    category: "web-development",
    date: "November 25, 2024",
    author: "John Doe",
  },
];

const CategoryPage = ({ params }: { params: { category: string } }) => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/");
  };

  const { category } = params;

  const filteredPosts = blogPosts.filter((post) => post.category === category);

  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const interval = setInterval(() => {
      const savedTheme = localStorage.getItem("theme");
      setTheme(savedTheme === "dark" ? "dark" : "light");
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`min-h-screen py-8 px-4 md:px-8 ${
        theme == "dark" ? "text-[white]" : "bg-gray-100"
      }`}
    >
      <Container>
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h1
            className={`text-3xl md:text-5xl font-bold  capitalize ${
              theme == "dark" ? "text-[white]" : "text-gray-800"
            }`}
          >
            {category.replace("-", " ")} Blogs
          </h1>
          <p
            className={`mt-3 ${
              theme == "dark" ? "text-[white]" : "text-gray-600"
            }`}
          >
            Discover the latest articles and insights in the "{category}"
            category.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Link
              href={`/Component/blogDetail/${post.id}`}
              key={post.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={400}
                height={200}
                className="rounded-t-lg object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  By {post.author} • {post.date}
                </p>
                <p className="text-gray-600 mt-2 text-sm">
                  {post.description.substring(0, 100)}...
                </p>
              </div>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center mt-8">
            <p
              className={`text-lg font-bold ${
                theme == "dark" ? "text-[white]" : "text-gray-600"
              }`}
            >
              No blogs found in this category.
            </p>
            <Button
              onClick={handleRedirect}
              className="mt-5 bg-[#f7775e] border-[#f7775e] hover:bg-[#f7775e] hover:border-[#f7775e] focus:outline-none focus:ring-0"
            >
              Back to home
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default CategoryPage;
