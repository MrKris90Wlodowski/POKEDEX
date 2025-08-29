import Input from "../../shared/Input"

const SearchBarPokemon = ({onSearch, value}) => {

    const handleChange = (e) => {
        const inputValue = (e.target.value);
        onSearch(inputValue);
    }

    return (
        <Input id="searchBar" placeholder="search poke :)" value={value} onChange={handleChange}/>
    )
}
export default SearchBarPokemon