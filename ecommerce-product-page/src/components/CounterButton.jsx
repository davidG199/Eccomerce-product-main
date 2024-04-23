import { useState } from "react";
import PlusIcon from "../../assets/icon-plus.svg";
import MinusIcon from "../../assets/icon-minus.svg";

function CounterButton() {
  const [count, setCount] = useState(0);

  const incrementCount = () =>{
    setCount (count + 1)
  }

  const decrementCount = () =>{
    if(count > 0){
      setCount(count - 1)
    }
  }

  return (
    <div className="flex items-center justify-around bg-[var(--Light-grayish-blue)] grow-[1] rounded-lg">
      <span>
        <img src={MinusIcon} alt="minus-icon" className="cursor-pointer" onClick={decrementCount} />
      </span>
      <span className="font-bold">{count}</span>
      <span>
        <img src={PlusIcon} alt="plus-icon" className="cursor-pointer" onClick={incrementCount} />
      </span>
    </div>
  );
}

export default CounterButton;
