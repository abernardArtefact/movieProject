import { useEffect, useState } from "react";
import CardSmall from "../design-system/Common/CardSmall/CardSmall.tsx";
import SearchBar from "../design-system/SearchPage/SearchBar/SearchBar.tsx";
import { fetchData } from "../design-system/fetch/fetch.tsx";

type CardsData = {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: string;
};

const Search = () => {
  const [cardsData, setCardsData] = useState<CardsData[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const movies = await fetchData();
        if (Array.isArray(movies)) {
          setCardsData(movies);
        } else {
          console.error("gna erreur", typeof movies);
        }
      } catch (error) {
        console.error("erreur", error);
      }
    };

    loadData();
  }, []);
  const addFavorite = (movieToAdd: CardsData) => {
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    const isAlreadyFavorite = favorites.some(
      (fav: CardsData) => fav.id === movieToAdd.id
    );

    if (!isAlreadyFavorite) {
      favorites.push(movieToAdd);

      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };

  const removeFavorite = (movieIdToRemove: number) => {
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    favorites = favorites.filter(
      (fav: CardsData) => fav.id !== movieIdToRemove
    );

    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
    <div id="main-container" className="w-screen h-full bg-blue-900 ">
      <div className="lg:flex lg:justify-between lg:content-center lg:mx-8 lg:text-xl lg:px-10">
        <h1 className="text-blue-200 py-12 flex justify-center lg:justify-start font-bold ">
          Tous les films
        </h1>
        <div className="flex justify-center lg:justify-end lg:pt-8 relative ">
          <SearchBar label={""} ternarySearchBar={false} types={[]}></SearchBar>
        </div>
      </div>
      <div className="lg:flex lg:justify-center lg:px-8 flex flex-wrap justify-center">
        {cardsData?.map((movie) => (
          <div key={movie.id} className="flex justify-center pt-8 lg:px-8">
            <CardSmall
              movie={movie}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
            ></CardSmall>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
