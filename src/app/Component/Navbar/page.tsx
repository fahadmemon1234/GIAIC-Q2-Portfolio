"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CiSearch, CiUser } from "react-icons/ci";
import { BsMoon, BsSun } from "react-icons/bs";

const TopNavbar = () => {
  const [shadow, setShadow] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.classList.add(savedTheme);
    }

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

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.classList.remove(theme);
    document.body.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <Navbar
      expand="lg"
      className={`navbar ${shadow ? "shadow-navbar" : ""} ${theme}`}
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="#home">
          <Image
            src={
              theme === "dark"
                ? "/assets/img/white.png"
                : "/assets/img/Logo.png"
            }
            alt="logo"
            width={100}
            height={46}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={`navbar-toggle ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
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
            <Nav.Link
              href="/"
              className={`navbar-link ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/Component/featureBlog"
              className={`navbar-link ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              Feature
            </Nav.Link>
            <Nav.Link
              href="#link"
              className={`navbar-link ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              Blog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div className="d-flex align-items-center" style={{ gap: "10px" }}>
          <CiSearch size={30} className="navbar-icon" />
          <CiUser size={30} className="navbar-icon" />
          <div
            onClick={toggleTheme}
            className="theme-toggle d-flex align-items-center justify-content-center p-2 rounded-full cursor-pointer"
          >
            {theme === "light" ? <BsMoon size={20} /> : <BsSun size={20} />}
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
