import { FC, useEffect } from "react";
import { useState } from "react";
import Star from "../../../design-system/DetailsPage/Star/Star";
import { fetchData } from "../../../design-system/fetch/fetch.tsx";
import { log } from "echarts/types/src/util/log.js";

type StarRatingCommunityProps = {
  totalStars?: number;
  vote_average: number;
};

const StarRatingCommunity: FC<StarRatingCommunityProps> = ({}) => {
  fetchData();
  const [rating, setRating] = useState<number>(0);

  useEffect(() => {
    const loadData = async () => {
      const movieVote: any = await fetchData();
      setRating(movieVote.vote_average);
      console.log(movieVote.vote_average);
    };
    loadData();
  }, []);

  const stars = Array.from({ length: 10 }, (_, index) => index < rating);

  return (
    <div className="flex justify-center">
      {stars.map((star, ind) => (
        <>
          <Star
            key={ind}
            selected={star}
            onSelect={function (): void {
              throw new Error("nope");
            }}
          />
        </>
      ))}
    </div>
  );
};

export default StarRatingCommunity;
