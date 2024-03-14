import { FC } from "react";

type FilterProps = {
  label: string;
  ternaryFilter: boolean;
  types: Array<{ id: number; name: string; url: string }>;
};

const Filter: FC<FilterProps> = ({}) => {
  return <div></div>;
};
export default Filter;
