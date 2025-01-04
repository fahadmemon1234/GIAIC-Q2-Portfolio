import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  const blogData = [
    {
      id: 1,
      title: "Donec tellus Nulla lorem",
      date: "21 April, 2021",
      comments: "0 comments",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore...",
      imageUrl: "/assets/images/blog/blog1.webp",
      detailsLink: "/blog-details",
    },
    {
      id: 2,
      title: "Fusce vel sem nec augue",
      date: "22 April, 2021",
      comments: "5 comments",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo...",
      imageUrl: "/assets/images/blog/blog2.webp",
      detailsLink: "/blog-details",
    },
    {
      id: 3,
      title: "Curabitur auctor urna id arcu",
      date: "23 April, 2021",
      comments: "2 comments",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...",
      imageUrl: "/assets/images/blog/blog3.webp",
      detailsLink: "/blog-details",
    },
    {
      id: 4,
      title: "Nulla facilisi Phasellus vitae",
      date: "24 April, 2021",
      comments: "8 comments",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim...",
      imageUrl: "/assets/images/blog/blog4.webp",
      detailsLink: "/blog-details",
    },
    {
      id: 5,
      title: "Maecenas vel risus ut libero",
      date: "25 April, 2021",
      comments: "3 comments",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas...",
      imageUrl: "/assets/images/blog/blog5.webp",
      detailsLink: "/blog-details",
    },
    {
      id: 6,
      title: "Vestibulum ante ipsum primis",
      date: "26 April, 2021",
      comments: "1 comment",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
      imageUrl: "/assets/images/blog/blog6.webp",
      detailsLink: "/blog-details",
    },
    {
      id: 7,
      title: "Proin in augue non nisi",
      date: "27 April, 2021",
      comments: "0 comments",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni...",
      imageUrl: "/assets/images/blog/blog7.webp",
      detailsLink: "/blog-details",
    },
    {
      id: 8,
      title: "Aliquam erat volutpat Ut vehicula",
      date: "28 April, 2021",
      comments: "4 comments",
      description:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid...",
      imageUrl: "/assets/images/blog/blog8.webp",
      detailsLink: "/blog-details",
    },
    {
      id: 9,
      title: "Suspendisse potenti Pellentesque",
      date: "29 April, 2021",
      comments: "6 comments",
      description:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur...",
      imageUrl: "/assets/images/blog/blog12.webp",
      detailsLink: "/blog-details",
    },
  ];

  return (
    <div>
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
                    Blog
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Hero section end --> */}

      {/* <!-- Blog section start --> */}
      <div className="py-24">
        <div className="container">
          <div className="flex flex-wrap -my-4 -px-4">
            {blogData.map((blog) => (
              <div key={blog.id} className="w-full md:w-1/2 lg:w-1/3 px-4 my-4">
                <div className="border border-solid border-gray-300 p-[20px] md:p-[30px] group">
                  <div className="mb-6">
                    <Link
                      href={blog.detailsLink}
                      className="overflow-hidden block"
                    >
                      <Image
                        className="transform group-hover:scale-110 transition-transform duration-500 w-full"
                        src={blog.imageUrl}
                        alt={blog.title}
                        width={400}
                        height={300}
                      />
                    </Link>
                  </div>
                  <h3>
                    <Link
                      href={blog.detailsLink}
                      className="block text-base md:text-md hover:text-orange transition-all font-medium pb-[10px] leading-[1.3]"
                    >
                      {blog.title}
                    </Link>
                  </h3>
                  <div className="blog-meta">
                    <ul className="flex flex-wrap items-center pb-[10px]">
                      <li className="text-sm">
                        <Link
                          href="#"
                          className="text-sm text-dark hover:text-orange transition-all"
                        >
                          {blog.date}
                        </Link>{" "}
                        <span className="inline-block mx-2">/</span>
                      </li>
                      <li className="text-sm">
                        <Link
                          href="#"
                          className="text-sm text-dark hover:text-orange transition-all"
                        >
                          {blog.comments}
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <p className="font-normal text-black text-sm pb-[25px]">
                    {blog.description}
                  </p>
                  <Link
                    className="bg-white transition-all hover:bg-orange hover:border-orange hover:text-white text-dark capitalize font-medium text-sm inline-block border border-solid border-gray-300 px-8 py-4 leading-none mb-[10px]"
                    href={blog.detailsLink}
                  >
                    Blog details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <!-- Blog section end --> */}
    </div>
  );
};

export default Blog;
