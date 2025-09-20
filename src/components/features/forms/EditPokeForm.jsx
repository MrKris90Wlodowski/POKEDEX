// IMPORTS
import Wrapper from "../../shared/Wrapper";
import Input from "../../shared/Input";
import Form from "../../shared/Form";
import Button from "../../shared/Button";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import useTheme from "../../../hooks/useTheme";
import useAuth from "../../../hooks/useAuth";
import useCreatePoke from "../../../services/useCreatePoke";

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";

// SCHEMA: validation rules for edit form
const schema = z.object({
  weightCreatePoke: z.string().nonempty("This field is required"),
  heightCreatePoke: z.string().nonempty("This field is required"),
  expCreatePoke: z.string().nonempty("This field is required"),
});

// COMPONENT
const EditPokeForm = () => {
  // CONTEXTS
  const { theme } = useTheme();
  const { pokemonData } = useAuth();
  const { editPokemon } = useCreatePoke();
  const { enqueueSnackbar } = useSnackbar();

  // ROUTER
  const { id } = useParams();
  const navigate = useNavigate();

  // LOCAL STATE
  const [editPoke, setEditPoke] = useState([]);

  // REACT HOOK FORM
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      weightCreatePoke: "",
      heightCreatePoke: "",
      expCreatePoke: "",
    },
  });

  // EFFECT: populate form with existing data
  useEffect(() => {
    const isEditPoke = pokemonData?.filter((poke) => poke.isEdit === true);
    setEditPoke(isEditPoke);

    const renamePoke = isEditPoke?.find((p) => String(p.id) === String(id));
    if (renamePoke) {
      reset({
        weightCreatePoke: renamePoke.weight,
        heightCreatePoke: renamePoke.height,
        expCreatePoke: renamePoke.exp,
      });
    }
  }, [pokemonData, id, reset]);

  // FORM SUBMIT HANDLER
  const dataEdit = (formValue) => {
    const renamePoke = editPoke?.find((p) => String(p.id) === String(id));
    editPokemon(renamePoke, formValue, enqueueSnackbar);
    navigate("/pokemons");
    reset();
  };

  // RENDER
  return (
    <Wrapper className="p-8 border-4 rounded-2xl w-150">
      <Form onSubmit={handleSubmit(dataEdit)} className="flex flex-col gap-8">
        {/* WEIGHT INPUT */}
        <Input
          id="weightCreatePoke"
          name="weightCreatePoke"
          type="text"
          placeholder="Weight"
          register={register}
          errors={errors}
          variant={theme}
        >
          WEIGHT:
        </Input>

        {/* HEIGHT INPUT */}
        <Input
          id="heightCreatePoke"
          name="heightCreatePoke"
          type="text"
          placeholder="Height"
          register={register}
          errors={errors}
          variant={theme}
        >
          HEIGHT:
        </Input>

        {/* EXP INPUT */}
        <Input
          id="expCreatePoke"
          name="expCreatePoke"
          type="text"
          placeholder="EXP"
          register={register}
          errors={errors}
          variant={theme}
        >
          EXP:
        </Input>

        {/* SUBMIT BUTTON */}
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

// EXPORT
export default EditPokeForm;
