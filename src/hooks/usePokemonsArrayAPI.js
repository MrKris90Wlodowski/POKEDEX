// IMPORTS
import { useContext } from "react"
import { PokemonsTheme } from "../context/PokemonsContext"

// HOOK
const usePokemonsArrayAPI = () => useContext(PokemonsTheme);

// EXPORT
export default usePokemonsArrayAPI;
