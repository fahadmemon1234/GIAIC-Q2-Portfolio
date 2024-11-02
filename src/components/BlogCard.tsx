import React from "react";
import Image from "next/image";

interface BlogCardProps {
  imageUrl: string;
  category: string;
  title: string;
  author: string;
  date: string;
}

const BlogCard = ({
  imageUrl,
  category,
  title,
  author,
  date,
}: BlogCardProps) => {
  return (
    <div className="mb-5 flex flex-col sm:flex-row sm:items-center gap-6 bg-white shadow rounded-xl p-4 w-full">
      <div className="sm:max-w-[238px] w-full">
        <Image
          className="w-full h-auto object-cover rounded-lg"
          src={imageUrl}
          width={900}
          height={500}
          quality={100}
          alt="nature"
        />
      </div>

      <div className="sm:max-w-[238px] w-full">
        <a
          href="#"
          className="inline-flex items-center rounded-full mb-4 bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
        >
          {category}
        </a>
        <h2 className="font-semibold text-custom-lg text-dark mb-3">{title}</h2>
        <div className="flex items-center gap-2.5">
          <p className="text-sm text-gray-400">
            <a href="#">{`By ${author}`}</a>
          </p>

          <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>

          <p className="text-sm text-gray-400">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
