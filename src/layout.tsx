import { Outlet } from "react-router-dom";
import Header from "./design-system/Common/Header/Header";

const Layout = () => (
  <div>
    <Header label={""} ternaryHeader={false} onClick={undefined} />
    <Outlet />
  </div>
);
export default Layout;
