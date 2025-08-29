import Wrapper from "../shared/Wrapper"
import Text  from "../shared/Text";

const Footer = () => {
    return (
        <Wrapper className="flex justify-center bg-blue-500">
            <footer>
                <Text className="py-4 text-3xl text-white-500 font-bold ">&copy; 2025 Krzysztof Włodowski. All rights reserved.</Text>
            </footer>
        </Wrapper>
    )
}

export default Footer; 