import Wrapper from "../shared/Wrapper";
import Button from "../shared/Button";
import PokemonCard from "../features/pokemon/PokemonCard";
import picturePokeball from "../../icons/pngimg.com - pokeball_PNG21.png";
import useAuth from "../../hooks/useAuth";
import useBattlePoke from "../../services/useBattlePoke";
import clsx from "clsx";
import { useState } from "react";

const Arena = () => {
  const { pokemonData } = useAuth();
  const { surrenderPoke } = useBattlePoke();

  const arenaWarriors = pokemonData?.filter((poke) => poke.isBattle);
  const arenaCounter = arenaWarriors?.length || 0;
  const blueWarrior = arenaWarriors[0];
  const redWarrior =
    arenaCounter === 2 ? arenaWarriors[arenaWarriors.length - 1] : null;

  const [endFight, setEndFight] = useState(false);
  const [winner, setWinner] = useState(null);
  const [losser, setLosser] = useState(null);

  const handleFight = (bluePoke, redPoke) => {
    const bluePokePower = bluePoke.exp * bluePoke.weight;
    const redPokePower = redPoke.exp * redPoke.weight;

    if (bluePokePower > redPokePower) {
      setWinner(bluePoke);
      setLosser(redPoke);
    } else if (bluePokePower < redPokePower) {
      setWinner(redPoke);
      setLosser(bluePoke);
    } else {
      setWinner(null);
      setLosser(null);
    }

    console.log("WINNER ", winner);
    console.log("LOSSER ", losser);
  };

  const basePokeCard = "w-48 h-auto";

  const blueClass = clsx(
    basePokeCard,
    blueWarrior === losser ? "filter grayscale opacity-50" : ""
  );
  const redClass = clsx(
    basePokeCard,
    redWarrior === losser ? "filter grayscale opacity-50" : ""
  );

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
        disabled={arenaCounter < 2}
        onClick={() => {
          handleFight(blueWarrior, redWarrior);
          setEndFight(true);
        }}
      >
        BATTLE
      </Button>
      {endFight && (
        <Button
          variant="default"
          className="text-[var(--yellow)] font-semibold text-2xl border-4 p-3 rounded-2xl w-40"
          onClick={() => {
            setEndFight(false);
            surrenderPoke(redWarrior);
            surrenderPoke(blueWarrior);
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

export default Arena;
