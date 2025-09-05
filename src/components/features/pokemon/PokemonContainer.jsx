import Wrapper from "../../shared/Wrapper";
import PokemonCard from "./PokemonCard";
import { Link } from "react-router-dom";

const PokemonContainer = ({ error, loading, pokemonsArray, className }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>error:{error.message}</p>;

  return (
    <Wrapper className={className}>
      {pokemonsArray.map((poke) => (
        <Link key={poke.id}  to={`/pokemons/${poke.id}`}>
          <PokemonCard
            key={poke.id}
            name={poke.name}
            exp={poke.base_experience}
            height={poke.height}
            weight={poke.weight}
            ability={poke.abilities[0].ability.name}
            sourceImg={poke.sprites.other["official-artwork"].front_default}
          />
        </Link>
      ))}
    </Wrapper>
  );
};

export default PokemonContainer;
