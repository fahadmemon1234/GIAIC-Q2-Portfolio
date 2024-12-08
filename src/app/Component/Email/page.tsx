const Email = () => {
  return (
    <>
      <section className="md:bg-[#F9F9F9] py-12 px-6 md:px-20">
        <div className="bg-white p-6 md:p-10 pt-10 pb-[60px] text-center mx-auto">
          <h1 className="pt-5 text-xl md:text-3xl font-medium font-helvetica text-gray-800 mb-4 md:mb-7">
            Join the club and get the benefits
          </h1>
          <p className="text-gray-600 mb-8 md:mb-20 text-sm md:text-base w-full md:w-[490px] mx-auto">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop up stores, and more
          </p>
          <div className="flex flex-row justify-center items-center">
            <input
              type="email"
              placeholder="your@email.com"
              className="p-3 bg-[#F9F9F9] border-0 border-gray-300 w-2/3 md:w-80 focus:outline-none"
            />
            <button className="bg-gray-800 text-white py-3 px-5 w-1/3 md:w-auto">
              Sign up
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Email;
