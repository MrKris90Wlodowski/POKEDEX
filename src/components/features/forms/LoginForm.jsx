import Wrapper from "../../shared/Wrapper";
import Input from "../../shared/Input";
import Form from "../../shared/Form";
import Button from "../../shared/Button";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import useTheme from "../../../hooks/useTheme";
import useAuth from "../../../hooks/useAuth"

const schema = z.object({
  emailLogin: z.string().nonempty("This field is required"),
  passwordLogin: z.string().nonempty("This field is required"),
});

const LoginForm = () => {
  const { theme } = useTheme();
  const {loginRecords } = useAuth();

   //   function allow navigate
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/pokemons");
  };


  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const dataLogin = (formValue) => {
    loginRecords(formValue);
    console.log(formValue);
    handleNavigate();
    reset();
  };

  return (
    <Wrapper className="p-8 m-8 border-4 rounded-2xl w-150">
      <Form onSubmit={handleSubmit(dataLogin)} className="flex flex-col gap-8">
        <Input
          id="emailLogin"
          name="emailLogin"
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
          id="passwordLogin"
          name="passwordLogin"
          type="password"
          placeholder="GengaR13"
          register={register}
          errors={errors}
          variant={theme}
          className="focus:outline-none"
        >
          PASSWORD:
        </Input>
        <Button
          type="submit"
          variant="default"
          className="text-[var(--yellow)] font-semibold text-2xl border-4 p-3 rounded-2xl"
        >
          Login
        </Button>
      </Form>
    </Wrapper>
  );
};

export default LoginForm;
