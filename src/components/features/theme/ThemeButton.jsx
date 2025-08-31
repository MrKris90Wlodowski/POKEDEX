import Button from "../../shared/Button";
import Wrapper from "../../shared/Wrapper"
import useTheme from "../../../hooks/useTheme";

const ThemeButton = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <Wrapper>
            <Button variant={theme} onClick={toggleTheme}>THEME</Button>
        </Wrapper>
    )
}

export default ThemeButton;