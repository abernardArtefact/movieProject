import { useState, useEffect } from "react";
// import Button from "../design-system/Common/Button/Button";

type Movie = {
  id: number;
};

const FavorisPage = () => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  const addFavorite = (movie: any) => {
    if (favorites.find((fav) => fav.id === movie.id)) {
      return;
    }
    const newFavorites: any = [...favorites, movie];
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };
  const removeFavorite = (movieId: number) => {
    const updatedFavorites = favorites.filter((movie) => movie.id !== movieId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  return (
    <div id="main-container" className="w-screen h-screen bg-blue-900 pt-20">
      <div>
        {favorites.map((movie) => (
          <div key={movie.id}>
            <button
              className="px-6 py-4"
              onClick={() => removeFavorite(movie.id)}
            >
              Retirer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavorisPage;
