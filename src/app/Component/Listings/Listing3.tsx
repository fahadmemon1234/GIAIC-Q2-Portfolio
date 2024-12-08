import Image from "next/image";
import Link from "next/link";

const Listing3 = () => {
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
            <Link href={"/Component/ProductListing"}>
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
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center text-center mt-10">
        <Link href="/Component/AllProduct">
          <button className="bg-gray-100 lg:block text-gray-500 font-light py-4 px-6 w-full lg:w-44 cursor-pointer">
            View collection
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Listing3;
