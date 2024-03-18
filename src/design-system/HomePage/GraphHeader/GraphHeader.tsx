import { FC } from "react";
import Filter from "../Filter/Filter";

type GraphHeaderProps = {
  label: string;
  ternaryGraphHeader: boolean;
  types: Array<{ id: number; name: string; url: string }>;
};

const GraphHeader: FC<GraphHeaderProps> = ({}) => {
  return (
    <div className="bg-blue-900 text-white py-6 lg:flex justify-between ">
      <h1 className="px-3 py-3 flex justify-center lg:justify-start">
        Statistique par année
      </h1>
      <div className="flex justify-center lg:justify-start">
        <Filter></Filter>
        <Filter></Filter>
        <Filter></Filter>
      </div>
    </div>
  );
};
export default GraphHeader;
