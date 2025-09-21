// IMPORTS
import Wrapper from "../../shared/Wrapper";
import Button from "../../shared/Button";
import Text from "../../shared/Text";
import useTheme from "../../../hooks/useTheme";

// COMPONENT
const PaginationPokemon = ({ currentPage, lastPage, onChange }) => {
  // THEME CONTEXT
  const { theme } = useTheme();

  // RENDER
  return (
    <Wrapper className="flex md:flex-row gap-4 my-7 flex-col justify-center items-center">
      {/* FIRST PAGE BUTTON */}
      <Button
        disabled={currentPage === 1}
        onClick={() => onChange("FIRST")}
        variant="default"
        className="text-[var(--yellow)] font-semibold text-2xl border-4 p-3 rounded-2xl w-40"
      >
        FIRST
      </Button>

      {/* PREVIOUS PAGE BUTTON */}
      <Button
        disabled={currentPage === 1}
        onClick={() => onChange("PREV")}
        variant="default"
        className="text-[var(--yellow)] font-semibold text-2xl border-4 p-3 rounded-2xl w-40"
      >
        PREV
      </Button>

      {/* CURRENT PAGE DISPLAY */}
      <Wrapper
        variant={theme}
        className="flex items-center justify-center border-4 rounded-lg w-14 h-14"
      >
        <Text>{currentPage}</Text>
      </Wrapper>

      {/* NEXT PAGE BUTTON */}
      <Button
        disabled={currentPage === lastPage}
        onClick={() => onChange("NEXT")}
        variant="default"
        className="text-[var(--yellow)] font-semibold text-2xl border-4 p-3 rounded-2xl w-40"
      >
        NEXT
      </Button>

      {/* LAST PAGE BUTTON */}
      <Button
        disabled={currentPage === lastPage}
        onClick={() => onChange("LAST")}
        variant="default"
        className="text-[var(--yellow)] font-semibold text-2xl border-4 p-3 rounded-2xl w-40"
      >
        LAST
      </Button>
    </Wrapper>
  );
};

// EXPORTS
export default PaginationPokemon;
