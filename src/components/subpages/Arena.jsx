import Wrapper from "../shared/Wrapper";
// import Text from "../shared/Text";
import Button from "../shared/Button";
import PokemonCard from "../features/pokemon/PokemonCard"

const Arena = () => {
  return (
    <Wrapper>
      <PokemonCard/>
      <Button>BATTLE</Button>
      <PokemonCard/>
    </Wrapper>
  );
};

export default Arena;