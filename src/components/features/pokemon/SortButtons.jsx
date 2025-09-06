import { useState } from "react";
import Button from "../../shared/Button";
import Wrapper from "../../shared/Wrapper";

const SortButtons = ({ onSort }) => {
  const [buttonA, setButtonA] = useState(false);
  const [buttonB, setButtonB] = useState(false);
  const [buttonC, setButtonC] = useState(false);
  const [buttonD, setButtonD] = useState(false);

  const handlerButtonA = () => {
    setButtonA(true);
    setButtonB(false);
    setButtonC(false);
    setButtonD(false);
  };

  const handlerButtonB = () => {
    setButtonA(false);
    setButtonB(true);
    setButtonC(false);
    setButtonD(false);
  };

  const handlerButtonC = () => {
    setButtonA(false);
    setButtonB(false);
    setButtonC(true);
    setButtonD(false);
  };

  const handlerButtonD = () => {
    setButtonA(false);
    setButtonB(false);
    setButtonC(false);
    setButtonD(true);
  };

  return (
    <Wrapper className="flex gap-8 mb-8">
      <Button
        variant="default"
        className="text-[var(--yellow)] font-semibold text-2xl border-4 p-3 rounded-2xl w-60"
        onClick={() => {
          // onSort("WEIGHT");
          handlerButtonA();
        }}
        disabled={buttonA}
      >
        SORT BY EXP
      </Button>
      <Button
        variant="default"
        className="text-[var(--yellow)] font-semibold text-2xl border-4 p-3 rounded-2xl w-60"
        onClick={() => {
          onSort("WEIGHT");
          handlerButtonB();
        }}
        disabled={buttonB}
      >
        SORT BY WEIGHT
      </Button>
      <Button
        variant="default"
        className="text-[var(--yellow)] font-semibold text-2xl border-4 p-3 rounded-2xl w-60"
        onClick={() => {
          
          handlerButtonC();
        }}
        disabled={buttonC}
      >
        SORT BY HEIGHT
      </Button>
      <Button
        variant="default"
        className="text-[var(--yellow)] font-semibold text-2xl border-4 p-3 rounded-2xl w-60"
        onClick={() => {
          
          handlerButtonD();
        }}
        disabled={buttonD}
      >
        SORT BY WINS
      </Button>
    </Wrapper>
  );
};

export default SortButtons;
