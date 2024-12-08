import { LiaShippingFastSolid } from "react-icons/lia";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { CiCreditCard1 } from "react-icons/ci";
import { RiSeedlingLine } from "react-icons/ri";
import Image from "next/image";

export const Features1 = () => {
  return (
    <>
      <div className="container flex flex-col items-center py-12 font-helvetica font-normal">
        <h1 className="text-2xl  mb-8">What makes our brand different</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-7">
          <div className="flex flex-col">
            <LiaShippingFastSolid className="text-3xl mb-4" />
            <h2 className="text-lg  mb-2">Next day as standard</h2>
            <p className="text-sm font-Poppins">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>
          <div className="flex flex-col ">
            <AiOutlineCheckCircle className="text-3xl mb-4" />
            <h2 className="text-lg  mb-2">Made by true artisans</h2>
            <p className="text-sm font-Poppins">
              Handmade crafted goods made with real passion and craftsmanship
            </p>
          </div>
          <div className="flex flex-col ">
            <CiCreditCard1 className="text-3xl mb-4" />
            <h2 className="text-lg  mb-2">Unbeatable prices</h2>
            <p className="text-sm font-Poppins">
              For our materials and quality you won’t find better prices
              anywhere
            </p>
          </div>
          <div className="flex flex-col ">
            <RiSeedlingLine className="text-3xl mb-4" />
            <h2 className="text-lg  mb-2">Recycled packaging</h2>
            <p className="text-sm font-Poppins">
              We use 100% recycled packaging to ensure our footprint is
              manageable
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export const Features2 = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 flex flex-col justify-center p-8 md:p-16 bg-white container">
          <h1 className="text-3xl font-helvetica md:text-2xl font-medium text-gray-800 mb-9">
            From a studio in London to a global brand with over 400 outlets
          </h1>
          <p className="text-gray-500 mb-7">
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market.
          </p>
          <p className="text-gray-500 mb-28">
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe and design so our Chelsea boutique become the hotbed
            for the London interior design community.
          </p>

          <button className="bg-gray-100 lg:block text-gray-800 font-light py-4 px-6 w-full lg:w-44">
            Get in touch
          </button>
        </div>
        <div className="flex-1">
          <Image
            src="/assets/img/Furniture.jpg"
            alt="A modern living room with a grey sofa, decorative pillows, and plants on cylindrical stands"
            width={800}
            height={600}
            quality={100}
            priority
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export const Features3 = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <Image
            src="/assets/img/Furniture1.jpg"
            alt="A modern living room with a grey sofa, decorative pillows, and plants on cylindrical stands"
            width={800}
            height={600}
            quality={100}
            priority
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center p-8 md:p-16 bg-white container">
          <h1 className="text-3xl font-helvetica md:text-2xl font-medium text-gray-800 mb-9">
            Our service isn't just personal, it's actually hyper personally
            exquisite
          </h1>
          <p className="text-gray-500 mb-7">
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market.
          </p>
          <p className="text-gray-500 mb-28">
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe and design so our Chelsea boutique become the hotbed
            for the London interior design community.
          </p>

          <button className="bg-gray-100 lg:block text-gray-800 font-light py-4 px-6 w-full lg:w-44">
            Get in touch
          </button>
        </div>
      </div>
    </>
  );
};
