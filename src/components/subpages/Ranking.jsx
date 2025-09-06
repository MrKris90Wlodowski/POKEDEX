import Wrapper from "../shared/Wrapper";
import SortButtons from "../features/pokemon/SortButtons";
import usePokemonsArrayAPI from "../../hooks/usePokemonsArrayAPI";
import PokemonContainer from "../features/pokemon/PokemonContainer";
import PokemonRanking from "../features/pokemon/PokemonRanking";
import { useState } from "react";

const Ranking = () => {
  const { pokemonsList } = usePokemonsArrayAPI();
  const [pokemonsSort, setPokemonsSort] = useState(pokemonsList)

  const handleSort = (action) => {
    if (action === "WEIGHT") {
      const weightSort = [...pokemonsSort].sort((a,b) => b.weight - a.weight)
      setPokemonsSort(weightSort);
    }
    if (action === "HEIGHT") {
      const weightSort = [...pokemonsSort].sort((a,b) => b.height - a.height)
      setPokemonsSort(weightSort);
    }
    if (action === "EXP") {
      const weightSort = [...pokemonsSort].sort((a,b) => b.base_experience - a.base_experience)
      setPokemonsSort(weightSort);
    }
  }

  console.log(pokemonsSort);
  return (
    <Wrapper className="flex flex-col items-center justify-center">
      <SortButtons onSort={handleSort}/>
      <PokemonRanking pokemonsArray={pokemonsSort} className="flex flex-col gap-8 "/>
    </Wrapper>
  );
};

export default Ranking;