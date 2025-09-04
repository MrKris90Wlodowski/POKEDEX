import Wrapper from "../../shared/Wrapper";
import Image from "../../shared/Image";
import Text from "../../shared/Text";
import { useParams } from "react-router-dom";
import useTheme from "../../../hooks/useTheme";

const ExtendPokemonCard = () => {
  const { pokemon } = useParams();
  const { theme } = useTheme();
  console.log(pokemon);

  return (
    <Wrapper className="flex gap-8 p-8 border-4 w-5xl rounded-4xl" variantBackground={ theme }>
      <Wrapper className="border-4 rounded-4xl h-96 w-96" variant={ theme }>
        <Image />
      </Wrapper>
      <Wrapper>
        <Wrapper></Wrapper>
        <Wrapper> 
          <Text>POKE</Text>
          <Text strong={"HEIGHT:"}></Text>
          <Text strong={"WEIGHT:"}></Text>
          <Text strong={"BASE EXP:"}></Text>
          <Text strong={"ABILITY:"}></Text>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default ExtendPokemonCard;
