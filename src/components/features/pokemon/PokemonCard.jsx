import Wrapper from "../../shared/Wrapper";
import Text from "../../shared/Text";
import Image  from "../../shared/Image";

const PokemonCard = ({ source, name, height, weight, exp, ability }) => {
    return (
        <Wrapper>
            <Wrapper>
                <Image source={source} name={name}/>
            </Wrapper>
            <Text>{name}</Text>
            <Wrapper>
                <Text>HEIGHT: {height}</Text>
                <Text>WEIGHT: {weight}</Text>
                <Text>BASE EXP: {exp}</Text>
                <Text>ABILITY: {ability}</Text>
            </Wrapper>
        </Wrapper>
    )
}

export default PokemonCard;