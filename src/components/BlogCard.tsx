import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  id: number;
  imageUrl: string;
  imageUrl1?: string | undefined;
  category: string;
  title: string;
  author: string;
  date: string;
}

const BlogCard = ({
  id,
  imageUrl,
  imageUrl1,
  category,
  title,
  author,
  date,
}: BlogCardProps) => {
  return (
    <div className="mb-5 flex flex-col sm:flex-row sm:items-center gap-6 bg-white shadow rounded-xl p-4 w-full">
      <div className="sm:max-w-[238px] w-full">
        <Link href={`/posts/${id}`} passHref>
          <Image
            className="w-full h-[150px] object-cover rounded-lg cursor-pointer"
            src={imageUrl}
            width={900}
            height={500}
            quality={100}
            alt={title}
          />
        </Link>
      </div>

      <div className="sm:max-w-[238px] w-full">
        <Link
          href={`/posts/${id}`}
          passHref
          className="inline-flex items-center rounded-full mb-4 bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
        >
          {category}
        </Link>
        <Link href={`/posts/${id}`} passHref>
          <h2 className="font-semibold text-custom-lg text-dark mb-3 cursor-pointer">
            {title}
          </h2>
        </Link>
        <div className="flex items-center gap-2.5">
          <p className="text-sm text-gray-400">
            <Link href={"#"}>{`By ${author}`}</Link>
          </p>

          <p className="text-sm text-gray-400">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
