// import CreatePokeForm from "../features/forms/CreatePokeForm";
import Button from "../shared/Button";
import Text from "../shared/Text";
import Wrapper from "../shared/Wrapper";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// import usePokemonImage from "../../hooks/usePokemonImage";

const Edition = () => {
  const { pokemonData } = useAuth()
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/edition/create-pokemon");
  };

  return (
    <Wrapper>
      <Button
        onClick={() => {
          handleNavigate();
          // console.log(pokemonsImage[7]);
        }}
        className="text-[var(--yellow)] font-semibold text-2xl border-4 p-3 rounded-2xl w-80 bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out"
      >
        CREATE POKEMON
      </Button>
      <Text>POKEMON EDIT LIST</Text>
    </Wrapper>
  );
};

export default Edition;
