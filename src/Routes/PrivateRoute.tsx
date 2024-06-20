import { Navigate, Outlet } from "react-router-dom";
import { getUser } from "../shared/localStorage/user";

const PrivateRoute = () => {
  const login = getUser();
  return login ? <Outlet /> : <Navigate to={"/sign-in"} />;
};

export default PrivateRoute;

