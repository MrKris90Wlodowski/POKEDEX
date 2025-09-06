import Wrapper from "../../shared/Wrapper";
import Image from "../../shared/Image";
import Text from "../../shared/Text";
import { useParams } from "react-router-dom";
import useTheme from "../../../hooks/useTheme";
import useAuth from "../../../hooks/useAuth";
import usePokemonsArrayAPI from "../../../hooks/usePokemonsArrayAPI";
import { Heart } from "lucide-react";
import { Sword } from "lucide-react";

const ExtendPokemonCard = () => {
  const { pokemon } = useParams();
  const { theme } = useTheme();
  const { log } = useAuth();
  const { pokemonsList } = usePokemonsArrayAPI();
  console.log(pokemon);

  if (!pokemonsList) return <p>Loading...</p>;
  const pokeData = pokemonsList.find((poke) => Number(pokemon) === poke.id);
  if (!pokeData) return <p>Error Poke not found</p>;

  console.log(pokeData);

  return (
    <Wrapper
      className="flex gap-8 p-8 m-8 border-4 w-5xl rounded-4xl relative"
      variantBackground={theme}
    >
      <Wrapper className="border-4 rounded-4xl h-96 w-96" variant={theme}>
        <Image
          src={pokeData.sprites.other["official-artwork"].front_default}
          alt={pokeData.name}
          className="w-96 h-96"
        />
      </Wrapper>
      <Wrapper className="flex flex-col justify-between">
        <Wrapper className="flex absolute top-8 right-8" variantLog={log}>
          <Text className="text-2xl font-bold text-green-700">WIN:</Text>
          <Text className="text-2xl font-bold text-red-700">LOSS:</Text>
          <Sword />
          <Heart />
        </Wrapper>
        <Wrapper>
          <Text tag="h3" className="my-2 font-black uppercase">
            {pokeData.name}
          </Text>
          <Text strong={"HEIGHT: "}>{pokeData.height / 10} m</Text>
          <Text strong={"WEIGHT: "}>{pokeData.weight / 10} kg</Text>
          <Text strong={"BASE EXP: "}>{pokeData.base_experience}</Text>
          <Text strong={"ABILITY: "}>{pokeData.abilities[0].ability.name}</Text>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default ExtendPokemonCard;
