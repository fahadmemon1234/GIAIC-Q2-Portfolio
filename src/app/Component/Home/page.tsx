import Image from "next/image";
import Link from "next/link";

const Main = () => {
  return (
    <>
      {/* Main */}
      <section className="pt-20 pb-10">
        <div className="container lg:pr-40 lg:pl-40 md:pr-40 md:pl-40">
          <div className="grid grid-rows-1 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 lg:gap-20 gap-10 items-center">
            {/* Image section */}
            <div className="pt-10 lg:col-span-5 md:col-span-12 sm:col-span-12 md:order-2 sm:order-2 sm:mb-10 lg:mx-auto text-center">
              <Image
                src={"/assets/img/myPic.png"}
                alt="mypic"
                width={243}
                height={243}
                className="rounded-full !w-[243px] !h-[243px] mb-10 object-cover mx-auto shadow-[-2px_9px_0px_#EDF7FA]"
              />
            </div>

            {/* Text section */}
            <div className="lg:col-span-7 md:col-span-12 sm:col-span-12 md:order-1 sm:order-1 lg:text-left text-center md:text-center">
              <h1 className="mx-1 text-[44px] leading-[60px] font-bold">
                Hi, I am Fahad,
              </h1>
              <h1 className="mx-1 text-[44px] leading-[60px] font-bold">
                Creative Technologist
              </h1>

              <p className="mx-4 text-[16px] lg:w-full sm:w-auto py-5">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>

              <button className="bg-[#FF6464] text-white mt-2 py-2 px-4 rounded font-medium">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      {/* Recent Post */}

      <section className="pt-5 bg-[#EDF7FA]">
        <div className="container lg:pr-40 lg:pl-40 md:pr-40 md:pl-40 pl:40 pr:40">
          <div className="grid grid-rows-1 lg:grid-cols-12 md:grid-cols-12 grid-cols-12 items-center pb-10">
            <div className="lg:text-left lg:col-span-8 md:col-span-12 sm:col-span-12 col-span-12 text-center">
              <h4 className="font-medium">Recent posts</h4>
            </div>
            <div className="lg:block lg:col-span-4 md:col-span-4 hidden sm:col-span-12 col-span-12 text-right">
              <Link href="#" className="font-medium text-[#00A8CC]">
                view all
              </Link>
            </div>
          </div>

          {/* Cards */}

          <div className="grid grid-rows-1 lg:grid-cols-12 md:grid-cols-12 grid-cols-12 items-center pb-10">
            <div className="lg:col-span-6 md:col-span-12 col-span-12 mb-8">
              <div className="mx-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
            </div>
            <div className="lg:col-span-6 md:col-span-12 col-span-12 mb-8">
              <div className="mx-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
            </div>
          </div>
        </div>
      </section>

      {/* Works */}
      {/* Featured works */}

      <section className="pt-8 pb-10">
        <div className="container mx-auto lg:px-40 md:px-40 px-4">
          <div className="grid grid-rows-1 lg:grid-cols-12 md:grid-cols-12 grid-cols-12 items-center pb-10">
            <div className="lg:text-left lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12 text-center">
              <h4 className="font-medium">Featured works</h4>
            </div>
          </div>

          <div className="grid grid-rows-1 lg:grid-cols-12 md:grid-cols-4 grid-cols-12 items-center pb-10">
            <div className="lg:text-left lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
              <Image
                src={"/assets/img/myPic.png"}
                width={246}
                className="rounded !w-[246px] !h-[180px] object-cover lg:mx-auto"
                height={180}
                alt="portfolio"
              />
            </div>
            <div className="lg:text-left lg:col-span-8 md:col-span-8 sm:col-span-12 col-span-12 lg:pt-0 md:pt-0 md:pl-0 sm:pl-0 pt-5">
              <h4 className="font-bold lg:text-[30px] md:text-[30px] mb-5 text-[20px]">
                Designing Dashboards
              </h4>

              <div className="grid grid-cols-12 items-center">
                <span className="lg:col-span-2 md:col-span-2 sm:col-span-2 col-span-3 text-center bg-[#142850] text-white text-[18px] font-black me-2 px-3 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  2020
                </span>

                <p className="pl-4 lg:col-span-10 md:col-span-10 sm:col-span-10 col-span-9 text-[#8695A4] text-[20px]">
                  Dashboard
                </p>
              </div>

              <p className="pt-5 text-[16px] text-[#21243D]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <hr className="w-full" />

          <div className="pt-10 grid grid-rows-1 lg:grid-cols-12 md:grid-cols-4 grid-cols-12 items-center pb-10">
            <div className="lg:text-left lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
              <Image
                src={"/assets/img/myPic.png"}
                width={246}
                className="rounded !w-[246px] !h-[180px] object-cover lg:mx-auto"
                height={180}
                alt="portfolio"
              />
            </div>
            <div className="lg:text-left lg:col-span-8 md:col-span-8 sm:col-span-12 col-span-12 lg:pt-0 md:pt-0 md:pl-0 sm:pl-0 pt-5">
              <h4 className="font-bold lg:text-[30px] md:text-[30px] mb-5 text-[20px]">
                Designing Dashboards
              </h4>

              <div className="grid grid-cols-12 items-center">
                <span className="lg:col-span-2 md:col-span-2 sm:col-span-2 col-span-3 text-center bg-[#142850] text-white text-[18px] font-black me-2 px-3 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  2020
                </span>

                <p className="pl-4 lg:col-span-10 md:col-span-10 sm:col-span-10 col-span-9 text-[#8695A4] text-[20px]">
                  Dashboard
                </p>
              </div>

              <p className="pt-5 text-[16px] text-[#21243D]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <hr className="w-full" />

          <div className="pt-10 grid grid-rows-1 lg:grid-cols-12 md:grid-cols-4 grid-cols-12 items-center pb-10">
            <div className="lg:text-left lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
              <Image
                src={"/assets/img/myPic.png"}
                width={246}
                className="rounded !w-[246px] !h-[180px] object-cover lg:mx-auto"
                height={180}
                alt="portfolio"
              />
            </div>
            <div className="lg:text-left lg:col-span-8 md:col-span-8 sm:col-span-12 col-span-12 lg:pt-0 md:pt-0 md:pl-0 sm:pl-0 pt-5">
              <h4 className="font-bold lg:text-[30px] md:text-[30px] mb-5 text-[20px]">
                Designing Dashboards
              </h4>

              <div className="grid grid-cols-12 items-center">
                <span className="lg:col-span-2 md:col-span-2 sm:col-span-2 col-span-3 text-center bg-[#142850] text-white text-[18px] font-black me-2 px-3 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  2020
                </span>

                <p className="pl-4 lg:col-span-10 md:col-span-10 sm:col-span-10 col-span-9 text-[#8695A4] text-[20px]">
                  Dashboard
                </p>
              </div>

              <p className="pt-5 text-[16px] text-[#21243D]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <hr className="w-full" />
        </div>
      </section>
    </>
  );
};

export default Main;
