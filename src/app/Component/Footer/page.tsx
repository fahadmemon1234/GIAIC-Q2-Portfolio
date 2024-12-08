import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaSkype,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#2A254B] text-white pt-[64px] pb-[30px]">
        <div className="container mx-auto px-6 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-14">
            <div className="md:col-span-1 col-span-1">
              <h4 className="text-lg font-helvetica mb-4">Menu</h4>
              <ul className="space-y-2 font-light">
                <li>New arrival</li>
                <li>Best sellers</li>
                <li>Recently viewed</li>
                <li>Popular this week</li>
                <li>All products</li>
              </ul>
            </div>

            <div className="md:col-span-1 col-span-1">
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

            <div className="md:col-span-1 col-span-2">
              <h4 className="text-lg font-helvetica mb-4">Our company</h4>
              <ul className="space-y-2 font-light">
                <li>About us</li>
                <li>Vacancies</li>
                <li>Contact us</li>
                <li>Privacy</li>
                <li>Returns policy</li>
              </ul>
            </div>

            <div className="md:col-span-3 col-span-3">
              <h4 className="text-lg font-helvetica mb-4">
                Join our mailing list
              </h4>
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="p-4 md:pl-9 bg-[#3B3563] text-white w-full flex-1 placeholder-gray-300 focus:outline-none"
                />
                <button className="bg-white text-[#2A254B] py-4 px-8">
                  Sign up
                </button>
              </div>
            </div>
          </div>
          <hr className="border-t-[1px] border-[#4e4d93] m-auto" />

          <div className="flex flex-col md:flex-row items-center justify-between pt-8">
            {/* Left Section */}
            <div className="mb-4 md:mb-0">
              <p className="text-sm font-light text-white">
                Copywrite 2022 Avion LTD
              </p>
            </div>

            {/* Right Section */}
            <div className="items-center gap-4 hidden md:flex">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-white hover:text-gray-400 text-lg" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook className="text-white hover:text-gray-400 text-lg" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="text-white hover:text-gray-400 text-lg" />
              </a>
              <a
                href="https://skype.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Skype"
              >
                <FaSkype className="text-white hover:text-gray-400 text-lg" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter className="text-white hover:text-gray-400 text-lg" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
              >
                <FaPinterest className="text-white hover:text-gray-400 text-lg" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
