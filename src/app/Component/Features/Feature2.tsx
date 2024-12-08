import Image from "next/image";
import Link from "next/link";

const Features2 = () => {
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
          <Link href={"/Component/ProductListing"}>
            <button className="bg-gray-100 lg:block text-gray-800 font-light py-4 px-6 w-full lg:w-44">
              Get in touch
            </button>
          </Link>
        </div>
        <div className="flex-1">
          <Image
            src="/assets/img/Furniture.jpg"
            alt="A modern living room with a grey sofa, decorative pillows, and plants on cylindrical stands"
            width={800}
            height={600}
            quality={100}
            priority
            className="w-full md:h-full h-[400px] object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Features2;
