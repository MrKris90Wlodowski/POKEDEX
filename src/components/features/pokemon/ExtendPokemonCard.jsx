// IMPORTS
import { useState } from "react";
import clsx from "clsx";
import Wrapper from "../../shared/Wrapper";
import Image from "../../shared/Image";
import Text from "../../shared/Text";
import { useParams } from "react-router-dom";
import useTheme from "../../../hooks/useTheme";
import useAuth from "../../../hooks/useAuth";
import usePokemonsArrayAPI from "../../../hooks/usePokemonsArrayAPI";
import { Heart, Sword } from "lucide-react";
import useFavouritePoke from "../../../services/useFavouritePoke";
import useBattlePoke from "../../../services/useBattlePoke";

// COMPONENT
const ExtendPokemonCard = () => {
  // CONTEXTS
  const { log, userData, pokemonData } = useAuth();
  const { theme } = useTheme();
  const { pokemonsList } = usePokemonsArrayAPI();
  const { favouritePoke } = useFavouritePoke();
  const { battlePoke } = useBattlePoke();

  // ROUTE PARAMS
  const { pokemon, id } = useParams();

  // COUNT ACTIVE ARENA POKEMONS
  const arenaCounter = pokemonData?.filter((poke) => poke.isBattle)?.length || 0;

  // DISPLAY DATA INITIALIZATION
  let displayData = null;

  // STATE
  const [favourite, setFavourite] = useState(displayData?.isFavor ?? false);
  const [battle, setBattle] = useState(displayData?.isBattle ?? false);

  // FIND POKEMON FROM ROUTE OR USER DATA
  if (pokemon && pokemonsList) {
    displayData = pokemonsList.find((poke) => Number(pokemon) === poke.id);
  }
  if (id && pokemonData) {
    displayData = pokemonData.find((poke) => String(poke.id) === String(id));
  }

  if (!displayData) return <p>Loading...</p>;

  // CSS CLASSES
  const baseTextArena = "text-4xl font-bold";
  const maxTextArena = arenaCounter === 2 ? "text-red-700 font-black" : "";
  const maxTextClass = clsx(baseTextArena, maxTextArena);

  const baseClass = "w-12 h-12 font-black cursor-pointer";
  const activeClass =
    "text-red-700 font-black w-12 h-12 border-4 rounded-lg cursor-pointer";

  const swordActiveClass =
    battle === true
      ? activeClass
      : arenaCounter === 2
      ? "opacity-50 cursor-not-allowed w-12 h-12 border-4 rounded-lg font-black text-gray-400"
      : "";
  const heartActiveClass = favourite === true ? activeClass : "";

  const swordClass = clsx(baseClass, swordActiveClass);
  const heartClass = clsx(baseClass, heartActiveClass);

  // DETERMINE SOURCE LIST
  const sourceList = pokemon ? pokemonsList : pokemonData;

  // RENDER
  return (
    <Wrapper
      key={displayData.id}
      className="flex xl:flex-row flex-col gap-8 p-8 border-4  rounded-4xl xl:relative"
      variantBackground={theme}
    >
      {/* POKEMON IMAGE */}
      <Wrapper className="border-4 rounded-4xl h-96 w-96" variant={theme}>
        <Image
          src={
            displayData?.sprites?.other?.["official-artwork"]?.front_default ||
            displayData?.image
          }
          alt={displayData.name}
          className="w-96 h-96"
        />
      </Wrapper>

      {/* POKEMON DETAILS */}
      <Wrapper className="flex flex-col justify-end relative">
        {/* ARENA COUNTER */}
        <Wrapper className="absolute top-8" variantLog={log}>
          <Text className="text-2xl font-bold text-green-700">WIN:</Text>
          <Text className="text-2xl font-bold text-red-700">LOSS:</Text>
        </Wrapper>

        {/* ACTION BUTTONS */}
        <Wrapper className="flex absolute top-8 right-8 gap-2" variantLog={log}>
          <Text className={maxTextClass}>
            {arenaCounter === 2 && "MAX"} {arenaCounter}/2
          </Text>
          <Sword
            onClick={() => {
              if (arenaCounter < 2) {
                setBattle((prev) => !prev);
                battlePoke(displayData.id, userData, sourceList);
              }
            }}
            className={swordClass}
          />
          <Heart
            onClick={() => {
              setFavourite((prev) => !prev);
              favouritePoke(displayData.id, userData, sourceList);
            }}
            className={heartClass}
          />
        </Wrapper>

        {/* POKEMON STATS */}
        <Wrapper>
          <Text
            tag="h3"
            className="text-4xl mb-12 font-black uppercase text-center"
          >
            {displayData.name}
          </Text>
          <Wrapper className="flex gap-16">
            <Wrapper className="flex flex-col gap-8">
              <Text className="text-2xl" strong={"HEIGHT: "}>
                {(displayData.height ?? displayData.height / 10) + " m"}
              </Text>
              <Text className="text-2xl" strong={"WEIGHT: "}>
                {(displayData.weight ?? displayData.weight / 10) + " kg"}
              </Text>
            </Wrapper>
            <Wrapper className="flex flex-col gap-8">
              <Text className="text-2xl" strong={"BASE EXP: "}>
                {displayData.base_experience ?? displayData.exp}
              </Text>
              <Text className="text-2xl" strong={"ABILITY: "}>
                {displayData?.abilities?.[0]?.ability?.name ?? displayData?.ability}
              </Text>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

// EXPORTS
export default ExtendPokemonCard;
