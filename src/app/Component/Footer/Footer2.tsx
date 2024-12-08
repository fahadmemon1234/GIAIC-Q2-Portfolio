import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaSkype,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import Link from "next/link";

const Footer2 = () => {
  return (
    <>
      <footer className="bg-[#2A254B] text-white pt-[64px] pb-[30px]">
        <div className="container mx-auto px-6 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-14">
            <div className="md:col-span-1 leading-7">
              <h2 className="text-3xl font-helvetica mb-4">Avion</h2>
              <p className="font-light">21 New York Street</p>
              <p className="font-light">New York City</p>
              <p className="font-light">United States of America</p>
              <p className="font-light">432 34</p>
            </div>

            <div className="md:col-span-2 col-span-1">
              <h4 className="text-lg font-helvetica mb-4">Social links</h4>
              <div className="grid grid-cols-3 md:grid-cols-12 gap-6 lg:gap-12">
                <div>
                  <FaLinkedin className="text-xl hover:text-[#0A66C2]" />
                </div>
                <div>
                  <FaFacebook className="text-xl hover:text-[#3b5998]" />
                </div>
                <div>
                  <FaInstagram className="text-xl hover:text-[#E4405F]" />
                </div>
                <div>
                  <FaSkype className="text-xl hover:text-[#00AFF0]" />
                </div>
                <div>
                  <FaTwitter className="text-xl hover:text-[#1DA1F2]" />
                </div>
                <div>
                  <FaPinterest className="text-xl hover:text-[#E60023]" />
                </div>
              </div>
            </div>

            <div className="md:col-span-1 block md:hidden">
              <h4 className="text-lg font-helvetica mb-4">Our company</h4>
              <ul className="space-y-2 font-light">
                <li className="cursor-pointer">
                  <Link href={"/Component/About"}>About us</Link>
                </li>
                <li>Vacancies</li>
                <li>Contact us</li>
                <li>Privacy</li>
                <li>Returns policy</li>
              </ul>
            </div>

            <div className="md:col-span-1 block md:hidden">
              <h4 className="text-lg font-helvetica mb-4">Menu</h4>
              <ul className="space-y-2 font-light">
                <li>New arrival</li>
                <li>Best sellers</li>
                <li>Recently viewed</li>
                <li>Popular this week</li>
                <li className="cursor-pointer">
                  <Link href={"/Component/AllProduct"}>All products</Link>
                </li>
              </ul>
            </div>

            <div className="md:col-span-1 col-span-1 hidden md:block">
              <h4 className="text-lg font-helvetica mb-4">Menu</h4>
              <ul className="space-y-2 font-light">
                <li>New arrival</li>
                <li>Best sellers</li>
                <li>Recently viewed</li>
                <li>Popular this week</li>
                <li className="cursor-pointer">
                  <Link href={"/Component/AllProduct"}>All products</Link>
                </li>
              </ul>
            </div>

            <div className="md:col-span-1 col-span-1 hidden md:block">
              <h4 className="text-lg font-helvetica mb-4">Categories</h4>
              <ul className="space-y-2 font-light">
                <li>Crockery</li>
                <li>Furniture</li>
                <li>Homeware</li>
                <li>Plant pots</li>
                <li>Chairs</li>
                <li>Crockery</li>
              </ul>
            </div>

            <div className="md:col-span-1 col-span-2 hidden md:block">
              <h4 className="text-lg font-helvetica mb-4">Our company</h4>
              <ul className="space-y-2 font-light">
                <li className="cursor-pointer">
                  <Link href={"/Component/About"}>About us</Link>
                </li>
                <li>Vacancies</li>
                <li>Contact us</li>
                <li>Privacy</li>
                <li>Returns policy</li>
              </ul>
            </div>
          </div>

          <hr className="border-t-[1px] border-[#4e4d93] m-auto" />

          <div className="flex flex-col md:flex-row items-center justify-between pt-8">
            <div className="mb-4 md:mb-0">
              <p className="text-sm font-light text-white">
                Copyright 2022 Avion LTD
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer2;
