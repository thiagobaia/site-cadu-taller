import React from "react";

const BlogCard = ({ title, content }) => {
  return (
    <a
      href="/contact"
      className="block w-full py-10 px-10 lg:py-5 lg:px-5 lg:max-w-[376px]  bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700">{content}</p>
    </a>
  );
};

export default BlogCard;
