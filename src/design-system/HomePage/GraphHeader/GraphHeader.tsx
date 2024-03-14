import { FC } from "react";

type GraphHeaderProps = {
  label: string;
  ternaryGraphHeader: boolean;
  types: Array<{ id: number; name: string; url: string }>;
};

const GraphHeader: FC<GraphHeaderProps> = ({}) => {
  return <div></div>;
};
export default GraphHeader;
