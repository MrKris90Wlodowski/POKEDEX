import { createContext, useState } from "react"
import  usePokemonAPI  from "../hooks/usePokemonAPI"

const PokeAPITheme = createContext();

const PokeAPIProvider = ({children}) => {
    const { error, pokemonsList, loading } = usePokemonAPI();
    return (
        <PokeAPITheme.Provider value={{error, pokemonsList, loading}}>
            {children}
        </PokeAPITheme.Provider>
    )
}

export { PokeAPITheme, PokeAPIProvider }
