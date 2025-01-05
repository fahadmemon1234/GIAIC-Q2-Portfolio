import Link from "next/link";

const Checkout = () => {
  return (
    <>
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
                </form>

                <div className="checkout-account mb-5">
                  <input
                    id="id2"
                    className="checkout-toggle2"
                    type="checkbox"
                  />
                  <label htmlFor="id2" style={{ paddingLeft: "5px" }}>
                    Create an account?
                  </label>
                </div>
                <div className="checkout-account-toggle open-toggle2 mb-30 hidden">
                  <input
                    className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                    placeholder="Email address"
                    type="email"
                  />
                  <input
                    className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                    placeholder="Password"
                    type="password"
                  />
                  <button
                    className="text-center leading-none uppercase text-white text-sm bg-dark px-6 py-4 transition-all hover:bg-orange font-semibold mb-5"
                    type="submit"
                    aria-label="button"
                  >
                    register
                  </button>
                </div>
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
                    ></textarea>
                  </div>
                </div>
                <div className="checkout-account mt-25">
                  <input
                    id="ship"
                    className="checkout-toggle"
                    type="checkbox"
                  />
                  <label htmlFor="ship" style={{ paddingLeft: "5px" }}>
                    Ship to a different address?
                  </label>
                </div>
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
                      <li className="flex flex-wrap items-center justify-between">
                        <span>Product Name X 1</span>
                        <span>$329 </span>
                      </li>
                    </ul>
                    <ul className="flex flex-wrap items-center justify-between">
                      <li className="text-base font-semibold">Shipping</li>
                      <li className="text-base font-semibold">Free shipping</li>
                    </ul>
                    <ul className="flex flex-wrap items-center justify-between border-t border-b border-gray-600 py-5 my-5">
                      <li className="text-base font-semibold">Total</li>
                      <li className="text-base font-semibold">$329</li>
                    </ul>
                  </div>
                  <div className="accordion">
                    <div className="set mb-4">
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
                    </div>
                    <div className="set mb-4">
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
                    </div>
                    <div className="set mb-4">
                      <button
                        className="text-base font-semibold"
                        aria-label="button"
                      >
                        Cash on delivery
                      </button>
                      <div className="content overflow-hidden p-4 bg-white mt-3 hidden">
                        <p>
                          Please send a check to Store Name, Store Street, Store
                          Town, Store State / County, Store Postcode.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    className="block w-full text-center leading-none uppercase text-white text-sm bg-dark px-5 py-5 transition-all hover:bg-orange font-semibold"
                    href="#"
                  >
                    Place Order
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
