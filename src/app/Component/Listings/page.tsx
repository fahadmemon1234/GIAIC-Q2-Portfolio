import Image from "next/image";

export const Listing1 = () => {
  const listings = [
    {
      image: "/assets/img/chair.jpg",
      alt: "A modern black chair with wooden legs",
      title: "The Dandy chair",
      price: "£250",
    },
    {
      image: "/assets/img/vaseset.jpg",
      alt: "A set of rustic vases on a pedestal",
      title: "Rustic Vase Set",
      price: "£155",
    },
    {
      image: "/assets/img/vase.jpg",
      alt: "A single sleek vase on a white surface",
      title: "The Silky Vase",
      price: "£125",
    },
    {
      image: "/assets/img/lamp.jpg",
      alt: "A modern hanging lamp with a blue background",
      title: "The Lucy Lamp",
      price: "£399",
    },
  ];

  return (
    <div className="container py-16 font-helvetica">
      <h1 className="text-3xl text-gray-900 mb-8">New ceramics</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {listings.map((listing, index) => (
          <div key={index}>
            <div className="w-full h-[300px]">
              <Image
                src={listing.image}
                alt={listing.alt}
                width={300}
                height={400}
                quality={100}
                priority
                className="object-cover h-full w-full"
              />
            </div>
            <h2 className="text-lg font-normal text-gray-900 mt-4">
              {listing.title}
            </h2>
            <p className="text-gray-500">{listing.price}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center text-center mt-10">
        <button className="bg-gray-100 lg:block text-gray-500 font-light py-4 px-6 w-full lg:w-44">
          View collection
        </button>
      </div>
    </div>
  );
};

export const Listing2 = () => {
  const listings = [
    {
      image: "/assets/img/sofa.jpg",
      alt: "Green suede sofa in a minimalistic room",
      title: "The Poplar suede sofa",
      price: "£980",
    },
    {
      image: "/assets/img/chair.jpg",
      alt: "Black modern chair with wooden legs",
      title: "The Dandy chair",
      price: "£250",
    },
    {
      image: "/assets/img/danychair.jpg",
      alt: "Black wooden chair in a dark room",
      title: "The Dandy chair",
      price: "£250",
    },
  ];

  return (
    <div className="container pb-[64px] font-helvetica">
      <h1 className="text-3xl font-light font-helvetica text-gray-800 mb-8">
        Our popular products
      </h1>
      <div className="flex overflow-x-auto gap-6 md:grid md:grid-cols-12 md:gap-6 md:overflow-x-auto">
        {listings.map((listing, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-[80%] md:flex-shrink md:w-auto ${
              index === 0 ? "hidden md:block md:col-span-6" : "md:col-span-3"
            }`}
          >
            <div className="relative w-full h-[350px]">
              <Image
                src={listing.image}
                alt={listing.alt}
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
              />
            </div>
            <h2 className="text-lg font-helvetica font-normal text-gray-800 mt-4">
              {listing.title}
            </h2>
            <p className="text-gray-600">{listing.price}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center text-center mt-10">
        <button className="bg-gray-100 lg:block text-gray-500 font-light py-4 px-6 w-full lg:w-44">
          View collection
        </button>
      </div>
    </div>
  );
};

export const Listing3 = () => {
  const listings = [
    {
      image: "/assets/img/chair.jpg",
      alt: "A modern black chair with wooden legs",
      title: "The Dandy chair",
      price: "£250",
    },
    {
      image: "/assets/img/vaseset.jpg",
      alt: "A set of rustic vases on a pedestal",
      title: "Rustic Vase Set",
      price: "£155",
    },
    {
      image: "/assets/img/vase.jpg",
      alt: "A single sleek vase on a white surface",
      title: "The Silky Vase",
      price: "£125",
    },
    {
      image: "/assets/img/lamp.jpg",
      alt: "A modern hanging lamp with a blue background",
      title: "The Lucy Lamp",
      price: "£399",
    },
  ];

  return (
    <div className="container py-16 font-helvetica">
      <h1 className="text-3xl text-gray-900 mb-8">You might also like</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {listings.map((listing, index) => (
          <div key={index}>
            <div className="w-full h-[300px]">
              <Image
                src={listing.image}
                alt={listing.alt}
                width={300}
                height={400}
                quality={100}
                priority
                className="object-cover h-full w-full"
              />
            </div>
            <h2 className="text-lg font-normal text-gray-900 mt-4">
              {listing.title}
            </h2>
            <p className="text-gray-500">{listing.price}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center text-center mt-10">
        <button className="bg-gray-100 lg:block text-gray-500 font-light py-4 px-6 w-full lg:w-44">
          View collection
        </button>
      </div>
    </div>
  );
};
