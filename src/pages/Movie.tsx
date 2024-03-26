import CardBig from "../design-system/DetailsPage/CardBig/CardBig";

const Movie = () => {
  return (
    <div id="main-container" className="w-screen h-full bg-blue-900">
      <div className="lg:flex lg:justify-between lg:content-center lg:mx-8 lg:text-xl lg:px-10 ">
        <div className="lg:flex lg:justify-center w-screen h-full">
          <div className="">
            <CardBig
              label={""}
              types={[]}
              ternaryCardBig={false}
              movieDetails={[]}
            ></CardBig>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
