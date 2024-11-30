"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CiSearch, CiUser } from "react-icons/ci";

const TopNavbar = () => {
  const [shadow, setShadow] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 50) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        expand="lg"
        className={`navbar ${shadow ? "shadow-navbar" : ""}`}
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="#home">
            <Image
              src={"/assets/img/Logo.png"}
              alt="logo"
              width={100}
              height={46}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
            style={{ flexGrow: 0 }}
          >
            <Nav
              className="me-auto text-center"
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 600,
                gap: "20px",
              }}
            >
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Feature</Nav.Link>
              <Nav.Link href="#link">Blog</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <div className="d-flex align-items-center" style={{ gap: "10px" }}>
            <CiSearch size={30} className="me-2" />
            <CiUser size={30} />
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNavbar;
