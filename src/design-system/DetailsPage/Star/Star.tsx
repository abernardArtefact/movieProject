import { FC } from "react";

type StarProps = {
  selected: boolean;
  onSelect: () => void;
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
