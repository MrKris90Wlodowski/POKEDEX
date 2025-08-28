import PokemonContainer from "../features/pokemon/PokemonContainer";
import Text from "../shared/Text";
import Wrapper from "../shared/Wrapper";

const Home = () => {
  return (
    <Wrapper>
      <Text tag="h1">HOME POKEDEX</Text>
      <PokemonContainer/>
    </Wrapper>
  );
};

export default Home;
