// IMPORTS
import Wrapper from "../shared/Wrapper"
import SortButtons from "../features/pokemon/SortButtons"
import usePokemonsArrayAPI from "../../hooks/usePokemonsArrayAPI"
import PokemonsUniversalConteiner from "../features/pokemon/PokemonsUniversalConteiner"
import { useState } from "react"
import useAuth from "../../hooks/useAuth"

// COMPONENT
const Ranking = () => {
  // VARIABLES / STATE
  const { pokemonsUser, pokemonData } = useAuth();
  const { pokemonsList } = usePokemonsArrayAPI();
  const [pokemonsSort, setPokemonsSort] = useState(pokemonsUser);
  console.log(pokemonsUser.length);

  const mapPropsRanking = (poke) => ({
    id: String(poke.id).includes("-") ? (poke.id).split("-")[0] : poke.id,
    name: poke.name,
    exp: poke.exp || poke.base_experience,
    weight: poke.weight,
    height: poke.height,
    ability: poke.ability || poke.abilities[0].ability.name,
    sourceImg: poke.image || poke.sprites.other["official-artwork"].front_default,
    isRecord: true,
    winBattle: poke.winBattle ?? 0,
    lossBattle: poke.lossBattle ?? 0,
    className: "h-auto" 
  })

  // FUNCTIONS
  const handleSort = (action) => {
    if (action === "WEIGHT") {
      const weightSort = [...pokemonsSort].sort((a, b) => b.weight - a.weight)
      setPokemonsSort(weightSort)
    }
    if (action === "HEIGHT") {
      const heightSort = [...pokemonsSort].sort((a, b) => b.height - a.height)
      setPokemonsSort(heightSort)
    }
    if (action === "EXP") {
      const expSort = [...pokemonsSort].sort((a, b) => (b.base_experience || b.exp) - (a.base_experience || a.exp))
      setPokemonsSort(expSort)
    }
    if (action === "RECORD") {
      const expSort = [...pokemonsSort].sort((a, b) => (b.winBattle || 0) - (a.winBattle || 0))
      setPokemonsSort(expSort)
    }
  }

  // RENDER
  return (
    <Wrapper className="flex flex-col items-center justify-center">
      <SortButtons onSort={handleSort} />
      <PokemonsUniversalConteiner
        pokemonsArray={pokemonsSort}
        mapProps={mapPropsRanking}
        className="flex flex-col gap-8"
      />
    </Wrapper>
  )
}

// EXPORT
export default Ranking
