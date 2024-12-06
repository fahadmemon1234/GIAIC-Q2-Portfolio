"use client";
import React, { useState, useEffect } from "react";
import { FaRegComment } from "react-icons/fa";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Carousel from "react-multi-carousel";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

import { fetchheroCard } from "@/app/lib/api";

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

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const TrendingPost = () => {
  const [isHovered, setIsHovered] = useState(false);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

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
      <section className="pt-14 pb-10 bg-[#fbf7f4]">
        <Container>
          <div className="text-center">
            <h2 className="flex items-center justify-center mb-4">
              <span className="flex-grow border-b-[1px] border-[#f7775e] mr-4"></span>
              <span
                className="font-bold text-[#25211d]"
                style={{
                  fontFamily: playfair.style.fontFamily,
                  fontSize: "36px",
                }}
              >
                Trending Posts
              </span>
              <span className="flex-grow border-b-[1px] border-[#f7775e] ml-4"></span>
            </h2>
            <p
              style={{
                fontFamily: playfair.style.fontFamily,
                fontSize: "20px",
              }}
              className="text-gray-600 tracking-wide"
            >
              Articles Of The Day
            </p>
          </div>

          <div className="card-slider pt-10">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              transitionDuration={500}
              containerClass="carousel-container"
              showDots={true}
              arrows={false}
              dotListClass="custom-dot-list-style"
            >
              {heroCard
                .filter((card) => card.postType === "trending")
                .map((card) => (
                  <Link key={card.id} href={`/Component/blogDetail/${card.id}`}>
                    <Card
                      key={card.id}
                      className="border-0 cursor-pointer group overflow-hidden mx-2 h-[380px]"
                    >
                      <div className="overflow-hidden">
                        <Card.Img
                          variant="top"
                          src={card.imageUrl.asset.url}
                          alt={card.title}
                          className="w-100 h-[200px] object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
                        />
                      </div>
                      <Card.Body className="d-flex flex-column justify-content-end p-3">
                        <span className="badge badges-detail bg-[#25211d] group-hover:bg-[#f7775e] mb-2 transition-colors duration-300 ease-in-out">
                          {card.category.title}
                        </span>
                        <h2 className="h5 mb-3 text-dark">{card.title}</h2>
                        <div className="text-muted small d-flex justify-content-between align-items-center">
                          <span>
                            By <strong>{card.author}</strong>
                          </span>
                          <span>
                            {" "}
                            {new Date(card.createdDate).toLocaleDateString(
                              "en-US",
                              {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              }
                            )}
                          </span>
                          <span className="d-flex align-items-center gap-1">
                            <FaRegComment /> {card.commentCount}
                          </span>
                        </div>
                      </Card.Body>
                    </Card>
                  </Link>
                ))}
            </Carousel>
          </div>
        </Container>
      </section>
    </>
  );
};

export default TrendingPost;
