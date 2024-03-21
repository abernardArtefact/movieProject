import { FC, useEffect, useState } from "react";
import StarRating from "../StarRating/StarRating";

type Movie = {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
};

type CardBigProps = {
  label: string;
  ternaryCardBig: boolean;
  types: Array<{ id: number; name: string; url: string }>;
};

const CardBig: FC<CardBigProps> = ({}) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const data = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGJlMWI0YTlhZjMwNDI4MGE1MDUwYWZmY2NiZmZiOSIsInN1YiI6IjY1ZmJlZWYyNjA2MjBhMDE3YzI2ZTNiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KPAXlN8V9CgYtRWiFz-jSGPAOwHo_JkUauM5q2rl9Lk",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      data
    )
      .then((response) => response.json())
      .then((response) => {
        const loadedMovies: Movie[] = response.results.map((movie: any) => ({
          id: movie.id,
          title: movie.title,
          release_date: movie.release_date,
          poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          overview: movie.overview,
        }));
        setMovies(loadedMovies);
        console.log(movies);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      {movies.map((movie) => (
        <>
          <div
            key={movie.id}
            className="max-w-sm w-full lg:max-w-full lg:flex lg:flex-col bg-blue-900 min-h-[600px] h-screen"
          >
            <div
              id="technical-description"
              className=" bg-blue-900 p-4 flex flex-col lg:flex-row leading-normal items-center lg:items-start "
            >
              <img
                className=" lg:w-64 lg:h-64 lg:mr-2 fill-current w-32 h-32 flex items-center lg:mb-8"
                src={movie.poster_path}
              ></img>

              <div className="lg:flex lg:flex-col lg:gap-2 lg:pl-8">
                <div
                  id="title"
                  className="flex items-center justify-center py-4 lg:py-8"
                >
                  <h1 className="text-white font-bold text-3xl  flex justify-center ">
                    {movie.title}
                  </h1>
                  <p className="text-white pl-2">{movie.release_date}</p>
                </div>
                <div className="flex flex-col items-start ">
                  <h3 className="text-blue-200 flex justify-center items-center lg:text-2xl">
                    Budget
                    <span className="text-base lg:text-xl  text-blue-200 pl-4">
                      160 M$
                    </span>
                  </h3>
                  <h3 className="text-blue-200 flex justify-center items-center lg:text-2xl">
                    Revenu
                    <span className="text-base lg:text-xl  text-blue-200 pl-4">
                      868 M$
                    </span>
                  </h3>
                  <h3 className="text-blue-200 flex justify-center items-center lg:text-2xl">
                    Recettes
                    <span className="text-base lg:text-xl text-blue-200 pl-4">
                      {" "}
                      708 M$
                    </span>
                  </h3>
                </div>
              </div>
              <div id="ratings" className="lg:flex flex-col hidden pt-12 pl-48">
                <div>
                  <h3 className="text-blue-200 flex justify-center items-center lg:text-2xl pb-2">
                    Communanuté
                  </h3>
                  <div>
                    <StarRating totalStars={5} />
                  </div>
                </div>
                <div>
                  <h3 className="text-blue-200 flex justify-center items-center lg:text-2xl py-2">
                    Ma note
                  </h3>
                  <div className="pb-8">
                    <StarRating totalStars={5} />
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
          <div id="ratings" className="lg:hidden">
            <div>
              <h3 className="text-blue-200 flex justify-center items-center lg:text-2xl pb-2">
                Communanuté
              </h3>
              <div>
                <StarRating totalStars={5} />
              </div>
            </div>
            <div>
              <h3 className="text-blue-200 flex justify-center items-center lg:text-2xl py-2">
                Ma note
              </h3>
              <div className="pb-8">
                <StarRating totalStars={5} />
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};
export default CardBig;
