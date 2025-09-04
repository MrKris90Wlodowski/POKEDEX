import Wrapper from "../../shared/Wrapper";
import Image from "../../shared/Image";
import Text from "../../shared/Text";
import { useParams } from "react-router-dom";
import useTheme from "../../../hooks/useTheme";
import useAuth from "../../../hooks/useAuth";
import { Heart } from "lucide-react";
import { Sword } from "lucide-react";

const ExtendPokemonCard = () => {
  const { pokemon } = useParams();
  const { theme } = useTheme();
  const { log } = useAuth();
  console.log(pokemon);

  return (
    <Wrapper
      className="flex gap-8 p-8 border-4 w-5xl rounded-4xl"
      variantBackground={theme}
    >
      <Wrapper className="border-4 rounded-4xl h-96 w-96" variant={theme}>
        <Image />
      </Wrapper>
      <Wrapper className="flex flex-col justify-between">
        <Wrapper className="flex" variantLog={log}>
          <Text className="text-2xl font-black text-green-700">W:</Text>
          <Text className="text-2xl font-black text-red-700">L:</Text>
          <Sword />
          <Heart />
        </Wrapper>
        <Wrapper>
          <Text tag="h3" className="my-2 font-black uppercase">
            POKE
          </Text>
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
