import React from "react";
import StarIcon from "./StarIcon";
export const RatingView = ({ name, joinDate, rating, text, avatar }) => {
  return (
    <div className="border p-5 border-gray-400">
      <article>
        <div className="flex items-center mb-4">
          <img
            className="w-10 md:w-14 lg:w-16 me-4 rounded-full"
            src={avatar}
            alt="Avatar Cliente"
          />

          <div className="font-medium">
            <p className="text-2xl md:text-3xl">
              {name}
              <time className="block text-gray-500 text-lg">
                Unido {joinDate}
              </time>
            </p>
          </div>
        </div>

        <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
          <StarIcon numberStars={rating} />
        </div>
        <p className="mb-2 text-gray-500 text-2xl">{text}</p>
      </article>
    </div>
  );
};

export default RatingView;
