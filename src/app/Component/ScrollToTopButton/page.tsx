"use client";

import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            borderRadius: "50%",
            padding: "12px",
            backgroundColor: "#f7775e",
            color: "#ffffff",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease, background-color 0.3s ease",
          }}
          className="group"
        >
          <FaArrowUp
            className="group-hover:transform group-hover:scale-110 transition-transform duration-300"
            style={{ fontSize: "20px" }}
          />
        </button>
      )}
    </>
  );
}

export default ScrollToTopButton;
