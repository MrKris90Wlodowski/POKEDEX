// IMPORTS
import { useState, useEffect } from "react"
// import PokemonContainer from "../features/pokemon/PokemonContainer"
import SearchBarPokemon from "../features/pokemon/SearchBarPokemon"
import Wrapper from "../shared/Wrapper"
// import { hash } from "zod"
import PaginationPokemon from "../features/pokemon/PaginationPokemon"
import usePokemonAPI from "../../hooks/usePokemonAPI"
import useAuth from "../../hooks/useAuth"
import PokemonsUniversalConteiner from "../features/pokemon/PokemonsUniversalConteiner"
import clsx from "clsx"
import useTheme from "../../hooks/useTheme"

// COMPONENT
const Home = () => {
  // VARIABLES / STATE
  const [searchValue, setSearchValue] = useState("");
  const { theme } = useTheme();
  const basePokeCardClass = "w-48 h-76 p-4 border-4 rounded-2xl"
  const themeClass = {
    light: "hover:bg-[var(--white)] relative hover:z-10 transform transition-transform-colors duration-300 ease-in-out hover:scale-150",
    dark: "hover:bg-[var(--black)] relative hover:z-10 transform transition-transform-colors duration-300 ease-in-out hover:scale-150",
  }
  const pokeCardClass = clsx(basePokeCardClass, themeClass[theme])

  // FUNCTIONS
  const handleSearch = (value) => {
    setSearchValue(value)
  }

  const mapPropsHome = (poke) => ({
    id: poke.id,
    name: poke.name,
    exp: poke.exp || poke.base_experience,
    weight: poke.weight,
    height: poke.height,
    ability: poke.ability || poke.abilities[0].ability.name,
    sourceImg: poke.image || poke.sprites.other["official-artwork"].front_default,
    className: pokeCardClass,
  })

  // VARIABLES / STATE (Pagination)
  const [currentPage, setCurrentPage] = useState(1)
  const [recordsLength, setRecordsLength] = useState(0)
  const lastPage = Math.ceil(recordsLength / 15)

  // FUNCTIONS (Pagination)
  const handleChangePage = (action) => {
    if (action === "FIRST") setCurrentPage(1)
    if (action === "PREV") setCurrentPage((prev) => prev - 1)
    if (action === "NEXT") setCurrentPage((prev) => prev + 1)
    if (action === "LAST") setCurrentPage(lastPage)
  }

  // VARIABLES / STATE (Pokemons API)
  // const { pokemonData } = useAuth();
  const { error, pokemonsList, loading } = usePokemonAPI()

  // const userCreatePokemon = pokemonData?.filter((poke) => poke.isEdit === true);
  // const userPokemon = [...pokemonsList, ...userCreatePokemon];

  const filteredArrayPokemons = pokemonsList.filter((poke) =>
    poke.name.toLowerCase().includes(searchValue.trim().toLowerCase())
  )

  const firstIndex = (currentPage - 1) * 15
  const lastIndex = currentPage * 15

  const paginationArrayPokemons = filteredArrayPokemons.slice(firstIndex, lastIndex)

  useEffect(() => {
    setRecordsLength(filteredArrayPokemons.length)
  }, [filteredArrayPokemons])

  // RENDER
  return (
    <Wrapper className="flex flex-col items-center justify-center">
      <SearchBarPokemon onSearch={handleSearch} value={searchValue} />

      <PokemonsUniversalConteiner
        className="grid xl:grid-cols-5 gap-6 p-6 md:grid-cols-3"
        error={error}
        loading={loading}
        pokemonsArray={paginationArrayPokemons}
        mapProps={mapPropsHome}
        showLink={true}
        linkPrefix={"/pokemons"}
      />

      <PaginationPokemon
        currentPage={currentPage}
        lastPage={lastPage}
        onChange={handleChangePage}
      />
    </Wrapper>
  )
}

// EXPORT
export default Home
