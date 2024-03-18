import { Link } from "react-router-dom";
import Button from "../design-system/Common/Button/Button";
import GraphHeader from "../design-system/HomePage/GraphHeader/GraphHeader";
import Slider from "../design-system/HomePage/Slider/Slider";

const HomePage = () => {
  return (
    <div id="main-container" className="w-screen h-screen bg-blue-900">
      <h1
        id="title"
        className="text-white mb-12 flex justify-center lg:justify-start lg:mx-4  bg-blue-900"
      >
        Les 10 films les plus populaires du moment
      </h1>
      <Slider></Slider>
      <Button label={""} ternaryButton={false}></Button>
      <div
        id="divider"
        className=" border border-[1px] border-blue-600 bg-blue-900"
      ></div>
      <GraphHeader
        label={""}
        ternaryGraphHeader={false}
        types={[]}
      ></GraphHeader>

      <li>
        <Link to="/search">Search</Link>
      </li>
    </div>
  );
};

export default HomePage;
