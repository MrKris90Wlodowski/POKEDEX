import { useContext } from "react"
import { PokeAPITheme } from "../context/PokeAPI"
const usePokeList = () => useContext(PokeAPITheme);

export default usePokeList;