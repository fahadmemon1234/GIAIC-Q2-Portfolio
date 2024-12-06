"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaRegComment, FaUser, FaCalendarAlt } from "react-icons/fa";
import TrendingPost from "../TrendingPost/page";
import { Container, Card } from "react-bootstrap";
import { fetchheroCard } from "@/app/lib/api";
import Link from "next/link";

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
  postType: string;
  commentCount: number;
}

export default function FeatureBlog() {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const interval = setInterval(() => {
      const savedTheme = localStorage.getItem("theme");
      setTheme(savedTheme === "dark" ? "dark" : "light");
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Fetch hero card Start

  const [heroCard, setHeroCard] = useState<HeroCard[]>([]);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        const data = await fetchheroCard();
        if (data) {
          setHeroCard(data);
        }
      } catch (error) {
        console.error("Error fetching hero card data:", error);
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  // Fetch hero card Start

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
              {heroCard
                .filter((card) => card.postType === "feature")
                .slice(0, 9)
                .map((card) => (
                  <Link key={card.id} href={`/Component/blogDetail/${card.id}`}>
                    <Card className="cursor-pointer relative group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      <div className="relative w-full h-60">
                        <Image
                          src={card.imageUrl.asset.url}
                          alt={card.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      </div>

                      <Card.Body className="p-4">
                        <span className="inline-block text-sm uppercase bg-[#f7775e] text-white py-1 px-3 rounded-full tracking-wider mb-3">
                          {card.category.title}
                        </span>
                        <Card.Title className="text-xl font-semibold text-[#25211d] leading-tight hover:text-[#f7775e] transition-colors duration-200">
                          {card.title}
                        </Card.Title>
                        <Card.Text className="text-sm text-gray-600 mt-2 leading-relaxed">
                          {card.description1.slice(0, 60)}...
                        </Card.Text>
                        <div className="flex items-center justify-between mt-4 text-gray-500 text-sm">
                          <span className="flex items-center gap-1">
                            <FaUser className="text-[#f7775e]" /> {card.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaCalendarAlt className="text-[#f7775e]" />
                            {new Date(card.createdDate).toLocaleDateString(
                              "en-US",
                              {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              }
                            )}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaRegComment className="text-[#f7775e]" />{" "}
                            {card.commentCount}
                          </span>
                        </div>
                      </Card.Body>
                    </Card>
                  </Link>
                ))}
            </div>
          </div>
        </Container>
      </div>

      <TrendingPost />
    </>
  );
}
