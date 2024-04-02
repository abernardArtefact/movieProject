import { FC, useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import ButtonHeader from "../ButtonHeader/ButtonHeader";
import Favoris from "../Favoris/Favoris";

type HeaderProps = {
  onClick: void;
};

const Header: FC<HeaderProps> = () => {
  // const [favorites, setFavorites] = useState([]);

  // const addFavorites = (movie: any) => {
  //   const newFavorites = [...favorites, movie];
  //   setFavorites(newFavorites);
  //   localStorage.setItem('favorites', JSON.stringify(newFavorites));
  // };
  // const removeFavorites = (movieId: any) => {
  //   setFavorites(favorites.filter((movie)=> movie.id !=== movieId));
  // };

  // useEffect(() => {
  //   const savedFavorites = localStorage.getItem('favorites');
  //   if (savedFavorites) {
  //     setFavorites(JSON.parse(savedFavorites));
  //   }
  // }, []);

  return (
    <div
      id="container"
      className="w-screen h-24 min-h-24 bg-red bg-blue-900 flex flex-inline flex justify-between p-8 lg:px-16"
    >
      <div className="flex items-center">
        {" "}
        <Logo></Logo>
      </div>

      <div id="buttons" className="flex items-center pb-2 lg:pb-0">
        <ButtonHeader label={"Accueil"} to={"/"}></ButtonHeader>
        <ButtonHeader label={"Recherche"} to={"/search"}></ButtonHeader>
        <Favoris label={"🩷"}></Favoris>
      </div>
    </div>
  );
};
export default Header;
