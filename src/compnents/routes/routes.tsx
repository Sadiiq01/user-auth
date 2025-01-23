import { createBrowserRouter } from "react-router-dom";
import LayoutPage from "../layoutPage/Layout";
import HomePage from "../HomePage/HomePage";
import AboutPage from "../AboutPage/AboutPage";
import ContactPage from "../ContactPage/ContactPage";
import LoginPage from "../loginPage/LoginPage";
import PriveteRoutes from "./PriveteRoutes";
import AdminPage from "../AdminPage/AdminPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
  {
    element: <PriveteRoutes />,
    children: [{ path: "admin", element: <AdminPage /> }],
  },
]);

export default router;
