import React from "react";
import { useState } from "react";
import PlusIcon from "../../assets/icon-plus.svg";
import MinusIcon from "../../assets/icon-minus.svg";

function CounterButton() {
  const [counter, setCounter] = useState(null);

  return (
    <div className="flex items-center justify-around bg-[var(--Light-grayish-blue)] grow-[1] rounded-lg">
      <span>
        <img src={MinusIcon} alt="minus-icon" />
      </span>
      <span className="font-bold">0</span>
      <span>
        <img src={PlusIcon} alt="plus-icon" />
      </span>
    </div>
  );
}

export default CounterButton;
