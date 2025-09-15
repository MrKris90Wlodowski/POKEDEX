import Wrapper from "../shared/Wrapper";
// import Text from "../shared/Text";
import Button from "../shared/Button";
import PokemonCard from "../features/pokemon/PokemonCard";
import picturePokeball from "../../icons/pokeball.png";
import { Flag } from "lucide-react";

const Arena = () => {

  return (
    <Wrapper className="flex justify-center items-center gap-8">
      <PokemonCard
        name="BLUE"
        height="TOO SMALL"
        exp="Rookie"
        sourceImg={picturePokeball}
        className="w-48 h-76"
      />
      <Button variant="default" className="text-[var(--yellow)] font-semibold text-2xl border-4 p-3 rounded-2xl w-40">
        BATTLE
      </Button>
      <PokemonCard
        name="RED"
        height="TOO SMALL"
        exp="Rookie"
        sourceImg={picturePokeball}
        className="w-48 h-76"
      />
    </Wrapper>
  );
};

export default Arena;
