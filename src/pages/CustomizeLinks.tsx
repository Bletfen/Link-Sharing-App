import { useSelector } from "react-redux";
import type { RootState } from "../../src/store";
import EmptyLinks from "../components/EmptyLinks";
import AddLink from "../components/AddLink";
import SaveButton from "../components/SaveButton";
import { useState } from "react";

export default function CustomizeLinks() {
  const [link, setLink] = useState([]);
  const links = useSelector(
    (store: RootState) => store.authMode.currentUser?.links
  );
  function addNewLink() {
    setLink((prev) => [...prev, { id: Math.random(), platfrom: "", url: "" }]);
  }

  return (
    <div className="p-[1.6rem] bg-[#fafafa] min-h-screen">
      <div className="bg-white rounded-[1.2rem]">
        <AddLink />
        {links?.length === 0 && <EmptyLinks />}
        <div className="w-full h-px bg-[#d9d9d9] mt-[2.4rem]"></div>
        <SaveButton />
      </div>
    </div>
  );
}
