import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
    reset();
    clearErrors();
  }, [isLogin]);

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    if (!isLogin) {
      setIsLoginMode(true);
      dispatch(createUser(data.email, data.password, data.confirmPassword));
    } else {
      dispatch(login(data.email, data.password));
      navigate("/customize-links");
    }
  };
  const users = useSelector((store: RootState) => store.authMode.users);

  return (
    <div
      className="flex flex-col p-[3.2rem]
      md:items-center md:justify-center md:min-h-screen
      md:w-[39rem] md:mx-auto md:p-[unset]"
    >
      <div
        className="flex items-cente gap-[0.75rem]
        mb-[6.4rem] md:mb-[9.85rem]"
      >
        <img src={LogoIcon} alt="logo-icon" />
      </div>
      <div className="md:w-full">
        <div className="flex flex-col gap-[0.8rem] mb-[4rem]">
          <h1
            className="text-[2.4rem] font-bold text-[#333] leading-[2.4rem]
            md:text-[3.2rem] md:leading-[4.8rem]"
          >
            {isLogin ? "Login" : "Create account"}
          </h1>
          <p className="text-[1.6rem] text-[#737373] leading-[2.4rem]">
            {isLogin
              ? "Add your details below to get back into the app"
              : "Let's get you started sharing your links!"}
          </p>
        </div>

        <form
          className="flex flex-col gap-[2.4rem] md:w-full
          "
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
              validate: (value) => {
                const userExists = users.some((u) => value === u.email);
                if (isLogin) {
                  return userExists || "Please check again";
                } else {
                  return !userExists || "Email already in use";
                }
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
              validate: (value) => {
                if (!isLogin) {
                  return true;
                }
                const email = watch("email");
                const user = users.find((u) => u.email === email);

                if (!user) return;
                if (user.password !== value) {
                  return "Incorrect Password";
                }
                return true;
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
          >
            {isLogin ? "Login" : "Create new account"}
          </button>
          <div
            className="text-[1.6rem] leading-[2.4rem] text-center
            md:flex md:justify-center"
          >
            {isLogin ? (
              <p className="text-[#737373] md:flex md:gap-[0.4rem]">
                Don't have an account? <br />
                <p
                  className="text-[#633cff] cursor-pointer"
                  onClick={() => setIsLoginMode(false)}
                >
                  Create account
                </p>
              </p>
            ) : (
              <p className="text-[#737373] md:flex md:gap-[0.4rem]">
                Already have an account? <br />
                <p
                  className="text-[#633cff] cursor-pointer"
                  onClick={() => setIsLoginMode(true)}
                >
                  Login
                </p>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
