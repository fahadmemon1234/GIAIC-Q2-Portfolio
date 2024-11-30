"use client";
import React from "react";
import Image from "next/image";
import { FaRegComment } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

const Main = () => {
  return (
    <>
      <Container className="mt-5">
        <Row>
          {/* First Card */}
          <Col md={4}>
            <div className="group card rounded-none text-white overflow-hidden">
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
                  <span className="badge bg-[#25211d] group-hover:bg-[#f7775e] mb-2 m-auto transition-colors duration-300 ease-in-out">
                    TRAVEL
                  </span>
                  <h2 className="card-title">
                    Is It Worth to Ride to West & North Canada?
                  </h2>
                  <div className="card-text">
                    <Row>
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

          {/* Second Card */}
          <Col md={4}>
            <div className="group card rounded-none text-white overflow-hidden">
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
                  <span className="badge bg-[#25211d] group-hover:bg-[#f7775e] mb-2 m-auto transition-colors duration-300 ease-in-out">
                    TRAVEL
                  </span>
                  <h2 className="card-title">
                    Is It Worth to Ride to West & North Canada?
                  </h2>
                  <div className="card-text">
                    <Row>
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

          {/* Third Card */}
          <Col md={4}>
            <div className="group card rounded-none text-white overflow-hidden">
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
                  <span className="badge bg-[#25211d] group-hover:bg-[#f7775e] mb-2 m-auto transition-colors duration-300 ease-in-out">
                    TRAVEL
                  </span>
                  <h2 className="card-title">
                    Is It Worth to Ride to West & North Canada?
                  </h2>
                  <div className="card-text">
                    <Row>
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
      </Container>
    </>
  );
};

export default Main;
