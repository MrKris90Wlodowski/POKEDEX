import Input from "../../shared/Input";
import Wrapper from "../../shared/Wrapper";

const SearchBarPokemon = ({ onSearch, value }) => {
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
        className="h-12 my-8 w-96 rounded-4xl"
        onChange={handleChange}
      />
    </Wrapper>
  ); 
};
export default SearchBarPokemon;
