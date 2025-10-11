import EmptyIcon from "../../public/images/illustration-empty.svg";
export default function EmptyLinks() {
  return (
    <div
      className="rounded-[1.2rem] bg-[#fafafa] p-[2rem] flex flex-col
        items-center gap-[2.4rem]
        xl:min-h-[42.9rem]"
    >
      <img
        src={EmptyIcon}
        alt=""
        className="w-[12.4rem] h-[8rem] mt-[2.4rem]
          md:w-[24.9rem] md:h-[16rem]"
      />
      <h1
        className="text-[2.4rem] text-[#333] leading-[3.6rem] font-bold
        md:text-[3.2rem] md:leading-[4.8rem]"
      >
        Let's get you started
      </h1>
      <p
        className="mb-[2.4rem] text-[1.6rem] text-[#737373] leading-[2.4rem]
        xl:max-w-[48.8rem] text-center"
      >
        Use the “Add new link” button to get started. Once you have more than
        one link, you can reorder and edit them. We're here to help you share
        your profiles with everyone!
      </p>
    </div>
  );
}
