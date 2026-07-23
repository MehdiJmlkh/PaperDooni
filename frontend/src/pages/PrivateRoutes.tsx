import { Navigate, Outlet } from "react-router-dom";
import { useCurrentUser } from "../queries/useCurrentUser";

const PrivateRoutes = () => {
  const { data: user, isLoading } = useCurrentUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/sign-in" />;
  }

  return <Outlet />;
};

export default PrivateRoutes;
