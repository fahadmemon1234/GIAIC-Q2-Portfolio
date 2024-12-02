"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaRegComment } from "react-icons/fa";
import { Container, Row, Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Carousel from "react-multi-carousel";
import { FaArrowRight } from "react-icons/fa6";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

interface MainProps {
  theme: string;
}

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const Main = ({ theme }: MainProps) => {
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

  const cards = Array(8).fill({
    imgSrc: "/assets/img/tree.jpeg",
    category: "TRAVEL",
    title: "Escape the Busy City and Dive in this Beauty",
    author: "Diana Lewis",
    date: "20 Feb 2020",
    comments: 0,
  });

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md={4} sm={12}>
            <div className="group card rounded-lg overflow-hidden cursor-pointer mb-6 shadow-md hover:shadow-xl transform transition-transform duration-300 hover:scale-105">
              <div className="relative">
                <Image
                  src={"/assets/img/Main.jpg"}
                  alt={"Discover the Northern Lights"}
                  className="rounded-lg group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  layout="responsive"
                  width={700}
                  height={400}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent transition-all duration-500"></div>

                <div className="absolute inset-0 flex flex-col justify-end p-6 text-center">
                  <span className="inline-block bg-[#f7775e] text-white uppercase text-xs font-semibold tracking-wider py-1 px-3 rounded-full mb-4 shadow-sm group-hover:scale-105 transition-transform">
                    Travel
                  </span>

                  <h2 className="text-white text-lg font-bold leading-snug group-hover:text-[#f7775e] transition-colors duration-300">
                    Is It Worth to Ride to West & North Canada?
                  </h2>

                  <div className="flex justify-center items-center gap-4 text-xs text-gray-300 mt-3">
                    <span>
                      By <strong className="text-white">Diana</strong>
                    </span>
                    <span>28 Mar 2008</span>
                    <span className="flex items-center gap-1">
                      <FaRegComment className="text-[#f7775e]" /> 0
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col md={4} sm={12}>
            <div className="group card rounded-lg overflow-hidden cursor-pointer mb-6 shadow-md hover:shadow-xl transform transition-transform duration-300 hover:scale-105">
              <div className="relative">
                <Image
                  src={"/assets/img/Main.jpg"}
                  alt={"Discover the Northern Lights"}
                  className="rounded-lg group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  layout="responsive"
                  width={700}
                  height={400}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent transition-all duration-500"></div>

                <div className="absolute inset-0 flex flex-col justify-end p-6 text-center">
                  <span className="inline-block bg-[#f7775e] text-white uppercase text-xs font-semibold tracking-wider py-1 px-3 rounded-full mb-4 shadow-sm group-hover:scale-105 transition-transform">
                    Travel
                  </span>

                  <h2 className="text-white text-lg font-bold leading-snug group-hover:text-[#f7775e] transition-colors duration-300">
                    Is It Worth to Ride to West & North Canada?
                  </h2>

                  <div className="flex justify-center items-center gap-4 text-xs text-gray-300 mt-3">
                    <span>
                      By <strong className="text-white">Diana</strong>
                    </span>
                    <span>28 Mar 2008</span>
                    <span className="flex items-center gap-1">
                      <FaRegComment className="text-[#f7775e]" /> 0
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col md={4} sm={12}>
            <div className="group card rounded-lg overflow-hidden cursor-pointer mb-6 shadow-md hover:shadow-xl transform transition-transform duration-300 hover:scale-105">
              <div className="relative">
                <Image
                  src={"/assets/img/Main.jpg"}
                  alt={"Discover the Northern Lights"}
                  className="rounded-lg group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  layout="responsive"
                  width={700}
                  height={400}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent transition-all duration-500"></div>

                <div className="absolute inset-0 flex flex-col justify-end p-6 text-center">
                  <span className="inline-block bg-[#f7775e] text-white uppercase text-xs font-semibold tracking-wider py-1 px-3 rounded-full mb-4 shadow-sm group-hover:scale-105 transition-transform">
                    Travel
                  </span>

                  <h2 className="text-white text-lg font-bold leading-snug group-hover:text-[#f7775e] transition-colors duration-300">
                    Is It Worth to Ride to West & North Canada?
                  </h2>

                  <div className="flex justify-center items-center gap-4 text-xs text-gray-300 mt-3">
                    <span>
                      By <strong className="text-white">Diana</strong>
                    </span>
                    <span>28 Mar 2008</span>
                    <span className="flex items-center gap-1">
                      <FaRegComment className="text-[#f7775e]" /> 0
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* Trending News Section */}
      <section className="mt-10 pt-14 pb-10 bg-[#fbf7f4]">
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
                Trending News
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
              Popular Posts
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
              {cards.map((card, index) => (
                <Card
                  key={index}
                  className="border-0 cursor-pointer group overflow-hidden mx-2"
                >
                  <div className="overflow-hidden">
                    <Card.Img
                      variant="top"
                      src={card.imgSrc}
                      className="w-100 h-[200px] object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
                    />
                  </div>
                  <Card.Body className="d-flex flex-column justify-content-end p-3">
                    <span className="badge badges-detail bg-[#25211d] group-hover:bg-[#f7775e] mb-2 transition-colors duration-300 ease-in-out">
                      {card.category}
                    </span>
                    <h2 className="h5 mb-3 text-dark">{card.title}</h2>
                    <div className="text-muted small d-flex justify-content-between align-items-center">
                      <span>
                        By <strong>{card.author}</strong>
                      </span>
                      <span>{card.date}</span>
                      <span className="d-flex align-items-center gap-1">
                        <FaRegComment /> {card.comments}
                      </span>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </Carousel>
          </div>
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
            <Row className="pt-4 items-center pb-6 border-b border-gray-300 cursor-pointer group hover:bg-gray-100 transition-colors duration-300">
              <Col md={3} sm={12}>
                <Image
                  src={"/assets/img/tree.jpeg"}
                  alt={"Discover the Northern Lights"}
                  className="rounded-lg w-full h-[150px] transform group-hover:scale-105 transition-transform duration-500 shadow-md"
                  width={300}
                  layout="responsive"
                  height={150}
                />
              </Col>

              <Col md={9} sm={12} className="mt-4 md:mt-0">
                <span className="inline-block text-sm uppercase bg-[#f7775e] text-white py-1 px-3 rounded-full tracking-wider mb-3 group-hover:bg-[#e0654c] transition-colors duration-300">
                  Travel
                </span>

                <h2
                  className={`text-2xl font-semibold group-hover:text-[#f7775e] transition-colors duration-300 ${
                    theme == "dark" ? "text-white" : "text-[#25211d]"
                  }`}
                >
                  Is It Worth to Ride to West & North Canada?
                </h2>

                <div className="flex flex-wrap items-center gap-4 text-sm text-[#a5a6aa] mt-2">
                  <span>
                    By{" "}
                    <strong
                      className={` ${
                        theme == "dark" ? "text-white" : "text-[#25211d]"
                      }`}
                    >
                      Diana
                    </strong>
                  </span>
                  <span className="text-[#6c757d]">28 Mar 2008</span>
                  <span className="flex items-center gap-2">
                    <FaRegComment className="text-[#6c757d]" /> 0
                  </span>
                </div>

                <p className="mt-4 text-[#6c757d] leading-relaxed group-hover:text-[#25211d] transition-colors duration-300">
                  People who have traveled around the world are willing to share
                  their tips and tricks to help you explore the best places
                  while avoiding common mistakes.
                </p>
              </Col>
            </Row>

            <Row className="pt-4 items-center pb-6 border-b border-gray-300 cursor-pointer group hover:bg-gray-100 transition-colors duration-300">
              <Col md={3} sm={12}>
                <Image
                  src={"/assets/img/tree.jpeg"}
                  alt={"Discover the Northern Lights"}
                  className="rounded-lg w-full h-[150px] transform group-hover:scale-105 transition-transform duration-500 shadow-md"
                  width={300}
                  layout="responsive"
                  height={150}
                />
              </Col>

              <Col md={9} sm={12} className="mt-4 md:mt-0">
                <span className="inline-block text-sm uppercase bg-[#f7775e] text-white py-1 px-3 rounded-full tracking-wider mb-3 group-hover:bg-[#e0654c] transition-colors duration-300">
                  Travel
                </span>

                <h2
                  className={`text-2xl font-semibold group-hover:text-[#f7775e] transition-colors duration-300 ${
                    theme == "dark" ? "text-white" : "text-[#25211d]"
                  }`}
                >
                  Is It Worth to Ride to West & North Canada?
                </h2>

                <div className="flex flex-wrap items-center gap-4 text-sm text-[#a5a6aa] mt-2">
                  <span>
                    By{" "}
                    <strong
                      className={` ${
                        theme == "dark" ? "text-white" : "text-[#25211d]"
                      }`}
                    >
                      Diana
                    </strong>
                  </span>
                  <span className="text-[#6c757d]">28 Mar 2008</span>
                  <span className="flex items-center gap-2">
                    <FaRegComment className="text-[#6c757d]" /> 0
                  </span>
                </div>

                <p className="mt-4 text-[#6c757d] leading-relaxed group-hover:text-[#25211d] transition-colors duration-300">
                  People who have traveled around the world are willing to share
                  their tips and tricks to help you explore the best places
                  while avoiding common mistakes.
                </p>
              </Col>
            </Row>

            <Row className="pt-4 items-center pb-6 border-b border-gray-300 cursor-pointer group hover:bg-gray-100 transition-colors duration-300">
              <Col md={3} sm={12}>
                <Image
                  src={"/assets/img/tree.jpeg"}
                  alt={"Discover the Northern Lights"}
                  className="rounded-lg w-full h-[150px] transform group-hover:scale-105 transition-transform duration-500 shadow-md"
                  width={300}
                  layout="responsive"
                  height={150}
                />
              </Col>

              <Col md={9} sm={12} className="mt-4 md:mt-0">
                <span className="inline-block text-sm uppercase bg-[#f7775e] text-white py-1 px-3 rounded-full tracking-wider mb-3 group-hover:bg-[#e0654c] transition-colors duration-300">
                  Travel
                </span>

                <h2
                  className={`text-2xl font-semibold group-hover:text-[#f7775e] transition-colors duration-300 ${
                    theme === "dark" ? "text-white" : "text-[#25211d]"
                  }`}
                >
                  Is It Worth to Ride to West & North Canada?
                </h2>

                <div className="flex flex-wrap items-center gap-4 text-sm text-[#a5a6aa] mt-2">
                  <span>
                    By{" "}
                    <strong
                      className={` ${
                        theme === "dark" ? "text-white" : "text-[#25211d]"
                      }`}
                    >
                      Diana
                    </strong>
                  </span>
                  <span className="text-[#6c757d]">28 Mar 2008</span>
                  <span className="flex items-center gap-2">
                    <FaRegComment className="text-[#6c757d]" /> 0
                  </span>
                </div>

                <p className="mt-4 text-[#6c757d] leading-relaxed group-hover:text-[#25211d] transition-colors duration-300">
                  People who have traveled around the world are willing to share
                  their tips and tricks to help you explore the best places
                  while avoiding common mistakes.
                </p>
              </Col>
            </Row>
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
