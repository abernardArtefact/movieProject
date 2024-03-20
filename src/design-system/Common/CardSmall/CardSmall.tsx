import { FC } from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { log } from "echarts/types/src/util/log.js";

type Movie = {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
};

type CardSmallProps = {};

const CardSmall: FC<CardSmallProps> = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const data = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer 2af23d639764adc4f8c8743b94600647",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      data
    )
      .then((response) => response.json())
      .then((response) => {
        const loadedMovies: Movie[] = response.results.map((movie: any) => [
          {
            id: movie.id,
            title: movie.title,
            release_date: movie.release_date,
            poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          },
        ]);
        setMovies(loadedMovies);
        console.log(movies);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <div
          key={movie.id}
          className=" max-w-sm rounded-lg overflow-hidden shadow-lg w-[260px] min-w-[284px] h-[380px] min-h-[380px] bg-blue-100 mb-4"
        >
          <div>
            <img
              className=" h-[240px] min-w-[240px] w-full  object-cover"
              src={movie.poster_path}
              alt={movie.title}
            ></img>
          </div>
          <div className="flex items-center justify-between">
            <div className="px-6 py-4 flex flex-col items-start">
              <div id="title" className="font-bold text-xl mb-2">
                {movie.title}
              </div>
              <p id="year" className="text-gray-700 text-base">
                {movie.release_date}
              </p>
            </div>
            <div className="px-6  pb-4 flex flex-row-reverse ">
              <span className=" bg-white rounded-full py-2 px-1 text-sm font-semibold text-red-800 mr-2 mb-2">
                +120 KS
              </span>
            </div>
          </div>
          <Link
            to="/Movie"
            className="text-blue-900 bg-blue-400 ring-1 ring-inset ring-blue-300 rounded-full px-4 py-0 lg:py-1 border border-blue-300 hover:text-blue-200 hover:bg-blue-900 flex justify-center mx-20 font-medium text-base"
          >
            Détails
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CardSmall;
