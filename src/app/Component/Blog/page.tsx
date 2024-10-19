const Blog = () => {
  return (
    <>
      <section className="pt-5">
        <div className="container lg:pr-40 lg:pl-40 md:pr-40 md:pl-40 pl:40 pr:40">
          <div className="grid grid-rows-1 lg:grid-cols-12 md:grid-cols-12 grid-cols-12 items-center pb-10">
            <div className="lg:text-left lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12 text-center">
              <h4 className="font-bold text-[35px]">Blog</h4>
            </div>
          </div>

          {/* Cards */}

          <div className="grid grid-rows-1 lg:grid-cols-12 md:grid-cols-12 grid-cols-12 items-center">
            <div className="lg:col-span-12 md:col-span-12 col-span-12 mb-8">
              <div className="mx-4 p-6  dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                  Making a design system from scratch{" "}
                </h5>

                <p className="text-[18px] pt-4 text-[#21243D] font-normal">
                  <span className="pr-4">12 Feb 2020</span> |{" "}
                  <span className="pl-4">Design, Pattern</span>
                </p>

                <p className="mb-3 text-[16px] font-normal text-[#21243D] pt-4">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <hr className="w-full" />
            </div>

            <div className="lg:col-span-12 md:col-span-12 col-span-12 mb-8">
              <div className="mx-4 p-6 dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                  Creating pixel perfect icons in Figma
                </h5>

                <p className="text-[18px] pt-4 text-[#21243D] font-normal">
                  <span className="pr-4">12 Feb 2020</span> |{" "}
                  <span className="pl-4">Figma, Icon Design</span>
                </p>

                <p className="mb-3 text-[16px] font-normal text-[#21243D] pt-4">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>

              <hr className="w-full" />
            </div>
          </div>

          <div className="grid grid-rows-1 lg:grid-cols-12 md:grid-cols-12 grid-cols-12 items-center pb-10">
            <div className="lg:col-span-12 md:col-span-12 col-span-12 mb-8">
              <div className="mx-4 p-6  dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                  Making a design system from scratch{" "}
                </h5>

                <p className="text-[18px] pt-4 text-[#21243D] font-normal">
                  <span className="pr-4">12 Feb 2020</span> |{" "}
                  <span className="pl-4">Design, Pattern</span>
                </p>

                <p className="mb-3 text-[16px] font-normal text-[#21243D] pt-4">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <hr className="w-full" />
            </div>

            <div className="lg:col-span-12 md:col-span-12 col-span-12 mb-8">
              <div className="mx-4 p-6 dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                  Creating pixel perfect icons in Figma
                </h5>

                <p className="text-[18px] pt-4 text-[#21243D] font-normal">
                  <span className="pr-4">12 Feb 2020</span> |{" "}
                  <span className="pl-4">Figma, Icon Design</span>
                </p>

                <p className="mb-3 text-[16px] font-normal text-[#21243D] pt-4">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>

              <hr className="w-full" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
