import Wrapper from "../../shared/Wrapper";
import PokemonCard from "./PokemonCard";
import usePokemon from "../../../hooks/usePokemon";

const PokemonContainer = () => {
  const { pokemon, loading } = usePokemon(94);

  if (loading) return <p>Loading...</p>;
  console.log(pokemon);

  return (
    <Wrapper>
      {/* ({ sourceImg, name, height, weight, exp, ability })   */}
      <PokemonCard
        name={pokemon.name}
        exp={pokemon.base_experience}
        height={pokemon.height}
        weight={pokemon.weight}
        ability={pokemon.abilities[0].ability.name}
        sourceImg={pokemon.sprites.back_default
}
      />
    </Wrapper>
  );
};

export default PokemonContainer;
