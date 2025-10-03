import UploadImg from "../components/UploadImg";

export default function ProfileSettings() {
  return (
    <div className="p-[1.6rem]">
      <div className="flex flex-col gap-[4rem] p-[2.4rem]">
        <div className="flex flex-col gap-[0.8rem]">
          <h1 className="text-[2.4rem] font-bold text-[#333] leading-[3.6rem]">
            Profile Details
          </h1>
          <p className="text-[1.6rem] text-[#737373] leading-[2.4rem]">
            Add your details to create a personal touch to your profile.
          </p>
        </div>
        <div>
          <UploadImg />
        </div>
      </div>
    </div>
  );
}
