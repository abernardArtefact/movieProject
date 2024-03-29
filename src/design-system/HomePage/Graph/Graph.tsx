import { FC } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

type GraphProps = {
  label: string;
  ternaryGraph: boolean;
  types: Array<{ id: number; name: string; url: string }>;
};

const data = [
  {
    name: "Kung Fu Panda",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Godzilla",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Madame Web",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Road House",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "DamSel",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Sri Asih",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Alienoid",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Creation of God",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "No way up",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Migration",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Graph: FC<GraphProps> = ({}) => {
  return (
    <div className="w-fit">
      <LineChart
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
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};
export default Graph;
