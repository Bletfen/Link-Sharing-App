import ProfileInputs from "../components/ProfileInputs";
import SaveButton from "../components/SaveButton";
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
        <div className="flex flex-col gap-[2.4rem]">
          <UploadImg />
          <ProfileInputs />
        </div>
      </div>
      <div className="w-full h-px bg-[#d9d9d9] mt-[2.4rem]"></div>
      <SaveButton formId={"updateInitials"} />
    </div>
  );
}
