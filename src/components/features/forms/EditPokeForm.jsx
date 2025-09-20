import Wrapper from "../../shared/Wrapper";
import Input from "../../shared/Input";
import Form from "../../shared/Form";
import Button from "../../shared/Button";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import  useTheme  from "../../../hooks/useTheme"

const schema = z.object({
  weightCreatePoke: z.string().nonempty("This field is required"),
  heightCreatePoke: z.string().nonempty("This field is required"),
  expCreatePoke: z.string().nonempty("This field is required"),
});

const EditPokeForm = () => {
  const { theme } = useTheme;

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const dataEdit = (formValue) => {
    console.log(formValue);
    reset();
  };

  return (
    <Wrapper className="p-8 border-4 rounded-2xl w-150">
      <Form onSubmit={handleSubmit(dataEdit)} className="flex flex-col gap-8">
        <Input
          id="weightEditPoke"
          name="weightEditPoke"
          type="text"
          placeholder="6 kg"
          register={register}
          errors={errors}
          variant={theme}
          className="focus:outline-none"
        >
          WEIGHT:
        </Input>
        <Input
          id="heightEditPoke"
          name="heightEditPoke"
          type="text"
          placeholder="0,4 m"
          register={register}
          errors={errors}
        >
          HEIGHT
        </Input>
        <Input
          id="expEditPoke"
          name="expEditPoke"
          type="text"
          placeholder="112"
          register={register}
          errors={errors}
        >
          EXP:
        </Input>
        <Button
          type="submit"
          variant="default"
          className="text-[var(--yellow)] font-semibold text-2xl border-4 p-3 rounded-2xl"
        >
          EDIT POKE
        </Button>
      </Form>
    </Wrapper>
  );
};

export default EditPokeForm;
