import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="flex justify-center space-x-6 items-center pb-5">
            <Link
              href={"https://www.facebook.com/FahadGraphicAndDeveloper"}
              target="_blank"
            >
              <FaFacebookSquare className="text-[24px]" />
            </Link>
            <Link
              href={"https://www.instagram.com/fahadgraphicanddeveloper"}
              target="_blank"
            >
              <FaInstagram className="text-[24px]" />
            </Link>

            <Link href={"https://x.com/FahadMemon14439"} target="_blank">
              <FaTwitter className="text-[24px]" />
            </Link>

            <Link
              href={
                "https://www.linkedin.com/company/fahadgraphicanddeveloper/?viewAsMember=true"
              }
              target="_blank"
            >
              <FaLinkedin className="text-[24px]" />
            </Link>
          </div>
          <span className="block text-[#21243D] text-[14px] text-center">
            Copyright © 2020 All rights reserved
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
