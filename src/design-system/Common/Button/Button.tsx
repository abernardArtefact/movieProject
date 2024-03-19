import { FC } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  label: string;
  ternaryButton: boolean;
};

const Button: FC<ButtonProps> = ({ label }) => {
  return (
    <div className="flex justify-center lg:py-12 py-6 bg-blue-900">
      <button className="  bg-blue-600 py-1 px-2 lg:px-12 lg:py-4 rounded-full lg:text-base text-blue-100 hover:text-blue-900 hover:bg-blue-100 border-blue-900 hover:border-blue-900 ml-2">
        <Link to="/search">{label}</Link>
      </button>
    </div>
  );
};
export default Button;
