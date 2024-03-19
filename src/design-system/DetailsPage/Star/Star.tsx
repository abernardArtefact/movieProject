import { FC } from "react";

type StarProps = {
  selected: boolean;
  onSelect: () => void;
  // label: string;
  // ternaryStar: boolean;
  // types: Array<{ id: number; name: string; url: string }>;
};

const Star: FC<StarProps> = ({ selected, onSelect }) => {
  return (
    <div>
      <span
        onClick={onSelect}
        style={{ cursor: "pointer", color: selected ? "orange" : "white" }}
      >
        ★
      </span>
    </div>
  );
};
export default Star;
