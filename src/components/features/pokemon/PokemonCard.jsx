import Wrapper from "../../shared/Wrapper";
import Text from "../../shared/Text";
import Image  from "../../shared/Image";

const PokemonCard = ({ sourceImg, name, height, weight, exp, ability }) => {
    return (
        <Wrapper className="w-48 h-auto p-4 border-2 border-white rounded-2xl">
            <Wrapper className="flex items-center justify-center border-2 border-white rounded-2xl">
                <Image src={sourceImg} alt={name}/>
            </Wrapper>
            <Text tag="h3" className="my-2 font-black">{name}</Text>
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