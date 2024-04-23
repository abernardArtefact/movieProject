import { useEffect, useState } from "react";
import CardSmall from "../design-system/Common/CardSmall/CardSmall";

type Movie = {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
};

const FavorisPage = () => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  const addFavorite = (movieToAdd: Movie) => {
    setFavorites((currentFavorites) => {
      // Vérifie si le film est déjà dans les favoris
      const isAlreadyFavorite = currentFavorites.some(
        (fav) => fav.id === movieToAdd.id
      );
      if (!isAlreadyFavorite) {
        // Ajoute le film et sauvegarde dans localStorage
        const newFavorites = [...currentFavorites, movieToAdd];
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
        return newFavorites;
      }
      return currentFavorites;
    });
  };

  // const addFavoriteMovie = async (movie: any) => {
  //   try {
  //     const response = await fetch("http://localhost:3000/api/favorites", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(movie),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //   } catch (error) {
  //     console.error("Could not add favorite movie:", error);
  //   }
  // };

  const removeFavorite = (movieIdToRemove: number) => {
    setFavorites((currentFavorites) => {
      const newFavorites = currentFavorites.filter(
        (fav) => fav.id !== movieIdToRemove
      );
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };
  useEffect(() => {
    const loadedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(loadedFavorites);
  }, []);

  useEffect(() => {
    // Sauvegarder les favoris dans le localStorage chaque fois qu'ils changent
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div id="main-container" className="w-screen h-screen bg-blue-900 pt-20 ">
      <div>
        <h2 className="text-lg text-white pl-12 pb-8 font-bold">
          Mes Films Favoris{" "}
        </h2>
        <ul className="flex flex-col items-center  bg-blue-900 lg:grid lg:grid-cols-4 lg:gap-4 lg:pl-12 ">
          {favorites.map((movie) => (
            <li className="bg-blue-900 h-full  " key={movie.id}>
              <CardSmall
                movie={movie}
                addFavorite={() => addFavorite(movie)}
                removeFavorite={() => removeFavorite(movie.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FavorisPage;
