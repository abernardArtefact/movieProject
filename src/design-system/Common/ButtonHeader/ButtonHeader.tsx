import { FC } from "react";

type ButtonHeaderProps = {
  label: string;
  ternaryButtonHeader: boolean;
  link: any;

  // onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const ButtonHeader: FC<ButtonHeaderProps> = ({ label }) => {
  return (
    <button
      className="bg-blue-600 py-1 px-2 lg:px-6 lg:py-3 rounded-full text-blue-200 hover:text-blue-900 hover:bg-white border-blue-900 hover:border-blue-900 ml-2 lg:mx-4 mx-1"
      // onClick={onClick}
    >
      {label}
    </button>
  );
};
export default ButtonHeader;
