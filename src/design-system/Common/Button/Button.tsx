import { FC } from "react";

type ButtonProps = {
  label: string;
  ternaryButton: boolean;
};

const Button: FC<ButtonProps> = ({}) => {
  return (
    <div className="flex justify-center lg:justify-start py-6 bg-blue-900">
      <button className="  bg-blue-900 py-1 px-2 rounded-full text-blue-100 hover:text-blue-900 hover:bg-blue-200 border-blue-900 hover:border-blue-900 ml-2">
        Voir tous les films
      </button>
    </div>
  );
};
export default Button;
