import { useState, useEffect, Key } from "react";
import Button from "../design-system/Common/Button/Button";
import GraphHeader from "../design-system/HomePage/GraphHeader/GraphHeader";
import Slider from "../design-system/HomePage/Slider/Slider";
import { fetchData } from "../design-system/fetch/fetch.tsx";
import { motion } from "framer-motion";
import Graph from "../design-system/HomePage/Graph/Graph.tsx";

type CardsData = {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  index: Key | null | undefined;
};

const HomePage = () => {
  const [cardsData, setCardsData] = useState<CardsData[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      const movies = await fetchData();
      setIsLoading(false);
      setCardsData(movies);
    };

    loadData();
    setIsLoading(true);
  }, []);

  const addFavorite = (movieToAdd: CardsData) => {
    // Récupére la liste des favoris actuels depuis le localStorage
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    // Vérifie si le film est déjà dans les favoris
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

  const containerVariant = {
    hidden: { opacity: 0, y: 30, rotate: [0, 1, 5, 1, 0] },
    visible: {
      opacity: 1,
      y: 0,
      rotate: [0, 3, 20, -5, 0],
      transition: { duration: 3 },
    },
  };

  return (
    <div id="main-container" className="w-screen h-full bg-blue-900 ">
      <h1
        id="title"
        className="text-white text-xl lg:mb-12 flex flex-col justify-center items-center lg:w-full w-screen lg:mx-4  bg-blue-900 font-bold"
      >
        Les 10 films les plus populaires
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="visible"
        >
          <span className="flex justify-center text-2xl ">du moment</span>
        </motion.div>
      </h1>
      <div className="">
        {isLoading ? (
          <span className="loader"></span>
        ) : (
          cardsData && (
            <Slider
              cardsData={cardsData}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
            />
          )
        )}
      </div>
      <Button label={"Voir tous les films"}></Button>
      <div
        id="divider"
        className=" border border-[1px] border-blue-600 bg-blue-900"
      ></div>
      <GraphHeader></GraphHeader>
      <Graph label={""} ternaryGraph={false} types={[]}></Graph>
    </div>
  );
};

export default HomePage;
