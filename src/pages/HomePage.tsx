// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../design-system/Common/Button/Button";
import GraphHeader from "../design-system/HomePage/GraphHeader/GraphHeader";
import Slider from "../design-system/HomePage/Slider/Slider";

type CardsData = {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
};

const HomePage = () => {
  const [cardsData, setCardsData] = useState<CardsData[] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
        );
        const data = await response.json();
        setCardsData(data.results);
      } catch (error) {
        console.error("Erreur pendant la récupération de ma data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="main-container" className="w-screen h-full bg-blue-900 ">
      {/* <Link to="/">Home</Link> */}
      <h1
        id="title"
        className="text-white text-xl mb-12 flex flex-col justify-center items-center lg:w-full w-screen lg:mx-4  bg-blue-900 font-bold "
      >
        Les 10 films les plus populaires{" "}
        <span className="flex justify-center text-2xl">du moment</span>
      </h1>
      <div className="">{cardsData && <Slider cardsData={cardsData} />}</div>
      <Button label={"Voir tous les films"} ternaryButton={false}></Button>
      <div
        id="divider"
        className=" border border-[1px] border-blue-600 bg-blue-900"
      ></div>
      <GraphHeader
        label={""}
        ternaryGraphHeader={false}
        types={[]}
      ></GraphHeader>
    </div>
  );
};

export default HomePage;
