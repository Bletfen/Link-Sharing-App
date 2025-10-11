import { useNavigate } from "react-router-dom";
import Logo from "../../public/images/logo-devlinks-small.svg";
import LogoIcon from "../../public/images/logo-devlinks-large.svg";
import PreviewEye from "../../public/images/icon-preview-header.svg";
import HeaderLinks from "./HeaderLinks";
export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="md:p-[2.4rem]">
      <div
        className="py-[1.6rem] pl-[2.4rem] pr-[1.6rem]
      flex items-center justify-between md:p"
      >
        <img src={Logo} alt="logo-icon" className="block md:hidden" />
        <img src={LogoIcon} alt="logo-icon" className="hidden md:block" />
        <div>
          <HeaderLinks />
        </div>
        <div
          className="px-[1.6rem] py-[1.1rem] rounded-[0.8rem] border 
          border-[#633cff] cursor-pointer
          md:px-[2.7rem] md:py-[1.1rem]"
          onClick={() => navigate("profile-preview")}
        >
          <img
            src={PreviewEye}
            alt="preview-icon"
            className="block md:hidden"
          />
          <p
            className="hidden md:block text-[1.6rem] font-semibold
            leading-[2.4rem] text-[#633cff]"
          >
            Preview
          </p>
        </div>
      </div>
    </div>
  );
}
