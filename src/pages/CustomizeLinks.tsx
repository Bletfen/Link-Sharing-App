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

interface ILinkForm {
  link: string;
}

export default function CustomizeLinks() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILinkForm>();
  const [saveButton, setSaveButton] = useState<boolean>(false);
  const [linkData, setLinkData] = useState<ILinkData>({
    id: "",
    url: "",
    platform: "",
    img: "",
  });
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
  const currentUser = useSelector((store: RootState) => {
    return store.authMode.currentUser;
  });
  const onSubmit: SubmitHandler<ILinkForm> = () => {
    dispatch(updateLinkData(linkData));
  };
  console.log(currentUser);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
                  linkData={linkData}
                  setLinkData={setLinkData}
                  chosenPlatform={chosenPlatform}
                  setChosenPlatform={setChosenPlatform}
                  register={register("link", {
                    required: "Can't be empty",
                    validate: (value) =>
                      linkValidators[chosenPlatform.name]?.test(value) ||
                      "Please check the URL",
                  })}
                  error={errors.link?.message}
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
