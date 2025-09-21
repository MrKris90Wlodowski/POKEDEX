import Input from "../../shared/Input";
import Wrapper from "../../shared/Wrapper";
import useTheme from "../../../hooks/useTheme"

const SearchBarPokemon = ({ onSearch, value }) => {
  const { theme } = useTheme();
  const handleChange = (e) => {
    const inputValue = e.target.value;
    onSearch(inputValue);
  };

  return (
    <Wrapper className="flex items-center justify-center">
      <Input
        id="searchBar"
        placeholder="search poke :)"
        value={value}
        variant={theme}
        className= "h-12 mb-8 border-4 md:w-96 rounded-4xl focus:outline-none w-56"
        onChange={handleChange}
      />
    </Wrapper>
  ); 
};
export default SearchBarPokemon;
