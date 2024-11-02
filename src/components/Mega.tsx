"use client";
import { useState, useEffect } from "react";
import { HiArrowUp } from "react-icons/hi";

export default function Mega() {
  const [scrollTop, setScrollTop] = useState(false);

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.pageYOffset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      className={`${
        scrollTop ? "flex" : "hidden"
      } items-center justify-center w-10 h-10 rounded-[4px] shadow-lg bg-black hover:opacity-95 fixed bottom-8 right-8 z-50`}
      onClick={scrollToTop}
    >
      <HiArrowUp className="text-white w-5 h-5" />
    </button>
  );
}
