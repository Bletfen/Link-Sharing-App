import EmptyIcon from "../../public/images/illustration-empty.svg";
export default function EmptyLinks() {
  return (
    <div className="p-[2.4rem] ">
      <div
        className="rounded-[1.2rem] bg-[#fafafa] p-[2rem] flex flex-col
        items-center gap-[2.4rem]"
      >
        <img
          src={EmptyIcon}
          alt=""
          className="w-[12.4rem] h-[8rem] mt-[2.4rem]"
        />
        <h1 className="text-[2.4rem] text-[#333] leading-[3.6rem] font-bold">
          Let's get you started
        </h1>
        <p className="mb-[2.4rem] text-[1.6rem] text-[#737373] leading-[2.4rem]">
          Use the “Add new link” button to get started. Once you have more than
          one link, you can reorder and edit them. We're here to help you share
          your profiles with everyone!
        </p>
      </div>
    </div>
  );
}
