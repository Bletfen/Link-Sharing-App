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

      <div className="relative w-[30.8rem] h-[63.2rem]">
        <svg
          width="308"
          height="632"
          viewBox="0 0 308 632"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M54.5 1H253.5C283.047 1 307 24.9528 307 54.5V577.5C307 607.047 283.047 631 253.5 631H54.5C24.9528 631 1 607.047 1 577.5V54.5C1 24.9528 24.9528 1 54.5 1Z"
            stroke="#737373"
          />
        </svg>
        <div className="absolute top-4 left-4">
          <svg
            width="286"
            height="612"
            viewBox="0 0 286 612"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45.5 1H69.5C75.8513 1 81 6.14873 81 12.5C81 20.5081 87.4919 27 95.5 27H190.5C198.508 27 205 20.5081 205 12.5C205 6.14873 210.149 1 216.5 1H240.5C265.077 1 285 20.9233 285 45.5V566.5C285 591.077 265.077 611 240.5 611H45.5C20.9233 611 1 591.077 1 566.5V45.5C1 20.9233 20.9233 1 45.5 1Z"
              fill="white"
              stroke="#737373"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
