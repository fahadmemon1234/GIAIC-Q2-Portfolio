import {
  FaArrowUp,
  FaFacebook,
  FaInstagramSquare,
  FaDribbbleSquare,
} from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import Scroll from "../scrollUp/page";

const Footer = () => {
  return (
    <>
      <footer>
        {/* <!-- News Letter section start --> */}
        <div className="news-letter-section bg-gray-100 pt-24 pb-24">
          <div className="container">
            <div className="max-w-[600px] mx-auto">
              <div className="text-center">
                <Link href="#" className="inline-block mb-11">
                  <Image
                    src={"/assets/images/logo/logo.webp"}
                    alt="brand logo"
                    loading="lazy"
                    quality={80}
                    width={125}
                    height={45}
                  />
                </Link>

                <p className="mb-10">
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet.
                </p>

                <form
                  id="mc-form"
                  className="relative text-center md:max-w-xl mx-auto mb-10"
                >
                  <input
                    id="mc-email"
                    type="email"
                    name="email"
                    placeholder="email@example.com"
                    className="border border-solid border-primary w-full h-14 sm:h-16 rounded-full bg-transparent placeholder-primary placeholder-opacity-50 text-sm sm:text-base focus:outline-none py-1 pl-8 pr-14 sm:pr-36"
                  />
                  <button
                    id="mc-submit"
                    type="submit"
                    className="bg-dark transition-all hover:bg-orange hover:text-white px-10 sm:px-3 py-5 sm:py-1 rounded-l-full sm:rounded-l-none rounded-r-full text-white capitalize font-medium text-sm lg:text-md sm:absolute sm:top-0 sm:right-0 sm:h-full mt-3 sm:mt-0 leading-none w-full sm:w-auto"
                  >
                    Subscribe
                  </button>
                </form>
                {/* <!-- mailchimp-alerts Start --> */}
                <div className="mailchimp-alerts text-centre">
                  <div className="mailchimp-submitting"></div>
                  {/* <!-- mailchimp-submitting end --> */}
                  <div className="mailchimp-success text-green-400"></div>
                  {/* <!-- mailchimp-success end --> */}
                  <div className="mailchimp-error text-red-600"></div>
                  {/* <!-- mailchimp-error end --> */}
                </div>
                {/* <!-- mailchimp-alerts end --> */}
              </div>
              <div className="flex flex-wrap items-center justify-center">
                <Link
                  href="#"
                  aria-label="social links"
                  className="text-lg text-dark hover:text-orange mx-3 leading-none transition"
                >
                  <FaFacebook />
                </Link>
                <Link
                  href="#"
                  aria-label="social links"
                  className="text-lg text-dark hover:text-orange mx-3 leading-none transition"
                >
                  <AiFillTwitterCircle />
                </Link>
                <Link
                  href="#"
                  aria-label="social links"
                  className="text-lg text-dark hover:text-orange mx-3 leading-none transition"
                >
                  <FaInstagramSquare />
                </Link>
                <Link
                  href="#"
                  aria-label="social links"
                  className="text-lg text-dark hover:text-orange mx-3 leading-none transition"
                >
                  <SiYoutubemusic />
                </Link>
                <Link
                  href="#"
                  aria-label="social links"
                  className="text-lg text-dark hover:text-orange mx-3 leading-none transition"
                >
                  <FaDribbbleSquare />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- News Letter section end --> */}

        {/* <!-- Footer Bottom Section start --> */}
        <div className="footer-bottom-section py-8 bg-gray-500">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex order-last md:order-first flex-wrap items-center justify-center md:justify-start">
                <p className="text-white flex flex-wrap items-center text-sm lg:text-base">
                  &copy; 2022 Sinp. Made with .
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center md:justify-end">
                <Link href="#">
                  <img
                    className="w-full h-full"
                    src="assets/images/logo/payment.webp"
                    alt="payment logo"
                    loading="lazy"
                    width="286"
                    height="23"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer Bottom Section end --> */}
      </footer>

      <Scroll />
    </>
  );
};

export default Footer;
