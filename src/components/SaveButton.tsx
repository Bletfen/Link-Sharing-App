import { useSelector } from "react-redux";
import type { RootState } from "../store";

export default function SaveButton({ formId }: { formId: string }) {
  const save = useSelector((store: RootState) => store.authMode.save);
  return (
    <div className="p-[1.6rem]">
      <button
        className={`px-[2.7rem] py-[1.1rem] w-full
        bg-[#633cff] rounded-[0.8rem] text-[1.6rem] text-white
        font-semibold leading-[2.4rem] cursor-pointer
        ${!save ? "opacity-25" : "opacity-100"}`}
        type="submit"
        form={formId}
      >
        Save
      </button>
    </div>
  );
}
