import { RouterProvider } from "react-router-dom";
import router from "./compnents/routes/routes";
import AdminPage from "./compnents/AdminPage/AdminPage";

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
