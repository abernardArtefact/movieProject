import { FC } from "react";

type HeaderProps = {
  label: string;
  ternaryHeader: boolean;
  types: Array<{ id: number; name: string; url: string }>;
};

const Header: FC<HeaderProps> = ({}) => {
  return <div></div>;
};
export default Header;
