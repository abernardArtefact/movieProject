import { FC } from "react";

type LogoProps = {};

const Logo: FC<LogoProps> = () => {
  return (
    <div className="h-12 min-w-20 w-24 grid content-center lg:h-24 lg:w-32">
      <img src="/assets/logo.svg" alt=" Logo" />
    </div>
  );
};
export default Logo;
