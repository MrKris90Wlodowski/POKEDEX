import { useState } from "react";
import Wrapper from "../../shared/Wrapper";
import Button from "../../shared/Button";
import Text from "../../shared/Text";

const PaginationPokemon = ({ recordLength }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [disabledPrev, setDisabledPrev] = useState(false);
  const [disabledNext, setDisabledNext] = useState(false);

  const lastPage = Math.ceil(recordLength / 15);
  console.log(lastPage);
  console.log(recordLength);

  const handleFirstPage = () => {
    setCurrentPage((prev) => 1);
    setDisabledNext(false);
  };
  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);
    setDisabledNext(false);
    if (currentPage <= 1) {
      setCurrentPage((prev) => 1);
      setDisabledPrev(true);
    }
  };
  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
    setDisabledPrev(false);
    if (currentPage >= lastPage) {
      setCurrentPage((prev) => lastPage);
      setDisabledNext(true);
    }
  };
  const HandleLastPage = () => {
    setCurrentPage((prev) => lastPage);
    setDisabledPrev(false);
  };

  return (
    <Wrapper className="flex gap-4 my-7">
      <Button disabled={disabledPrev} onClick={() => handleFirstPage()}>
        FIRST
      </Button>
      <Button disabled={disabledPrev} onClick={() => handlePrevPage()}>
        PREV
      </Button>
      <Wrapper className="flex items-center justify-center border-2 border-white rounded-lg w-11">
        <Text>{currentPage}</Text>
      </Wrapper>
      <Button disabled={disabledNext} onClick={() => handleNextPage()}>
        NEXT
      </Button>
      <Button disabled={disabledNext} onClick={() => HandleLastPage()}>
        LAST
      </Button>
    </Wrapper>
  );
};

export default PaginationPokemon;
