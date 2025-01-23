import { useContext } from "react";
import NameContext from "../context/context";
import { Navigate, Outlet } from "react-router-dom";

const PriveteRoutes = () => {
  const { name } = useContext(NameContext);
  if (!name) return <Navigate to={"/login"} />;
  else return <Outlet />;
};

export default PriveteRoutes;
