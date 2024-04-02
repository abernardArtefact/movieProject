import { FC } from "react";
import Filter from "../Filter/Filter";

type GraphHeaderProps = {};

const GraphHeader: FC<GraphHeaderProps> = ({}) => {
  return (
    <div className="bg-blue-900 text-white py-6 lg:flex justify-between h-full lg:px-16">
      <h1 className="px-3 py-3 flex justify-center lg:justify-start lg:text-lg font-semibold">
        Statistique par année
      </h1>
      <div className="flex justify-center lg:justify-start  ">
        <Filter label={"2020"}></Filter>
        <div className="flex items-center text-blue-200">à</div>
        <Filter label={"2024"}></Filter>
        <Filter label={"Genre"}></Filter>
      </div>
    </div>
  );
};
export default GraphHeader;
