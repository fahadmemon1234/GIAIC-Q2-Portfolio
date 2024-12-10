"use client";
import { useState, useEffect } from "react";
import Main from "./Component/Home/page";

export default function Home() {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setTheme(savedTheme === "dark" ? "dark" : "light");

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "theme") {
        setTheme(event.newValue === "dark" ? "dark" : "light");
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <>
      <Main theme={theme} />
    </>
  );
}
