import { FC } from "react";
import { Link } from "react-router-dom";

type ButtonHeaderProps = {
  label: string;
  ternaryButtonHeader: boolean;
  link: any;

  // onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const ButtonHeader: FC<ButtonHeaderProps> = ({ label }) => {
  return (
    <button
      className={
        "bg-blue-600 py-1 px-2 lg:px-6 lg:py-3 rounded-full text-blue-100 hover:text-blue-900 hover:bg-blue-100 border-blue-900 hover:border-blue-900 ml-2 lg:mx-4 mx-1 "
      }
    >
      {label}
    </button>
  );
};
export default ButtonHeader;

// faire condition ternaire pour le link
