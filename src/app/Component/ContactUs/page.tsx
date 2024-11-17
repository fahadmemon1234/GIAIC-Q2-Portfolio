"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import Link from "next/link";

const ContactUs = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d55431.05581015953!2d-95.461302!3d29.735948000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald%20D.%20Hines%20Waterwall%20Park!5e0!3m2!1sen!2sin!4v1731861720250!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen
          className="w-full"
          height={"400px"}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <section className="relative lg:py-24 py-16">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
            <div className="lg:col-span-7 md:col-span-6">
              <Image
                src="https://cartzio.vercel.app/static/media/contact.790d7cc953dc2b3d597592c95ddc86e4.svg"
                alt="Contact"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
            <div className="lg:col-span-5 md:col-span-6">
              <div className="lg:ms-5">
                <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700 p-6">
                  <h3 className="mb-6 text-2xl leading-normal font-semibold">
                    Get in touch!
                  </h3>
                  <form>
                    <div className="grid lg:grid-cols-12 grid-cols-1 gap-3">
                      <div className="lg:col-span-6">
                        <label htmlFor="name" className="font-semibold">
                          Your Name:
                        </label>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                          placeholder="Name :"
                        />
                      </div>

                      <div className="lg:col-span-6">
                        <label htmlFor="email" className="font-semibold">
                          Your Email:
                        </label>
                        <input
                          name="email"
                          id="email"
                          type="email"
                          className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                          placeholder="Email :"
                        />
                      </div>

                      <div className="lg:col-span-12">
                        <label htmlFor="subject" className="font-semibold">
                          Your Question:
                        </label>
                        <input
                          name="subject"
                          id="subject"
                          className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                          placeholder="Subject :"
                        />
                      </div>

                      <div className="lg:col-span-12">
                        <label htmlFor="comments" className="font-semibold">
                          Your Comment:
                        </label>
                        <textarea
                          name="comments"
                          id="comments"
                          className="mt-2 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                          placeholder="Message :"
                        ></textarea>
                      </div>
                    </div>

                    <button
                      type="submit"
                      id="submit"
                      name="send"
                      className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-orange-500 text-white rounded-md mt-2"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container lg:mt-24 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
            
            <div className="text-center px-6">
              <div className="relative text-transparent">
                <div className="size-20 bg-orange-500/5 text-orange-500 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                  <FiPhone />
                </div>
              </div>
              <div className="content mt-7">
                <h5 className="title h5 text-lg font-semibold">Phone</h5>
                <p className="text-slate-400 mt-3">
                  The phrasal sequence of the is now so that many campaign and
                  benefit
                </p>
                <div className="mt-5">
                  <a
                    className="text-orange-500 font-medium"
                    href="tel:+152534468854"
                  >
                    +152 534-468-854
                  </a>
                </div>
              </div>
            </div>

            
            <div className="text-center px-6">
              <div className="relative text-transparent">
                <div className="size-20 bg-orange-500/5 text-orange-500 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                  <FiMail />
                </div>
              </div>
              <div className="content mt-7">
                <h5 className="title h5 text-lg font-semibold">Email</h5>
                <p className="text-slate-400 mt-3">
                  The phrasal sequence of the is now so that many campaign and
                  benefit
                </p>
                <div className="mt-5">
                  <a
                    className="text-orange-500 font-medium"
                    href="mailto:contact@example.com"
                  >
                    contact@example.com
                  </a>
                </div>
              </div>
            </div>

         
            <div className="text-center px-6">
              <div className="relative text-transparent">
                <div className="size-20 bg-orange-500/5 text-orange-500 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                  <FiMapPin />
                </div>
              </div>
              <div className="content mt-7">
                <h5 className="title h5 text-lg font-semibold">Location</h5>
                <p className="text-slate-400 mt-3">
                  C/54 Northwest Freeway, Suite 558, <br /> Houston, USA 485
                </p>
                <div className="mt-5">
                  <button
                    onClick={handleOpenModal}
                    className="video-play-icon read-more lightbox text-orange-500 font-medium"
                  >
                    View on Google map
                  </button>
                </div>
              </div>

              {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="relative w-11/12 max-w-3xl bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <button
                      onClick={handleCloseModal}
                      className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-white"
                    >
                      ✕
                    </button>

                    <div className="p-4">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d55431.05581015953!2d-95.461302!3d29.735948000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald%20D.%20Hines%20Waterwall%20Park!5e0!3m2!1sen!2sin!4v1731861720250!5m2!1sen!2sin"
                        style={{ border: 0 }}
                        allowFullScreen
                        className="w-full rounded-lg"
                        height={"400px"}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
