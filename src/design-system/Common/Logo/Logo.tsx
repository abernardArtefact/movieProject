import { FC } from "react";
import { Link } from "react-router-dom";

type LogoProps = {
  label: string;
};

const Logo: FC<LogoProps> = ({}) => {
  return (
    <div className="h-12 min-w-20 w-24 grid content-center lg:h-24 lg:w-32">
      <img src="src/assets/logo.svg" alt=" Logo" />
    </div>
  );
};
export default Logo;
