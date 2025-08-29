import { useState } from "react";
import Wrapper from "../../shared/Wrapper";
import Button from "../../shared/Button";
import Text from "../../shared/Text";

const PaginationPokemon = () => {
    const [currentPage, setCurrentPage] = useState(1);

  return (
    <Wrapper className="flex gap-4">
      <Button onClick={() => setCurrentPage(prev => prev -1)}>PREV</Button>
      <Text>{currentPage}</Text>
      <Button onClick={() => setCurrentPage(prev => prev + 1)}>NEXT</Button>
    </Wrapper>
  );
};

export default PaginationPokemon;
