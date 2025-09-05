import Button from "../../shared/Button";
import Wrapper from "../../shared/Wrapper";

const SortButtons = () => {
  return (
    <Wrapper>
      <Button>SORT BY EXP</Button>
      <Button>SORT BY WEIGHT</Button>
      <Button>SORT BY HEIGHT</Button>
      <Button>SORT BY WINS</Button>
    </Wrapper>
  );
};

export default SortButtons;