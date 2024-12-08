import { LiaShippingFastSolid } from "react-icons/lia";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { CiCreditCard1 } from "react-icons/ci";
import { RiSeedlingLine } from "react-icons/ri";

const Features = () => {
  return (
    <>
      <div className="container flex flex-col items-center py-12 font-Poppins font-light">
        <h1 className="text-2xl  mb-8">What makes our brand different</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-7">
          <div className="flex flex-col">
            <LiaShippingFastSolid className="text-3xl mb-4" />
            <h2 className="text-lg  mb-2">Next day as standard</h2>
            <p className="text-sm">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>
          <div className="flex flex-col ">
            <AiOutlineCheckCircle className="text-3xl mb-4" />
            <h2 className="text-lg  mb-2">Made by true artisans</h2>
            <p className="text-sm">
              Handmade crafted goods made with real passion and craftsmanship
            </p>
          </div>
          <div className="flex flex-col ">
            <CiCreditCard1 className="text-3xl mb-4" />
            <h2 className="text-lg  mb-2">Unbeatable prices</h2>
            <p className="text-sm">
              For our materials and quality you won’t find better prices
              anywhere
            </p>
          </div>
          <div className="flex flex-col ">
            <RiSeedlingLine className="text-3xl mb-4" />
            <h2 className="text-lg  mb-2">Recycled packaging</h2>
            <p className="text-sm">
              We use 100% recycled packaging to ensure our footprint is
              manageable
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
