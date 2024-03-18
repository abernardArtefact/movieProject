import { FC } from "react";
import Logo from "../Logo/Logo";
import ButtonHeader from "../ButtonHeader/ButtonHeader";

type HeaderProps = {
  label: string;
  ternaryHeader: boolean;
};

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div
      id="container"
      className="w-screen h-24 min-h-24 bg-red bg-blue-900 flex flex-inline flex justify-between p-4"
    >
      <div className="flex items-center">
        {" "}
        <Logo label={""}></Logo>
      </div>

      <div id="buttons" className="flex items-center ">
        <ButtonHeader
          label={"Accueil"}
          ternaryButtonHeader={false}
        ></ButtonHeader>
        <ButtonHeader
          label={"Recherche"}
          ternaryButtonHeader={false}
        ></ButtonHeader>
      </div>
    </div>
  );
};
export default Header;
