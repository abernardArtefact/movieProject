import { FC } from "react";

type StarProps = {
  label: string;
  ternaryStar: boolean;
  types: Array<{ id: number; name: string; url: string }>;
};

const Star: FC<StarProps> = ({}) => {
  return <div></div>;
};
export default Star;
