import React from "react";

// Este é um componente de cartão reutilizável para blog ou notícias.
const BlogCard = ({ title, content }) => {
  return (
    <a
      href="/contact"
      className="block w-full max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700">{content}</p>
    </a>
  );
};

export default BlogCard;
