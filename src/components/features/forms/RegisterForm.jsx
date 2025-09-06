import Button from "../../shared/Button";
import Form from "../../shared/Form";
import Input from "../../shared/Input";
import Wrapper from "../../shared/Wrapper";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import useTheme from "../../../hooks/useTheme";
import useRegister from "../../../services/useRegister";

const schema = z
  .object({
    nameRegister: z
      .string()
      .nonempty("This field is required")
      .min(3, "Name must contains minimum 3 signs"),
    emailRegister: z
      .string()
      .nonempty("This field is required")
      .email("This field must contains correct address email"),
    passwordRegister: z
      .string()
      .nonempty("This field is required")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/,
        "This field must contains at least one upper, lower letter and digit all minimum 8 signs"
      ),
    confirmPasswordRegister: z.string(),
  })
  .refine(
    (dataPassword) =>
      dataPassword.passwordRegister === dataPassword.confirmPasswordRegister,
    {
      message: "Confirm password must be match to password",
      path: ["confirmPasswordRegister"],
    }
  );

const RegisterForm = () => {
  const { theme } = useTheme();
  const { loading, error, registerRecord } = useRegister();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const dataRegister = (formValue) => {
    registerRecord(formValue);
    console.log(formValue);
    reset();
  };

  return (
    <Wrapper className="p-8 border-4 rounded-2xl w-150" variant={theme}>
      <Form
        onSubmit={handleSubmit(dataRegister)}
        className="flex flex-col gap-8"
      >
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

export default RegisterForm;
