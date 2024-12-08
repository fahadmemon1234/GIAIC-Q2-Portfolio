const Email = () => {
  return (
    <>
      <section className="bg-[#F9F9F9] py-12 px-20">
        <div className="bg-white p-10 pb-[50px] text-center mx-auto">
          <h1 className="pt-5 text-2xl md:text-3xl font-medium font-helvetica text-gray-800 mb-7">
            Join the club and get the benefits
          </h1>
          <p className="text-gray-600 mb-20 w-[43%] text-center mx-auto">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop up stores, and more
          </p>

          <div className="flex justify-center">
            <input
              type="email"
              placeholder="your@email.com"
              className="p-3 border-0 bg-[#F9F9F9] border-gray-300 w-64 md:w-80 focus:outline-none py-4 px-7"
            />
            <button className="bg-gray-800 font-light text-white p-3 py-4 px-7">
              Sign up
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Email;
