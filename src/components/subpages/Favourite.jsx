import Wrapper from "../shared/Wrapper";
import Text from "../shared/Text";
import useDownloadUserPoke from "../../services/useDownloadUserPoke";
// import PokemonFavourite from "../features/pokemon/PokemonFavourite";
import PokemonsUniversalConteiner from "../features/pokemon/PokemonsUniversalConteiner";
import clsx from "clsx";
import useTheme from "../../hooks/useTheme";

const Favourite = () => {
  const { theme } = useTheme();
  const basePokeCardClass = "w-48 h-76 p-4 border-4 rounded-2xl";
  const themeClass = {
    light:
      "hover:bg-[var(--white)] relative hover:z-10 transform transition-transform-colors duration-300 ease-in-out hover:scale-150",
    dark: "hover:bg-[var(--black)] relative hover:z-10 transform transition-transform-colors duration-300 ease-in-out hover:scale-150",
  };
  const pokeCardClass = clsx(basePokeCardClass, themeClass[theme]);

  const { userPokemons } = useDownloadUserPoke();
  const favorPokemons = userPokemons.filter((poke) => poke.isFavor === true);
  console.log(favorPokemons);
  console.log(userPokemons);

  const mapPropsFavourite = (poke) => ({
    id: poke.id,
    name: poke.name,
    exp: poke.exp || poke.base_experience,
    weight: poke.weight,
    height: poke.height,
    ability: poke.ability || poke.abilities[0].ability.name,
    sourceImg:
      poke.image || poke.sprites.other["official-artwork"].front_default,
    className: pokeCardClass,
  });

  return (
    <Wrapper>
      {favorPokemons?.length === 0 && (
        <Text className="text-6xl font-black">
          HEY TRAINER! ADD YOUR FAVOURITE POKE :)
        </Text>
      )}
      {favorPokemons && (
        <PokemonsUniversalConteiner
          pokemonsArray={favorPokemons}
          mapProps={mapPropsFavourite}
          className="flex flex-col gap-8"
          showLink={true}
          linkPrefix="favourite"
        />
      )}
    </Wrapper>
  );
};

export default Favourite;
