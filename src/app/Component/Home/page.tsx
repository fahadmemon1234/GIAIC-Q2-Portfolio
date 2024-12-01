"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaRegComment } from "react-icons/fa";
import { Container, Row, Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Carousel from "react-multi-carousel";
import { FaArrowRight } from "react-icons/fa6";

const Main = () => {
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
            <div className="group card rounded-none text-white overflow-hidden cursor-pointer mb-3">
              <div className="relative">
                <Image
                  src={"/assets/img/Main.jpg"}
                  alt={"Discover the Northern Lights"}
                  className="card-img rounded-none group-hover:scale-110 transition-transform duration-300 ease-in-out"
                  layout="responsive"
                  width={700}
                  height={400}
                />
                <div className="card-img-overlay text-center d-flex flex-column justify-content-end">
                  <span className="badge badges-detail bg-[#25211d] group-hover:bg-[#f7775e] mb-2 m-auto transition-colors duration-300 ease-in-out">
                    TRAVEL
                  </span>
                  <h2 className="card-title">
                    Is It Worth to Ride to West & North Canada?
                  </h2>
                  <div className="card-text">
                    <Row className="m-auto">
                      <Col>
                        <span>
                          By <strong>DIANA</strong>
                        </span>
                      </Col>
                      <Col>
                        <span>28 MAR 2008</span>
                      </Col>
                      <Col>
                        <span className="flex items-center gap-2">
                          <FaRegComment /> 0
                        </span>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col md={4} sm={12}>
            <div className="group card rounded-none text-white overflow-hidden cursor-pointer mb-3">
              <div className="relative">
                <Image
                  src={"/assets/img/Main.jpg"}
                  alt={"Discover the Northern Lights"}
                  className="card-img rounded-none group-hover:scale-110 transition-transform duration-300 ease-in-out"
                  layout="responsive"
                  width={700}
                  height={400}
                />
                <div className="card-img-overlay text-center d-flex flex-column justify-content-end">
                  <span className="badge badges-detail bg-[#25211d] group-hover:bg-[#f7775e] mb-2 m-auto transition-colors duration-300 ease-in-out">
                    TRAVEL
                  </span>
                  <h2 className="card-title">
                    Is It Worth to Ride to West & North Canada?
                  </h2>
                  <div className="card-text">
                    <Row className="m-auto">
                      <Col>
                        <span>
                          By <strong>DIANA</strong>
                        </span>
                      </Col>
                      <Col>
                        <span>28 MAR 2008</span>
                      </Col>
                      <Col>
                        <span className="flex items-center gap-2">
                          <FaRegComment /> 0
                        </span>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col md={4} sm={12}>
            <div className="group card rounded-none text-white overflow-hidden cursor-pointer mb-3">
              <div className="relative">
                <Image
                  src={"/assets/img/Main.jpg"}
                  alt={"Discover the Northern Lights"}
                  className="card-img rounded-none group-hover:scale-110 transition-transform duration-300 ease-in-out"
                  layout="responsive"
                  width={700}
                  height={400}
                />
                <div className="card-img-overlay text-center d-flex flex-column justify-content-end">
                  <span className="badge badges-detail bg-[#25211d] group-hover:bg-[#f7775e] mb-2 m-auto transition-colors duration-300 ease-in-out">
                    TRAVEL
                  </span>
                  <h2 className="card-title">
                    Is It Worth to Ride to West & North Canada?
                  </h2>
                  <div className="card-text">
                    <Row className="m-auto">
                      <Col>
                        <span>
                          By <strong>DIANA</strong>
                        </span>
                      </Col>
                      <Col>
                        <span>28 MAR 2008</span>
                      </Col>
                      <Col>
                        <span className="flex items-center gap-2">
                          <FaRegComment /> 0
                        </span>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Trending News Section */}
        <section className="pt-14">
          <div className="text-center">
            <h2 className="flex items-center justify-center">
              <span className="flex-grow border-b-2 border-gray-300 mr-3"></span>
              <span className="text-xxl font-semibold">Trending News</span>
              <span className="flex-grow border-b-2 border-gray-300 ml-3"></span>
            </h2>

            <span className="text-base font-normal text-gray-500 tracking-normal block">
              Popular Posts
            </span>
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
        </section>

        {/* Latest Posts Section */}

        <section className="pt-14">
          <div className="text-center">
            <h2 className="flex items-center justify-center">
              <span className="flex-grow border-b-2 border-gray-300 mr-3"></span>
              <span className="text-xxl font-semibold">Latest Posts</span>
              <span className="flex-grow border-b-2 border-gray-300 ml-3"></span>
            </h2>

            <span className="text-base font-normal text-gray-500 tracking-normal block">
              Stay up-to-date
            </span>
          </div>

          <div className="post pt-10">
            <Row className="items-center pb-3">
              <Col md={3} sm={12}>
                <Image
                  src={"/assets/img/tree.jpeg"}
                  alt={"Discover the Northern Lights"}
                  className="mb-3 w-[auto] object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
                  width={300}
                  height={50}
                />
              </Col>
              <Col md={9} sm={12}>
                <span className="badge badges-detail bg-[#25211d] group-hover:bg-[#f7775e] mb-2 transition-colors duration-300 ease-in-out">
                  TRAVEL
                </span>

                <h2 className="card-title">
                  Is It Worth to Ride to West & North Canada?
                </h2>
                <div className="card-text pt-3">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-[#a5a6aa]">
                      By <strong className="text-[#25211d]">DIANA</strong>
                    </span>
                    <span className="text-[#a5a6aa]">28 MAR 2008</span>
                    <span className="flex items-center gap-2 text-[#a5a6aa]">
                      <FaRegComment /> 0
                    </span>
                  </div>
                </div>

                <p className="pt-3 text-[#a5a6aa]">
                  People who have traveled around the world are willing to share
                  their tips and tricks
                </p>
              </Col>
            </Row>

            <Row className="items-center border-t-[#eaeaea] border-t-[1px] pt-3 pb-3">
              <Col md={3} sm={12}>
                <Image
                  src={"/assets/img/tree.jpeg"}
                  alt={"Discover the Northern Lights"}
                  className="mb-3 w-[auto] object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
                  width={300}
                  height={50}
                />
              </Col>
              <Col md={9} sm={12}>
                <span className="badge badges-detail bg-[#25211d] group-hover:bg-[#f7775e] mb-2 transition-colors duration-300 ease-in-out">
                  TRAVEL
                </span>

                <h2 className="card-title">
                  Is It Worth to Ride to West & North Canada?
                </h2>
                <div className="card-text pt-3">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-[#a5a6aa]">
                      By <strong className="text-[#25211d]">DIANA</strong>
                    </span>
                    <span className="text-[#a5a6aa]">28 MAR 2008</span>
                    <span className="flex items-center gap-2 text-[#a5a6aa]">
                      <FaRegComment /> 0
                    </span>
                  </div>
                </div>

                <p className="pt-3 text-[#a5a6aa]">
                  People who have traveled around the world are willing to share
                  their tips and tricks
                </p>
              </Col>
            </Row>

            <Row className="items-center border-t-[#eaeaea] border-t-[1px] pt-3 pb-3">
              <Col md={3}>
                <Image
                  src={"/assets/img/tree.jpeg"}
                  alt={"Discover the Northern Lights"}
                  className="mb-3 w-[auto] object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
                  width={300}
                  height={50}
                />
              </Col>
              <Col md={9}>
                <span className="badge badges-detail bg-[#25211d] group-hover:bg-[#f7775e] mb-2 transition-colors duration-300 ease-in-out">
                  TRAVEL
                </span>

                <h2 className="card-title">
                  Is It Worth to Ride to West & North Canada?
                </h2>
                <div className="card-text pt-3">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-[#a5a6aa]">
                      By <strong className="text-[#25211d]">DIANA</strong>
                    </span>
                    <span className="text-[#a5a6aa]">28 MAR 2008</span>
                    <span className="flex items-center gap-2 text-[#a5a6aa]">
                      <FaRegComment /> 0
                    </span>
                  </div>
                </div>

                <p className="pt-3 text-[#a5a6aa]">
                  People who have traveled around the world are willing to share
                  their tips and tricks
                </p>
              </Col>
            </Row>
          </div>

          <Button
            variant="dark"
            style={{
              borderRadius: "50px",
              paddingLeft: "24px",
              paddingRight: "24px",
              textTransform: "uppercase",
              letterSpacing: "2px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            More Posts{" "}
            {isHovered && (
              <FaArrowRight
                style={{
                  animation: "jump 0.5s ease-in-out infinite",
                  transition: "transform 0.3s ease",
                }}
              />
            )}
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
