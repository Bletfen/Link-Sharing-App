import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function Layout() {
  const navigate = useNavigate();
  const user = localStorage.getItem("currentUser");
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
