import TopBar from "../topBar/page";
import { Navbar3 } from "../Navbar/page";
import Image from "next/image";
import Link from "next/link";
import { Features3, Features4 } from "../Features/page";
import Email from "../Email/page";
import { Footer2 } from "../Footer/page";

const About = () => {
  return (
    <>
      <TopBar />
      <Navbar3 />

      <div className="py-16 container flex flex-col md:flex-row items-center justify-center mx-auto">
        <div className="md:w-9/12 md:text-left">
          <p className="text-2xl md:text-3xl font-helvetica text-gray-800">
            A brand built on the love of craftsmanship,
            <br />
            quality and outstanding customer service
          </p>
        </div>
        <div className="mt-6 md:mt-0 w-full md:w-2/12 text-center md:text-left">
          <button className="bg-gray-100 lg:block text-gray-500 font-light py-4 px-2 w-full md:w-22">
            View our products
          </button>
        </div>
      </div>

      <div className="flex flex-col container md:flex-row mx-auto lg:py-16 gap-4 pb-10">
        <div className="bg-[#2E294E] text-white md:h-[575px] p-14 flex flex-col justify-center md:w-1/2">
          <h1
            className="text-2xl md:text-3xl font-helvetica mb-10 md:pt-[20px]"
            style={{ lineHeight: "40px" }}
          >
            It started with a small idea
          </h1>

          <p className="font-light lg:w-[80%]">
            A global brand with local beginnings, our story in a <br />
            small studio in South London in early 2014
          </p>
          <div className="md:pt-64 mt-10">
            <Link href={"/Component/ProductListing"}>
              <button className="bg-[#4A4E69] lg:block text-white font-light py-4 px-6 w-full lg:w-44">
                View collection
              </button>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center md:w-1/2">
          <Image
            src="/assets/img/chair2.jpg"
            alt="A modern black chair with wooden legs"
            className="md:h-[575px] h-[360px] object-cover md:block"
            width={800}
            height={500}
            quality={100}
            priority
          />
        </div>
      </div>

      <Features3 />

      <Features4 />

      <Email />

      <Footer2 />
    </>
  );
};

export default About;
