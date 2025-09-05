import { useContext } from "react"
import { PokemonsTheme } from "../context/PokemonsContext"
const usePokemonsArrayAPI = () => useContext(PokemonsTheme);

export default usePokemonsArrayAPI;