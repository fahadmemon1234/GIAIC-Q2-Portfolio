import Image from "next/image";

const Work = () => {
  return (
    <>
      <section className="pt-8 pb-10">
        <div className="container mx-auto lg:px-40 md:px-40 px-4">
          <div className="grid grid-rows-1 lg:grid-cols-12 md:grid-cols-12 grid-cols-12 items-center pb-10">
            <div className="lg:text-left lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12 text-center">
              <h4 className="font-bold text-[35px]">Works</h4>
            </div>
          </div>

          <div className="grid grid-rows-1 lg:grid-cols-12 md:grid-cols-4 grid-cols-12 items-center pb-10">
            <div className="lg:text-left lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
              <Image
                src={"/assets/img/logo.png"}
                width={246}
                className="rounded !w-[246px] !h-[180px] object-cover lg:mx-auto"
                height={180}
                alt="portfolio"
              />
            </div>
            <div className="lg:text-left lg:col-span-8 md:col-span-8 sm:col-span-12 col-span-12 lg:pt-0 md:pt-0 md:pl-0 sm:pl-0 pt-5">
              <h4 className="font-bold lg:text-[30px] md:text-[30px] mb-5 text-[20px]">
                Logo Designing
              </h4>

              <div className="grid grid-cols-12 items-center">
                <span className="lg:col-span-2 md:col-span-2 sm:col-span-2 col-span-3 text-center bg-[#142850] text-white text-[18px] font-black me-2 px-3 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  2022
                </span>

                <p className="pl-4 lg:col-span-10 md:col-span-10 sm:col-span-10 col-span-9 text-[#8695A4] text-[20px]">
                  logo design
                </p>
              </div>

              <p className="pt-5 text-[16px] text-[#21243D]">
                From beauty salons to restaurants to real estate, we design
                logos across industries. Our client projects focus on standout
                brand identities that fit the needs of each business.
              </p>
            </div>
          </div>
          <hr className="w-full" />

          <div className="pt-10 grid grid-rows-1 lg:grid-cols-12 md:grid-cols-4 grid-cols-12 items-center pb-10">
            <div className="lg:text-left lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
              <Image
                src={"/assets/img/Donation.jpg"}
                width={246}
                className="rounded !w-[246px] !h-[180px] object-cover lg:mx-auto"
                height={180}
                alt="portfolio"
              />
            </div>
            <div className="lg:text-left lg:col-span-8 md:col-span-8 sm:col-span-12 col-span-12 lg:pt-0 md:pt-0 md:pl-0 sm:pl-0 pt-5">
              <h4 className="font-bold lg:text-[30px] md:text-[30px] mb-5 text-[20px]">
                Donation-Application
              </h4>

              <div className="grid grid-cols-12 items-center">
                <span className="lg:col-span-2 md:col-span-2 sm:col-span-2 col-span-3 text-center bg-[#142850] text-white text-[18px] font-black me-2 px-3 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  2023
                </span>

                <p className="pl-4 lg:col-span-10 md:col-span-10 sm:col-span-10 col-span-9 text-[#8695A4] text-[20px]">
                  Admin-Portal
                </p>
              </div>

              <p className="pt-5 text-[16px] text-[#21243D]">
                Building a Donation Admin Portal to streamline donation
                management and enhance learning through hands-on development.
              </p>
            </div>
          </div>
          <hr className="w-full" />

          <div className="pt-10 grid grid-rows-1 lg:grid-cols-12 md:grid-cols-4 grid-cols-12 items-center pb-10">
            <div className="lg:text-left lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
              <Image
                src={"/assets/img/website.png"}
                width={246}
                className="rounded !w-[246px] !h-[180px] object-cover lg:mx-auto"
                height={180}
                alt="portfolio"
              />
            </div>
            <div className="lg:text-left lg:col-span-8 md:col-span-8 sm:col-span-12 col-span-12 lg:pt-0 md:pt-0 md:pl-0 sm:pl-0 pt-5">
              <h4 className="font-bold lg:text-[30px] md:text-[30px] mb-5 text-[20px]">
                BarBer Store
              </h4>

              <div className="grid grid-cols-12 items-center">
                <span className="lg:col-span-2 md:col-span-2 sm:col-span-2 col-span-3 text-center bg-[#142850] text-white text-[18px] font-black me-2 px-3 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  2022
                </span>

                <p className="pl-4 lg:col-span-10 md:col-span-10 sm:col-span-10 col-span-9 text-[#8695A4] text-[20px]">
                  website design
                </p>
              </div>

              <p className="pt-5 text-[16px] text-[#21243D]">
                Sleek barber store website with online booking, service details,
                and stylist profiles. Mobile-friendly with easy navigation and
                integrated payments for a seamless user experience.
              </p>
            </div>
          </div>
          <hr className="w-full" />

          <div className="pt-10 grid grid-rows-1 lg:grid-cols-12 md:grid-cols-4 grid-cols-12 items-center pb-10">
            <div className="lg:text-left lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
              <Image
                src={"/assets/img/Media.png"}
                width={246}
                className="rounded !w-[246px] !h-[180px] object-cover lg:mx-auto"
                height={180}
                alt="portfolio"
              />
            </div>
            <div className="lg:text-left lg:col-span-8 md:col-span-8 sm:col-span-12 col-span-12 lg:pt-0 md:pt-0 md:pl-0 sm:pl-0 pt-5">
              <h4 className="font-bold lg:text-[30px] md:text-[30px] mb-5 text-[20px]">
                Social Media
              </h4>

              <div className="grid grid-cols-12 items-center">
                <span className="lg:col-span-2 md:col-span-2 sm:col-span-2 col-span-3 text-center bg-[#142850] text-white text-[18px] font-black me-2 px-3 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  2022
                </span>

                <p className="pl-4 lg:col-span-10 md:col-span-10 sm:col-span-10 col-span-9 text-[#8695A4] text-[20px]">
                  post design
                </p>
              </div>

              <p className="pt-5 text-[16px] text-[#21243D]">
                Create eye-catching social media posts for restaurants, malls,
                institutes, Islamic centers, and events with our professional
                graphic design services. Make your brand stand out!
              </p>
            </div>
          </div>
          <hr className="w-full" />
        </div>
      </section>
    </>
  );
};

export default Work;
