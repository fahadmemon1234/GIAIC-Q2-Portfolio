import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="py-14 bg-white"></div>
      {/* <!-- Hero section start --> */}
      <div className="py-9 bg-gray-light">
        <div className="container">
          <div className="grid grid-cols-12 gap-x-4">
            <div className="col-span-12">
              <nav>
                <ul className="flex flex-wrap items-center justify-center">
                  <li className="mr-5">
                    <Link
                      href="/"
                      className="text-dark font-medium text-base uppercase transition-all hover:text-orange relative before:w-5 before:h-1px before:empty before:absolute before:top-3 before:bg-dark before:transform before:rotate-115 before:-right-5"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="text-dark font-medium text-base uppercase mr-5">
                    404 Not Found
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Hero section end --> */}

      <div className="py-24">
        <div className="container">
          <div className="grid grid-cols-12 gap-x-5">
            <div className="md:col-start-4 md:col-span-6 col-span-12 text-center mx-auto">
              <h2 className="font-medium text-lg">Ooops! Error 404</h2>
              <p className="my-4">
                Sorry, this page does not exist or temporarily unavailable.
              </p>
              <Link
                className="bg-black inline-block leading-none py-4 px-5 md:px-8 font-medium text-sm text-white transition-all hover:bg-orange capitalize"
                href="/"
              >
                Back to home page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
