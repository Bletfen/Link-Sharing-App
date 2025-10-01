import { useNavigate } from "react-router-dom";
import Logo from "../../public/images/logo-devlinks-small.svg";
import PreviewEye from "../../public/images/icon-preview-header.svg";
import HeaderLinks from "./HeaderLinks";
export default function Header() {
  const navigate = useNavigate();

  return (
    <div
      className="py-[1.6rem] pl-[2.4rem] pr-[1.6rem]
      flex items-center justify-between"
    >
      <img src={Logo} alt="logo-icon" />
      <div>
        <HeaderLinks />
      </div>
      <div
        className="px-[1.6rem] py-[1.1rem] rounded-[0.8rem] border 
          border-[#633cff] cursor-pointer"
        onClick={() => navigate("profile-preview")}
      >
        <img src={PreviewEye} alt="preview-icon" />
      </div>
    </div>
  );
}
