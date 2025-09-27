// IMPORT
import Wrapper from "../shared/Wrapper";
import Button from "../shared/Button";
import PokemonCard from "../features/pokemon/PokemonCard";
import picturePokeball from "../../icons/pngimg.com - pokeball_PNG21.png";
import useAuth from "../../hooks/useAuth";
import useBattlePoke from "../../services/useBattlePoke";
import clsx from "clsx";
import { useState } from "react";
import useFight from "../../services/useFight";
import { useSnackbar } from "notistack";

// VARIABLES / STATE
const Arena = () => {
  const { pokemonData } = useAuth();
  const { surrenderPoke } = useBattlePoke();
  const { fightResultPoke } = useFight();
  const { enqueueSnackbar } = useSnackbar();

  const arenaWarriors = pokemonData?.filter((poke) => poke.isBattle);
  const arenaCounter = arenaWarriors?.length || 0;
  const blueWarrior = arenaWarriors[0];
  const redWarrior =
    arenaCounter === 2 ? arenaWarriors[arenaWarriors.length - 1] : null;

  const [endFight, setEndFight] = useState(false);
  const [winner, setWinner] = useState(null);
  const [losser, setLosser] = useState(null);

  const basePokeCard = "w-48 h-auto";

  const blueClass = clsx(
    basePokeCard,
    blueWarrior === losser && endFight ? "filter grayscale opacity-50" : ""
  );

  const redClass = clsx(
    basePokeCard,
    redWarrior === losser && endFight ? "filter grayscale opacity-50" : ""
  );

  // FUNCTIONS
  const handleFight = (bluePoke, redPoke) => {
    const bluePokePower = bluePoke.exp * bluePoke.weight;
    const redPokePower = redPoke.exp * redPoke.weight;

    let winnerPoke = null;
    let losserPoke = null;

    if (bluePokePower > redPokePower) {
      winnerPoke = bluePoke;
      losserPoke = redPoke;
    } else if (bluePokePower < redPokePower) {
      winnerPoke = redPoke;
      losserPoke = bluePoke;
    }

    setWinner(winnerPoke);
    setLosser(losserPoke);

    if (winnerPoke && losserPoke) {
      fightResultPoke(winnerPoke, enqueueSnackbar, true);
      fightResultPoke(losserPoke, enqueueSnackbar, false);
    }

    setEndFight(true);

    console.log("WINNER:", winnerPoke);
    console.log("LOSER:", losserPoke);
  };

  const handleAfterFight = () => {
    setWinner(null);
    setLosser(null);
    setEndFight(false);
    surrenderPoke(redWarrior);
    surrenderPoke(blueWarrior);
  };

  // RENDER
  return (
    <Wrapper className="flex md:flex-row flex-col justify-center items-center gap-8">
      <PokemonCard
        name={blueWarrior?.name ?? "BLUE"}
        exp={blueWarrior?.exp ?? "Rookie"}
        weight={blueWarrior?.weight ?? 1}
        sourceImg={blueWarrior?.image ?? picturePokeball}
        className={blueClass}
        isFight={true}
        onClickFlag={() => surrenderPoke(blueWarrior)}
      />
      <Wrapper className="flex flex-col gap-8">
        <Button
          variant="default"
          className="text-[var(--yellow)] font-semibold text-2xl border-4 p-3 rounded-2xl w-40"
          disabled={arenaCounter < 2 || endFight}
          onClick={() => handleFight(blueWarrior, redWarrior)}
        >
          BATTLE
        </Button>

        {endFight && (
          <Button
            variant="default"
            className="text-[var(--yellow)] font-semibold text-2xl border-4 p-3 rounded-2xl w-40"
            onClick={() => {
              handleAfterFight();
            }}
          >
            LEAVE
          </Button>
        )}
      </Wrapper>
      <PokemonCard
        name={redWarrior?.name ?? "RED"}
        exp={redWarrior?.exp ?? "Rookie"}
        weight={redWarrior?.weight ?? 1}
        sourceImg={redWarrior?.image ?? picturePokeball}
        className={redClass}
        isFight={true}
        onClickFlag={() => surrenderPoke(redWarrior)}
      />
    </Wrapper>
  );
};

// EXPORT
export default Arena;
