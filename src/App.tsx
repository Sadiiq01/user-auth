import { RouterProvider } from "react-router-dom";
import router from "./compnents/routes/routes";

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
