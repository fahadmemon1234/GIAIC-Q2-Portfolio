import Image from "next/image";
import Link from "next/link";

const Main = () => {
  return (
    <>
      <section
        id="home"
        className="bg-[url('/assets/img/bg-home.png')] bg-cover bg-center min-h-screen flex items-center bg-opacity-5"
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className="font-bold text-2xl text-[#F05223]">Hello! I AM</p>
            <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold text-gray-900">
              Fahad Memon
            </h1>
            <p className="mb-8 leading-relaxed">
              Creating visually stunning designs and developing seamless digital
              experiences is my passion. I thrive on transforming complex
              challenges into elegant, user-friendly solutions. Whether I am
              crafting minimalist products or coding sophisticated software, I
              am always exploring new ideas and pushing the boundaries of
              creativity.
            </p>
            <div className="flex justify-center">
              <Link
                href="/Component/Contact"
                className="bg-[#F05223] text-white font-medium py-2 px-6 focus:outline-none rounded-lg text-lg"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded w-4/6 m-auto"
              src="/assets/img/home.png"
              alt="home"
              width={400}
              height={300}
              layout="responsive"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
