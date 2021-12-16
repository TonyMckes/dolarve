import React, { useState } from "react";
import "./Inputs.css";

function Inputs({ setInputValue, setCurrency }) {
  const [curSelect, setCurSelect] = useState("VES");
  // TODO:
  return (
    <div className="input-container">
      <select
        name="Currency"
        id="select-currency"
        onChange={(e) => {
          setCurSelect(e.target.value);
          setCurrency(e.target.value);
        }}
      >
        <option value="VES">Bs.S</option>
        <option value="USD">USD</option>
      </select>

      <label>
        {curSelect == "VES" ? "> $" : "> Bs."}
        <input
          type="number"
          name="USD"
          step="0.01"
          max="4"
          placeholder="Calculadora"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>
    </div>
  );
}

export default Inputs;
