import Input from "../../shared/Input"
import { useState } from "react"

const SearchBarPokemon = ({onSearch }) => {
    const [value, setValue] = useState("");
    console.log(value);

    const handleChange = (e) => {
        const inputValue = e.target.value;
        setValue(inputValue);
        onSearch(inputValue);
    }

    return (
        <Input id="searchBar" placeholder="search poke :)" value={value} onChange={handleChange}/>
    )
}
export default SearchBarPokemon