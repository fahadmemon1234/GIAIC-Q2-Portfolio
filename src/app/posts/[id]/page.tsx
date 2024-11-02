"use client";
import React from "react";
import { useParams } from "next/navigation";
import { blogData, blogShort } from "@/lib/blogData";
import Image from "next/image";
import CommentSection from "@/components/CommentSection";

const PostId = () => {
  const { id } = useParams();

  const blogPost = React.useMemo(() => {
    return (
      blogData.find((post) => post.id === Number(id)) ||
      blogShort.find((post) => post.id === Number(id))
    );
  }, [id]);

  if (!blogPost) return <p>Post not found or loading...</p>;

  return (
    <>
      <div className="max-w-screen-xl mx-auto p-4 gap-y-6 gap-x-8 pt-8">
        <div className="max-w-[770px] mx-auto text-center">
          <span className="inline-flex text-blue-700 bg-blue-100 font-medium text-sm py-1 px-3 mb-2 rounded-full">
            {blogPost.category}
          </span>

          <h1 className="font-bold text-2xl sm:text-4xl lg:text-custom-2 text-dark mb-5">
            {blogPost.title}
          </h1>

          <p className="text-body text-gray-500">{blogPost.previewText}</p>

          <div className="flex items-center justify-center gap-4 mt-7">
            <div className="flex w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={blogPost.imageUrl}
                width={100}
                height={100}
                quality={100}
                alt="user"
              />
            </div>

            <div className="text-left">
              <h4 className="font-medium text-[18px] text-[rgb(21 23 26)] mb-1">
                {blogPost.author}
              </h4>
              <div className="flex items-center gap-1.5">
                <p className="text-gray-500">{blogPost.date}</p>
              </div>
            </div>
          </div>
        </div>

        <Image
          src={blogPost.imageUrl}
          width={900}
          height={500}
          alt="img"
          quality={100}
          className="mt-10 mb-11 w-[900px] h-[500px] mx-auto rounded shadow object-cover"
        />

        <div className="max-w-[900px] mx-auto">
          <p className="mb-5 text-black">{blogPost.description}</p>
        </div>
        {blogPost.imageUrl1 && (
          <Image
            src={blogPost.imageUrl1}
            width={900}
            height={500}
            alt="img"
            quality={100}
            className="mt-10 mb-11 w-[900px] h-[500px] mx-auto rounded shadow object-cover"
          />
        )}

        <div className="max-w-[900px] mx-auto">
          <p className="mb-5 text-black">{blogPost.description1}</p>
        </div>
      </div>

      <CommentSection />
    </>
  );
};

export default PostId;
