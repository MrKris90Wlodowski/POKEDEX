import Wrapper from "../../shared/Wrapper";
import PokemonCard from "./PokemonCard";
import usePokemon from "../../../hooks/usePokemon";

const PokemonContainer = () => {
  const { pokemonsList, loading } = usePokemon();

  if (loading) return <p>Loading...</p>;
  console.log(pokemonsList);

  return (
    <Wrapper>
        {pokemonsList.map((poke,index) => (
      <PokemonCard
        key={index}
        name={poke.name}
        exp={poke.base_experience}
        height={poke.height}
        weight={poke.weight}
        ability={poke.abilities[0].ability.name}
        sourceImg={poke.sprites.front_default}
      />
        ))}
    </Wrapper>
  );
};

export default PokemonContainer;
