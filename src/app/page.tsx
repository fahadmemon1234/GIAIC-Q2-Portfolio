"use client";
import { useEffect, useState } from "react";
import Main from "./Component/Home/page";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return;

  <Main />;
}
