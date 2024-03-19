import CardSmall from "../design-system/Common/CardSmall/CardSmall";
import SearchBar from "../design-system/SearchPage/SearchBar/SearchBar";

const Movies = () => {
  return (
    <div id="main-container" className="w-screen h-full bg-blue-900">
      <div className="lg:flex lg:justify-between lg:content-center lg:mx-8 lg:text-xl lg:px-10">
        <h1 className="text-blue-200 py-12 flex justify-center lg:justify-start font-bold ">
          Tous les films
        </h1>
        <div className="flex justify-center lg:justify-end lg:pt-8">
          <SearchBar label={""} ternarySearchBar={false} types={[]}></SearchBar>
        </div>
      </div>
      <div className="lg:flex lg:justify-center lg:px-8 ">
        <div className="flex justify-center pt-8 lg:px-8">
          <CardSmall label={""} ternaryCardSmall={false} types={[]}></CardSmall>
        </div>
        <div className="flex justify-center pt-8 lg:px-8">
          <CardSmall label={""} ternaryCardSmall={false} types={[]}></CardSmall>
        </div>
        <div className="flex justify-center pt-8 lg:px-8">
          <CardSmall label={""} ternaryCardSmall={false} types={[]}></CardSmall>
        </div>
        <div className="flex justify-center pt-8 lg:px-8">
          <CardSmall label={""} ternaryCardSmall={false} types={[]}></CardSmall>
        </div>
      </div>
      <div className="lg:flex lg:justify-center lg:px-8 ">
        <div className="flex justify-center pt-8 lg:px-8">
          <CardSmall label={""} ternaryCardSmall={false} types={[]}></CardSmall>
        </div>
        <div className="flex justify-center pt-8 lg:px-8">
          <CardSmall label={""} ternaryCardSmall={false} types={[]}></CardSmall>
        </div>
        <div className="flex justify-center pt-8 lg:px-8">
          <CardSmall label={""} ternaryCardSmall={false} types={[]}></CardSmall>
        </div>
        <div className="flex justify-center pt-8 lg:px-8">
          <CardSmall label={""} ternaryCardSmall={false} types={[]}></CardSmall>
        </div>
      </div>
    </div>
  );
};

export default Movies;
