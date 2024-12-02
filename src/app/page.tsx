"use client";
import { useState, useEffect } from "react";
import Main from "./Component/Home/page";
import ScrollToTopButton from "./Component/ScrollToTopButton/page";

export default function Home() {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const interval = setInterval(() => {
      const savedTheme = localStorage.getItem("theme");
      setTheme(savedTheme === "dark" ? "dark" : "light");
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Main theme={theme} />

      <ScrollToTopButton />
    </>
  );
}
