import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import Login_SignUp from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login_SignUp />,
  },
  {
    path: "create-account",
    element: <Login_SignUp />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
