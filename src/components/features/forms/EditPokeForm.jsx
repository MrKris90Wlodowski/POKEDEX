import Wrapper from "../../shared/Wrapper";
import Input from "../../shared/Input";
import Form from "../../shared/Form";
import Button from "../../shared/Button";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import useTheme from "../../../hooks/useTheme";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useEffect, useState } from "react";

const schema = z.object({
  weightCreatePoke: z.string().nonempty("This field is required"),
  heightCreatePoke: z.string().nonempty("This field is required"),
  expCreatePoke: z.string().nonempty("This field is required"),
});

const EditPokeForm = () => {
  const { theme } = useTheme;
  const { id } = useParams();
  const { pokemonData } = useAuth();
  const [editPoke, setEditPoke] = useState([]);

  useEffect(() => {
    const isEditPoke = pokemonData?.filter((poke) => poke.isEdit === true);
    setEditPoke(isEditPoke);
  }, [pokemonData]);

  const renamePoke = editPoke.find(poke => String(poke.id) === String(id))
  // console.log(renamePoke);

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
          placeholder={renamePoke?.weight}
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
          placeholder={renamePoke?.height}
          register={register}
          errors={errors}
        >
          HEIGHT
        </Input>
        <Input
          id="expEditPoke"
          name="expEditPoke"
          type="text"
          placeholder={renamePoke?.exp}
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
