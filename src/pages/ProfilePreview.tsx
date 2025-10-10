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
    <div>
      <PreviewHeader />
      <Preview />
    </div>
  );
}
