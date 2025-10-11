import { useSelector } from "react-redux";
import Preview from "../components/Preview";
import PreviewHeader from "../components/PreviewHeader";
import type { RootState } from "../store";

export default function ProfilePreview() {
  const currentUser = useSelector(
    (store: RootState) => store.authMode.currentUser?.links
  );
  console.log(currentUser);
  return (
    <div className="md:bg-[#633cff] md:rounded-b-[3.2rem] md:h-[35.7rem]">
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
