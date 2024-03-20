import { FC } from "react";
import Logo from "../Logo/Logo";
import ButtonHeader from "../ButtonHeader/ButtonHeader";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

type HeaderProps = {
  label: string;
  ternaryHeader: boolean;
  onClick: void;
};

const Header: FC<HeaderProps> = ({}) => {
  // let navigate = useNavigate();
  // const handleGoHome = () => {
  //   navigate("/");
  // };

  return (
    <div
      id="container"
      className="w-screen h-24 min-h-24 bg-red bg-blue-900 flex flex-inline flex justify-between p-8 lg:px-16"
    >
      <div className="flex items-center">
        {" "}
        <Logo label={""}></Logo>
      </div>

      <div id="buttons" className="flex items-center ">
        <ButtonHeader
          label={"Accueil"}
          ternaryButtonHeader={false}
          to={"/"} //
        ></ButtonHeader>
        <ButtonHeader
          label={"Recherche"}
          ternaryButtonHeader={false}
          to={"/search"}
        ></ButtonHeader>
      </div>
    </div>
  );
};
export default Header;
