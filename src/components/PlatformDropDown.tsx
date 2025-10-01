import PlatfromsData from "../platformsData.json";
export default function PlatformDropDown() {
  console.log(PlatfromsData.platfroms.length - 1);
  return (
    <div
      className="px-[1.6rem] py-[1.2rem] rounded-[0.8rem]
        border border-[#d9d9d9] shadow-[0_0_32px_0_rgba(0,0,0,0.1)]"
    >
      {PlatfromsData.platfroms.map((item, index) => (
        <div key={item.name}>
          <div className="flex gap-[1.2rem] items-center cursor-pointer">
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
  );
}
