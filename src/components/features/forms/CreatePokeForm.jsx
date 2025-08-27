import Wrapper from "../../shared/Wrapper";
import Input from "../../shared/Input";
import Form from "../../shared/Form";
import Button from "../../shared/Button";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
    nameCreatePoke: z
    .string()
    .nonempty("This field is required"),
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

const CreatePokeForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const dataCreate = (formValue) => {
        console.log(formValue);
        reset();
    }


  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(dataCreate)}>
        <Input
          id="nameCreatePoke"
          name="nameCreatePoke"
          type="text"
          placeholder="Pikachu"
          register={register}
          errors={errors}
        >
          NAME:
        </Input>
        <Input
          id="weightCreatePoke"
          name="weightCreatePoke"
          type="text"
          placeholder="6 kg"
          register={register}
          errors={errors}
        >
          WEIGHT:
        </Input>
        <Input
          id="heightCreatePoke"
          name="heightCreatePoke"
          type="text"
          placeholder="0,4 m"
          register={register}
          errors={errors}
        >
          HEIGHT
        </Input>
        <Input
          id="expCreatePoke"
          name="expCreatePoke"
          type="text"
          placeholder="112"
          register={register}
          errors={errors}
        >
          EXP:
        </Input>
        <Wrapper>
          <Button>LEFT</Button>
          <Button>RIGHT</Button>
        </Wrapper>
        <Button type="submit" >CREATE POKE</Button>
      </Form>
    </Wrapper>
  );
};

export default CreatePokeForm;
