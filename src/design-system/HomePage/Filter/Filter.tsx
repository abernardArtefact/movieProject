import { FC, SetStateAction, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

type FilterProps = {
  label: string;
  movieDetails: MovieDetails[];
};

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

const Filter: FC<FilterProps> = ({ label, movieDetails }) => {
  const { id } = useParams<{ id: string }>();
  const [isOpen, setIsOpen] = useState(false);
  const [movies, setMovies] = useState(false);
  const handleIsOpen = () => setIsOpen(!isOpen);
  const apiKey = import.meta.env.VITE_API_KEY_TMDB;
  const [selectedLabel, setSelectedLabel] = useState(label);
  const handleSelection = (year: SetStateAction<string>) => {
    setSelectedLabel(year);
    setIsOpen(false);
  };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (id) {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${apiKey}`
          );
          const data = await response.json();
          setMovies(data.results);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchMovieDetails();
  }, [id]);

  const numberOfMoviesByYearSelected = movieDetails
    ? movieDetails.filter((movie: any) => {
        const releaseYear = movie.release_date.split("-")[0];
        return releaseYear === selectedLabel;
      }).length
    : 0;
  if (!movieDetails) {
    return <div>Chargement...</div>;
  }

  console.log(movieDetails);

  return (
    <div
      onClick={handleIsOpen}
      className="relative inline-block text-left px-3 py-3 "
    >
      <div>
        <button
          type="button"
          className=" inline-flex w-full justify-center gap-x-1.5 rounded-lg bg-blue-900 px-3 py-2 text-sm font-semibold text-blue-200 shadow-sm ring-1 ring-inset ring-blue-300 hover:bg-blue-200 hover:text-blue-900"
          id="menu-button"
          aria-expanded={isOpen}
        >
          {selectedLabel}
          <svg
            className="mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <>
        {isOpen ? (
          <ul
            className={` w-[86px] border absolute top-14 z-10 bg-blue-200  text-blue-900 font-semibold ring-1 ring-inset ring-blue-300 rounded-lg `}
          >
            {["2020", "2021", "2022", "2023", "2024"].map((year) => (
              <li
                key={year}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelection(year);
                }}
                className={`relative w-[100px] h-[40px] mx-6 grid grid-cols-2 font-light place-content-center `}
              >
                {year}
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </>
    </div>
  );
};

export default Filter;
// 1/stocker la valeur de selectedLabel pour savoir ce qui est sélectionné : c'est ok
// 2/ calcul du nombre de film dans une année
// selectedLabel= année sélectionnée
// const filterMovie = (movie: { release_year: string }) => {
//   const release_year = movie.release_year.split("-")[0];
//   return release_year === selectedLabel;
// };
// il faut trouver combien de film dans l'année: nb de film par année
// const numberOfMoviesByYearSelected = filterMovie.length;
// console.log(numberOfMoviesByYearSelected);
