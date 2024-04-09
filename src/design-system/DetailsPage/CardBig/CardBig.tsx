import { FC, useEffect, useState } from "react";
import StarRating from "../StarRating/StarRating";
import { useParams } from "react-router";
// import StarRatingCommunity from "../StarRatingCommunity/StarRatingCommunity";

type MovieDetails = {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
  profit: number;
  revenue: string;
  budget: string;
  rating: number;
};

type CardBigProps = {
  label: string;
  ternaryCardBig: boolean;
  types: Array<{ id: number; name: string; url: string }>;
  movieDetails: MovieDetails[];
};

const CardBig: FC<CardBigProps> = ({}) => {
  const [movie, setMovies] = useState<MovieDetails | null>(null);
  const [rating, setRating] = useState<number | null>(null);
  const { id } = useParams<{ id: string }>();
  const apiKey = import.meta.env.VITE_API_KEY_TMDB;

  const handleRating = (newRating: number) => {
    setRating(newRating);
    localStorage.setItem(`movieRating-${id}`, JSON.stringify(newRating));
  };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      };

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
          data
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }
        const movieDetails = await response.json();
        setMovies({
          id: movieDetails.id,
          title: movieDetails.title,
          release_date: movieDetails.release_date,
          poster_path: `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`,
          overview: movieDetails.overview,
          budget: movieDetails.budget,
          revenue: movieDetails.revenue,
          profit: movieDetails.revenue - movieDetails.budget,
          rating: movieDetails.vote_average,
        });
      } catch (error) {
        console.error("Error mon segnor", error);
      }
    };

    if (id) fetchMovieDetails();
    const storedRating = localStorage.getItem(`movieRating-${id}`);
    if (storedRating) {
      setRating(JSON.parse(storedRating));
    }
  }, [id]); // Dépendance à l'ID pour relancer l'effet si l'ID change

  return (
    <div>
      {movie && (
        <>
          <div
            key={movie.id}
            className="max-w-sm w-full lg:max-w-full lg:flex lg:flex-col bg-blue-900 min-h-[78vh] h-[83vh]"
          >
            <div
              id="technical-description"
              className=" bg-blue-900 p-4 flex flex-col lg:flex-row leading-normal items-center lg:items-start lg:"
            >
              <img
                className=" lg:w-64 lg:h-64 lg:mr-2 fill-current w-32 h-32 flex items-center lg:mb-8 object-cover "
                src={movie.poster_path}
              ></img>

              <div className="lg:flex lg:flex-col lg:gap-2 lg:pl-8">
                <div
                  id="title_and_date"
                  className="flex flex-col items-center justify-center py-4 lg:py-0 lg:items-start"
                >
                  <h1 className="text-white font-bold text-3xl  px-6 pb-4 lg:px-0">
                    {movie.title}
                  </h1>
                  <p className="text-white pl-2 lg:pl-0">
                    {movie.release_date}
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4  ">
                  <h3 className="text-blue-200 flex justify-center items-center lg:text-2xl lg:justify-start">
                    Budget
                    <span className="text-base lg:text-xl  text-blue-200 pl-4">
                      {movie.budget} M$
                    </span>
                  </h3>
                  <h3 className="text-blue-200 flex justify-center items-center lg:text-2xl lg:justify-start">
                    Revenu
                    <span className="text-base lg:text-xl  text-blue-200 pl-4">
                      {movie.revenue} M$
                    </span>
                  </h3>
                  <h3 className="text-blue-200 flex justify-center items-center lg:text-2xl lg:justify-start">
                    Recettes
                    <span className="text-base lg:text-xl text-blue-200 pl-4">
                      {" "}
                      {movie.profit} M$
                    </span>
                  </h3>
                </div>
              </div>
              <div id="ratingslg" className="lg:flex flex-col hidden  pl-48 ">
                <div>
                  <h3 className="text-blue-200 flex justify-center items-center lg:text-2xl pb-2 ">
                    Note de la communauté :{" "}
                    <span className="text-white w-48">{movie.rating} / 10</span>
                  </h3>
                  <div>{/* <StarRating totalStars={10} /> */}</div>
                </div>
                <div className="flex items-center pt-36">
                  <h3 className="text-blue-200 flex justify-start  lg:text-2xl py-4">
                    Ma note :
                  </h3>
                  <div className="flex pl-36">
                    <StarRating
                      totalStars={5}
                      rating={rating}
                      onRatingChange={handleRating}
                    />
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-blue-100 text-lg lg:text-xl font-bold pt-8 px-4 h-16">
              Synopsis
            </h2>
            <p className="text-blue-100 text-base lg:text-lg flex pt-4 lg:pt-2 px-4">
              {movie.overview}
            </p>
          </div>
          <div id="ratings" className="lg:hidden pt-16 bg-blue-900">
            <div>
              <h3 className="text-blue-200 flex justify-center items-center lg:text-2xl pb-2">
                Note de la communauté : {movie.rating} / 10
              </h3>
              <div>
                {/* <StarRatingCommunity totalStars={10} vote_average={0} /> */}
              </div>
            </div>
            <div>
              <h3 className="text-blue-200 flex justify-center items-center lg:text-2xl py-2">
                Ma note
              </h3>
              <div className="pb-8">
                <StarRating
                  totalStars={5}
                  rating={rating}
                  onRatingChange={handleRating}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default CardBig;
