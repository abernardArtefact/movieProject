import { FC, useContext, useState } from "react";
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
  ComposedChart,
} from "recharts";
// import StockContext from "../../../context/StockContext";

type GraphProps = {
  label: string;
  ternaryGraph: boolean;
  types: Array<{ id: number; name: string; url: string }>;
};

const data = [
  {
    name: "2020",
    "nombre de film": 4000,
    "note moyenne": 2400,
    amt: 2400,
  },
  {
    name: "2021",
    "nombre de film": 3000,
    "note moyenne": 1398,
    amt: 2210,
  },
  {
    name: "2022",
    "nombre de film": 2000,
    "note moyenne": 9800,
    amt: 2290,
  },
  {
    name: "2023",
    "nombre de film": 2780,
    "note moyenne": 3908,
    amt: 2000,
  },
  {
    name: "2024",
    "nombre de film": 1890,
    "note moyenne": 4800,
    amt: 2181,
  },
];

const Graph: FC<GraphProps> = ({}) => {
  //   const context = useContext(StockContext);
  //   const [data, setData] = useState(dataMockup);
  //   const [filter, setFilter] = useState("defaultFilter");

  //   const updateChartData = async () => {
  //   try {

  //     const resolution = context[filter as any].resolution ;
  //     const result = await fetchHistoricalData(

  //       resolution,

  //     );
  //     setData(formatData(result));
  //   } catch (error) {
  //     setData([]);
  //     console.log(error);
  //   }
  // };

  // updateChartData();
  // }, [ filter];

  return (
    // <><ul className="">
    //   {Object.keys(chartConfig).map((item) => (
    //     <li key={item}>
    //       <Filter
    //         text={item}
    //         active={filter === item}
    //         onClick={() => {
    //           setFilter(item);
    //         } } />
    //     </li>
    //   ))}
    // </ul>
    <ResponsiveContainer width="100%" height="100%">
      <div className=" flex justify-center w-screen pb-16">
        <ComposedChart
          width={350}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="nombre de film"
            stroke="#60aedb"
            activeDot={{ r: 8 }}
          />

          <Bar dataKey="note moyenne" barSize={20} fill="#b35a0c" />
        </ComposedChart>
      </div>
    </ResponsiveContainer>
  );
};
export default Graph;
