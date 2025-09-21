import Wrapper from "../../shared/Wrapper";
import Text from "../../shared/Text";
import Image from "../../shared/Image";
import useTheme from "../../../hooks/useTheme";
import clsx from "clsx";
import Button from "../../shared/Button";
import { Flag } from "lucide-react";


const PokemonCard = ({
  sourceImg,
  name,
  height,
  weight,
  exp,
  ability,
  id,
  className,
  onClick,
  isRecord,
  isEdit,
  isFight
}) => {
  const { theme } = useTheme();

  const basePokeCardClass = "w-48 h-90 p-4 border-4 rounded-2xl relative";
  const pokeCardClass = clsx(basePokeCardClass, className);
  return (
    <Wrapper className={pokeCardClass}>
      <Wrapper className="flex items-center justify-center border-2 rounded-2xl mb-12">
        {sourceImg && (
          <Image src={sourceImg} alt={name} className="w-24 h-24" />
        )}
      </Wrapper>
      { isFight &&
        <Wrapper className="absolute right-4 top-32">
          <Flag/>
        </Wrapper>
      }
      <Text tag="h3" className="my-2 font-black uppercase">
        {name}
      </Text>
      <Wrapper>
        {id && <Text strong={"ID:"}> {id}</Text>}
        {height && <Text strong={"HEIGHT:"}> {height / 10} m</Text>}
        {weight && <Text strong={"WEIGHT:"}> {weight / 10} kg</Text>}
        {exp && <Text strong={"BASE EXP:"}> {exp}</Text>}
        {ability && <Text strong={"ABILITY:"}> {ability}</Text>}
        {isRecord && (
          <Wrapper className="flex gap-8">
            <Text className="font-bold text-green-700">WIN:</Text>
            <Text className="font-bold text-red-700">LOSS:</Text>
          </Wrapper>
        )}
        {isEdit && 
        <Button onClick={onClick} variant="default" className="text-[var(--yellow)] font-semibold text-2xl border-4 p-3 rounded-2xl w-40">EDIT</Button>
        }
      </Wrapper>
    </Wrapper>
  );
};

export default PokemonCard;
