import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../src/store";
import EmptyLinks from "../components/EmptyLinks";
import AddLink from "../components/AddLink";
import SaveButton from "../components/SaveButton";
import LinkInput from "../components/LinkInput";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { linkValidators } from "../linkValidation";
import { updateLinkData } from "../features/authSlice";

export default function CustomizeLinks() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILinkForm>();
  const [saveButton, setSaveButton] = useState<boolean>(false);
  const [chosenPlatform, setChosenPlatform] = useState<{
    name: string;
    img: string;
    placeholder: string;
  }>({
    name: "GitHub",
    img: "/images/icon-github.svg",
    placeholder: "e.g. https://www.github.com/johnappleseed",
  });
  const dispatch = useDispatch();
  const links = useSelector(
    (store: RootState) => store.authMode.currentUser?.links
  );
  const [linkData, setLinkData] = useState<ILinkData[]>(links ?? []);
  const addLinkField = () => {
    return setLinkData((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        platform: "GitHub",
        url: "",
        img: "/images/icon-github.svg",
      },
    ]);
  };

  const currentUser = useSelector((store: RootState) => {
    return store.authMode.currentUser;
  });
  const onSubmit: SubmitHandler<ILinkForm> = () => {
    dispatch(updateLinkData(linkData));
  };
  console.log(currentUser);
  console.log(linkData);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-[1.6rem] bg-[#fafafa] min-h-screen">
        <div className="bg-white rounded-[1.2rem]">
          <AddLink setSaveButton={setSaveButton} addLinkField={addLinkField} />
          {linkData?.length === 0 && <EmptyLinks />}
          <div className="flex flex-col gap-[2.4rem]">
            {linkData?.map((link, index) => (
              <div key={link.id} className="px-[2.4rem]">
                <LinkInput
                  id={link.id}
                  index={index}
                  chosenPlatform={chosenPlatform}
                  setChosenPlatform={setChosenPlatform}
                  register={register(`links.${index}.url`, {
                    required: "Can't be empty",
                    validate: (value) =>
                      linkValidators[chosenPlatform.name]?.test(value) ||
                      "Please check the URL",
                  })}
                  error={errors.links?.[index]?.url?.message}
                  value={link.url}
                  setLinkData={setLinkData}
                />
              </div>
            ))}
          </div>
          <div className="w-full h-px bg-[#d9d9d9] mt-[2.4rem]"></div>
          <SaveButton saveButton={saveButton} />
        </div>
      </div>
    </form>
  );
}
/*
პირველი პრობლემა ახლა ისაა რომ რეალურად როდესაც addlink დააჭერს 
მომხმარებელი ლინკი იუზერში მაინც იქმენბა მიუხედავად იმისა 
submit გაკეთდა თუ არა და მეორე პრობლემა ისაა რომ input ში 
არაფერი აღარ იწერება
*/
