import { FC } from "react";
import { useState } from "react";
import Star from "../../../design-system/DetailsPage/Star/Star";

type StarRatingProps = {
  label: string;
  ternaryStarRating: boolean;
  types: Array<{ id: number; name: string; url: string }>;
};

const StarRating: FC<StarRatingProps> = ({}) => {
  const [] = useState();
  return (
    <div>
      <Star label={""} ternaryStar={false} types={[]}></Star>
    </div>
  );
};
export default StarRating;
