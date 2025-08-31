import Wrapper from "../../shared/Wrapper";
import Input from "../../shared/Input";
import Form from "../../shared/Form";
import Button from "../../shared/Button";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
    emailLogin: z
    .string()
    .nonempty("This field is required"),
    passwordLogin: z
    .string()
    .nonempty("This field is required")
})

const LoginForm = () => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm({resolver: zodResolver(schema)})

    const dataLogin = (formValue) => {
        console.log(formValue);
        reset();
    }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(dataLogin)}>
        <Input
          id="emailLogin"
          name="emailLogin"
          type="email"
          placeholder="pikachu90@poke.com"
          register={register}
          errors={errors}
        >
          EMAIL:
        </Input>
        <Input
          id="passwordLogin"
          name="passwordLogin"
          type="password"
          placeholder="GengaR13"
          register={register}
          errors={errors}
        >
          PASSWORD:
        </Input>
        <Button type="submit" variant="default">Login</Button>
      </Form>
    </Wrapper>
  );
};

export default LoginForm;
