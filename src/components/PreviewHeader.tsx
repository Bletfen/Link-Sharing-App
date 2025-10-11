import { Link } from "react-router-dom";

export default function PreviewHeader() {
  return (
    <div className="md:p-[2.4rem] w-full">
      <div
        className="flex pl-[2.4rem] py-[1.6rem] pr-[1.6rem] justify-between
      md:bg-white rounded-[1.2rem]"
      >
        <Link
          to={"/profile-settings"}
          className="border border-[#633cff] py-[1.6rem] px-[2.7rem]
        rounded-[0.8rem] text-[1.6rem] font-semibold leading-[2.4rem]
        text-[#633cff] cursor-pointer"
        >
          Back to Editor
        </Link>
        <button
          className="py-[1.6rem] px-[4.1rem]
        rounded-[0.8rem] text-[1.6rem] font-semibold leading-[2.4rem]
        text-white cursor-pointer bg-[#633cff]
        "
        >
          Share Link
        </button>
      </div>
    </div>
  );
}
