// import { Link } from "react-router-dom";
import Button from "../design-system/Common/Button/Button";
import GraphHeader from "../design-system/HomePage/GraphHeader/GraphHeader";
import Slider from "../design-system/HomePage/Slider/Slider";

const HomePage = () => {
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
      <div className="">
        <Slider></Slider>
      </div>
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
