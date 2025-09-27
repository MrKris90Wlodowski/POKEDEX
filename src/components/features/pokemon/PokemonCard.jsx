// IMPORTS
import Wrapper from "../../shared/Wrapper";
import Text from "../../shared/Text";
import Image from "../../shared/Image";
import useTheme from "../../../hooks/useTheme";
import clsx from "clsx";
import Button from "../../shared/Button";
import { Flag } from "lucide-react";

// COMPONENT
const PokemonCard = ({
  sourceImg,
  name,
  height,
  weight,
  exp,
  ability,
  id,
  winBattle,
  lossBattle,
  className,
  onClick,
  isRecord,
  isEdit,
  isFight,
  onClickFlag,
}) => {
  // THEME CONTEXT
  const { theme } = useTheme();

  // CLASSES
  const basePokeCardClass = "w-48 h-90 p-4 border-4 rounded-2xl relative";
  const pokeCardClass = clsx(basePokeCardClass, className);

  // RENDER
  return (
    <Wrapper className={pokeCardClass}>
      {/* IMAGE */}
      <Wrapper className="flex items-center justify-center border-2 rounded-2xl mb-12">
        {sourceImg && <Image src={sourceImg} alt={name} className="w-24 h-24" />}
      </Wrapper>

      {/* FLAG BUTTON FOR FIGHT */}
      {isFight && (
        <Wrapper className="absolute right-4 top-32 cursor-pointer">
          <Flag onClick={onClickFlag} />
        </Wrapper>
      )}

      {/* NAME */}
      <Text tag="h3" className="my-2 font-black uppercase">
        {name}
      </Text>

      {/* DETAILS */}
      <Wrapper>
        {id && <Text strong={"ID:"}> {id}</Text>}
        {height && <Text strong={"HEIGHT:"}> {height / 10} m</Text>}
        {weight && <Text strong={"WEIGHT:"}> {weight / 10} kg</Text>}
        {exp && <Text strong={"BASE EXP:"}> {exp}</Text>}
        {ability && <Text strong={"ABILITY:"}> {ability}</Text>}

        {/* RECORD STATS */}
        {isRecord && (
          <Wrapper className="flex gap-8">
            <Text className="font-bold text-green-700">WIN: {winBattle}</Text>
            <Text className="font-bold text-red-700">LOSS: {lossBattle}</Text>
          </Wrapper>
        )}

        {/* EDIT BUTTON */}
        {isEdit && (
          <Button
            onClick={onClick}
            variant="default"
            className="text-[var(--yellow)] font-semibold text-2xl border-4 p-3 rounded-2xl w-40"
          >
            EDIT
          </Button>
        )}
      </Wrapper>
    </Wrapper>
  );
};

// EXPORTS
export default PokemonCard;
