import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../src/store";
import EmptyLinks from "../components/EmptyLinks";
import AddLink from "../components/AddLink";
import SaveButton from "../components/SaveButton";
import LinkInput from "../components/LinkInput";
import { useEffect, useState } from "react";
import { useForm, type Path, type SubmitHandler } from "react-hook-form";
import { linkValidators } from "../linkValidation";
import { updateLinkData } from "../features/authSlice";

export default function CustomizeLinks() {
  const links = useSelector(
    (store: RootState) => store.authMode.currentUser?.links
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ILinkForm>({
    defaultValues: {
      links: links || [],
    },
  });
  useEffect(() => {
    if (links) {
      links.forEach((link, index) => {
        setValue(`links.${index}.id`, link.id);
        setValue(`links.${index}.platform`, link.platform);
        setValue(`links.${index}.url`, link.url);
        setValue(`links.${index}.img`, link.img);
      });
    }
  }, [links, setValue]);
  const linksWatch = watch("links");

  const [saveButton, setSaveButton] = useState<boolean>(false);
  const dispatch = useDispatch();
  const addLinkField = () => {
    const newLink: ILinkData = {
      id: crypto.randomUUID(),
      platform: "GitHub",
      url: "",
      img: "/images/icon-github.svg",
    };
    setValue("links", [...linksWatch, newLink]);
  };

  const currentUser = useSelector((store: RootState) => {
    return store.authMode.currentUser;
  });
  const onSubmit: SubmitHandler<ILinkForm> = (data) => {
    dispatch(updateLinkData(data.links));
    setSaveButton(false);
  };
  const removeLink = (id: string) => {
    const updatedLinks = linksWatch.filter((link) => link.id !== id);
    setValue("links", updatedLinks);
    dispatch(updateLinkData(updatedLinks));
    setSaveButton(false);
  };
  console.log(currentUser);
  console.log(linksWatch);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-[1.6rem] bg-[#fafafa] min-h-screen">
        <div className="bg-white rounded-[1.2rem]">
          <AddLink setSaveButton={setSaveButton} addLinkField={addLinkField} />

          {linksWatch?.length === 0 && <EmptyLinks />}

          <div className="flex flex-col gap-[2.4rem]">
            {linksWatch?.map((link, index) => (
              <div key={link.id} className="px-[2.4rem]">
                <LinkInput
                  id={link.id}
                  index={index}
                  register={register(`links.${index}.url` as Path<ILinkForm>, {
                    required: "Can't be empty",
                    validate: (url) => {
                      const currentPlatform =
                        watch(`links.${index}.platform`) || "GitHub";
                      return (
                        linkValidators[currentPlatform]?.test(url as string) ||
                        "Please check the URL"
                      );
                    },
                  })}
                  error={errors.links?.[index]?.url?.message}
                  onPlatformChange={(platfrom: string, img: string) => {
                    setValue(`links.${index}.platform`, platfrom);
                    setValue(`links.${index}.img`, img);
                    setSaveButton(true);
                  }}
                  removeLink={removeLink}
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
