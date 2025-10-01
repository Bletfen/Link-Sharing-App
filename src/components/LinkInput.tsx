import { useDispatch } from "react-redux";
import { removeLink } from "../features/authSlice";
import PlatformDropDown from "./PlatformDropDown";
export default function LinkInput({
  id,
  index,
}: {
  id: string;
  index: number;
}) {
  const dispatch = useDispatch();

  return (
    <div className="p-[2rem] rounded-[1.2rem] bg-[#fafafa]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[0.8rem]">
          <div className="flex flex-col gap-[0.4rem]">
            <div className="w-[1.2rem] h-px bg-[#737373]"></div>
            <div className="w-[1.2rem] h-px bg-[#737373]"></div>
          </div>
          <h1
            className="text-[1.6rem] font-bold leading-[2.4rem]
        text-[#737373]"
          >
            Link #{index + 1}
          </h1>
        </div>
        <p
          className="text-[1.6rem] leading-[2.4rem] 
          text-[#737373] cursor-pointer"
          onClick={() => dispatch(removeLink(id))}
        >
          Remove
        </p>
      </div>
      <div>
        <div>
          <p>Platform</p>
          <PlatformDropDown />
        </div>
      </div>
    </div>
  );
}
