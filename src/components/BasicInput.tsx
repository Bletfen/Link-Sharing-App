import type { UseFormRegisterReturn } from "react-hook-form";
import { useDispatch } from "react-redux";
import { saveUpdate } from "../features/authSlice";

export default function BasicInput({
  label,
  register,
  error,
}: {
  label: string;
  register: UseFormRegisterReturn;
  error?: string;
}) {
  const dispatch = useDispatch();
  return (
    <div
      className="flex flex-col gap-[0.4rem]
      md:flex-row md:items-center md:justify-between"
    >
      <label
        htmlFor={label}
        className="text-[1.2rem] text-[#333] leading-[1.8rem]
        md:text-[#737373] md:text-[1.6rem]"
      >
        {label}
      </label>
      <div
        className="px-[1.6rem] py-[1.2rem] border border-[#d9d9d9]
        rounded-[0.8rem] md:w-[34rem] 2xl:w-[43.2rem]"
      >
        <div className="flex items-center justify-between">
          <input
            type="text"
            {...register}
            className="outline-none text-[1.6rem] text-[#333] leading-[2.4rem]"
            placeholder={
              label === "First Name*"
                ? "Ben"
                : label === "Last Name*"
                ? "Wright"
                : ""
            }
            onChange={() => dispatch(saveUpdate())}
          />
          {error && (
            <p className="text-[1.2rem] leading-[1.8rem] text-[#ff3939] shrink-0">
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
