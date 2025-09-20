import { Link } from "react-router-dom";
import Wrapper from "../../shared/Wrapper";
import PokemonCard from "./PokemonCard";

const PokemonsUniversalConteiner = ({
  error,
  loading,
  pokemonsArray = [],
  showLink,
  linkPrefix,
  className,
  mapProps
}) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>error:{error.message}</p>;

  return (
    <Wrapper className={className}>
       {pokemonsArray.map((poke) => {
        const cardProps = mapProps ? mapProps(poke) : poke;
        return showLink ? (
          <Link key={poke.id} to={`${linkPrefix}/${poke.id}`}>
            <PokemonCard {...cardProps} />
          </Link>
        ) : (
          <PokemonCard key={poke.id} {...cardProps} />
        );
      })}
    </Wrapper>
  );
};

export default PokemonsUniversalConteiner;
