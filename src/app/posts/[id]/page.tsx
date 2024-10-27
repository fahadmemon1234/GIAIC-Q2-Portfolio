"use client";
import React from "react";
import { useParams } from "next/navigation";
import blogData from "@/lib/blogData";
import Image from "next/image";

const PostId = () => {
  const { id } = useParams();

  const blogPost = blogData.find((post) => post.id === Number(id));

  if (!blogPost) return <p>Loading...</p>;

  return (
    <>
      <div className="max-w-screen-xl mx-auto p-4 gap-y-6 gap-x-8 pt-8">
        <div className="max-w-[770px] mx-auto text-center">
          <span className="inline-flex text-blue-700 bg-blue-100 font-medium text-sm py-1 px-3 mb-2 rounded-full">
            ads
          </span>

          <h1 className="font-bold text-2xl sm:text-4xl lg:text-custom-2 text-dark mb-5">
            Start here for a quick overview of everything you need to know
          </h1>

          <p className="text-body text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id
            quam at justo ullamcorper vulputate. Donec mattis aliquam urna
          </p>

          <div className="flex items-center justify-center gap-4 mt-7">
            <div className="flex w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={"/assets/images/imran.jpg"}
                width={100}
                height={100}
                alt="user"
              />
            </div>

            <div className="text-left">
              <h4 className="font-medium text-[18px] text-[rgb(21 23 26)] mb-1">
                Adrio Devid
              </h4>
              <div className="flex items-center gap-1.5">
                <p className="text-gray-500">Aug 28, 2025</p>
              </div>
            </div>
          </div>
        </div>

        <Image
          src={"/assets/images/imran.jpg"}
          width={100}
          height={100}
          alt="img"
          className="mt-10 mb-11 w-[1000px] h-[500px] mx-auto rounded shadow object-cover"
        />
      </div>
    </>
  );
};

export default PostId;
