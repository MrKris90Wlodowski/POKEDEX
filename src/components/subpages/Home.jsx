import PokemonContainer from "../features/pokemon/PokemonContainer";
import SearchBarPokemon from "../features/pokemon/SearchBarPokemon";
import Text from "../shared/Text";
import Wrapper from "../shared/Wrapper";

const Home = () => {
  return (
    <Wrapper>
      <Text tag="h1">HOME POKEDEX</Text>
      <SearchBarPokemon/>
      <PokemonContainer/>
    </Wrapper>
  );
};

export default Home;
