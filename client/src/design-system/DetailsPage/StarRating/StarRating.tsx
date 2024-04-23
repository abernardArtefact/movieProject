import { FC, useEffect } from "react";
import { useState } from "react";
import Star from "../Star/Star";

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
  // si on trouve pas rating cad undefined, sa valeur est égale à 0

  useEffect(() => {
    if (rating !== undefined) {
      setSelectedStars(rating);
    }
  }, [rating]);

  const handleSelect = (index: number) => {
    const newRating = index + 1;
    setSelectedStars(newRating);
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  return (
    <div className="flex justify-center">
      {[...Array(totalStars)].map((_, index) => (
        // ca c'est mon tableau de 5 sur lequel je map et en argument ca me fait des tableau en fonction du 1er, basés sur l'index. 1 tableau par étoile(index)
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
