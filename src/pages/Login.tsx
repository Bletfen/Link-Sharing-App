import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LogoIcon from "../../public/images/logo-devlinks-large.svg";
import EmailSvg from "../../public/images/icon-email.svg";
import PasswordSvg from "../../public/images/icon-password.svg";
import Input from "../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch } from "../store";
import { useForm, type SubmitHandler } from "react-hook-form";
import { createUser, login } from "../features/authSlice";
import type { RootState } from "../../src/store";

interface IFormInputs {
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Login_SignUp() {
  const [isLogin, setIsLoginMode] = useState<boolean>(true);
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    clearErrors,
  } = useForm<IFormInputs>();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.includes("create-account")) {
      setIsLoginMode(false);
    } else {
      setIsLoginMode(true);
    }
    reset();
    clearErrors();
  }, [location.pathname]);

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    if (!isLogin) {
      dispatch(createUser(data.email, data.password, data.confirmPassword));
    } else {
      dispatch(login(data.email, data.password));
    }
  };
  const registered = useSelector(
    (store: RootState) =>
      store.authMode.errorEmail && store.authMode.errorPassword
  );

  const user = useSelector((store: RootState) => store.authMode);
  console.log(user);
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

        <form
          className="flex flex-col gap-[2.4rem]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            label={"Email address"}
            type={"email"}
            id={"email"}
            svg={EmailSvg}
            placeholder={"e.g. alex@email.com"}
            register={register("email", {
              required: "Can't be empty",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
            error={errors.email?.message}
          />
          <Input
            label={isLogin ? "Password" : "Create password"}
            type={"password"}
            id={"password"}
            svg={PasswordSvg}
            placeholder={
              isLogin ? "Enter your password" : "At least .8 characters"
            }
            register={register("password", {
              required: "Can't be empty",
              minLength: {
                value: 8,
                message: "At least 8 characters",
              },
            })}
            error={errors.password?.message}
          />
          {!isLogin && (
            <Input
              label={"Confirm password"}
              type={"password"}
              id={"confirmPassword"}
              svg={PasswordSvg}
              placeholder={"At least 8 characters"}
              register={register("confirmPassword", {
                required: "Can't be empty",
                validate: (value) =>
                  value === watch("password") || "Password don't match",
              })}
              error={errors.confirmPassword?.message}
            />
          )}
          {!isLogin && (
            <p className="text-[1.2rem] leading-[1.8rem] text-[#737373]">
              Password must contain at least 8 characters
            </p>
          )}
          <button
            className="py-[1.1rem] rounded-[0.8rem] bg-[#633cff]
            text-[1.6rem] leading-[2.4rem] font-semibold text-white
            cursor-pointer"
            type="submit"
            onClick={() => {
              if (!isLogin && !registered) {
                navigate("/");
              }
            }}
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
