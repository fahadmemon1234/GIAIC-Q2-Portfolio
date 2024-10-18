import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/Component/Navbar/page";
import Footer from "@/app/Component/Footer/page";

export const metadata: Metadata = {
  title: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
