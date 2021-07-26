import React, { useState } from "react";
import "./counter.css";

export default function Counter() {
  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const addToCounter = () => {
    setCounterValue(counterValue + inputValue);
  };

  const subtractFromCounter = () => {
    setCounterValue(counterValue - inputValue);
  };

  return (
    <div>
      <h3 data-testid="header">My Counter</h3>
      <h2
        data-testid="counter"
        className={`${counterValue >= 100 ? "green" : ""}`}
        style={{ fontColor: "green" }}
      >
        {counterValue}
      </h2>
      <button data-testid="subtractBtn" onClick={subtractFromCounter}>
        -
      </button>
      <input
        type="number"
        data-testid="input"
        value={inputValue}
        className="text-center"
        onChange={(e) => {
          setInputValue(parseInt(e.target.value));
        }}
      />
      <button data-testid="addBtn" onClick={addToCounter}>
        +
      </button>
    </div>
  );
}
