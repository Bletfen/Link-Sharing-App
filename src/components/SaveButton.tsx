import { useSelector } from "react-redux";
import type { RootState } from "../store";

export default function SaveButton({ formId }: { formId: string }) {
  const save = useSelector((store: RootState) => store.authMode.save);
  return (
    <div
      className="p-[1.6rem] md:px-[4rem] md:py-[2.4rem]
      md:flex md:justify-end"
    >
      <button
        className={`px-[2.7rem] py-[1.1rem] w-full
        bg-[#633cff] rounded-[0.8rem] text-[1.6rem] text-white
        font-semibold leading-[2.4rem] cursor-pointer
        md:w-[9.1rem]
        ${!save ? "opacity-25" : "opacity-100"}`}
        type="submit"
        form={formId}
      >
        Save
      </button>
    </div>
  );
}
