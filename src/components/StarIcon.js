import React from "react";
import { Rating, RatingStar } from "flowbite-react";

export const StarIcon = ({ numberStars = 0 }) => {
  const totalStars = 5;
  return (
    <Rating className="text-yellow-400">
      {[...Array(totalStars)].map((_, index) => {
        const isFilled = index < numberStars;
        return <RatingStar key={index} filled={isFilled} />;
      })}
    </Rating>
  );
};

export default StarIcon;
