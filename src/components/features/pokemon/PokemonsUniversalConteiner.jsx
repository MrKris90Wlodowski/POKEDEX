import { Link } from "react-router-dom";
import Wrapper from "../../shared/Wrapper";
import PokemonCard from "./PokemonCard";

const PokemonsUniversalConteiner = ({
  error,
  loading,
  pokemonsArray = [],
  showLink,
  linkPrefix,
  className
}) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>error:{error.message}</p>;

  return (
    <Wrapper className={className}>
      {showLink
        ? pokemonsArray.map((poke) => (
            <Link key={poke.id} to={`${linkPrefix}/${poke.id}`}>
              <PokemonCard {...poke} />
            </Link>
          ))
        : pokemonsArray.map((poke) => <PokemonCard key={poke.id} {...poke} />)}
    </Wrapper>
  );
};

export default PokemonsUniversalConteiner;
