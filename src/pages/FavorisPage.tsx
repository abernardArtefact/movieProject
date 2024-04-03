import { useState, useEffect } from "react";

type Movie = {
  id: number;
};

const FavorisPage = () => {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const apiKey = import.meta.env.VITE_API_KEY_TMDB;
  const [isLoading, setIsLoading] = useState(false);

  const addFavorite = (movieId: number, shouldAdd: boolean) => {
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        media_type: "movie",
        media_id: movieId,
        favorite: shouldAdd,
      }),
    };

    const fetchFavorites = () => {
      fetch("https://api.themoviedb.org/3/account/21124898/favorite", options)
        .then((response) => response.json())
        .then((data) => setFavorites(data.results))
        .catch((err) => {
          console.log(err);
        });
    };
  };

  // STEPS
  // etape1 : key : ${apiKey}`
  // etape2: rediriger l'utilisateur sur TMDB pour qu'il accepte l'accès à mon app à son compte TMDB
  //  `https://www.themoviedb.org/authenticate/${apiKey}`;
  // etape3: l'utilisateur se connecte à son compte et m'authorise
  //  GET`https://api.themoviedb.org/3/authentication/token/new?api_key=tokendélivrégrâceàcidessus`;
  // etape4: crééer une session : les requêtes sont au nom de l'utilisateur :
  //   POST `https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}`
  // Body:
  // {
  //   "request_token": "lefameuxtoken"
  // }
  // etape5 : faire les requêtes en demandant l'authentification de l'utilsateur via id :
  // GET `https://api.themoviedb.org/3/account?api_key=VOTRE_CLE_API&session_id=sessionID`

  // const addFavorite = (movie: any) => {
  //   if (favorites.find((fav) => fav.id === movie.id)) {
  //     return;
  //   }
  //   if (!favorites.length) {
  //     return <div>Aucun favori yolo</div>;
  //   }
  //   const newFavorites: any = [...favorites, movie];
  //   setFavorites(newFavorites);
  //   localStorage.setItem("favorites", JSON.stringify(newFavorites));
  // };

  // useEffect(() => {
  //   const savedFavorites = localStorage.getItem("favorites");
  //   console.log("Favorites loaded:", savedFavorites);
  //   if (savedFavorites) {
  //     setFavorites(JSON.parse(savedFavorites));
  //   } else {
  //     setFavorites([]);
  //   }
  // }, []);

  // const removeFavorite = (movieId: number) => {
  //   const updatedFavorites = favorites.filter((movie) => movie.id !== movieId);
  //   setFavorites(updatedFavorites);
  //   localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  // };
  // if (!favorites.length) {
  //   return (
  //     <div
  //       id="main-container"
  //       className="w-screen h-screen bg-blue-900 pt-20 text-blue-200 pl-2"
  //     >
  //       Aucun favori ajouté. Bisou
  //     </div>
  //   );
  // }

  return (
    <div id="main-container" className="w-screen h-screen bg-blue-900 pt-20">
      <div className="w-56 h-64 bg-">
        {favorites.map((movie) => (
          <div key={movie.id}>
            <button
              className="px-6 py-4"
              onClick={() => addFavorite(movie.id, true)}
              // onClick={() => removeFavorite(movie.id)}
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
