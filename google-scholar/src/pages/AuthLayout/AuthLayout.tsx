import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import "./AuthLayout.css";

const AuthLayout = () => {
  return (
    <div className="auth-page-container">
      <div className="auth-page">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AuthLayout;
