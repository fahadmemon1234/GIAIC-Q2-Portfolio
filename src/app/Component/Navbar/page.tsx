"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CiSearch, CiUser } from "react-icons/ci";
import { BsMoon, BsSun } from "react-icons/bs";
import { Modal, NavDropdown } from "react-bootstrap";
import { AiOutlineTag } from "react-icons/ai";
import AuthPage from "../Account/page";
import { fetchCategory } from "@/app/lib/api";
import { FaUserCircle } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";

interface CategoryItem {
  id: number;
  title: string;
}

const TopNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [shadow, setShadow] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
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
    localStorage.removeItem("theme");
    document.body.classList.remove(theme);
    document.body.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Fetch Category Start

  const [categories, setCategories] = useState<CategoryItem[]>([]);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        const data = await fetchCategory();
        if (data) setCategories(data);
      } catch (error) {
        console.error("Error fetching navbar data:", error);
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  // Fetch Category End

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [showDropdown, setShowDropdown] = useState(false); // Track dropdown visibility

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Set login state to true after successful login
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev); // Toggle dropdown visibility
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Reset login state on logout
    setShowDropdown(false); // Hide dropdown
  };

  return (
    <>
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
              theme === "dark" ? "bg-white" : "text-black"
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
              <NavDropdown
                title={
                  <span
                    className={`${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    Category
                  </span>
                }
                id="category-dropdown"
                className={`${theme === "dark" ? "text-white" : "text-black"}`}
                menuVariant={theme === "dark" ? "dark" : "light"}
              >
                <div
                  style={{
                    backgroundColor:
                      theme === "dark" ? "transparent" : "transparent",
                    color: theme === "dark" ? "#ffffff" : "#000000",
                  }}
                >
                  {categories.map((category) => (
                    <NavDropdown.Item
                      key={category.title}
                      href={`/Component/Category/${category.title}`}
                      className={`flex items-center ${
                        theme === "dark"
                          ? "hover:bg-gray-800 text-white"
                          : "hover:bg-gray-100 text-black"
                      }`}
                    >
                      <AiOutlineTag className="mr-2" />
                      {category.title}
                    </NavDropdown.Item>
                  ))}
                </div>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>

          <div className="d-flex align-items-center" style={{ gap: "10px" }}>
            <CiSearch size={30} className="navbar-icon" />
            {/* <CiUser
              size={30}
              className="navbar-icon cursor-pointer"
              onClick={handleShow}
            /> */}

            {!isLoggedIn ? (
              <CiUser
                size={30}
                className="navbar-icon cursor-pointer"
                onClick={handleShow}
              />
            ) : (
              <div className="relative">
                <FaUserCircle
                  size={30}
                  className="navbar-icon cursor-pointer"
                  onClick={toggleDropdown}
                />
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
                    <ul className="py-2">
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => console.log("View Profile")}
                      >
                        View Profile
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={handleLogout}
                      >
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}
            <div
              onClick={toggleTheme}
              className="theme-toggle d-flex align-items-center justify-content-center p-2 rounded-full cursor-pointer"
            >
              {theme === "light" ? <BsMoon size={20} /> : <BsSun size={20} />}
            </div>
          </div>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body
          className={`${
            theme == "dark"
              ? " bg-[#121212] rounded-lg border-1 border-white"
              : "bg-white rounded-lg"
          }`}
        >
          <AuthPage onClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TopNavbar;
