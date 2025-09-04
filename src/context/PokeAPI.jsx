import { createContext, useState } from "react"
import  usePokemon  from "../hooks/usePokemon"

const PokeAPITheme = createContext();

const PokeAPIProvider = ({children}) => {
    const { error, pokemonsList, loading } = usePokemon();
    return (
        <PokeAPITheme.Provider value={{error, pokemonsList, loading}}>
            {children}
        </PokeAPITheme.Provider>
    )
}

export { PokeAPITheme, PokeAPIProvider }
