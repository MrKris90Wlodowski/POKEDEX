import Wrapper from "../shared/Wrapper";
import Text from "../shared/Text";
import useDownloadUserPoke from "../../services/useDownloadUserPoke";
import PokemonFavourite from "../features/pokemon/PokemonFavourite";

const Favourite = () => {
  const { userPokemons } = useDownloadUserPoke();
  const favorPokemons = userPokemons.filter(poke => poke.isFavor === true);
  console.log(favorPokemons);
  console.log(userPokemons);

  return (
    <Wrapper>
      { !favorPokemons &&
      <Text className="text-6xl font-black">HEY TRAINER! ADD YOUR FAVOURITE POKE :)</Text>
      }
      { favorPokemons &&
        <PokemonFavourite pokemonsArray={favorPokemons}/>
      }
    </Wrapper>
  );
};

export default Favourite;
