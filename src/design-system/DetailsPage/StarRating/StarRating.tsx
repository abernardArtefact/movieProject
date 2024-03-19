import { FC } from "react";
import { useState } from "react";
import Star from "../../../design-system/DetailsPage/Star/Star";

type StarRatingProps = {
  totalStars?: number;
  //   label: string;
  //   ternaryStarRating: boolean;
  //   types: Array<{ id: number; name: string; url: string }>;
};

const StarRating: FC<StarRatingProps> = ({ totalStars }) => {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <div className="flex justify-center">
      {[...Array(totalStars)].map((_, index) => (
        <Star
          key={index}
          selected={index < selectedStars}
          onSelect={() => setSelectedStars(index + 1)}
        />
      ))}
    </div>
  );
};
export default StarRating;
