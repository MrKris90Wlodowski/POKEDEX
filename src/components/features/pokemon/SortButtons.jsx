// IMPORTS
import { useState } from "react";
import Button from "../../shared/Button";
import Wrapper from "../../shared/Wrapper";

// COMPONENT
const SortButtons = ({ onSort }) => {
  // HOOKS 
  const [buttonA, setButtonA] = useState(false);
  const [buttonB, setButtonB] = useState(false);
  const [buttonC, setButtonC] = useState(false);
  const [buttonD, setButtonD] = useState(false);

  // HANDLERS 
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

  // RENDER
  return (
    <Wrapper className="grid xl:grid-cols-4 gap-8 mb-8 md:grid-cols-2">
      {/* SORT BY EXP */}
      <Button
        variant="default"
        className="text-[var(--yellow)] font-semibold text-2xl border-4 p-3 rounded-2xl w-60"
        onClick={() => {
          onSort("EXP");
          handlerButtonA();
        }}
        disabled={buttonA}
      >
        SORT BY EXP
      </Button>

      {/* SORT BY WEIGHT */}
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

      {/* SORT BY HEIGHT */}
      <Button
        variant="default"
        className="text-[var(--yellow)] font-semibold text-2xl border-4 p-3 rounded-2xl w-60"
        onClick={() => {
          onSort("HEIGHT");
          handlerButtonC();
        }}
        disabled={buttonC}
      >
        SORT BY HEIGHT
      </Button>

      {/* SORT BY WINS */}
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

// EXPORT
export default SortButtons;
