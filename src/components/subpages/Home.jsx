import { useState, useEffect } from "react";
import PokemonContainer from "../features/pokemon/PokemonContainer";
import SearchBarPokemon from "../features/pokemon/SearchBarPokemon";
import Wrapper from "../shared/Wrapper";
import { hash } from "zod";
import PaginationPokemon from "../features/pokemon/PaginationPokemon";
import usePokemon from "../../hooks/usePokemon";

const Home = () => {
  // State and handle SearchBarPokemon
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  // State and handle PaginationPokemon
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsLength, setRecordsLength] = useState(0);
  const lastPage = Math.ceil(recordsLength / 15);

  const handleChangePage = (action) => {
    if (action === "FIRST") {
      setCurrentPage(1);
    }
    if (action === "PREV") {
      setCurrentPage((prev) => prev - 1);
    }
    if (action === "NEXT") {
      setCurrentPage((prev) => prev + 1);
    }
    if (action === "LAST") {
      setCurrentPage((prev) => lastPage);
    }
  };

  // State and handle PokemonContainer
  const { error, pokemonsList, loading } = usePokemon();

  const filteredArrayPokemons = pokemonsList.filter((poke) =>
    poke.name.toLowerCase().includes(searchValue.trim().toLowerCase())
  );

  const firstIndex = (currentPage - 1) * 15;
  const lastIndex = currentPage * 15;

  const paginationArrayPokemons = filteredArrayPokemons.slice(
    firstIndex,
    lastIndex
  );

  useEffect(() => {
    setRecordsLength(filteredArrayPokemons.length);
  }, [filteredArrayPokemons]);

  return (
    <Wrapper className="flex flex-col items-center justify-center">
      <SearchBarPokemon onSearch={handleSearch} value={searchValue} />
      <PokemonContainer
        className="grid grid-cols-5 gap-6 p-6"
        error={error}
        loading={loading}
        pokemonsArray={paginationArrayPokemons}
      />
      <PaginationPokemon
        currentPage={currentPage}
        lastPage={lastPage}
        onChange={handleChangePage}
      />
    </Wrapper>
  );
};

export default Home;
