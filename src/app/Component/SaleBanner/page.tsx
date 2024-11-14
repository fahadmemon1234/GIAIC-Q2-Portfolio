"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MdShoppingCart } from "react-icons/md";

const SaleBanner = () => {
  const [time, setTime] = useState({
    days: 46,
    hours: 2,
    minutes: 27,
    seconds: 46,
  });

  useEffect(() => {
    // Set target date (you can replace this with any target date)
    const targetDate = new Date("2024-12-31T00:00:00").getTime();

    // Update the countdown every second
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTime({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        setTime({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative md:py-3 py-5">
        <div className="container-fluid relative">
          <div className="grid grid-cols-1">
            <div
              style={{
                backgroundImage: "url('/assets/Hero/hero.png')",
              }}
              className="relative h-[470px] overflow-hidden py-24 px-4 md:px-10 bg-orange-600 bg-center bg-no-repeat bg-cover"
            >
              <div
                className="absolute inset-0 bg-center bg-no-repeat bg-cover"
                style={{
                  backgroundImage: "url('/assets/Hero/bg-shape.png')",
                }}
              >
                <div className="grid grid-cols-1 justify-center text-center relative z-1 pt-[100px]">
                  <h3 className="text-4xl leading-normal tracking-wide font-bold text-white">
                    End of Season Clearance <br /> Sale upto 30%
                  </h3>
                  <div id="countdown" className="mt-6">
                    <ul className="count-down list-none inline-block">
                      <li
                        id="days"
                        className="mx-1 text-[28px] leading-[72px] h-[80px] w-[80px] font-medium rounded-md shadow shadow-gray-100 inline-block text-center text-white"
                      >
                        {time.days}
                        <p className="count-head block text-xs tracking-wider leading-5 relative uppercase transform -translate-y-6">
                          Days
                        </p>
                      </li>
                      <li
                        id="hours"
                        className="mx-1 text-[28px] leading-[72px] h-[80px] w-[80px] font-medium rounded-md shadow shadow-gray-100 inline-block text-center text-white"
                      >
                        {time.hours}
                        <p className="count-head block text-xs tracking-wider leading-5 relative uppercase transform -translate-y-6">
                          Hours
                        </p>
                      </li>
                      <li
                        id="mins"
                        className="mx-1 text-[28px] leading-[72px] h-[80px] w-[80px] font-medium rounded-md shadow shadow-gray-100 inline-block text-center text-white"
                      >
                        {time.minutes}
                        <p className="count-head block text-xs tracking-wider leading-5 relative uppercase transform -translate-y-6">
                          Mins
                        </p>
                      </li>
                      <li
                        id="secs"
                        className="mx-1 text-[28px] leading-[72px] h-[80px] w-[80px] font-medium rounded-md shadow shadow-gray-100 inline-block text-center text-white"
                      >
                        {time.seconds}
                        <p className="count-head block text-xs tracking-wider leading-5 relative uppercase transform -translate-y-6">
                          Secs
                        </p>
                      </li>
                      <li id="end" className="h1"></li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <Link
                      href="/sale"
                      className="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-center bg-white text-orange-500 rounded-md"
                    >
                      <MdShoppingCart className="inline-block mr-2" />
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SaleBanner;
