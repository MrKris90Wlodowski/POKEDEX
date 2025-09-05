import { createContext } from "react"
import  usePokemonAPI  from "../hooks/usePokemonAPI"

const PokemonsTheme = createContext();

const PokemonsProvider = ({children}) => {
    const { error, pokemonsList, loading } = usePokemonAPI();
    return (
        <PokemonsTheme.Provider value={{error, pokemonsList, loading}}>
            {children}
        </PokemonsTheme.Provider>
    )
}

export { PokemonsTheme, PokemonsProvider }
