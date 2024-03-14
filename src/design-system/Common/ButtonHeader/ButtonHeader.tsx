import { FC } from "react";

type ButtonHeaderProps = {
  label: string;
  ternaryButtonHeader: boolean;
};

const ButtonHeader: FC<ButtonHeaderProps> = ({}) => {
  return (
    <button className="bg-blue-900 py-1 px-2 rounded-full text-blue-200 hover:text-blue-900 hover:bg-white border-blue-900 hover:border-blue-900">
      Acceuil
    </button>
  );
};
export default ButtonHeader;
