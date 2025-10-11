import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import MobilePreview from "../components/MobilePreview";
export default function Layout() {
  const navigate = useNavigate();
  const user = localStorage.getItem("currentUser");
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    if (user) {
      navigate("/customize-links");
    }
  }, []);
  return (
    <div className="max-w-[144rem] mx-auto">
      <Header />
      <div
        className="xl:flex xl:gap-[2.4rem] pb-[2.4rem]
        mx-auto"
      >
        <MobilePreview />
        <Outlet />
      </div>
    </div>
  );
}
