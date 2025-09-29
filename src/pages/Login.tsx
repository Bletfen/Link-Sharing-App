import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoIcon from "../../public/images/logo-devlinks-large.svg";
import EmailSvg from "../../public/images/icon-email.svg";
import PasswordSvg from "../../public/images/icon-password.svg";
import Input from "../components/Input";
import { useDispatch } from "react-redux";
import { type AppDispatch } from "../store";

export default function Login_SignUp() {
  const [isLogin, setIsLoginMode] = useState<boolean>(true);
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (location.pathname.includes("create-account")) {
      setIsLoginMode(false);
    } else {
      setIsLoginMode(true);
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col p-[3.2rem]">
      <div
        className="flex items-cente gap-[0.75rem]
        mb-[6.4rem]"
      >
        <img src={LogoIcon} alt="logo-icon" />
      </div>
      <div>
        <div className="flex flex-col gap-[0.8rem] mb-[4rem]">
          <h1 className="text-[2.4rem] font-bold text-[#333] leading-[2.4rem]">
            {isLogin ? "Login" : "Create account"}
          </h1>
          <p className="text-[1.6rem] text-[#737373] leading-[2.4rem]">
            {isLogin
              ? "Add your details below to get back into the app"
              : "Let's get you started sharing your links!"}
          </p>
        </div>

        <form className="flex flex-col gap-[2.4rem]">
          <Input
            label={"Email address"}
            type={"email"}
            id={"email"}
            svg={EmailSvg}
            placeholder={"e.g. alex@email.com"}
          />
          <Input
            label={isLogin ? "Password" : "Create password"}
            type={"password"}
            id={"password"}
            svg={PasswordSvg}
            placeholder={
              isLogin ? "Enter your password" : "At least .8 characters"
            }
          />
          {!isLogin && (
            <Input
              label={"Confirm password"}
              type={"password"}
              id={"confirmPassword"}
              svg={PasswordSvg}
              placeholder={"At least 8 characters"}
            />
          )}
          {!isLogin && (
            <p className="text-[1.2rem] leading-[1.8rem] text-[#737373]">
              Password must contain at least 8 characters
            </p>
          )}
          <button
            className="py-[1.1rem] rounded-[0.8rem] bg-[#633cff]
            text-[1.6rem] leading-[2.4rem] font-semibold text-white"
          >
            {isLogin ? "Login" : "Create new account"}
          </button>
          <div className="text-[1.6rem] leading-[2.4rem] text-center">
            {isLogin ? (
              <p className="text-[#737373]">
                Don't have an account? <br />
                <Link to={"create-account"} className="text-[#633cff]">
                  Create account
                </Link>
              </p>
            ) : (
              <p className="text-[#737373]">
                Already have an account? <br />
                <Link to={"/"} className="text-[#633cff]">
                  Login
                </Link>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
