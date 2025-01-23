import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const LayoutPage = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutPage;
