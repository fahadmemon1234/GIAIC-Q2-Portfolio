import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { BsPhone } from "react-icons/bs";
import Navbar from "../Navbar/page";
import Footer from "../Footer/page";

const Contact = () => {
  return (
    <>
    <Navbar/>
      <div className="py-14 bg-white"></div>

      {/* <!-- Hero section start --> */}
      <div className="py-9 bg-gray-light">
        <div className="container">
          <div className="grid grid-cols-12 gap-x-4">
            <div className="col-span-12">
              <nav>
                <ul className="flex flex-wrap items-center justify-center">
                  <li className="mr-5">
                    <Link
                      href="/"
                      className="text-dark font-medium text-base uppercase transition-all hover:text-orange relative before:w-5 before:h-1px before:empty before:absolute before:top-3 before:bg-dark before:transform before:rotate-115 before:-right-5"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="text-dark font-medium text-base uppercase mr-5">
                    Contact
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Hero section end --> */}

      {/* <!-- contact us section start --> */}

      <div className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
            {/* Contact Info Area */}
            <div className="contact-info-area">
              <h2 className="font-semibold text-dark text-4xl mb-14 capitalize">
                Contact Us
              </h2>
              <div className="flex flex-wrap items-center mb-8">
                <span className="text-dark text-4xl mr-5">
                  <IoLocationOutline />
                </span>
                <p className="flex-1">
                  Address goes here, street, Crossroad 123.
                </p>
              </div>
              <div className="flex flex-wrap items-center mb-8">
                <span className="text-dark text-4xl mr-5">
                  <MdMailOutline />
                </span>
                <a href="mailto:info@example.com" className="flex-1">
                  info@example.com / info@example.com
                </a>
              </div>
              <div className="flex flex-wrap items-center">
                <span className="text-dark text-4xl mr-5">
                  <BsPhone />
                </span>
                <a href="tel:01234567890" className="flex-1">
                  +1 35 776 859 011 / +1 35 776 859 011
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-10 lg:p-14 shadow mt-14 lg:mt-0">
              <form id="contact-form" method="GET" action="#">
                <input
                  className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
                <input
                  className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <input
                  className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
                <textarea
                  className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 text-dark h-32 focus:outline-none text-base resize-none"
                  name="message"
                  placeholder="Your Message"
                  required
                />
                <button
                  className="w-full leading-none uppercase text-white text-sm bg-dark px-5 py-5 transition-all hover:bg-orange"
                  type="submit"
                  aria-label="Send Message"
                >
                  Send Message
                </button>
              </form>
              <p className="form-message"></p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- contact us section end --> */}

      {/* <!-- google map start --> */}

      <div>
        <iframe
          className="w-full h-96 md:h-[500px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743278.227637299!2d-61.159056951307704!3d-2.371597134950372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91e8605342744385%3A0x3d3c6dc1394a7fc7!2sAmazon%20Rainforest!5e0!3m2!1sen!2sbd!4v1638433670177!5m2!1sen!2sbd"
          allowFullScreen
          loading="lazy"
          title="Google Maps Embed"
        ></iframe>
      </div>

      {/* <!-- google map end --> */}
      <Footer/>
    </>
  );
};
export default Contact;
