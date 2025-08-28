import Wrapper from "../../shared/Wrapper";
import Text from "../../shared/Text";
import Image  from "../../shared/Image";

const PokemonCard = ({ sourceImg, name, height, weight, exp, ability }) => {
    return (
        <Wrapper>
            <Wrapper>
                <Image src={sourceImg} alt={name}/>
            </Wrapper>
            <Text tag="h3">{name}</Text>
            <Wrapper>
                <Text strong={"HEIGHT:"}> {height}</Text>
                <Text strong={"WEIGHT:"}> {weight}</Text>
                <Text strong={"BASE EXP:"}> {exp}</Text>
                <Text strong={"ABILITY:"}> {ability}</Text>
            </Wrapper>
        </Wrapper>
    )
}

export default PokemonCard;