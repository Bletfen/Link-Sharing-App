import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import Login_SignUp from "./pages/Login";
import CustomizeLinks from "./pages/CustomizeLinks";
import Layout from "./layout/Layout";
import ProfileSettings from "./pages/ProfileSettings";
import ProfilePreview from "./pages/ProfilePreview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/customize-links",
        element: <CustomizeLinks />,
      },
      {
        path: "/profile-settings",
        element: <ProfileSettings />,
      },
    ],
  },
  {
    path: "login",
    element: <Login_SignUp />,
  },
  {
    path: "create-account",
    element: <Login_SignUp />,
  },
  {
    path: "/profile-preview",
    element: <ProfilePreview />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
