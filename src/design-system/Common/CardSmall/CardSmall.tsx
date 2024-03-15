import { FC } from "react";

type CardSmallProps = {
  label: string;
  ternaryCardSmall: boolean;
  types: Array<{ id: number; name: string; url: string }>;
};

const CardSmall: FC<CardSmallProps> = ({}) => {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div>
          <img
            className=" w-[200px] h-[240px] "
            src="./assets/le_roi_lion_60x90cm.jpeg"
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
            <span className=" bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-red-800 mr-2 mb-2">
              +120 KS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardSmall;
