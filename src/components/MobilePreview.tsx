import { useSelector } from "react-redux";
import type { RootState } from "../store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MobilePreview() {
  const currentUser = useSelector(
    (store: RootState) => store.authMode.currentUser
  );
  const navigate = useNavigate();
  useEffect(() => {
    const local = localStorage.getItem("currentUser");
    if (!local) {
      navigate("/login");
    }
  }, []);

  if (!currentUser) {
    return null;
  }
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
            {[0, 1, 2, 3].map((index) => {
              const link = currentUser?.links?.[index];
              return (
                <div key={index}>
                  {!link ? (
                    <div className="h-[4.4rem] w-[23.7rem] bg-[#eee] rounded-[0.8rem]"></div>
                  ) : (
                    <a
                      href={link?.url}
                      target="_blank"
                      className="py-[1.1rem] px-[1.6rem] flex items-center justify-between rounded-[0.8rem]"
                      style={{ background: link?.bg }}
                    >
                      <div className="flex items-center gap-[0.8rem]">
                        <img
                          src={link?.img}
                          alt="platform-img"
                          className="brightness-0 invert"
                        />
                        <p className="text-[1.2rem] leading-[1.8rem] text-white">
                          {link?.platform}
                        </p>
                      </div>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.66666 7.3333V8.66664H10.6667L6.99999 12.3333L7.94666 13.28L13.2267 7.99997L7.94666 2.71997L6.99999 3.66664L10.6667 7.3333H2.66666Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
