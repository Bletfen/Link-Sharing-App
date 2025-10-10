export default function PreviewHeader() {
  return (
    <div
      className="flex pl-[2.4rem] py-[1.6rem] pr-[1.6rem] justify-between
        "
    >
      <button
        className="border border-[#633cff] py-[1.6rem] px-[2.7rem]
        rounded-[0.8rem] text-[1.6rem] font-semibold leading-[2.4rem]
        text-[#633cff] cursor-pointer"
      >
        Back to Editor
      </button>
      <button
        className="py-[1.6rem] px-[4.1rem]
        rounded-[0.8rem] text-[1.6rem] font-semibold leading-[2.4rem]
        text-white cursor-pointer bg-[#633cff]
        "
      >
        Share Link
      </button>
    </div>
  );
}
