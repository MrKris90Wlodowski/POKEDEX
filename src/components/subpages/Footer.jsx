import Wrapper from "../shared/Wrapper"
import Text  from "../shared/Text";

const Footer = () => {
    return (
        <Wrapper className="flex justify-center bg-blue-500 border-4 border-[var(--yellow)]">
            <footer>
                <Text className="py-4 2xl:text-4xl md:text-3xl sm:text-2xl text-xs font-bold text-[var(--yellow)] ">&copy; 2025 Krzysztof Włodowski. All rights reserved.</Text>
            </footer>
        </Wrapper>
    )
}

export default Footer; 