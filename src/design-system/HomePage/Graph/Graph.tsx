import { FC } from "react";
import * as echarts from "echarts";

type GraphProps = {
  label: string;
  ternaryGraph: boolean;
  types: Array<{ id: number; name: string; url: string }>;
};

const Graph: FC<GraphProps> = ({}) => {
  return <div></div>;
};
export default Graph;
