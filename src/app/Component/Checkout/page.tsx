import { FiAtSign } from "react-icons/fi";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

const Checkout = () => {
  return (
    <>
      <section className="relative table w-full py-20 lg:py-24 md:pt-28 bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
          <div className="grid grid-cols-1">
            <h3 className="text-3xl leading-normal font-semibold">CHECKOUT</h3>
          </div>

          <div className="relative mt-3">
            <ul className="tracking-[0.5px] mb-0 flex items-center">
              <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-orange-500">
                <Link href="/">Cartzio</Link>
              </li>

              <li className="inline-block px-[10px] text-[16px] text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180">
                <FaChevronRight size={16} />
              </li>
              <li
                className="inline-block uppercase text-[13px] font-bold text-orange-500"
                aria-current="page"
              >
                CHECKOUT
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-6">
            <div className="lg:col-span-12">
              <div className="p-6 rounded-md shadow dark:shadow-gray-800">
                <h3 className="text-xl leading-normal font-semibold">
                  Billing address
                </h3>

                <form>
                  <div className="grid lg:grid-cols-12 grid-cols-1 mt-6 gap-5">
                    <div className="lg:col-span-6">
                      <label className="form-label font-semibold">
                        First Name : <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 mt-2"
                        placeholder="First Name:"
                        id="firstname"
                        name="name"
                      />
                    </div>
                    <div className="lg:col-span-6">
                      <label className="form-label font-semibold">
                        Last Name : <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 mt-2"
                        placeholder="Last Name:"
                        id="lastname"
                        name="name"
                      />
                    </div>
                    <div className="lg:col-span-6">
                      <label className="form-label font-semibold">
                        Username
                      </label>
                      <div className="relative mt-2">
                        <span
                          className="absolute top-0.5 start-0.5 w-9 h-9 text-xl bg-gray-100 dark:bg-slate-800 inline-flex justify-center items-center text-dark dark:text-white rounded"
                          id="basic-addon1"
                        >
                          <FiAtSign />
                        </span>
                        <input
                          type="text"
                          className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                          placeholder="Username"
                          required
                        />
                      </div>
                    </div>
                    <div className="lg:col-span-6">
                      <label className="form-label font-semibold">
                        Your Email : <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        className="w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 mt-2"
                        placeholder="Email"
                        name="email"
                      />
                    </div>
                    <div className="lg:col-span-12">
                      <label className="form-label font-semibold">
                        Address : <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 mt-2"
                        placeholder="Address:"
                        id="address"
                        name="name"
                      />
                    </div>
                    <div className="lg:col-span-12">
                      <label className="form-label font-semibold">
                        Address 2 :{" "}
                      </label>
                      <input
                        type="text"
                        className="w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 mt-2"
                        placeholder="Address:"
                        id="address"
                        name="name"
                      />
                    </div>
                    <div className="lg:col-span-4">
                      <label className="font-semibold">Country:</label>
                      <select className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0">
                        <option value="USA">USA</option>
                        <option value="CAD">Canada</option>
                        <option value="CHINA">China</option>
                      </select>
                    </div>
                    <div className="lg:col-span-4">
                      <label className="font-semibold">State:</label>
                      <select className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0">
                        <option value="CAL">California</option>
                        <option value="TEX">Texas</option>
                        <option value="FLOR">Florida</option>
                      </select>
                    </div>
                    <div className="lg:col-span-4">
                      <label className="form-label font-semibold">
                        Zip Code : <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="number"
                        className="w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 mt-2"
                        placeholder="Zip:"
                        id="zipcode"
                        name="number"
                      />
                    </div>
                    <div className="lg:col-span-12">
                      <div className="flex items-center w-full mb-0">
                        <input
                          className="form-checkbox rounded border-gray-100 dark:border-gray-800 text-orange-500 focus:border-orange-300 focus:ring focus:ring-offset-0 focus:ring-orange-200 focus:ring-opacity-50 me-2"
                          type="checkbox"
                          id="sameaddress"
                        />
                        <label
                          className="form-check-label text-slate-400"
                          htmlFor="sameaddress"
                        >
                          Shipping address is the same as my billing address
                        </label>
                      </div>
                      <div className="flex items-center w-full mb-0">
                        <input
                          className="form-checkbox rounded border-gray-100 dark:border-gray-800 text-orange-500 focus:border-orange-300 focus:ring focus:ring-offset-0 focus:ring-orange-200 focus:ring-opacity-50 me-2"
                          type="checkbox"
                          id="savenexttime"
                        />
                        <label
                          className="form-check-label text-slate-400"
                          htmlFor="savenexttime"
                        >
                          Save this information for next time
                        </label>
                      </div>
                    </div>
                  </div>
                </form>

                <h3 className="text-xl leading-normal font-semibold mt-6">
                  Payment
                </h3>
                <form>
                  <div>
                    <div className="grid lg:grid-cols-12 grid-cols-1 mt-6 gap-5">
                      <div className="lg:col-span-12">
                        <div className="block">
                          <div>
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                className="form-radio border-gray-100 dark:border-gray-800 text-orange-500 focus:border-orange-300 focus:ring focus:ring-offset-0 focus:ring-orange-200 focus:ring-opacity-50 me-2"
                                name="radio-colors"
                                readOnly
                                value="1"
                                defaultChecked
                              />
                              <span className="text-slate-400">
                                Credit card
                              </span>
                            </label>
                          </div>
                        </div>
                        <div className="block mt-2">
                          <div>
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                className="form-radio border-gray-100 dark:border-gray-800 text-orange-500 focus:border-orange-300 focus:ring focus:ring-offset-0 focus:ring-orange-200 focus:ring-opacity-50 me-2"
                                name="radio-colors"
                                readOnly
                                value="1"
                              />
                              <span className="text-slate-400">Debit Card</span>
                            </label>
                          </div>
                        </div>
                        <div className="block mt-2">
                          <div>
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                className="form-radio border-gray-100 dark:border-gray-800 text-orange-500 focus:border-orange-300 focus:ring focus:ring-offset-0 focus:ring-orange-200 focus:ring-opacity-50 me-2"
                                name="radio-colors"
                                readOnly
                                value="1"
                              />
                              <span className="text-slate-400">PayPal</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="lg:col-span-6">
                        <label className="form-label font-semibold">
                          Account Holder Name :{" "}
                          <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          className="w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 mt-2"
                          placeholder="Name:"
                          id="holdername"
                          name="name"
                        />
                      </div>
                      <div className="lg:col-span-6">
                        <label className="form-label font-semibold">
                          Card Number : <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          className="w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 mt-2"
                          placeholder="Card Number:"
                          name="name"
                        />
                      </div>
                      <div className="lg:col-span-6">
                        <label className="form-label font-semibold">
                          Expiration Date :{" "}
                          <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="date"
                          className="w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 mt-2"
                          placeholder="MM/YY"
                          id="expirationdate"
                          name="name"
                        />
                      </div>
                      <div className="lg:col-span-6">
                        <label className="form-label font-semibold">
                          CVV Code : <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="number"
                          className="w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 mt-2"
                          placeholder="CVC"
                          id="cvvcode"
                          name="name"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="py-2 mt-5 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-orange-500 text-white rounded-md w-[20%]"
                  >
                    Continue to checkout
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
