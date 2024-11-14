import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/Component/Navbar/page";
import Footer from "@/app/Component/Footer/page";
import BackToTop from "@/app/Component/BottomtoTop/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cartzio - Fashion Store eCommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
