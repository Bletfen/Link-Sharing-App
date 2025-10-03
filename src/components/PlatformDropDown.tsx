import { useState } from "react";
import PlatfromsData from "../platformsData.json";
export default function PlatformDropDown({
  chosenPlatform,
  setChosenPlatform,
  onPlatformChange,
}: IPlatformDropDownProps) {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  console.log(PlatfromsData.platfroms.length - 1);
  return (
    <div className="">
      <div
        className="px-[1.6rem] py-[1.2rem] flex items-center
      justify-between rounded-[0.8rem] border border-[#d9d9d9] bg-white
      cursor-pointer"
        onClick={() => setShowDropDown((prev) => !prev)}
      >
        <div className="flex items-center gap-[1.2rem]">
          <img src={chosenPlatform.img} alt="icon" />
          <p className="text-[1.6rem] text-[#333] leading-[2.4rem]">
            {chosenPlatform.name}
          </p>
        </div>
        <svg
          width="14"
          height="9"
          viewBox="0 0 14 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L7 7L13 1" stroke="#633CFF" strokeWidth="2" />
        </svg>
      </div>
      {showDropDown && (
        <div
          className="px-[1.6rem] py-[1.2rem] rounded-[0.8rem]
        border border-[#d9d9d9] shadow-[0_0_32px_0_rgba(0,0,0,0.1)]
        mt-[1.6rem]"
        >
          {PlatfromsData.platfroms.map((item, index) => (
            <div key={item.name}>
              <div
                className="flex gap-[1.2rem] items-center cursor-pointer"
                onClick={() => {
                  const selected = {
                    name: item.name,
                    img: item.img,
                    placeholder: item.placeholder,
                  };
                  setChosenPlatform(selected);
                  onPlatformChange(item.name, item.img);
                  setShowDropDown(false);
                }}
              >
                <img src={item.img} alt="icon" />
                <p className="text-[1.6rem] text-[#333] leading-[2.4rem]">
                  {item.name}
                </p>
              </div>
              {index !== PlatfromsData.platfroms.length - 1 && (
                <div className="w-full h-px bg-[#d9d9d9] my-[1.2rem]"></div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
