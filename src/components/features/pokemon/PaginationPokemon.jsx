import Wrapper from "../../shared/Wrapper";
import Button from "../../shared/Button";
import Text from "../../shared/Text";
import useTheme from "../../../hooks/useTheme";

const PaginationPokemon = ({ currentPage, lastPage, onChange }) => {
  const { theme } = useTheme();

  return (
    <Wrapper className="flex gap-4 my-7">
      <Button
        disabled={currentPage === 1}
        onClick={() => onChange("FIRST")}
        variant="default"
        className="text-[var(--yellow)] font-semibold text-2xl border-4 p-3 rounded-2xl"
      >
        FIRST
      </Button>
      <Button
        disabled={currentPage === 1}
        onClick={() => onChange("PREV")}
        variant="default"
        className="text-[var(--yellow)] font-semibold text-2xl border-4 p-3 rounded-2xl"
      >
        PREV
      </Button>
      <Wrapper
        variant={theme}
        className="flex items-center justify-center border-2 rounded-lg w-11"
      >
        <Text>{currentPage}</Text>
      </Wrapper>
      <Button
        disabled={currentPage === lastPage}
        onClick={() => onChange("NEXT")}
        variant="default"
        className="text-[var(--yellow)] font-semibold text-2xl border-4 p-3 rounded-2xl"
      >
        NEXT
      </Button>
      <Button
        disabled={currentPage === lastPage}
        onClick={() => onChange("LAST")}
        variant="default"
        className="text-[var(--yellow)] font-semibold text-2xl border-4 p-3 rounded-2xl"
      >
        LAST
      </Button>
    </Wrapper>
  );
};

export default PaginationPokemon;
