import { useState } from "react";
import Wrapper from "../../shared/Wrapper";
import Button from "../../shared/Button";
import Text from "../../shared/Text";

const PaginationPokemon = ({recordLength}) => {
  const [currentPage, setCurrentPage] = useState(1);
//   const [totalRecords, setTotalRecords] = useState(recordLength);
//   const [disabled, setDisable] = useState(false);

const lastPage = Math.ceil(recordLength/15);
console.log(lastPage);
console.log(recordLength);

// const maxPage = (recordLength) => {
// }
 
  const handleFirstPage = () => {
    setCurrentPage(prev => 1)
  }
  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const HandleLastPage = () => {
    setCurrentPage(prev => lastPage)
  }

  return (
    <Wrapper className="flex gap-4 my-7">
      <Button onClick={() => handleFirstPage()}>FIRST</Button>
      <Button disabled={currentPage === 1} onClick={() => handlePrevPage()}>
        PREV
      </Button>
      <Wrapper className="flex items-center justify-center border-2 border-white rounded-lg w-11">
        <Text>{currentPage}</Text> 
      </Wrapper>
      <Button disabled={currentPage === lastPage} onClick={() => handleNextPage()}>
        NEXT
      </Button>
      <Button onClick={() => HandleLastPage()}>LAST</Button>
    </Wrapper>
  );
};

export default PaginationPokemon;
