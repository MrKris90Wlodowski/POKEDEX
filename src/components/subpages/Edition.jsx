// IMPORT
import Button from "../shared/Button";
// import Text from "../shared/Text";
import Wrapper from "../shared/Wrapper";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState, useEffect } from "react";
import PokemonsUniversalConteiner from "../features/pokemon/PokemonsUniversalConteiner";

// COMPONENT
const Edition = () => {
  // STATE
  const [editPoke, setEditPoke] = useState([]);
  const { pokemonData } = useAuth();
  const navigate = useNavigate();

  // FUNCTIONS
  const handleNavigateToCreateForm = () => {
    navigate("/edition/create-pokemon");
  };

  const handleNavigateToEditForm = (id) => {
    navigate(`/edition/edit-pokemon/${id}`);
  };

  const mapPropsEdition = (poke) => ({
    id: poke.id,
    name: poke.name,
    sourceImg: poke.image,
    isEdit: true,
    onClick: () => handleNavigateToEditForm(poke.id),
    className: "h-auto",
  });

  // EFFECTS
  useEffect(() => {
    const isEditPoke = pokemonData?.filter((poke) => poke.isEdit === true);
    setEditPoke(isEditPoke);
  }, [pokemonData]);

  // RENDER
  return (
    <Wrapper className="flex flex-col justify-center items-center gap-8">

      {/* CREATE POKEMON BUTTON */}
      <Button
        onClick={handleNavigateToCreateForm}
        className="text-[var(--yellow)] font-semibold text-2xl border-4 p-3 rounded-2xl w-80 bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out"
      >
        CREATE POKEMON
      </Button>

      {/* POKEMON CARDS LIST */}
      <PokemonsUniversalConteiner
        pokemonsArray={editPoke}
        showLink={false}
        mapProps={mapPropsEdition}
        className="flex flex-col justify-center items-center gap-8"
      />

    </Wrapper>
  );
};

// EXPORT
export default Edition;
