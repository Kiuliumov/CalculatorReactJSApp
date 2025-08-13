import React, { useState } from "react";
import "./Calculator.css";
import { evaluate } from "mathjs";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => setInput((prev) => prev + value);

  const handleCalculate = () => {
    try {
        const formattedInput = input.replace(/√(\d+(\.\d+)?)/g, "sqrt($1)");
        setInput(String(evaluate(formattedInput)));
    } catch (error) {
      setInput(error.message);
    }
  };

  const handleClear = () => setInput("");

  return (
    <div className="calculator-wrapper">
      <div className="calculator">
        <input className="display" value={input} readOnly />

        <div className="buttons numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."].map((num) => (
            <button key={num} onClick={() => handleClick(num.toString())}>
              {num}
            </button>
          ))}
        </div>

        <div className="buttons operators" style={{ marginTop: "12px" }}>
          {["+", "-", "*", "/", "^", "√"].map((op) => (
            <button key={op} onClick={() => handleClick(op)}>
              {op}
            </button>
          ))}
        </div>

        <div className="buttons functions" style={{ marginTop: "12px" }}>
          <button className="clear" onClick={handleClear}>
            C
          </button>
          <button className="equals" onClick={handleCalculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}
