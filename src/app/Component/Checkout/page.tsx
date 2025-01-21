"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { fetchAllCartData, deleteCartItem } from "@/app/lib/api";
import Navbar from "../Navbar/page";
import Footer from "../Footer/page";
import { client } from "@/app/lib/sanity";
import { toast, Slide } from "react-toastify";

interface ImageAsset {
  _id: string;
  url: string;
}

// Interface for product dimensions
interface ProductDimensions {
  width?: number;
  height?: number;
  depth?: number;
  _type: string;
}

// Interface for product details in the product table
interface ProductDetails {
  _id?: string;
  name?: string;
  description?: string;
  features?: string[];
  dimensions?: ProductDimensions;
  image?: ImageAsset;
}

// Interface for a single cart item (addToCart table)
interface CartItem {
  _id: string;
  _type: string;
  productId: string;
  productName: string;
  productImage?: {
    asset: ImageAsset;
  };
  price: number;
  quantity: number;
  productImageFromProductTable?: ImageAsset;
  // Optional: To include product details like name, description, etc., from the related product table
  productDetails?: ProductDetails;
}

const Checkout = () => {
  const [productList, setProductList] = useState<CartItem[]>([]);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        debugger;
        const data = await fetchAllCartData(); // Fetch data

        const grandTotal = data.reduce(
          (sum, item) => sum + item.quantity * item.price,
          0
        );

        setProductList(data); // Update product list
        // setDataCount(data.length); // Update data count
        setTotal(grandTotal);
        clearInterval(intervalId); // Stop interval after fetching the data once
      } catch (error) {
        console.log("Error fetching cart data:", error);
        clearInterval(intervalId); // Stop interval in case of error
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [country, setCountry] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [streetAddress1, setStreetAddress1] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const firstNameRef = useRef<HTMLInputElement | null>(null);
  const lastNameRef = useRef<HTMLInputElement | null>(null);
  const companyNameRef = useRef<HTMLInputElement | null>(null);
  const countryRef = useRef<HTMLSelectElement | null>(null);
  const streetAddressRef = useRef<HTMLInputElement | null>(null);
  const cityRef = useRef<HTMLInputElement | null>(null);
  const stateRef = useRef<HTMLInputElement | null>(null);
  const zipCodeRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);

  const validation = () => {
    debugger;
    if (!firstName) {
      toast.error("First Name is required!", {
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
      firstNameRef.current?.focus();
      return false;
    }
    if (!lastName) {
      toast.error("Last Name is required!", {
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
      lastNameRef.current?.focus();
      return false;
    }

    if (!country) {
      toast.error("Country is required!", {
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

      countryRef.current?.focus();
      return false;
    }

    if (!streetAddress) {
      toast.error("Address is required!", {
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
      streetAddressRef.current?.focus();

      return false;
    }

    if (!city) {
      toast.error("City is required!", {
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
      cityRef.current?.focus();

      return false;
    }
    if (!state) {
      toast.error("State is required!", {
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
      stateRef.current?.focus();

      return false;
    }
    if (!zipCode) {
      toast.error("Zip Code is required!", {
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
      zipCodeRef.current?.focus();

      return false;
    }

    if (!email) {
      toast.error("Email is required!", {
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
      emailRef.current?.focus();

      return false;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address!", {
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
      emailRef.current?.focus();
      return false;
    }

    return true;
  };

  const handlePlaceOrder = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      if (!validation()) {
        return false;
      }

      const productIds = productList.map((item) => item.productId);
      const orderId = Math.floor(100000 + Math.random() * 900000);

      const doc = {
        _type: "order",
        order_id: orderId.toString(),
        orderDate: new Date(),
        product_id: [...productIds],
        notes: note,
        firstName: firstName,
        lastName: lastName,
        companyName: companyName,
        country: country,
        streetAddress: streetAddress,
        streetAddress1: streetAddress1,
        city: city,
        state: state,
        zipCode: zipCode,
        email: email,
        phone: phone,
      };

      const response = await client.create(doc);

      toast.success("Order placed successfully", {
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
      console.log("Error adding to cart:", error);
    }
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
                    Checkout
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
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-7">
              <div>
                <h3 className="text-lg font-semibold mb-5">Billing Details</h3>
                <form
                  className="personal-information"
                  action="assets/php/contact.php"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5">
                    <div>
                      <div>
                        <label className="mb-3 inline-block">
                          First Name <span className="text-red-600">*</span>
                        </label>
                        <input
                          className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                          type="text"
                          name="first_name"
                          placeholder="First Name"
                          ref={firstNameRef}
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label className="mb-3 inline-block">
                          Last Name <span className="text-red-600">*</span>
                        </label>
                        <input
                          className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                          type="text"
                          name="last_name"
                          placeholder="Last Name"
                          ref={lastNameRef}
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="lg:col-span-2">
                      <div>
                        <label className="mb-3 inline-block">
                          Company Name
                        </label>
                        <input
                          className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                          type="text"
                          name="company_name"
                          placeholder="Company Name"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="lg:col-span-2">
                      <div>
                        <label className="mb-3 inline-block">
                          Country <span className="text-red-600">*</span>
                        </label>
                        <select
                          value={country}
                          ref={countryRef}
                          onChange={(e) => setCountry(e.target.value)}
                          className="bg-transparent border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                        >
                          <option value={"Select a country"}>
                            Select a country
                          </option>
                          <option value={"Azerbaijan"}>Azerbaijan</option>
                          <option value={"Bahamas"}>Bahamas</option>
                          <option value={"Bahrain"}>Bahrain</option>
                          <option value={"Bangladesh"}>Bangladesh</option>
                          <option value={"Barbados"}>Barbados</option>
                        </select>
                      </div>
                    </div>
                    <div className="lg:col-span-2">
                      <div>
                        <label className="mb-3 inline-block">
                          Street Address <span className="text-red-600">*</span>
                        </label>
                        <input
                          className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                          placeholder="House number and street name"
                          type="text"
                          ref={streetAddressRef}
                          value={streetAddress}
                          onChange={(e) => setStreetAddress(e.target.value)}
                        />
                        <input
                          className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                          placeholder="Apartment, suite, unit etc."
                          type="text"
                          value={streetAddress1}
                          onChange={(e) => setStreetAddress1(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="lg:col-span-2">
                      <div>
                        <label className="mb-3 inline-block">
                          Town / City <span className="text-red-600">*</span>
                        </label>
                        <input
                          className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                          type="text"
                          value={city}
                          ref={cityRef}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="Town / City"
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label className="mb-3 inline-block">
                          State <span className="text-red-600">*</span>
                        </label>
                        <input
                          className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                          type="text"
                          value={state}
                          ref={stateRef}
                          onChange={(e) => setState(e.target.value)}
                          placeholder="State / County"
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label className="mb-3 inline-block">
                          Postcode / ZIP <span className="text-red-600">*</span>
                        </label>
                        <input
                          className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                          type="text"
                          value={zipCode}
                          ref={zipCodeRef}
                          onChange={(e) => setZipCode(e.target.value)}
                          placeholder="Postcode / ZIP"
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label className="mb-3 inline-block">Phone</label>
                        <input
                          className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                          type="text"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Phone"
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label className="mb-3 inline-block">
                          Email Address <span className="text-red-600">*</span>
                        </label>
                        <input
                          className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                          type="text"
                          value={email}
                          ref={emailRef}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                  </div>
                </form>

                <div className="additional-info-wrap">
                  <h4 className="text-base font-semibold">
                    Additional information
                  </h4>
                  <div className="additional-info">
                    <label className="mb-3 inline-block">Order notes</label>
                    <textarea
                      className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-36 focus:outline-none text-base"
                      placeholder="Notes about your order, e.g. special notes for delivery."
                      name="message"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                {/* <div className="checkout-account mt-25">
                  <input
                    id="ship"
                    className="checkout-toggle"
                    type="checkbox"
                  />
                  <label htmlFor="ship" style={{ paddingLeft: "5px" }}>
                    Ship to a different address?
                  </label>
                </div> */}
                <div className="different-address open-toggle mt-5 hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5">
                    <div>
                      <div>
                        <label className="mb-3 inline-block">First Name</label>
                        <input
                          className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                          type="text"
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label className="mb-3 inline-block">Last Name</label>
                        <input
                          className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="lg:col-span-2">
                      <div>
                        <label className="mb-3 inline-block">
                          Company Name
                        </label>
                        <input
                          className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="lg:col-span-2">
                      <div>
                        <label className="mb-3 inline-block">Country</label>
                        <select className="bg-transparent border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base">
                          <option>Select a country</option>
                          <option>Azerbaijan</option>
                          <option>Bahamas</option>
                          <option>Bahrain</option>
                          <option>Bangladesh</option>
                          <option>Barbados</option>
                        </select>
                      </div>
                    </div>
                    <div className="lg:col-span-2">
                      <div>
                        <label className="mb-3 inline-block">
                          Street Address
                        </label>
                        <input
                          className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                          placeholder="House number and street name"
                          type="text"
                        />
                        <input
                          className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                          placeholder="Apartment, suite, unit etc."
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="lg:col-span-2">
                      <div>
                        <label className="mb-3 inline-block">Town / City</label>
                        <input
                          className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                          type="text"
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label className="mb-3 inline-block">
                          State / County
                        </label>
                        <input
                          className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                          type="text"
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label className="mb-3 inline-block">
                          Postcode / ZIP
                        </label>
                        <input
                          className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                          type="text"
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label className="mb-3 inline-block">Phone</label>
                        <input
                          className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                          type="text"
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label className="mb-3 inline-block">
                          Email Address
                        </label>
                        <input
                          className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 mt-4 mt-lg-0">
              <div>
                <h3 className="text-lg font-semibold mb-5">Your order</h3>
                <div className="bg-gray-700 p-10">
                  <div className="your-order-product-info">
                    <ul className="flex flex-wrap items-center justify-between">
                      <li className="text-base font-semibold">Product</li>
                      <li className="text-base font-semibold">Total</li>
                    </ul>
                    <ul className="border-t border-b border-gray-600 py-5 my-5">
                      {productList.map((product) => (
                        <li
                          key={product._id}
                          className="flex flex-wrap items-center justify-between"
                        >
                          <span>
                            {product.productName} X {product.quantity}
                          </span>
                          <span>${product.quantity * product.price}</span>
                        </li>
                      ))}
                    </ul>
                    <ul className="flex flex-wrap items-center justify-between">
                      <li className="text-base font-semibold">Shipping</li>
                      <li className="text-base font-semibold">Free shipping</li>
                    </ul>
                    <ul className="flex flex-wrap items-center justify-between border-t border-b border-gray-600 py-5 my-5">
                      <li className="text-base font-semibold">Total</li>
                      <li className="text-base font-semibold">${total}</li>
                    </ul>
                  </div>
                  <div className="accordion">
                    {/* <div className="set mb-4">
                      <button
                        className="text-base font-semibold active"
                        aria-label="button"
                      >
                        Direct bank transfer
                      </button>
                      <div className="content overflow-hidden p-4 bg-white mt-3">
                        <p>
                          Please send a check to Store Name, Store Street, Store
                          Town, Store State / County, Store Postcode.
                        </p>
                      </div>
                    </div> */}
                    {/* <div className="set mb-4">
                      <button
                        className="text-base font-semibold"
                        aria-label="button"
                      >
                        Check payments
                      </button>
                      <div className="content overflow-hidden p-4 bg-white mt-3 hidden">
                        <p>
                          Please send a check to Store Name, Store Street, Store
                          Town, Store State / County, Store Postcode.
                        </p>
                      </div>
                    </div> */}

                    <ul className="flex flex-wrap items-center justify-between">
                      <li className="text-base font-semibold">
                        Cash on delivery
                      </li>
                      <li className="text-base font-semibold">Available</li>
                    </ul>
                    <div className="set mb-4">
                      {/* <button
                        className="text-base font-semibold"
                        aria-label="button"
                      >
                        
                      </button> */}
                      {/* <div className="content overflow-hidden p-4 bg-white mt-3 hidden">
                        <p>
                          Please send a check to Store Name, Store Street, Store
                          Town, Store State / County, Store Postcode.
                        </p>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    className="block w-full text-center leading-none uppercase text-white text-sm bg-dark px-5 py-5 transition-all hover:bg-orange font-semibold"
                    onClick={(e) => handlePlaceOrder(e)}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
