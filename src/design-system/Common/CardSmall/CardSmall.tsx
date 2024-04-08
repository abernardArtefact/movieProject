import { FC, useState } from "react";
import { Link } from "react-router-dom";
import Movie from "../../../pages/Movie";
import { useParams } from "react-router";
import { motion } from "framer-motion";
import { log } from "echarts/types/src/util/log.js";

type Movie = {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
};

type CardSmallProps = {
  movie: Movie;
};

const CardSmall: FC<CardSmallProps> = ({ movie }) => {
  const [selected, setSelected] = useState(() => {
    const selectedMovies = JSON.parse(
      localStorage.getItem("selectedMovies") || "[]"
    );
    return selectedMovies.includes(movie.id);
  });

  const toggleSelect = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
    setSelected((currentSelected: any) => {
      const updatedSelected = !currentSelected;
      const selectedMovies = JSON.parse(
        localStorage.getItem("selectedMovies") || "[]"
      );

      if (updatedSelected) {
        localStorage.setItem(
          "selectedMovies",
          JSON.stringify([...selectedMovies, movie.id])
        );
      } else {
        localStorage.setItem(
          "selectedMovies",
          JSON.stringify(selectedMovies.filter((id: number) => id !== movie.id))
        );
      }

      return updatedSelected;
    });
  };

  let { id } = useParams();
  if (!movie) {
    return "c'est fichu";
  }

  // onClick=> scale etc
  return (
    <motion.div
      animate={{
        scale: [0, 1],
      }}
      transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
    >
      <div className=" relative max-w-sm rounded-lg overflow-hidden shadow-lg w-[260px] min-w-[284px] min-h-[28rem] bg-blue-100 mb-4 pb-4">
        <div>
          <img
            className=" h-[240px] min-w-[240px] w-full  object-cover sticky"
            src={movie.poster_path}
            // alt={movie.title}
          ></img>
        </div>

        <div id="bis" className="absolute top-0  w-full ">
          <motion.div
            whileHover={{
              scale: 3,
              transition: { duration: 1 },
            }}
          >
            {" "}
            <img
              className=" h-[240px] min-w-[240px] w-full  object-cover sticky overflow-clip"
              src={movie.poster_path}
            ></img>
          </motion.div>
        </div>
        <div className="flex justify-center items-center pt-2 ">
          <div className="">
            <div id="title" className="font-bold text-xl mb-2">
              {movie.title}
            </div>
            <p id="year" className="text-gray-700 text-base ">
              {movie.release_date}
            </p>
            <div className="px-6   ">
              {/* flex flex-row-reverse */}
              <span className="text-sm font-semibold text-red-800 mr-2  w-full">
                +120 KS
              </span>
            </div>
            <div
              id="favoris-handle"
              className="w-sreen h-6  flex justify-center items-center"
              // onClick={() => addFavorite(movie)}
            >
              <button>
                {/* onClick={() => addFavorite(movie)} */}
                <span className="" onClick={(event) => toggleSelect(event)}>
                  {selected ? "🩷" : "🩶"}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-5 ">
          <Link
            to={`/Movie/${movie.id}`}
            className="text-blue-900 bg-blue-400 ring-1 ring-inset ring-blue-800 rounded-full px-4 py-0 lg:py-1 border border-blue-300 hover:text-blue-200 hover:bg-blue-900 flex justify-center mx-20 font-medium text-base"
          >
            Détails {id}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CardSmall;
