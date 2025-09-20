// IMPORTS
import Button from "../../shared/Button";
import Form from "../../shared/Form";
import Input from "../../shared/Input";
import Wrapper from "../../shared/Wrapper";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import useTheme from "../../../hooks/useTheme";
import useRegister from "../../../services/useRegister";
import { useSnackbar } from "notistack";

// SCHEMA: validation rules for registration form
const schema = z
  .object({
    nameRegister: z
      .string()
      .nonempty("This field is required")
      .min(3, "Name must contain at least 3 characters"),
    emailRegister: z
      .string()
      .nonempty("This field is required")
      .email("Must be a valid email address"),
    passwordRegister: z
      .string()
      .nonempty("This field is required")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/,
        "Must contain min 8 chars, 1 uppercase, 1 lowercase, 1 digit"
      ),
    confirmPasswordRegister: z.string(),
  })
  .refine(
    (data) => data.passwordRegister === data.confirmPasswordRegister,
    {
      message: "Passwords must match",
      path: ["confirmPasswordRegister"],
    }
  );

// COMPONENT
const RegisterForm = () => {
  // THEME CONTEXT
  const { theme } = useTheme();

  // REGISTER HOOK
  const { loading, error, registerRecord } = useRegister();

  // SNACKBAR NOTIFICATIONS
  const { enqueueSnackbar } = useSnackbar();

  // REACT HOOK FORM
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  // FORM SUBMIT HANDLER
  const dataRegister = (formValue) => {
    registerRecord(formValue);
    enqueueSnackbar("User registered", { variant: "success" });
    console.log(formValue);
    reset();
  };

  // RENDER
  return (
    <Wrapper className="p-8 border-4 rounded-2xl w-150" variant={theme}>
      <Form onSubmit={handleSubmit(dataRegister)} className="flex flex-col gap-8">
        {/* NAME INPUT */}
        <Input
          id="nameRegister"
          name="nameRegister"
          type="text"
          placeholder="Ash Ketchum"
          register={register}
          errors={errors}
          variant={theme}
          className="focus:outline-none"
        >
          NAME:
        </Input>

        {/* EMAIL INPUT */}
        <Input
          id="emailRegister"
          name="emailRegister"
          type="email"
          placeholder="pikachu90@poke.com"
          register={register}
          errors={errors}
          variant={theme}
          className="focus:outline-none"
        >
          EMAIL:
        </Input>

        {/* PASSWORD INPUT */}
        <Input
          id="passwordRegister"
          name="passwordRegister"
          type="password"
          placeholder="GengaR13"
          register={register}
          errors={errors}
          variant={theme}
          className="focus:outline-none"
        >
          PASSWORD:
        </Input>

        {/* CONFIRM PASSWORD INPUT */}
        <Input
          id="confirmPasswordRegister"
          name="confirmPasswordRegister"
          type="password"
          placeholder="GengaR13"
          register={register}
          errors={errors}
          variant={theme}
          className="focus:outline-none"
        >
          CONFIRM PASSWORD:
        </Input>

        {/* SUBMIT BUTTON */}
        <Button
          type="submit"
          variant="default"
          className="text-[var(--yellow)] font-semibold text-2xl border-4 p-3 rounded-2xl"
        >
          REGISTER
        </Button>
      </Form>
    </Wrapper>
  );
};

// EXPORT
export default RegisterForm;
