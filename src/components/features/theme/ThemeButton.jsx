import Button from "../../shared/Button";
import Wrapper from "../../shared/Wrapper";
import useTheme from "../../../hooks/useTheme";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Wrapper>
      <Button variant={theme} onClick={toggleTheme}>
        <Wrapper>
          <Sun />
          <Moon />
        </Wrapper>
      </Button>
    </Wrapper>
  );
};

export default ThemeButton;
