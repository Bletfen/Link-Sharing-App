import { useDispatch } from "react-redux";
import { saveUpdate } from "../features/authSlice";

export default function AddLink({
  addLinkField,
}: {
  addLinkField: () => void;
}) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-[4rem] mb-[2.4rem]">
      <div className="flex flex-col gap-[0.8rem]">
        <h1
          className="text-[2.4rem] font-bold text-[#333] leading-[3.6rem]
          md:text-[3.2rem] md:leading-[4.8rem]"
        >
          Customize your links
        </h1>
        <p className="text-[1.6rem] text-[#737373] leading-[2.4rem]">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
      </div>
      <button
        className="border border-[#633cff] w-full text-center rounded-[0.8rem]
        px-[2.7rem] py-[1.1rem] text-[1.6rem] text-[#633cff] leading-[2.4rem]
        font-semibold cursor-pointer"
        onClick={() => {
          addLinkField();
          dispatch(saveUpdate());
        }}
      >
        + Add new link
      </button>
    </div>
  );
}
