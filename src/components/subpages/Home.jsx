import { useState } from "react";
import PokemonContainer from "../features/pokemon/PokemonContainer";
import SearchBarPokemon from "../features/pokemon/SearchBarPokemon";
import Wrapper from "../shared/Wrapper";
import { hash } from "zod";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    setSearchValue(value)
  }

  return (
    <Wrapper>
      <SearchBarPokemon onSearch={handleSearch} value={searchValue}/>
      <PokemonContainer className="grid grid-cols-5 gap-6 p-6" value={searchValue}/>
    </Wrapper>
  );
};

export default Home;
