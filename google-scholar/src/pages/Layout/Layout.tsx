import { Outlet } from "react-router-dom";
import "./Layout.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Layout = () => {
  return (
    <body>
      <Header />
      <Outlet />
      <Footer />
    </body>
  );
};

export default Layout;
