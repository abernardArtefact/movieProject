import { FC } from "react";
import * as echarts from "echarts";
import Chart from "chart.js/auto";
import { getRelativePosition } from "chart.js/helpers";

type GraphProps = {
  label: string;
  ternaryGraph: boolean;
  types: Array<{ id: number; name: string; url: string }>;
};

const Graph: FC<GraphProps> = ({}) => {
  //   const chart = new Chart(ctx, {
  //     type: "line",
  //     data: data,
  //     options: {
  //       onClick: (e) => {
  //         const canvasPosition = getRelativePosition(e, chart);

  //         // Substitute the appropriate scale IDs
  //         const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
  //         const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
  //       },
  //     },
  //   });
  return <div></div>;
};
export default Graph;
