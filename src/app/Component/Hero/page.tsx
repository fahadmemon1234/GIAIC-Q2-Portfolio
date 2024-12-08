const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row container mx-auto">
        {/* Left Section */}
        <div className="bg-[#2E294E] text-white p-14 flex flex-col justify-center">
          <h1 className="text-xl md:text-3xl font-Inter mb-10">
            The furniture brand for the <br /> future, with timeless designs
          </h1>
          <button className="bg-[#4A4E69] text-white font-light py-4 px-6 mb-48 w-44">
            View collection
          </button>
          <p className="font-light w-[70%]">
            A new era in eco-friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors, and a beautiful way
            to display things digitally using modern web technologies.
          </p>
        </div>

        {/* Right Section */}
        <div className="bg-[#8DA7BE]  flex items-center justify-center">
          <img
            src="https://placehold.co/400x400"
            alt="A modern black chair with wooden legs"
            className="h-96"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
