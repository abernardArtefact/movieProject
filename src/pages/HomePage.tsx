// import { Link } from "react-router-dom";
import { useState, useEffect, Key } from "react";
import Button from "../design-system/Common/Button/Button";
import GraphHeader from "../design-system/HomePage/GraphHeader/GraphHeader";
import Slider from "../design-system/HomePage/Slider/Slider";
import { fetchData } from "../design-system/fetch/fetch.tsx";
import { motion } from "framer-motion";

type CardsData = {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  index: Key | null | undefined;
};

const HomePage = () => {
  // fetchData();
  const [cardsData, setCardsData] = useState<CardsData[] | null>(null);
  useEffect(() => {
    const loadData = async () => {
      const movies = await fetchData();
      setCardsData(movies);
    };

    loadData();
  }, []);
  // const apiKey = import.meta.env.VITE_API_KEY_TMDB;

  // useEffect(() => {
  //   const data = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       Authorization: `Bearer ${apiKey}`,
  //     },
  //   };

  //   fetch(
  //     `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
  //     data
  //   )
  //     .then((response) => response.json())
  //     .then((response) => {
  //       const loadedMovies: CardsData[] = response.results.map(
  //         (cardsData: any) => ({
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

  return (
    <div id="main-container" className="w-screen h-full bg-blue-900 ">
      {/* <Link to="/">Home</Link> */}
      <motion.span
        initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        animate={{ x: [0, 100, 0] }}
        transition={{ ease: "easeOut", duration: 2.5 }}
      >
        <h1
          id="title"
          className="text-white text-xl mb-12 flex flex-col justify-center items-center lg:w-full w-screen lg:mx-4  bg-blue-900 font-bold "
        >
          Les 10 films les plus populaires
          <span className="flex justify-center text-2xl">du moment</span>
        </h1>
      </motion.span>
      <div className="">{cardsData && <Slider cardsData={cardsData} />}</div>
      <Button label={"Voir tous les films"} ternaryButton={false}></Button>
      <div
        id="divider"
        className=" border border-[1px] border-blue-600 bg-blue-900"
      ></div>
      <GraphHeader></GraphHeader>
    </div>
  );
};

export default HomePage;
