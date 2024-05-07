import { useContext, useState } from "react";
import PlusIcon from "../../assets/icon-plus.svg";
import MinusIcon from "../../assets/icon-minus.svg";
import { GeneralContext } from "../context";

function CounterButton() {
  const { count, decrementCount, incrementCount } = useContext(GeneralContext);

  return (
    <div className="flex items-center justify-around bg-[var(--Light-grayish-blue)] grow-[1] rounded-lg">
      <span className="hover:text-[var(----Orange-transparent)]">
        <img
          src={MinusIcon}
          alt="minus-icon"
          className="cursor-pointer hover:bg-[var(----Orange-transparent)]"
          onClick={decrementCount}
        />
      </span>
      <span className="font-bold">{count}</span>
      <span>
        <img
          src={PlusIcon}
          alt="plus-icon"
          className="cursor-pointer"
          onClick={incrementCount}
        />
      </span>
    </div>
  );
}

export default CounterButton;
