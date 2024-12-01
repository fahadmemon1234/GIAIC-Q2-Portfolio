"use client";

import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-[#ff7e5f] to-[#feb47b] text-white p-4 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl group"
          style={{
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
          }}
        >
          <FaArrowUp className="text-xl transition-transform duration-300 group-hover:animate-bounce" />
          <style>
            {`
            @keyframes bounce {
              0%, 100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-6px);
              }
            }
          `}
          </style>
        </button>
      )}
    </>
  );
}

export default ScrollToTopButton;
