import { FC } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ResponsiveContainer,
  ComposedChart,
} from "recharts";

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
  return (
    <ResponsiveContainer width="100%" height="100%">
      <div className=" flex justify-center w-screen">
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
          {/* <Line type="monotone" dataKey="note moyenne" stroke="#82ca9d" /> */}

          <Bar dataKey="note moyenne" barSize={20} fill="#b35a0c" />
        </ComposedChart>
      </div>
    </ResponsiveContainer>
  );
};
export default Graph;
