import Wrapper from "../../shared/Wrapper";
import PokemonCard from "./PokemonCard";

const PokemonContainer = ({ error, loading, pokemonsArray, className }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>error:{error.message}</p>;

  return (
    <Wrapper className={className}>
      {pokemonsArray.map((poke, index) => (
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
