import Wrapper from "../../shared/Wrapper";
import PokemonCard from "./PokemonCard";
import { Link } from "react-router-dom";
import useTheme from "../../../hooks/useTheme";
import clsx from "clsx";

const PokemonFavourite = ({ error, loading, pokemonsArray, className }) => {
  const { theme } = useTheme();
  const basePokeCardClass = "w-48 h-76 p-4 border-4 rounded-2xl";
  const themeClass = {
    light:
      "hover:bg-[var(--white)] relative hover:z-10 transform transition-transform-colors duration-300 ease-in-out hover:scale-150",
    dark: "hover:bg-[var(--black)] relative hover:z-10 transform transition-transform-colors duration-300 ease-in-out hover:scale-150",
  };
  const pokeCardClass = clsx(basePokeCardClass, themeClass[theme]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error:{error.message}</p>;

  return (
    <Wrapper className={className}>
      {pokemonsArray.map((poke) => (
        <Link key={poke.id} to={`/pokemons/${poke.id}`}>
          <PokemonCard
            key={poke.id}
            name={poke.name}
            exp={poke.exp}
            height={poke.height}
            weight={poke.weight}
            ability={poke.ability}
            sourceImg={poke.image}
            className={pokeCardClass}
          />
        </Link>
      ))}
    </Wrapper>
  );
};

export default PokemonFavourite;
