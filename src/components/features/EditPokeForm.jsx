
import Wrapper from "../shared/Wrapper";
import Input from "../shared/Input";
import Form from "../shared/Form";
import Button from "../shared/Button";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
    weightCreatePoke: z
    .string()
    .nonempty("This field is required"),
    heightCreatePoke: z
    .string()
    .nonempty("This field is required"),
    expCreatePoke: z
    .string()
    .nonempty("This field is required"),
})

const EditPokeForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const dataEdit = (formValue) => {
        console.log(formValue);
        reset();
    }


  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(dataEdit)}>
        <Input
          id="weightEditPoke"
          name="weightEditPoke"
          type="text"
          placeholder="6 kg"
          register={register}
          errors={errors}
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
        <Button type="submit" >EDIT POKE</Button>
      </Form>
    </Wrapper>
  );
};

export default EditPokeForm;
