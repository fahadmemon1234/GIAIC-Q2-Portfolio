"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaRegComment } from "react-icons/fa";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import { fetchheroCard } from "@/app/lib/api";
import TrendingPost from "../TrendingPost/page";

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

const Main = ({ theme = "light" }) => {
  const [isHovered, setIsHovered] = useState(false);

  const router = useRouter();

  const handlePage = () => {
    router.push("/Component/featureBlog");
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
      <Container className="mt-5">
        <Row>
          {heroCard
            .filter((card) => card.postType === "hero")
            .slice(0, 3)
            .map((card) => (
              <Col md={4} sm={12} key={card.id}>
                <Link href={`/Component/blogDetail/${card.id}`}>
                  <div className="group card rounded-lg overflow-hidden cursor-pointer mb-6 shadow-md hover:shadow-xl transform transition-transform duration-300 hover:scale-105">
                    <div className="relative h-[540px]">
                      <Image
                        src={card.imageUrl.asset.url}
                        alt={card.title}
                        className="rounded-lg group-hover:scale-110 transition-transform duration-500 ease-in-out"
                        layout="responsive"
                        width={700}
                        height={400}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent transition-all duration-500"></div>

                      <div className="absolute inset-0 flex flex-col justify-end p-6 text-center">
                        <span className="inline-block bg-[#f7775e] text-white uppercase text-xs font-semibold tracking-wider py-1 px-3 rounded-full mb-4 shadow-sm group-hover:scale-105 transition-transform">
                          {card.category.title}
                        </span>

                        <h2 className="text-white text-lg font-bold leading-snug group-hover:text-[#f7775e] transition-colors duration-300">
                          {card.title}
                        </h2>

                        <div className="flex justify-center items-center gap-4 text-xs text-gray-300 mt-3">
                          <span>
                            By{" "}
                            <strong className="text-white">
                              {card.author}
                            </strong>
                          </span>
                          <span>
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
                      </div>
                    </div>
                  </div>
                </Link>
              </Col>
            ))}
        </Row>
      </Container>
      {/* Trending News Section */}
      <section>
        <Container>
          <TrendingPost />
        </Container>
      </section>

      {/* Latest Posts Section */}
      <Container>
        <section className="pt-14">
          <div className="text-center">
            <h2 className="flex items-center justify-center mb-4">
              <span className="flex-grow border-b-[1px] border-[#f7775e] mr-4"></span>
              <span
                className={`font-bold ${
                  theme == "dark" ? "text-white" : "text-[#25211d]"
                }`}
                style={{
                  fontFamily: playfair.style.fontFamily,
                  fontSize: "36px",
                }}
              >
                Latest Posts
              </span>
              <span className="flex-grow border-b-[1px] border-[#f7775e] ml-4"></span>
            </h2>
            <p
              style={{
                fontFamily: playfair.style.fontFamily,
                fontSize: "20px",
              }}
              className={`tracking-wide ${
                theme == "dark" ? "text-white" : "text-gray-600"
              }`}
            >
              Stay up-to-date
            </p>
          </div>

          <div className="post pt-10">
            {heroCard
              .filter((card) => card.postType === "latest")
              .slice(0, 5)
              .map((card) => (
                <Link key={card.id} href={`/Component/blogDetail/${card.id}`}>
                  <Row className="pt-4 items-center pb-6 border-b border-gray-300 cursor-pointer group hover:bg-gray-100 transition-colors duration-300">
                    <Col md={3} sm={12}>
                      <Image
                        src={card.imageUrl.asset.url}
                        alt={card.title}
                        className="rounded-lg w-full h-[150px] transform group-hover:scale-105 transition-transform duration-500 shadow-md"
                        width={300}
                        layout="responsive"
                        height={150}
                      />
                    </Col>

                    <Col md={9} sm={12} className="mt-4 md:mt-0">
                      <span className="inline-block text-sm uppercase bg-[#f7775e] text-white py-1 px-3 rounded-full tracking-wider mb-3 group-hover:bg-[#e0654c] transition-colors duration-300">
                        {card.category.title}
                      </span>

                      <h2
                        className={`text-2xl font-semibold group-hover:text-[#f7775e] transition-colors duration-300 ${
                          theme == "dark" ? "text-white" : "text-[#25211d]"
                        }`}
                      >
                        {card.title}
                      </h2>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-[#a5a6aa] mt-2">
                        <span>
                          By{" "}
                          <strong
                            className={` ${
                              theme == "dark" ? "text-white" : "text-[#25211d]"
                            }`}
                          >
                            {card.author}
                          </strong>
                        </span>
                        <span className="text-[#6c757d]">
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
                        <span className="flex items-center gap-2">
                          <FaRegComment className="text-[#6c757d]" />{" "}
                          {card.commentCount}
                        </span>
                      </div>

                      <p className="mt-4 text-[#6c757d] leading-relaxed group-hover:text-[#25211d] transition-colors duration-300">
                        {card.description1.slice(0, 156)}...
                      </p>
                    </Col>
                  </Row>
                </Link>
              ))}
          </div>

          <Button
            variant="dark"
            className="mb-5 mt-10 bg-[#25211d] text-white hover:bg-[#f7775e] transition-all duration-300"
            style={{
              borderRadius: "50px",
              border: "2px solid white",
              paddingLeft: "24px",
              paddingRight: "24px",
              textTransform: "uppercase",
              letterSpacing: "2px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontWeight: "bold",
              fontSize: "14px",
              cursor: "pointer",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handlePage}
          >
            More Posts{" "}
            <span
              className={`transform transition-transform duration-300 ${
                isHovered ? "translate-x-1" : ""
              }`}
            >
              <FaArrowRight
                style={{
                  animation: isHovered
                    ? "jump 0.5s ease-in-out infinite"
                    : "none",
                }}
              />
            </span>
            <style>
              {`
      @keyframes jump {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-3px);
        }
      }
    `}
            </style>
          </Button>
        </section>
      </Container>
    </>
  );
};

export default Main;
