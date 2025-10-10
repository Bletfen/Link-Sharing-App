import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../src/store";
import EmptyLinks from "../components/EmptyLinks";
import AddLink from "../components/AddLink";
import SaveButton from "../components/SaveButton";
import LinkInput from "../components/LinkInput";
import { useEffect } from "react";
import { useForm, type Path, type SubmitHandler } from "react-hook-form";
import { linkValidators } from "../linkValidation";
import { saveUpdate, updateLinkData } from "../features/authSlice";

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
        setValue(`links.${index}.bg`, link.bg);
      });
    }
  }, [links, setValue]);
  const linksWatch = watch("links");

  const dispatch = useDispatch();
  const addLinkField = () => {
    const newLink: ILinkData = {
      id: crypto.randomUUID(),
      platform: "GitHub",
      url: "",
      img: "/images/icon-github.svg",
      bg: "#1a1a1a",
    };
    setValue("links", [...linksWatch, newLink]);
  };

  const onSubmit: SubmitHandler<ILinkForm> = (data) => {
    dispatch(updateLinkData(data.links));
  };
  const removeLink = (id: string) => {
    const updatedLinks = linksWatch.filter((link) => link.id !== id);
    setValue("links", updatedLinks);
    dispatch(updateLinkData(updatedLinks));
  };

  return (
    <div>
      <div className="p-[1.6rem] bg-[#fafafa] min-h-screen">
        <div className="bg-white rounded-[1.2rem]">
          <AddLink addLinkField={addLinkField} />

          {linksWatch?.length === 0 && <EmptyLinks />}

          <form
            id="updateLinks"
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-[2.4rem]"
          >
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
                  onPlatformChange={(
                    platfrom: string,
                    img: string,
                    bg: string
                  ) => {
                    setValue(`links.${index}.platform`, platfrom);
                    setValue(`links.${index}.img`, img);
                    setValue(`links.${index}.bg`, bg);
                    dispatch(saveUpdate());
                  }}
                  removeLink={removeLink}
                />
              </div>
            ))}
          </form>
          <div className="w-full h-px bg-[#d9d9d9] mt-[2.4rem]"></div>
          <SaveButton formId={"updateLinks"} />
        </div>
      </div>
    </div>
  );
}
