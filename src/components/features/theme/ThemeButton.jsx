// IMPORTS
import Button from "../../shared/Button";
import Wrapper from "../../shared/Wrapper";
import useTheme from "../../../hooks/useTheme";
import { Sun, Moon } from "lucide-react";

// COMPONENT
const ThemeButton = () => {
  // HOOKS
  const { theme, toggleTheme } = useTheme();

  // RENDER
  return (
    <Wrapper>
      <Button variant={theme} onClick={toggleTheme}>
        <Wrapper className="flex gap-4">
          <Sun />
          <Moon />
        </Wrapper>
      </Button>
    </Wrapper>
  );
};

// EXPORT
export default ThemeButton;
