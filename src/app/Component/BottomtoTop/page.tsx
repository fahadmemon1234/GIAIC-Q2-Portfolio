"use client";
import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollPosition = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);

    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <a
        id="back-to-top"
        className="back-to-top fixed text-lg rounded-full z-10 bottom-5 right-5 p-3 text-center bg-orange-500 text-white justify-center items-center"
        onClick={scrollToTop}
        style={{ display: "inline-flex" }}
      >
        <FaArrowUp />
      </a>
    )
  );
};

export default BackToTop;
