import { useSelector } from "react-redux";
import type { RootState } from "../../src/store";
import EmptyLinks from "../components/EmptyLinks";
import AddLink from "../components/AddLink";
import SaveButton from "../components/SaveButton";
import LinkInput from "../components/LinkInput";
import { useState } from "react";
import type { Link } from "../features/authSlice";

export default function CustomizeLinks() {
  const [saveButton, setSaveButton] = useState<boolean>(false);
  const [fields, setFields] = useState<Link[]>([]);
  const links = useSelector(
    (store: RootState) => store.authMode.currentUser?.links
  );

  return (
    <div className="p-[1.6rem] bg-[#fafafa] min-h-screen">
      <div className="bg-white rounded-[1.2rem]">
        <AddLink setSaveButton={setSaveButton} />
        {links?.length === 0 && <EmptyLinks />}
        <div className="flex flex-col gap-[2.4rem]">
          {links?.map((link, index) => (
            <div key={link.id} className="px-[2.4rem]">
              <LinkInput
                id={link.id}
                index={index}
                fields={fields}
                setFields={setFields}
              />
            </div>
          ))}
        </div>
        <div className="w-full h-px bg-[#d9d9d9] mt-[2.4rem]"></div>
        <SaveButton saveButton={saveButton} />
      </div>
    </div>
  );
}
