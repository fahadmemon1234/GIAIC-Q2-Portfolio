"use client";
import React, { useState, useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { client } from "@/app/lib/sanity";
import { fetchProductById } from "@/app/lib/api";
import Navbar from "../../Navbar/page";
import Footer from "../../Footer/page";
import { toast, Slide } from "react-toastify";
import {
  AiOutlineHeart,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiFillHeart,
} from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import ProductSlider from "../../ProductSlider/page";

interface Product {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  name: string;
  slug: {
    current: string;
  };
  description: string;
  price: number;
  quantity: number;
  features: string[];
  dimensions: {
    width: string;
    height: string;
    depth: string;
    _type: string;
  };
  image: {
    asset: {
      _id: string;
      url: string;
    };
  };
}

const ProductDetail = () => {
  const { id } = useParams();

  // const [selectedImage, setSelectedImage] = useState(
  //   "/assets/images/single-product/lg/product1.webp"
  // );

  // const images = [
  //   "/assets/images/single-product/lg/product1.webp",
  //   "/assets/images/single-product/lg/product2.webp",
  //   "/assets/images/single-product/lg/product3.webp",
  //   "/assets/images/single-product/lg/product4.webp",
  //   "/assets/images/single-product/lg/product5.webp",
  // ];

  const [productList, setproductList] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ProductbyIDData = await fetchProductById(id as string);
        setproductList(ProductbyIDData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleAddToCart = async () => {
    try {
      const doc = {
        _type: "addToCart",
        productId: productList?._id,
        productName: productList?.name,
        price: productList?.price,
        quantity: quantity,
      };

      const response = await client.create(doc);
      // alert("Added to cart");
      // console.log('Added to cart:', response);

      toast.success("Item added to cart successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
    } catch (error) {
      // console.log('Error adding to cart:', error);
      toast.error("Failed to add item to cart", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
    }
  };

  // const prevRef = useRef(null);
  // const nextRef = useRef(null);

  const [quantity, setQuantity] = useState<number>(1); // Default quantity

  const handleIncrement = (): void => {
    if (quantity < 100) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = (): void => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1 && value <= 100) {
      setQuantity(value);
    }
  };

  // const [activeTab, setActiveTab] = useState<
  //   "description" | "product-details" | "reviews"
  // >("description");

  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked); // Toggle the "like" state
  };

  return (
    <>
      <Navbar />
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
                    {productList?.name}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Hero section end --> */}

      <div className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div>
              <div className="relative overflow-hidden">
                <span className="font-semibold uppercase text-sm text-white inline-block py-1 px-2 leading-none absolute top-3  z-10 right-3 bg-orange">
                  Sale
                </span>
                <div className="gallery mb-6">
                  <Image
                    src={productList?.image.asset.url || ""}
                    alt="Selected Product"
                    width={800}
                    height={800}
                    quality={50}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-lg capitalize">
                {productList?.name}
              </h3>
              <h5 className="font-bold text-md leading-none text-orange my-3">
                {/* <del className="font-normal text-sm mr-1 inline-block">
                  ${((productList?.price * 100) / (100 - 20)).toFixed(2)}
                </del> */}
                ${productList?.price.toFixed(2)}
                {/* <span className="font-normal text-sm text-green-600 ml-2">
                  (20% off)
                </span> */}
              </h5>
              {/* <div className="mb-3">
                Vendor:<span> Vendor 3 </span>
              </div> */}
              <div className="mb-3">
                Dimensions:
                <ul className="flex gap-5 items-center">
                  <li>
                    <span className="font-medium">Width:</span>{" "}
                    {productList?.dimensions.width}
                  </li>
                  <li>
                    <span className="font-medium">Height:</span>{" "}
                    {productList?.dimensions.height}
                  </li>
                  <li>
                    <span className="font-medium">Depth:</span>{" "}
                    {productList?.dimensions.depth}
                  </li>
                </ul>
              </div>
              <div className="mb-3">
                Type: <span> {productList?.slug.current} </span>
              </div>
              <div className="mb-3">
                <span>Availability:</span>
                <span className="font-semibold" style={{ paddingLeft: "5px" }}>
                  {productList?.quantity}
                </span>
              </div>
              <p className="mb-8">{productList?.description}</p>

              <div>
                {/* <div className="flex flex-wrap items-center mb-6">
                  <span className="mr-8">Size:</span>
                  <form className="size-swatch" action="#">
                    <ul className="flex flex-wrap">
                      <li className="mx-1">
                        <input
                          className="hidden opacity-0"
                          type="radio"
                          name="radio-group"
                          id="size1"
                        />
                        <label
                          className="py-2 px-2 leading-none text-sm flex items-center justify-center transition-all bg-gray-300 cursor-pointer capitalize"
                          htmlFor="size1"
                        >
                          s
                        </label>
                      </li>

                      <li className="mx-1">
                        <input
                          className="hidden opacity-0"
                          type="radio"
                          name="radio-group"
                          id="size2"
                          checked
                        />
                        <label
                          className="py-2 px-2 leading-none text-sm flex items-center justify-center transition-all bg-gray-300 cursor-pointer capitalize"
                          htmlFor="size2"
                        >
                          m
                        </label>
                      </li>
                      <li className="mx-1">
                        <input
                          className="hidden opacity-0"
                          type="radio"
                          name="radio-group"
                          id="size3"
                        />
                        <label
                          className="py-2 px-2 leading-none text-sm flex items-center justify-center transition-all bg-gray-300 cursor-pointer capitalize"
                          htmlFor="size3"
                        >
                          l
                        </label>
                      </li>

                      <li className="mx-1">
                        <input
                          className="hidden opacity-0"
                          type="radio"
                          name="radio-group"
                          id="size4"
                        />
                        <label
                          className="py-2 px-2 leading-none text-sm flex items-center justify-center transition-all bg-gray-300 cursor-pointer capitalize"
                          htmlFor="size4"
                        >
                          xl
                        </label>
                      </li>

                      <li className="mx-1">
                        <input
                          className="hidden opacity-0"
                          type="radio"
                          name="radio-group"
                          id="size5"
                        />
                        <label
                          className="py-2 px-2 leading-none text-sm flex items-center justify-center transition-all bg-gray-300 cursor-pointer capitalize"
                          htmlFor="size5"
                        >
                          xxl
                        </label>
                      </li>
                    </ul>
                  </form>
                </div>

                <div className="flex flex-wrap items-center  mb-6">
                  <span className="mr-6">Color:</span>
                  <form action="#" className="colors-swatch">
                    <ul className="flex flex-wrap">
                      <li className="mx-1">
                        <input
                          className="hidden opacity-0"
                          type="radio"
                          checked
                          name="radio-group"
                          id="color1"
                        />
                        <label
                          htmlFor="color1"
                          className="w-7 h-7 rounded-full text-sm flex items-center justify-center transition-all relative bg-indigo-800 cursor-pointer capitalize"
                        ></label>
                      </li>

                      <li className="mx-1">
                        <input
                          className="hidden opacity-0"
                          type="radio"
                          name="radio-group"
                          id="color2"
                        />
                        <label
                          htmlFor="color2"
                          className="w-7 h-7 rounded-full text-sm flex items-center justify-center transition-all relative bg-pink-600 cursor-pointer capitalize"
                        ></label>
                      </li>
                      <li className="mx-1">
                        <input
                          className="hidden opacity-0"
                          type="radio"
                          name="radio-group"
                          id="color3"
                        />
                        <label
                          htmlFor="color3"
                          className="w-7 h-7 rounded-full text-sm flex items-center justify-center transition-all relative bg-red-600 cursor-pointer capitalize"
                        ></label>
                      </li>

                      <li className="mx-1">
                        <input
                          className="hidden opacity-0"
                          type="radio"
                          name="radio-group"
                          id="color4"
                        />
                        <label
                          htmlFor="color4"
                          className="w-7 h-7 rounded-full text-sm flex items-center justify-center transition-all relative bg-green-500 cursor-pointer capitalize"
                        ></label>
                      </li>

                      <li className="mx-1">
                        <input
                          className="hidden opacity-0"
                          type="radio"
                          name="radio-group"
                          id="color5"
                        />
                        <label
                          htmlFor="color5"
                          className="w-7 h-7 rounded-full text-sm flex items-center justify-center transition-all relative bg-yellow-500 cursor-pointer capitalize"
                        ></label>
                      </li>
                    </ul>
                  </form>
                </div> */}

                <div className="mb-8">
                  <div className="flex flex-wrap items-center mt-8">
                    <div className="flex items-center gap-2 custom-form-controll align-center">
                      <button
                        className="decrement w-10 h-10 flex items-center justify-center bg-gray-200 text-lg font-bold rounded hover:bg-gray-300"
                        onClick={handleDecrement}
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        max="100"
                        step="1"
                        style={{ appearance: "textfield" }}
                        value={quantity}
                        onChange={handleChange}
                        className="quantity__input w-16 text-center border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-500"
                      />
                      <button
                        className="increment w-10 h-10 flex items-center justify-center bg-gray-200 text-lg font-bold rounded hover:bg-gray-300"
                        onClick={handleIncrement}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <div className="ml-2 sm:ml-8">
                      <button
                        onClick={handleAddToCart}
                        className="bg-black leading-none py-4 px-5 md:px-8 font-normal text-sm h-11 text-white transition-all hover:bg-orange"
                      >
                        Add to Cart
                      </button>
                    </div>
                    <Link
                      href={""}
                      className="text-md ml-8"
                      onClick={toggleLike}
                    >
                      {liked ? (
                        <AiFillHeart
                          size={25}
                          className="text-orange-500 hover:text-gray-600 transition-colors duration-200"
                        />
                      ) : (
                        <AiOutlineHeart
                          size={25}
                          className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
                        />
                      )}
                    </Link>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-start mb-8">
                  <Link
                    href="#"
                    className="text-md text-facebook hover:text-dark mr-6 leading-none transition relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-7 before:bg-gray-900 before:w-4 before:h-[1px]"
                  >
                    <AiOutlineFacebook size={25} />
                  </Link>
                  <Link
                    href="#"
                    className="text-md text-twitter hover:text-dark mr-6 leading-none transition relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-7 before:bg-gray-900 before:w-4 before:h-[1px]"
                  >
                    <AiOutlineTwitter size={25} />
                  </Link>
                  <Link
                    href="#"
                    className="text-md text-dribbble hover:text-dark mr-6 leading-none transition relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-7 before:bg-gray-900 before:w-4 before:h-[1px]"
                  >
                    <AiOutlineInstagram size={25} />
                  </Link>
                  <Link
                    href="#"
                    className="text-md text-pinterest hover:text-dark leading-none transition"
                  >
                    <AiOutlineYoutube size={25} />
                  </Link>
                  <div></div>
                </div>

                <div className="flex flex-wrap">
                  <Link href="#" className="mr-2">
                    <Image
                      src="/assets/images/payment/amazon.svg"
                      alt="Amazon payment icon"
                      width={50}
                      height={50}
                    />
                  </Link>
                  <Link href="#" className="mr-2">
                    <Image
                      src="/assets/images/payment/apple-pay.svg"
                      alt="Apple Pay icon"
                      width={50}
                      height={50}
                    />
                  </Link>
                  <Link href="#" className="mr-2">
                    <Image
                      src="/assets/images/payment/bitcoin.svg"
                      alt="Bitcoin payment icon"
                      width={50}
                      height={50}
                    />
                  </Link>
                  <Link href="#" className="mr-2">
                    <Image
                      src="/assets/images/payment/google-pay.svg"
                      alt="Google Pay icon"
                      width={50}
                      height={50}
                    />
                  </Link>
                  <Link href="#" className="mr-2">
                    <Image
                      src="/assets/images/payment/paypal.svg"
                      alt="PayPal payment icon"
                      width={50}
                      height={50}
                    />
                  </Link>
                  <Link href="#" className="mr-2">
                    <Image
                      src="/assets/images/payment/visa.svg"
                      alt="Visa payment icon"
                      width={50}
                      height={50}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div id="maintab" className="pb-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-5">
            <div className="border border-solid border-gray-300 p-8">
              <ul className="custom-tab-nav flex flex-wrap items-center mb-10 -mx-5 -my-1">
                <li className="mx-5 my-1">
                  <Link
                    href={"#"}
                    className={`pb-3 leading-none capitalize transition-all hover:text-orange text-base sm:text-md relative before:absolute before:left-auto before:right-0 before:bottom-0 before:w-0 before:h-2px before:empty before:bg-orange before:transition-all ease-out ${
                      activeTab === "description" ? "text-orange" : ""
                    }`}
                    onClick={() => setActiveTab("description")}
                  >
                    Description
                  </Link>
                </li>
                <li className="mx-5 my-1">
                  <Link
                    href={"#"}
                    className={`pb-3 leading-none capitalize transition-all hover:text-orange text-base sm:text-md relative before:absolute before:left-auto before:right-0 before:bottom-0 before:w-0 before:h-2px before:empty before:bg-orange before:transition-all ease-out ${
                      activeTab === "product-details" ? "text-orange" : ""
                    }`}
                    onClick={() => setActiveTab("product-details")}
                  >
                    Product Details
                  </Link>
                </li>
                <li className="mx-5 my-1">
                  <Link
                    href={"#"}
                    className={`pb-3 leading-none capitalize transition-all hover:text-orange text-base sm:text-md relative before:absolute before:left-auto before:right-0 before:bottom-0 before:w-0 before:h-2px before:empty before:bg-orange before:transition-all ease-out ${
                      activeTab === "reviews" ? "text-orange" : ""
                    }`}
                    onClick={() => setActiveTab("reviews")}
                  >
                    Reviews
                  </Link>
                </li>
              </ul>

              {activeTab === "description" && (
                <div id="description">
                  <div>
                    <p className="mb-5">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary, making this the
                      first true generator on the Internet. It uses a dictionary
                      of over 200 Latin words, combined with a handful of model
                      sentence structures, to generate Lorem Ipsum which looks
                      reasonable. The generated Lorem Ipsum is therefore always
                      free from repetition, injected humour, or
                      non-characteristic words etc.
                    </p>
                    <p>
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized by the
                      charms of pleasure of the moment, so blinded by desire,
                      that they cannot foresee the pain and trouble that are
                      bound to ensue; and equal blame belongs to those who fail
                      in their duty through weakness of will, which is the same
                      as saying through shrinking from toil and pain. These
                      cases are perfectly simple and easy to distinguish. In a
                      free hour, when our power of choice is untrammelled and
                      when nothing prevents our being able to do what we like
                      best, every pleasure is to be welcomed and every pain
                      avoided.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "product-details" && (
                <div id="product-details">
                  <div className="review-bottom">
                    <div className="single-product-desc">
                      <div className="product-anotherinfo-wrapper">
                        <ul>
                          <li className="mb-4">
                            <span className="font-semibold w-28 inline-block">
                              Weight
                            </span>{" "}
                            400 g
                          </li>
                          <li className="mb-4">
                            <span className="font-semibold w-28 inline-block">
                              Dimensions
                            </span>
                            10 x 10 x 15 cm
                          </li>
                          <li className="mb-4">
                            <span className="font-semibold w-28 inline-block">
                              Materials
                            </span>{" "}
                            60% cotton, 40% polyester
                          </li>
                          <li className="mb-4">
                            <span className="font-semibold w-28 inline-block">
                              Other Info
                            </span>{" "}
                            American heirloom jean shorts pug seitan letterpress
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "reviews" && (
                <div id="review">
                  <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 xl:gap-x-10">
                      <div>
                        <div className="flex flex-wrap flex-col sm:flex-row items-start relative mb-12">
                          <Image
                            className="mr-7 mb-5 sm:mb-0"
                            src="/assets/images/testimonial/1.webp"
                            alt="Testimonial Image"
                            width={100}
                            height={100}
                            quality={80}
                          />
                          <div className="flex-1">
                            <div className="flex flex-wrap">
                              <h4 className="text-base text-dark font-semibold">
                                White Lewis
                              </h4>
                              <div className="ml-8 text-orange flex gap-1">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                              </div>
                            </div>

                            <p
                              style={{ paddingTop: "15px", lineHeight: "1.8" }}
                            >
                              Vestibulum ante ipsum primis aucibus orci
                              luctustrices posuere cubilia Curae Suspendisse
                              viverra ed viverra. Mauris ullarper euismod
                              vehicula. Phasellus quam nisi, congue id nulla.
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-wrap flex-col sm:flex-row items-start relative mb-12">
                          <Image
                            className="mr-7 mb-5 sm:mb-0"
                            src="/assets/images/testimonial/2.webp"
                            alt="Testimonial Image"
                            width={100}
                            height={100}
                            quality={80}
                          />
                          <div className="flex-1">
                            <div className="flex flex-wrap">
                              <h4 className="text-base text-dark font-semibold">
                                White Lewis
                              </h4>
                              <div className="ml-8 text-orange flex gap-1">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                              </div>
                            </div>

                            <p
                              style={{ paddingTop: "15px", lineHeight: "1.8" }}
                            >
                              Vestibulum ante ipsum primis aucibus orci
                              luctustrices posuere cubilia Curae Suspendisse
                              viverra ed viverra. Mauris ullarper euismod
                              vehicula. Phasellus quam nisi, congue id nulla.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-base text-dark font-semibold">
                          Add a Review
                        </h4>
                        <form action="#">
                          <div className="flex flex-wrap mb-5">
                            <span className="mr-4">Your rating:</span>
                            <div className="ml-8 text-orange flex gap-1">
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-x-4">
                            <div className="leave-form col-span-2 sm:col-span-1">
                              <input
                                className="form-control form-control:focus border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                                placeholder="Name"
                                type="text"
                              />
                            </div>
                            <div className="leave-form col-span-2 sm:col-span-1">
                              <input
                                className="form-control form-control:focus border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                                placeholder="Email"
                                type="email"
                              />
                            </div>
                            <div className="text-leave col-span-2">
                              <textarea
                                className="form-control form-control:focus border border-solid border-gray-300 w-full py-1 px-5 mb-8 placeholder-current text-dark h-60 focus:outline-none text-base resize-none"
                                name="Your Review"
                                placeholder="Message"
                              ></textarea>
                              <button
                                type="submit"
                                className="leading-none uppercase text-white text-sm bg-orange px-5 py-5 transition-all hover:bg-dark"
                              >
                                Post comment
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div> */}

      {/* <!-- Product section start --> */}
      <section className="product-section pb-24">
        <div className="container">
          <div className="grid grid-rows-1 grid-flow-col gap-4">
            <div className="text-center mb-14">
              <h2 className="font-playfair font-bold text-primary text-3xl md:text-4xl lg:text-xl mb-4">
                New Arrivals
              </h2>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <section className="relative-m-4">
                <ProductSlider />
              </section>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Product section end--> */}
      <Footer />
    </>
  );
};

export default ProductDetail;
