import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-left bg-[#322d28] text-[white]">
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <Link className="text-[white] pr-1" href="/">
            Kicker
          </Link>
          &copy; {new Date().getFullYear()} All Rights Reserved.{" "}
        </div>
      </footer>
    </>
  );
};

export default Footer;
