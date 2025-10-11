import { useSelector } from "react-redux";
import type { RootState } from "../store";

export default function MobilePreview() {
  const rectangleArray = [1, 2, 3, 4];
  const currentUser = useSelector(
    (store: RootState) => store.authMode.currentUser
  );
  return (
    <div
      className="hidden w-[56rem] h-[83.4rem] p-[2.4rem]
        2xl:flex justify-center items-center
        bg-white rounded-[1.2rem]
        "
    >
      <div
        className="w-[30.7rem] h-[63.1rem] border border-[#737373]
      rounded-[5rem]
      flex items-center justify-center
      relative"
      >
        <svg
          width="286"
          height="612"
          viewBox="0 0 286 612"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute"
        >
          <path
            d="M45.5 1H69.5C75.8513 1 81 6.14873 81 12.5C81 20.5081 87.4919 27 95.5 27H190.5C198.508 27 205 20.5081 205 12.5C205 6.14873 210.149 1 216.5 1H240.5C265.077 1 285 20.9233 285 45.5V566.5C285 591.077 265.077 611 240.5 611H45.5C20.9233 611 1 591.077 1 566.5V45.5C1 20.9233 20.9233 1 45.5 1Z"
            fill="white"
            stroke="#737373"
          />
        </svg>
        <div className="relative flex flex-col gap-[5.6rem]">
          <div className="relative flex flex-col items-center">
            <div
              className="w-[9.7rem] h-[9.6rem] mb-[2.5rem] bg-[#eee]
                rounded-full"
            >
              {currentUser?.avatar && (
                <img
                  src={currentUser.avatar}
                  className="w-full h-full rounded-full"
                />
              )}
            </div>
            <div className="flex flex-col items-center gap-[1.3rem]">
              {!currentUser?.firstName && !currentUser?.lastName ? (
                <div className="w-[16rem] h-[1.6rem] rounded-[10.4rem] bg-[#eee]"></div>
              ) : (
                <p className="text-[1.8rem] font-semibold leading-[2.7rem] text-[#333]">
                  {currentUser.firstName} {currentUser.lastName}
                </p>
              )}
              {!currentUser?.email ? (
                <div className="w-[7.2rem] h-[0.8rem] rounded-[10.4rem] bg-[#eee]"></div>
              ) : (
                <p className="text-[1.4rem] leading-[2.1rem] text-[#737373]">
                  {currentUser.email}
                </p>
              )}
            </div>
          </div>
          <div className="relative flex flex-col gap-[2rem]">
            {rectangleArray.map(() => (
              <div className="w-[23.7rem] h-[4.4rem] rounded-[0.8rem] bg-[#eee]"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
