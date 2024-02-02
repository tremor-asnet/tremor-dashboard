import { Flex } from "@tremor/react";

import { rangeNumber } from "@/helpers";

import { FaStar, FaStarHalfAlt } from "react-icons/fa";

interface StarRatingProps {
  numberStar?: number;
  isFullRaring?: boolean;
  size?: number;
}

const StarRating = ({
  numberStar = 5,
  isFullRaring = false,
  size = 18,
}: StarRatingProps) => {
  const arrayStars = isFullRaring
    ? rangeNumber(1, numberStar)
    : rangeNumber(1, numberStar - 1);

  return (
    <Flex className="justify-start gap-2">
      {arrayStars.map((star: number) => (
        <FaStar key={star} className="text-secondary" size={size} />
      ))}
      {!isFullRaring && (
        <FaStarHalfAlt className="text-secondary" size={size} />
      )}
    </Flex>
  );
};

export default StarRating;
