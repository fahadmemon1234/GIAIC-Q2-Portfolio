import Image from "next/image";

export const Listing1 = () => {
  return (
    <>
      <div className="container  py-16 sm:px-6 lg:px-8 font-helvetica">
        <h1 className="text-3xl text-gray-900 mb-8">New ceramics</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="">
            <div className="w-full h-[300px]">
              <Image
                src="/assets/img/chair.jpg"
                alt="A modern black chair with wooden legs"
                width={300}
                height={400}
                quality={100}
                priority
                className="object-cover h-full w-full"
              />
            </div>
            <h2 className="text-lg font-normal text-gray-900 mt-4">
              The Dandy chair
            </h2>
            <p className="text-gray-500">£250</p>
          </div>
          <div className="">
            <div className="w-full h-[300px]">
              <Image
                src="/assets/img/vaseset.jpg"
                alt="A set of rustic vases on a pedestal"
                width={300}
                height={400}
                quality={100}
                priority
                className="object-cover h-full w-full"
              />
            </div>
            <h2 className="text-lg font-normal text-gray-900 mt-4">
              Rustic Vase Set
            </h2>
            <p className="text-gray-500">£155</p>
          </div>
          <div className="">
            <div className="w-full h-[300px]">
              <Image
                src="/assets/img/vase.jpg"
                alt="A single sleek vase on a white surface"
                width={300}
                height={400}
                quality={100}
                priority
                className="object-cover h-full w-full"
              />
            </div>
            <h2 className="text-lg font-normal text-gray-900 mt-4">
              The Silky Vase
            </h2>
            <p className="text-gray-500">£125</p>
          </div>
          <div className="">
            <div className="w-full h-[300px]">
              <Image
                src="/assets/img/lamp.jpg"
                alt="A modern hanging lamp with a blue background"
                width={300}
                height={400}
                quality={100}
                priority
                className="object-cover h-full w-full"
              />
            </div>
            <h2 className="text-lg font-normal text-gray-900 mt-4">
              The Lucy Lamp
            </h2>
            <p className="text-gray-500">£399</p>
          </div>
        </div>
        <div className="flex justify-center text-center mt-10">
          <button className="bg-gray-100 lg:block text-gray-500 font-light py-4 px-6 mb-48 w-full lg:w-44">
            View collection
          </button>
        </div>
      </div>
    </>
  );
};

export const Listing2 = () => {
  return <></>;
};
