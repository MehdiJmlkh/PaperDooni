import { Outlet } from "react-router-dom";
import "./Layout.css";
import Header from "../../components/Header";

const Layout = () => {
  return (
    <body>
      <Header />
      <Outlet />
    </body>
  );
};

export default Layout;
