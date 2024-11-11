const Hero = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: "url('/assets/Hero/hero.png')",
        }}
        className="relative md:flex table w-full items-center md:h-screen py-36 bg-emerald-500/5 md:bg-top bg-center bg-no-repeat bg-cover"
      >
        <div className="container relative mx-auto py-12">
          <div className="grid grid-cols-1 place-items-center">
            <div className="text-center">
              <span className="uppercase font-semibold text-lg">
                New Collection
              </span>
              <h4 className="text-4xl md:text-6xl font-bold my-3 leading-normal md:leading-snug">
                The Gift Suite
              </h4>
              <p className="text-lg">
                Our latest collection of essential basics.
              </p>
              <div className="mt-6">
                <a
                  href="/"
                  className="py-2 px-5 inline-block font-semibold tracking-wide text-center bg-slate-900 dark:bg-orange-500 text-white rounded-md"
                >
                  Shop Now <i className="mdi mdi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
