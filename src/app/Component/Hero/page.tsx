import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row lg:container mx-auto lg:px-16 lg:py-16">
        <div className="bg-[#2E294E] text-white p-14 flex flex-col justify-center md:w-2/3">
          <h1
            className="text-3xl font-Inter mb-10"
            style={{ lineHeight: "40px" }}
          >
            The furniture brand for the <br /> future, with timeless designs
          </h1>
          <button className="bg-[#4A4E69] hidden lg:block text-white font-light py-4 px-6 mb-48 w-44">
            View collection
          </button>
          <p className="font-light lg:w-[90%]">
            A new era in eco-friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors, and a beautiful way
            to display things digitally using modern web technologies.
          </p>
        </div>

        <div className="flex items-center justify-center md:w-1/3">
          <Image
            src="/assets/img/chair.jpg"
            alt="A modern black chair with wooden legs"
            className="h-[553px] object-cover md:block hidden" // Hide image on small screens
            width={800}
            height={500}
            quality={100}
            priority
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
