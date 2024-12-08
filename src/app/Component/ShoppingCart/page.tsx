import { Navbar1 } from "../Navbar/page";
import { Footer1 } from "../Footer/page";
import Image from "next/image";

const ShoppingCart = () => {
  return (
    <>
      <Navbar1 />
      <div className=" bg-gray-100">
        <div className="py-14 mx-auto p-8 container px-14">
          <h1 className="text-2xl md:text-4xl font-helvetica text-gray-800 mb-14">
            Your shopping cart
          </h1>
          <div className="overflow-x-auto">
            <table className="min-w-full hidden md:table">
              <thead>
                <tr className="w-full border-b">
                  <th className="py-4 px-6 text-left font-thin font-helvetica text-gray-600">
                    Product
                  </th>
                  <th className="py-4 px-6 text-center font-thin font-helvetica text-gray-600">
                    Quantity
                  </th>
                  <th className="py-4 px-6 text-right font-thin text-gray-600 font-helvetica">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-6 flex items-center">
                    <Image
                      src="/assets/img/vase.jpg"
                      alt="Graystone vase"
                      width={80}
                      height={120}
                      quality={100}
                      priority
                      className="w-28 h-[120px] object-cover mr-4"
                    />
                    <div>
                      <h2 className="font-thin font-helvetica text-lg text-gray-800 mb-3">
                        Graystone vase
                      </h2>
                      <p className="text-gray-500 font-light leading-6">
                        A timeless ceramic vase with <br /> a tri color grey
                        glaze.
                      </p>
                      <p className="text-gray-800 pt-3">£85</p>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex items-center justify-center">
                      <button className="text-gray-300">-</button>
                      <span className="mx-2 px-5">1</span>
                      <button className="text-gray-300">+</button>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right text-gray-800">£85</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 flex items-center">
                    <Image
                      src="/assets/img/RedVase.jpg"
                      alt="Basic white vase"
                      width={80}
                      height={120}
                      quality={100}
                      priority
                      className="w-28 h-[120px] object-cover mr-4"
                    />
                    <div>
                      <h2 className="font-helvetica font-thin text-lg text-gray-800 mb-3">
                        Basic white vase
                      </h2>
                      <p className="text-gray-500 font-light leading-6">
                        Beautiful and simple this is <br /> one for the classics
                      </p>
                      <p className="text-gray-800 pt-3">£85</p>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex items-center justify-center">
                      <button className="text-gray-300">-</button>
                      <span className="mx-2 px-5">1</span>
                      <button className="text-gray-300">+</button>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right text-gray-800">£125</td>
                </tr>
              </tbody>
            </table>

            <div className="block md:hidden">
              <div className="border-b pb-4 flex items-start gap-4">
                <Image
                  src="/assets/img/vase.jpg"
                  alt="Graystone vase"
                  width={80}
                  height={120}
                  quality={100}
                  priority
                  className="w-20 h-[120px] object-cover mr-4"
                />
                <div>
                  <h2 className="font-thin font-helvetica text-lg text-gray-800 mb-1">
                    Graystone vase
                  </h2>
                  <p className="text-gray-500 font-light leading-6 mb-2">
                    A timeless ceramic vase with a tri color grey glaze.
                  </p>
                  <p className="text-gray-800">£85</p>
                  <div className="flex items-center mt-2">
                    <button className="text-gray-300">-</button>
                    <span className="mx-4">1</span>
                    <button className="text-gray-300">+</button>
                  </div>
                </div>
              </div>

              <div className="border-b pb-4 flex items-start gap-4 mt-4">
                <Image
                  src="/assets/img/RedVase.jpg"
                  alt="Basic white vase"
                  width={80}
                  height={120}
                  quality={100}
                  priority
                  className="w-20 h-[120px] object-cover mr-4"
                />
                <div>
                  <h2 className="font-thin font-helvetica text-lg text-gray-800 mb-1">
                    Basic white vase
                  </h2>
                  <p className="text-gray-500 font-light leading-6 mb-2">
                    Beautiful and simple, this is one for the classics.
                  </p>
                  <p className="text-gray-800">£125</p>
                  <div className="flex items-center mt-2">
                    <button className="text-gray-300">-</button>
                    <span className="mx-4">1</span>
                    <button className="text-gray-300">+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-8">
            <div className="text-right">
              <p className="text-gray-600 font-helvetica text-2xl">
                Subtotal{" "}
                <span className="text-gray-800 font-semibold pl-5">£210</span>
              </p>
              <p className="text-gray-500 font-light text-[16px] mt-5">
                Taxes and shipping are calculated at checkout
              </p>
              <button className="hidden md:inline mt-4 px-10 py-5 bg-[#2a254b] text-white">
                Go to checkout
              </button>
            </div>
          </div>
          <button className="block md:hidden mt-4 px-10 py-5 bg-[#2a254b] text-white w-full">
            Go to checkout
          </button>
        </div>
      </div>
      <Footer1 />
    </>
  );
};

export default ShoppingCart;
