import Button from "../shared/Button";
import Input from "../shared/Input";
import Wrapper from "../shared/Wrapper";
import Form from "../shared/Form";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    name: z
      .string()
      .nonempty("This field is required")
      .min(3, "Name must contains minimum 3 signs"),
    email: z
      .string()
      .nonempty("This field is required")
      .email("This field must contains correct address email"),
    password: z
      .string()
      .nonempty("This field is required")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8}$/,
        "This field must contains at least one upper, lower letter and digit all minimum 8 signs"
      ),
    confirmPassword: z.string(),
  })
  .refine(
    (dataPassword) => dataPassword.password === dataPassword.confirmPassword,
    {
      message: "Confirm password must be match to password",
      path: ["confirmPassword"],
    }
  );

const RegisterForm = () => {
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
    <Wrapper>
      <Form onSubmit={handleSubmit(dataRegister)}>
        <Input
          id="name"
          name="name"
          type="text"
          register={register}
          errors={errors}
        >
          NAME:
        </Input>
        <Input
          id="email"
          name="email"
          type="email"
          register={register}
          errors={errors}
        >
          EMAIL:
        </Input>
        <Input
          id="password"
          name="password"
          type="password"
          register={register}
          errors={errors}
        >
          PASSWORD:
        </Input>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          register={register}
          errors={errors}
        >
          CONFIRM PASSWORD:
        </Input>
        <Button type="submit">REGISTER</Button>
      </Form>
    </Wrapper>
  );
};

export default RegisterForm;
