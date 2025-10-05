// IMPORTS
import { useEffect, useState } from "react";
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
  const arenaCounter =
    pokemonData?.filter((poke) => poke.isBattle)?.length || 0;

  // DISPLAY DATA INITIALIZATION
  let displayData = null;
  let normalID = null;

  // STATE
  const [favourite, setFavourite] = useState(displayData?.isFavor ?? false);
  const [battle, setBattle] = useState(displayData?.isBattle ?? false);

  // HOOKS
  useEffect(() => {
    setFavourite(displayData?.isFavor ?? false);
    setBattle(displayData?.isBattle ?? false);
  }, [displayData, pokemonData]);

  // FIND POKEMON FROM ROUTE OR USER DATA
  if (pokemon && pokemonData && userData) {
    const pokemonFlex = pokemon.includes("-") === true ? pokemon.split("-")[0] : pokemon;
    displayData = pokemonData.find(
      (poke) => String(poke.id) === `${pokemonFlex}-${userData.id}`
    );
    normalID = pokemonFlex;
  }

  if (!displayData && pokemon && pokemonsList) {
    const pokemonFlex = pokemon.includes("-") === true ? pokemon.split("-")[0] : pokemon;
    displayData = pokemonsList.find((poke) => Number(pokemonFlex) === poke.id);
    normalID = pokemonFlex;
  }

  if (!displayData && id && pokemonData) {
    displayData = pokemonData.find((poke) => String(poke.id) === String(id));
    normalID = String(displayData.id).split("-")[0];
  }

  if (!displayData) return <p className="text-6xl font-black">Loading...</p>;

  // CSS CLASSES
  const baseTextArena = "text-base md:text-4xl font-bold";
  const maxTextArena = arenaCounter === 2 ? "text-red-700 font-black" : "";
  const maxTextClass = clsx(baseTextArena, maxTextArena);

  const baseClass = "md:w-12 md:h-12 font-black cursor-pointer";
  const activeClass =
    "text-red-700 font-black md:w-12 md:h-12 border-2 rounded md:rounded-lg md:border-4 cursor-pointer";

  const swordActiveClass =
    battle === true
      ? activeClass
      : arenaCounter === 2
      ? "opacity-50 cursor-not-allowed md:w-12 md:h-12 md:border-4 rounded md:rounded-lg font-black text-gray-400"
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
      className="flex xl:flex-row flex-col gap-8 p-4 md:p-8 border-4 rounded-2xl md:rounded-4xl relative"
      variantBackground={theme}
    >
      {/* POKEMON IMAGE */}
      <Wrapper className="border-2 md:rounded-4xl rounded-2xl md:h-98 md:w-98 w-full h-24 flex flex-row justify-center items-center" variant={theme}>
        <Image
          src={
            displayData?.sprites?.other?.["official-artwork"]?.front_default ||
            displayData?.image
          }
          alt={displayData.name}
          className="md:w-98 md:h-98 w-24 h-24"
        />
      </Wrapper>

      {/* POKEMON DETAILS */}
      <Wrapper className="flex flex-col justify-end">
        {/* ARENA COUNTER */}
        <Wrapper className="absolute xl:top-6 md:top-112 top-28" variantLog={log}>
          <Text className="text-base md:text-2xl font-bold text-green-700">
            WIN: {displayData.winBattle ?? 0}
          </Text>
          <Text className="text-base md:text-2xl font-bold text-red-700">
            LOSS: {displayData.lossBattle ?? 0}
          </Text>
        </Wrapper>

        {/* ACTION BUTTONS */}
        <Wrapper className="flex absolute xl:top-8 xl:right-8 md:top-114 top-29 right-4 md:right-8 gap-2" variantLog={log}>
          <Text className={maxTextClass}>
            {arenaCounter === 2 && "MAX"} {arenaCounter}/2
          </Text>
          <Sword
            onClick={() => {
              if (arenaCounter < 2) {
                setBattle(true);
                battlePoke(normalID, userData, sourceList);
              }
            }}
            className={swordClass}
          />
          <Heart
            onClick={() => {
              setFavourite((prev) => !prev);
              favouritePoke(normalID, userData, sourceList);
            }}
            className={heartClass}
          />
        </Wrapper>

        {/* POKEMON STATS */}
        <Wrapper>
          <Text
            tag="h3"
            className="text-2xl md:text-4xl mb-2 mt-6 md:mb-24 md:mt-38 font-black uppercase text-center"
          >
            {displayData.name}
          </Text>
          <Wrapper className="flex md:flex-row flex-col md:gap-16">
            <Wrapper className="flex flex-col md:gap-8">
              <Text className="text-base md:text-2xl" strong={"HEIGHT: "}>
                {(displayData.height ?? displayData.height / 10) + " m"}
              </Text>
              <Text className="text-base md:text-2xl" strong={"WEIGHT: "}>
                {(displayData.weight ?? displayData.weight / 10) + " kg"}
              </Text>
            </Wrapper>
            <Wrapper className="flex flex-col md:gap-8">
              <Text className="text-base md:text-2xl" strong={"BASE EXP: "}>
                {displayData.base_experience ?? displayData.exp}
              </Text>
              <Text className="text-base md:text-2xl" strong={"ABILITY: "}>
                {displayData?.abilities?.[0]?.ability?.name ??
                  displayData?.ability}
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
