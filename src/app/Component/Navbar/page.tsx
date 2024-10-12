"use client";
import { IoMdMenu } from "react-icons/io";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [scroll, setScroll] = useState(false);

  const handleSetActive = (section: string) => {
    setActive(section);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav
        className={`fixed w-full z-20 top-0 left-0 transition-all duration-300 ease-in-out ${
          scroll ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <ul className="navigation max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto py-8">
          <a className="logo" href="#">
            <Image
              src={"/assets/img/logo/logo-dark.png"}
              alt="logo"
              width={160}
              height={100}
            />
          </a>
          <input type="checkbox" id="check" />

          <span className="menu flex [&>li]:pl-8">
            <li>
              <Link
                href="/"
                className={`${
                  active === "Home" ? "active-link" : ""
                } hover-effect`}
                onClick={() => handleSetActive("Home")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/Component/About"
                className={`${
                  active === "About" ? "active-link" : ""
                } hover-effect`}
                onClick={() => handleSetActive("About")}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/Component/Contact"
                className={`${
                  active === "Contact" ? "active-link" : ""
                } hover-effect`}
                onClick={() => handleSetActive("Contact")}
              >
                Contact
              </Link>
            </li>

            <label htmlFor="check" className="close-menu">
              X
            </label>
          </span>

          <label htmlFor="check" className="open-menu">
            <IoMdMenu />
          </label>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
