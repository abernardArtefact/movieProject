import { FC, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { log } from "echarts/types/src/util/log.js";
import Movie from "../../../pages/Movie";
import { useParams } from "react-router";
import { motion } from "framer-motion";

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
  const [isHovered, setHovered] = useState(false);
  const ref1 = useRef("");

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
      transition={{ type: "spring", stiffness: 100 }}
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
        <div className="flex items-center justify-between ">
          <div className="px-6 py-4 flex flex-col items-start">
            <div id="title" className="font-bold text-xl mb-2">
              {movie.title}
            </div>
            <p id="year" className="text-gray-700 text-base">
              {movie.release_date}
            </p>
          </div>
          <div className="px-6  pb-4 flex flex-row-reverse ">
            <span className="text-sm font-semibold text-red-800 mr-2 mb-2 w-full">
              +120 KS
            </span>
          </div>
        </div>
        <div className="absolute bottom-6 left-5">
          <Link
            to={`/Movie/${movie.id}`}
            className="text-blue-900 bg-blue-400 ring-1 ring-inset ring-blue-300 rounded-full px-4 py-0 lg:py-1 border border-blue-300 hover:text-blue-200 hover:bg-blue-900 flex justify-center mx-20 font-medium text-base"
          >
            Détails {id}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CardSmall;
