import React, { useState } from "react";
import "./Calculator.css";
import { evaluate } from "mathjs";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => setInput((prev) => prev + value);

  const handleCalculate = () => {
    try {
      setInput(String(evaluate(input)));
    } catch (error) {
      setInput(error.message);
    }
  };

    return (
    <div className="calculator-wrapper">
      <div className="calculator">
        <input className="display" value={input} readOnly />
        <div className="buttons">
          {[1,2,3,"+",4,5,6,"-",7,8,9,"*",0,".","/"].map((val) => (
            <button key={val} onClick={() => handleClick(val.toString())}>
              {val}
            </button>
          ))}
          <button className="equals" onClick={handleCalculate}>=</button>
          <button className="clear" onClick={() => setInput("")}>C</button>
        </div>
      </div>
    </div>
  );
}

