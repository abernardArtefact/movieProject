import Button from "./design-system/Common/Button/Button";
import Header from "./design-system/Common/Header/Header";
import GraphHeader from "./design-system/HomePage/GraphHeader/GraphHeader";
import Slider from "./design-system/HomePage/Slider/Slider";

function App() {
  return (
    <>
      <div id="main-container" className="w-screen h-screen bg-blue-900">
        <Header label={""} ternaryHeader={false}></Header>
        <h1
          id="title"
          className="text-white my-12 flex justify-center lg:justify-start lg:mx-4"
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
        <div></div>
      </div>
    </>
  );
}

export default App;
