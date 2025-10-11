import Preview from "../components/Preview";
import PreviewHeader from "../components/PreviewHeader";

export default function ProfilePreview() {
  return (
    <div
      className="md:bg-[#633cff] md:rounded-b-[3.2rem] md:h-[35.7rem]
      justify-[unset] items-[unset]"
    >
      <PreviewHeader />
      <div
        className="md:flex md:items-center md:justify-center
        "
      >
        <Preview />
      </div>
    </div>
  );
}
