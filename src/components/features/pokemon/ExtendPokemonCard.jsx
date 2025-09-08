import { useState } from "react";
import clsx from "clsx";
import Wrapper from "../../shared/Wrapper";
import Image from "../../shared/Image";
import Text from "../../shared/Text";
import { useParams } from "react-router-dom";
import useTheme from "../../../hooks/useTheme";
import useAuth from "../../../hooks/useAuth";
import usePokemonsArrayAPI from "../../../hooks/usePokemonsArrayAPI";
import { Heart } from "lucide-react";
import { Sword } from "lucide-react";
import useAddFavouritePoke from "../../../services/useAddFavouritePoke";

const ExtendPokemonCard = () => {
  const { addFavorPoke } = useAddFavouritePoke();
  const { log, userData, pokemonData } = useAuth();
  const { pokemon } = useParams();

  const pokemonDataFind = pokemonData.find((poke) => poke.id === Number(pokemon));
  
  const [favourite, setFavourite] = useState( pokemonDataFind?.isFavor ?? false);
  const [battle, setBattle] = useState(false);
  const { theme } = useTheme();
  const { pokemonsList } = usePokemonsArrayAPI();

  const baseClass = " w-12 h-12 font-black cursor-pointer";
  const activeClass =
    "text-red-700 font-black w-12 h-12 border-4 rounded-lg cursor-pointer";
  const swordActiveClass = battle === true ? activeClass : "";
  const heartActiveClass = favourite === true ? activeClass : "";
  const swordClass = clsx(baseClass, swordActiveClass);
  const heartClass = clsx(baseClass, heartActiveClass);

  if (!pokemonsList) return <p>Loading...</p>;
  const pokeData = pokemonsList.find((poke) => Number(pokemon) === poke.id);
  if (!pokeData) return <p>Error Poke not found</p>;

  // console.log(pokeData);
  // console.log(userData);

  return (
    <Wrapper
      key={pokeData.id}
      className="flex gap-8 p-8 border-4 w-5xl rounded-4xl relative"
      variantBackground={theme}
    >
      <Wrapper className="border-4 rounded-4xl h-96 w-96" variant={theme}>
        <Image
          src={pokeData.sprites.other["official-artwork"].front_default}
          alt={pokeData.name}
          className="w-96 h-96"
        />
      </Wrapper>
      <Wrapper className="flex flex-col justify-end">
        <Wrapper className="absolute top-8" variantLog={log}>
          <Text className="text-2xl font-bold text-green-700">WIN:</Text>
          <Text className="text-2xl font-bold text-red-700">LOSS:</Text>
        </Wrapper>
        <Wrapper className="flex absolute top-8 right-8 gap-2" variantLog={log}>
          <Sword
            onClick={() => setBattle((prev) => !prev)}
            className={swordClass}
          />
          <Heart
            onClick={() => {
              setFavourite((prev) => !prev);
              addFavorPoke(pokeData, userData);
            }}
            className={heartClass}
          />
        </Wrapper>
        <Wrapper>
          <Text
            tag="h3"
            className="text-4xl mb-12 font-black uppercase text-center"
          >
            {pokeData.name}
          </Text>
          <Wrapper className="flex gap-16">
            <Wrapper className="flex flex-col gap-8">
              <Text className="text-2xl" strong={"HEIGHT: "}>
                {pokeData.height / 10} m
              </Text>
              <Text className="text-2xl" strong={"WEIGHT: "}>
                {pokeData.weight / 10} kg
              </Text>
            </Wrapper>
            <Wrapper className="flex flex-col gap-8">
              <Text className="text-2xl" strong={"BASE EXP: "}>
                {pokeData.base_experience}
              </Text>
              <Text className="text-2xl" strong={"ABILITY: "}>
                {pokeData.abilities[0].ability.name}
              </Text>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default ExtendPokemonCard;
