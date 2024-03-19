import { FC } from "react";
import { Link } from "react-router-dom";

type CardSmallProps = {
  label: string;
  ternaryCardSmall: boolean;
  types: Array<{ id: number; name: string; url: string }>;
};

const CardSmall: FC<CardSmallProps> = ({}) => {
  return (
    <div>
      <div className=" max-w-sm rounded-lg overflow-hidden shadow-lg w-[260px] min-w-[284px] h-[380px] min-h-[380px] bg-blue-200 mb-4">
        <div>
          <img
            className=" h-[240px] min-w-[240px] w-full  object-cover"
            src="src/assets/le_roi_lion.jpeg"
            alt="Lion King"
          ></img>
        </div>
        <div className="flex items-center justify-between">
          <div className="px-6 py-4 flex flex-col ">
            <div id="title" className="font-bold text-xl mb-2">
              Lion King{" "}
            </div>
            <p id="year" className="text-gray-700 text-base">
              2015
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 flex flex-row-reverse ">
            <span className=" bg-blue-200 rounded-full py-1 text-sm font-semibold text-red-800 mr-2 mb-2">
              +120 KS
            </span>
          </div>
        </div>
        <Link
          to="/search"
          className="text-blue-900 bg-blue-400 ring-1 ring-inset ring-blue-900 rounded-full px-4 py-0 lg:py-1 border border-blue-300 hover:text-blue-200 hover:bg-blue-900 flex justify-center mx-20 font-medium text-base"
        >
          Détails
        </Link>
      </div>
    </div>
  );
};
export default CardSmall;
