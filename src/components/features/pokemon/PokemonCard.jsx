import Wrapper from "../../shared/Wrapper";
import Text from "../../shared/Text";
import Image  from "../../shared/Image";
import useTheme from "../../../hooks/useTheme";

const PokemonCard = ({ sourceImg, name, height, weight, exp, ability }) => {
    const { theme } = useTheme();
    return (
        <Wrapper className="w-48 h-76 p-4 border-4 rounded-2xl">
            <Wrapper className="flex items-center justify-center border-2 rounded-2xl">
                <Image src={sourceImg} alt={name} className="w-24 h-24"/>
            </Wrapper>
            <Text tag="h3" className="my-2 font-black uppercase">{name}</Text>
            <Wrapper> 
                <Text strong={"HEIGHT:"}> {height/10} m</Text>
                <Text strong={"WEIGHT:"}> {weight/10} kg</Text>
                <Text strong={"BASE EXP:"}> {exp}</Text>
                <Text strong={"ABILITY:"}> {ability}</Text>
            </Wrapper>
        </Wrapper>
    )
}

export default PokemonCard;