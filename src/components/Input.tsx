export default function Input({
  label,
  type,
  id,
  svg,
  placeholder,
}: {
  label: string;
  type: string;
  id: string;
  svg: string;
  placeholder: string;
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
        className="flex gap-[1.2rem] items-center 
             py-[1.2rem] px-[1.6rem]
             border border-[#d9d9d9] rounded-[0.8rem]"
      >
        <img src={svg} alt="icon" />
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className="text-[1.6rem] leading-[2.4rem] text-[#333]\
              outline-none w-full"
        />
      </div>
    </div>
  );
}
