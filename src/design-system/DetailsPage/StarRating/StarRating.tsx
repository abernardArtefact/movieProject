import { FC, useEffect } from "react";
import { useState } from "react";
import Star from "../../../design-system/DetailsPage/Star/Star";

type StarRatingProps = {
  totalStars?: number;
  onRatingChange?: (newRating: number) => void;
  rating?: number;
};

const StarRating: FC<StarRatingProps> = ({
  totalStars = 5,
  rating = 0,
  onRatingChange,
}) => {
  const [selectedStars, setSelectedStars] = useState<number>(rating ?? 0);

  useEffect(() => {
    if (rating !== undefined) {
      setSelectedStars(rating);
    }
  }, [rating]);

  const handleSelect = (index: number) => {
    const newRating = index + 1;
    onRatingChange?.(newRating);
  };

  return (
    <div className="flex justify-center">
      {[...Array(totalStars)].map((_, index) => (
        <Star
          key={index}
          selected={index < selectedStars}
          onSelect={() => handleSelect(index)}
        />
      ))}
    </div>
  );
};

export default StarRating;
