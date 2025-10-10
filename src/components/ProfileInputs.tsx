import { useDispatch, useSelector } from "react-redux";
import BasicInput from "./BasicInput";
import type { RootState } from "../store";
import { useForm, type SubmitHandler } from "react-hook-form";
import { updateInitials } from "../features/authSlice";

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
}

export default function ProfileInputs() {
  const currentUserDetails = useSelector(
    (store: RootState) => store.authMode.currentUser
  );
  const userData = useSelector((store: RootState) => store.authMode.users);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    defaultValues: {
      firstName: currentUserDetails?.firstName,
      lastName: currentUserDetails?.lastName,
      email: currentUserDetails?.email,
    },
  });
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    dispatch(updateInitials(data.firstName, data.lastName, data.email));
  };
  console.log(currentUserDetails);
  return (
    <form
      id="updateInitials"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-[1.2rem] p-[2rem] rounded-[1.2rem]
        bg-[#fafafa]"
    >
      <BasicInput
        label={"First Name*"}
        register={register("firstName", {
          required: "Can't be Empty",
        })}
        error={errors.firstName?.message}
      />
      <BasicInput
        label={"Last Name*"}
        register={register("lastName", {
          required: "Can't be Empty",
        })}
        error={errors.lastName?.message}
      />
      <BasicInput
        label={"Email"}
        register={register("email", {
          required: "Can't be empty",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email format",
          },
          validate: (value) => {
            const userExists = userData.some(
              (u) => u.email === value && u.id !== currentUserDetails?.id
            );
            if (userExists) {
              return "Email already in use";
            }
            return true;
          },
        })}
        error={errors.email?.message}
      />
    </form>
  );
}
