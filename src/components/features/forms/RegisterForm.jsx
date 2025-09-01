import Button from "../../shared/Button";
import Form from "../../shared/Form";
import Input from "../../shared/Input";
import Wrapper from "../../shared/Wrapper";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import useTheme from "../../../hooks/useTheme";

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
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8}$/,
        "This field must contains at least one upper, lower letter and digit all minimum 8 signs"
      ),
    confirmPasswordRegister: z.string(),
  })
  .refine(
    (dataPassword) => dataPassword.passwordRegister === dataPassword.confirmPasswordRegister,
    {
      message: "Confirm password must be match to password",
      path: ["confirmPasswordRegister"],
    }
  );

const RegisterForm = () => {
  const { theme } = useTheme();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const dataRegister = (formValue) => {
    console.log(formValue);
    reset();
  };

  return (
    <Wrapper className="p-8 border-4 rounded-2xl" variant={theme}>
      <Form onSubmit={handleSubmit(dataRegister)} className="flex flex-col gap-8 ">
        <Input
          id="nameRegister"
          name="nameRegister"
          type="text"
          placeholder="Ash Ketchum"
          register={register}
          errors={errors}
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
        >
          CONFIRM PASSWORD:
        </Input>
        <Button type="submit" variant="default">REGISTER</Button>
      </Form>
    </Wrapper>
  );
};

export default RegisterForm;
