import { useSelector } from "react-redux";
import type { RootState } from "../store";

export default function Preview() {
  const currentUserDetails = useSelector(
    (store: RootState) => store.authMode.currentUser
  );
  return (
    <div
      className="flex flex-col mt-[6rem] items-center justify-center
        gap-[5.6rem] md:bg-white md:w-[35rem]
        md:rounded-[2.4rem] md:py-[4.8rem] md:px-[5.6rem]
        md:shadow-[0_0_3.2rem_0_rgba(0,0,0,0.10)]
        "
    >
      <div className="flex flex-col items-center gap-[2.5rem]">
        <img
          src={currentUserDetails?.avatar}
          alt="avatar"
          className="border-[4px] border-[#633cff] rounded-[10.4rem]
          w-[10.4rem] h-[10.4rem]"
        />
        <div className="flex flex-col items-center gap-[0.8rem]">
          <h1
            className="text-[3.2rem] text-[#333] font-bold leading-[4.8rem]
            "
          >
            {currentUserDetails?.firstName} {currentUserDetails?.lastName}
          </h1>
          <p
            className="text-[1.6rem] text-[#737373] leading-[2.4rem]
            "
          >
            {currentUserDetails?.email}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[2rem]">
        {currentUserDetails?.links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            className="p-[1.6rem] flex justify-between items-center
              w-[27.3rem] rounded-[0.8rem] cursor-pointer"
            style={{ background: `${link.bg}` }}
          >
            <div className="flex items-center gap-[0.8rem]">
              <img
                src={link.img}
                alt="link-img"
                className="brightness-0 invert"
              />
              <p className="text-[1.6rem] text-white leading-[2.4rem]">
                {link.platform}
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
                d="M2.66675 7.33355V8.66688H10.6667L7.00008 12.3335L7.94675 13.2802L13.2267 8.00022L7.94675 2.72021L7.00008 3.66688L10.6667 7.33355H2.66675Z"
                fill="white"
              />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}
