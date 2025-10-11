import { type UseFormRegisterReturn } from "react-hook-form";
export default function Input({
  label,
  type,
  id,
  svg,
  placeholder,
  register,
  error,
}: {
  label: string;
  type: string;
  id: string;
  svg: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: string;
}) {
  return (
    <div className="flex flex-col gap-[0.4rem]">
      <label
        htmlFor={id}
        className="
              text-[1.2rem] leading-[1.8rem] text-[#333]"
      >
        {label}
      </label>
      <div
        className={`flex gap-[1.2rem] items-center 
             py-[1.2rem] px-[1.6rem]
             border rounded-[0.8rem]
             focus-within:border-[#633cff]
             focus-within:shadow-[0_0_3.2rem_0_rgba(99,60,255,0.25)]
             ${error ? "border-[#ff3939]" : "border-[#d9d9d9]"}`}
      >
        <img src={svg} alt="icon" />
        <input
          {...register}
          id={id}
          type={type}
          placeholder={placeholder}
          className="text-[1.6rem] leading-[2.4rem] text-[#333]\
              outline-none w-full"
        />
        {error && (
          <p className="text-[1.2rem] leading-[1.8rem] text-[#ff3939] shrink-0">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}
