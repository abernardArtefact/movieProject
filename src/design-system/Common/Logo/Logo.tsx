import { FC } from "react";
// import

type LogoProps = {
  label: string;
};

const Logo: FC<LogoProps> = ({}) => {
  return (
    <div className="h-12 min-w-20 w-20">
      <img src="src/assets/logo.svg" alt=" Logo" />
    </div>
  );
};
export default Logo;
