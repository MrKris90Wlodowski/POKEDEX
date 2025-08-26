import Wrapper from "../shared/Wrapper";
import Input from "../shared/Input";
import Form from "../shared/Form";
import Button from "../shared/Button";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const LoginForm = () => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm()

  return (
    <Wrapper>
      <Form>
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
        <Button type="submit">Login</Button>
      </Form>
    </Wrapper>
  );
};

export default LoginForm;
