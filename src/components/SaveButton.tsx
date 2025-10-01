export default function SaveButton({ saveButton }: { saveButton: boolean }) {
  return (
    <div className="p-[1.6rem]">
      <button
        className={`px-[2.7rem] py-[1.1rem] w-full
        bg-[#633cff] rounded-[0.8rem] text-[1.6rem] text-white
        font-semibold leading-[2.4rem] cursor-pointer
        ${!saveButton ? "opacity-25" : "opacity-100"}`}
        type="submit"
      >
        Save
      </button>
    </div>
  );
}
