import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="flex justify-center space-x-6 items-center pb-5">
            <FaFacebookSquare className="text-[24px]" />
            <FaInstagram className="text-[24px]" />
            <FaTwitter className="text-[24px]" />
            <FaLinkedin className="text-[24px]" />
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
