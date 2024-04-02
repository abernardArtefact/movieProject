import { useEffect, useState } from "react";
import CardSmall from "../design-system/Common/CardSmall/CardSmall";
import SearchBar from "../design-system/SearchPage/SearchBar/SearchBar";
import { fetchData } from "../design-system/fetch/fetch.tsx";

type CardsData = {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: string;
};

const Search = () => {
  fetchData();
  const [cardsData, setCardsData] = useState<CardsData[] | null>(null);
  useEffect(() => {
    const loadData = async () => {
      const movies = await fetchData();
      setCardsData(movies);
    };

    loadData();
  }, []);

  return (
    <div id="main-container" className="w-screen h-full bg-blue-900">
      <div className="lg:flex lg:justify-between lg:content-center lg:mx-8 lg:text-xl lg:px-10">
        <h1 className="text-blue-200 py-12 flex justify-center lg:justify-start font-bold ">
          Tous les films
        </h1>
        <div className="flex justify-center lg:justify-end lg:pt-8">
          <SearchBar label={""} ternarySearchBar={false} types={[]}></SearchBar>
        </div>
      </div>
      <div className="lg:flex lg:justify-center lg:px-8 flex flex-wrap justify-center">
        {cardsData?.map((movie) => (
          <div key={movie.id} className="flex justify-center pt-8 lg:px-8">
            <CardSmall movie={movie}></CardSmall>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;

// const [cardsData, setCardsData] = useState<CardsData[] | null>(null);
// const apiKey = import.meta.env.VITE_API_KEY_TMDB;

// useEffect(() => {
//   const data = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization: `Bearer ${import.meta.env.VITE_API_KEY_TMDB}`,
//     },
//   };
//   // console.log(data.headers.Authorization);

//   fetch(
//     `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}`,

//     data
//   )
//     .then((response) => response.json())
//     .then((response) => {
//       const loadedMovies: CardsData[] = response.results.map(
//         (cardsData: CardsData) => ({
//           id: cardsData.id,
//           title: cardsData.title,
//           release_date: cardsData.release_date,
//           poster_path: `https://image.tmdb.org/t/p/w500${cardsData.poster_path}`,
//         })
//       );
//       setCardsData(loadedMovies);
//       console.log(cardsData);
//     })
//     .catch((err) => console.error(err));
// }, []);
