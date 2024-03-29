import { FC, SetStateAction } from "react";
import { useState } from "react";
import { useDebounceCallback } from "usehooks-ts";

type Movie = { id: number; title: string };

type SearchBarProps = {
  label: string;
  ternarySearchBar: boolean;
  types: Array<{ id: number; name: string; url: string }>;
};

const SearchBar: FC<SearchBarProps> = ({}) => {
  const [input, setInput] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const debouncedSearch = useDebounceCallback(() => {
    if (!input) {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${input}&language=en-US&page=1`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGJlMWI0YTlhZjMwNDI4MGE1MDUwYWZmY2NiZmZiOSIsInN1YiI6IjY1ZmJlZWYyNjA2MjBhMDE3YzI2ZTNiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KPAXlN8V9CgYtRWiFz-jSGPAOwHo_JkUauM5q2rl9Lk",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results as Movie[]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Erreur baby", error);
        setIsLoading(false);
      });
  }, 500);

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setInput(e.target.value);
    debouncedSearch();
  };

  // maper movies.map(movie) => {key={movie.id} {movie.title}}
  return (
    <div className=" text-blue-200  pt-2 relative mx-auto text-cyan-200">
      <input
        className="border-2 border-blue-200 bg-blue-900 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Search"
        value={input}
        onChange={handleChange}
      />
      {isLoading ? (
        <div>Chargeme</div>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
      <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
        <svg
          className="text-blue-200 h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 56.966 56.966"
          xmlSpace="preserve"
          width="512px"
          height="512px"
        >
          <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
