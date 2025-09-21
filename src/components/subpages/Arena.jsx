import Wrapper from "../shared/Wrapper";
// import Text from "../shared/Text";
import Button from "../shared/Button";
import PokemonCard from "../features/pokemon/PokemonCard";
import picturePokeball from "../../icons/pngimg.com - pokeball_PNG21.png";
import useAuth from "../../hooks/useAuth";
import useBattlePoke from "../../services/useBattlePoke";

const Arena = () => {
  const { pokemonData } = useAuth();
  const { surrenderPoke } = useBattlePoke();

  const arenaWarriors = pokemonData?.filter((poke) => poke.isBattle);
  const arenaCounter = arenaWarriors?.length || 0;
  const blueWarrior = arenaWarriors[0];
  const redWarrior = arenaCounter === 2 ? arenaWarriors[arenaWarriors.length-1] : null;
  console.log(redWarrior);

  return (
    <Wrapper className="flex md:flex-row flex-col justify-center items-center gap-8">
      <PokemonCard
        name={blueWarrior?.name ?? "BLUE"}
        exp={blueWarrior?.exp ?? "Rookie"}
        weight={blueWarrior?.weight ?? 1}
        sourceImg={blueWarrior?.image ?? picturePokeball}
        className="w-48 h-auto"
        isFight={true}
        onClickFlag={() => surrenderPoke(blueWarrior)}
      />
      <Button
        variant="default"
        className="text-[var(--yellow)] font-semibold text-2xl border-4 p-3 rounded-2xl w-40"
        disabled={arenaCounter < 2}
      >
        BATTLE
      </Button>
      <PokemonCard
        name={redWarrior?.name ?? "RED"}
        exp={redWarrior?.exp ?? "Rookie"}
        weight={redWarrior?.weight ?? 1}
        sourceImg={redWarrior?.image ?? picturePokeball}
        className="w-48 h-auto"
        isFight={true}
        onClickFlag={() => surrenderPoke(redWarrior)}
      />
    </Wrapper>
  );
};

export default Arena;
