import Wrapper from "../../shared/Wrapper";
import Input from "../../shared/Input";
import Form from "../../shared/Form";
import Button from "../../shared/Button";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import useTheme from "../../../hooks/useTheme";

const schema = z.object({
  nameCreatePoke: z.string().nonempty("This field is required"),
  weightCreatePoke: z.string().nonempty("This field is required"),
  heightCreatePoke: z.string().nonempty("This field is required"),
  expCreatePoke: z.string().nonempty("This field is required"),
});

const CreatePokeForm = () => {
  const { theme } = useTheme();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const dataCreate = (formValue) => {
    console.log(formValue);
    reset();
  };

  return (
    <Wrapper className="p-8  border-4 rounded-2xl w-150">
      <Form onSubmit={handleSubmit(dataCreate)} className="flex flex-col gap-8">
        <Input
          id="nameCreatePoke"
          name="nameCreatePoke"
          type="text"
          placeholder="Pikachu"
          register={register}
          errors={errors}
          variant={theme}
          className="focus:outline-none"
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
          variant={theme}
          className="focus:outline-none"
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
          variant={theme}
          className="focus:outline-none"
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
          variant={theme}
          className="focus:outline-none"
        >
          EXP:
        </Input>
        <Wrapper>
          <Button
            variant="default"
            className="text-[var(--yellow)] font-semibold text-2xl border-4 p-3 rounded-2xl"
          >
            LEFT
          </Button>
          <Button
            variant="default"
            className="text-[var(--yellow)] font-semibold text-2xl border-4 p-3 rounded-2xl"
          >
            RIGHT
          </Button>
        </Wrapper>
        <Button
          type="submit"
          variant="default"
          className="text-[var(--yellow)] font-semibold text-2xl border-4 p-3 rounded-2xl"
        >
          CREATE POKE
        </Button>
      </Form>
    </Wrapper>
  );
};

export default CreatePokeForm;
