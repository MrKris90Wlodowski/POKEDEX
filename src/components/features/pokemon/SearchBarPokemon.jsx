// IMPORTS
import Input from "../../shared/Input";
import Wrapper from "../../shared/Wrapper";
import useTheme from "../../../hooks/useTheme";

// COMPONENT
const SearchBarPokemon = ({ onSearch, value }) => {
  // THEME CONTEXT
  const { theme } = useTheme(); 

  // HANDLER
  const handleChange = (e) => {
    const inputValue = e.target.value;
    onSearch(inputValue);
  };

  // RENDER
  return (
    <Wrapper className="flex items-center justify-center">
      <Input
        id="searchBar"
        placeholder="search poke :)"
        value={value} 
        variant={theme} 
        className="h-12 mb-8 border-4 md:w-96 rounded-4xl focus:outline-none w-56"
        onChange={handleChange}
      />
    </Wrapper>
  );
};

// EXPORTS
export default SearchBarPokemon;
