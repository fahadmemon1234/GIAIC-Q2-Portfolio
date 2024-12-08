import { Navbar2 } from "../Navbar/page";
import TopBar from "../topBar/page";
import { Listing3 } from "../Listings/page";
import { Features1 } from "../Features/page";
import Email from "../Email/page";
import { Footer2 } from "../Footer/page";
import Image from "next/image";

const ProductListing = () => {
  return (
    <>
      <TopBar />
      <Navbar2 />

      {/* Product Detail */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center p-4 lg:p-16">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0">
          <Image
            src="/assets/img/chair1.jpg"
            alt="A stylish black chair with a minimalist design"
            width={600}
            height={400}
            quality={100}
            priority
            className="max-w-full h-auto"
          />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-16">
          <h1 className="text-4xl font-helvetica text-gray-900 mb-4">
            The Dandy Chair
          </h1>
          <p className="text-2xl text-gray-700 mb-6">£250</p>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Description
          </h2>
          <p className="text-gray-700 mb-4">
            A timeless design, with premium materials features as one of our
            most popular and iconic pieces. The dandy chair is perfect for any
            stylish living space with beech legs and lambskin leather
            upholstery.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Premium material</li>
            <li>Handmade upholstery</li>
            <li>Quality timeless classic</li>
          </ul>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Dimensions
          </h2>
          <div className="flex mb-6">
            <div className="mr-8">
              <p className="text-gray-700">Height</p>
              <p className="text-gray-900 font-semibold">110cm</p>
            </div>
            <div className="mr-8">
              <p className="text-gray-700">Width</p>
              <p className="text-gray-900 font-semibold">75cm</p>
            </div>
            <div>
              <p className="text-gray-700">Depth</p>
              <p className="text-gray-900 font-semibold">50cm</p>
            </div>
          </div>
          <div className="flex items-center mb-6">
            <p className="text-gray-700 mr-4">Amount:</p>
            <div className="flex items-center border border-gray-300 rounded">
              <button className="px-2 py-1 text-gray-700">-</button>
              <input
                type="text"
                value="1"
                className="w-12 text-center border-none focus:outline-none"
              />
              <button className="px-2 py-1 text-gray-700">+</button>
            </div>
          </div>
          <button className="bg-gray-900 text-white px-6 py-3 rounded">
            Add to cart
          </button>
        </div>
      </div>

      <Listing3 />
      <Features1 />
      <Email />
      <Footer2 />
    </>
  );
};
export default ProductListing;
