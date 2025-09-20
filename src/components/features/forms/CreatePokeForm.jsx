import Wrapper from "../../shared/Wrapper";
import Input from "../../shared/Input";
import Form from "../../shared/Form";
import Button from "../../shared/Button";
import Image from "../../shared/Image";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import useTheme from "../../../hooks/useTheme";
import usePokemonImage from "../../../hooks/usePokemonImage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useCreatePoke from "../../../services/useCreatePoke";
import useAuth from "../../../hooks/useAuth";
import { useSnackbar } from "notistack";

const schema = z.object({
  nameCreatePoke: z.string().nonempty("This field is required"),
  weightCreatePoke: z.string().nonempty("This field is required"),
  heightCreatePoke: z.string().nonempty("This field is required"),
  expCreatePoke: z.string().nonempty("This field is required"),
  imageCreatePoke: z.string()
});

const CreatePokeForm = () => {
  const { theme } = useTheme();
  const { pokemonsImage } = usePokemonImage();
  const [image, setImage] = useState(0);
  const { createPoke } = useCreatePoke();
  const { userData, pokemonData } = useAuth();
  const [editPoke, setEditPoke] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

//  const isEditPoke = pokemonData?.filter(poke => poke.isEdit === true).map(poke => poke.image);

 useEffect(() => {
   const isEditPoke = pokemonData?.filter(poke => poke.isEdit === true).map(poke => poke.image);
   setEditPoke(isEditPoke)
 },[pokemonData])

//  console.log(isEditPoke);
 const navigate = useNavigate();
 const handleNavigate = () => {
  navigate("/pokemons")
 }

  const handlePrev = () => {
    setImage(prev => (prev === 0 ? pokemonsImage.length - 1 : prev - 1));
  }
  const handleNext = () => {
    setImage(prev => (prev === pokemonsImage.length - 1 ? 0 : prev + 1));
  }

  const {
    register,
    setValue,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  useEffect(() => {
    setValue("imageCreatePoke",pokemonsImage[image])
  },[setValue,pokemonsImage,image])

  const dataCreate = (formValue) => {
    createPoke(userData, formValue, enqueueSnackbar)
    console.log(formValue);
    handleNavigate();
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
        <Wrapper className="w-132 h-132 border-2 rounded-2xl">
          <Input id="imageCreatePoke" name="imageCreatePoke" type="hidden" register={register} value={pokemonsImage[image]}>
          <Image src={pokemonsImage[image]} className={editPoke?.some(img => img === pokemonsImage[image]) ? "filter grayscale opacity-50" : ""}/>
          </Input>
        </Wrapper>
        <Wrapper className="flex gap-8">
          <Button
            variant="default"
            className="text-[var(--yellow)] font-semibold text-2xl border-4 p-3 rounded-2xl flex-1"
            onClick={handlePrev}
          >
            PREV
          </Button>
          <Button
            variant="default"
            className="text-[var(--yellow)] font-semibold text-2xl border-4 p-3 rounded-2xl flex-1"
            onClick={handleNext}
          >
            NEXT
          </Button>
        </Wrapper>
        <Button
          type="submit"
          variant="default"
          className="text-[var(--yellow)] font-semibold text-2xl border-4 p-3 rounded-2xl"
          disabled={editPoke?.some(img => img === pokemonsImage[image])}
        >
          CREATE POKE
        </Button>
      </Form>
    </Wrapper>
  );
};

export default CreatePokeForm;
