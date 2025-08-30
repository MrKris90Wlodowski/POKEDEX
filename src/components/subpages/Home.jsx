import { useState } from "react";
import PokemonContainer from "../features/pokemon/PokemonContainer";
import SearchBarPokemon from "../features/pokemon/SearchBarPokemon";
import Wrapper from "../shared/Wrapper";
import { hash } from "zod";
import PaginationPokemon from "../features/pokemon/PaginationPokemon";

const Home = () => {
  // State and handle SearchBarPokemon
  const [searchValue, setSearchValue] = useState("");

  const handleRecordLength = (recLength) => {
    setRecordsLength(recLength)
  }
  const handleSearch = (value) => {
    setSearchValue(value)
  }
  
  // State and handle PaginationPokemon
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsLength, setRecordsLength] = useState(0);
  const lastPage = Math.ceil(recordsLength / 15);

  const handleChangePage = (action) => {
    if (action === "FIRST") {setCurrentPage(1)} 
    if (action === "PREV") {setCurrentPage(prev => prev - 1)}
    if (action === "NEXT") {setCurrentPage(prev => prev + 1)}
    if (action === "LAST") {setCurrentPage(prev => lastPage)}
  } 

  return (
    <Wrapper>
      <SearchBarPokemon onSearch={handleSearch} value={searchValue}/>
      <PokemonContainer className="grid grid-cols-5 gap-6 p-6" value={searchValue} onRecordLength={handleRecordLength}/>
      <PaginationPokemon currentPage={currentPage} lastPage={lastPage} onChange={handleChangePage}/>
    </Wrapper>
  );
};

export default Home;
