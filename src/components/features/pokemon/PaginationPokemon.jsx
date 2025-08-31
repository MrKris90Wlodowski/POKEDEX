// import { useState } from "react";
import Wrapper from "../../shared/Wrapper";
import Button from "../../shared/Button";
import Text from "../../shared/Text";

const PaginationPokemon = ({ currentPage, lastPage, onChange }) => {

  return (
    <Wrapper className="flex gap-4 my-7">
      <Button disabled={currentPage === 1} onClick={() => onChange("FIRST")} variant="default">
        FIRST
      </Button>
      <Button disabled={currentPage === 1} onClick={() => onChange("PREV")} variant="default">
        PREV
      </Button>
      <Wrapper className="flex items-center justify-center border-2 border-white rounded-lg w-11">
        <Text>{currentPage}</Text>
      </Wrapper>
      <Button disabled={currentPage === lastPage} onClick={() => onChange("NEXT")} variant="default">
        NEXT
      </Button>
      <Button disabled={currentPage === lastPage} onClick={() => onChange("LAST")} variant="default">
        LAST
      </Button>
    </Wrapper>
  );
};

export default PaginationPokemon;
