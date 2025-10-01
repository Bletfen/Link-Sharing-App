import { useSelector } from "react-redux";
import type { RootState } from "../../src/store";
import EmptyLinks from "../components/EmptyLinks";
import AddLink from "../components/AddLink";
import SaveButton from "../components/SaveButton";
import LinkInput from "../components/LinkInput";

export default function CustomizeLinks() {
  const links = useSelector(
    (store: RootState) => store.authMode.currentUser?.links
  );

  return (
    <div className="p-[1.6rem] bg-[#fafafa] min-h-screen">
      <div className="bg-white rounded-[1.2rem]">
        <AddLink />
        {links?.length === 0 && <EmptyLinks />}
        {links?.map((link, index) => (
          <div key={link.id}>
            <LinkInput id={link.id} index={index} />
          </div>
        ))}
        <div className="w-full h-px bg-[#d9d9d9] mt-[2.4rem]"></div>
        <SaveButton />
      </div>
    </div>
  );
}
