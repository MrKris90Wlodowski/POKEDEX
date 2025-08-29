import { useState } from "react";
import PokemonContainer from "../features/pokemon/PokemonContainer";
import SearchBarPokemon from "../features/pokemon/SearchBarPokemon";
import Text from "../shared/Text";
import Wrapper from "../shared/Wrapper";
import { hash } from "zod";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    setSearchValue(value)
  }

  return (
    <Wrapper>
      <Text tag="h1">HOME POKEDEX</Text>
      <SearchBarPokemon onSearch={handleSearch} value={searchValue}/>
      <PokemonContainer/>
    </Wrapper>
  );
};

export default Home;
