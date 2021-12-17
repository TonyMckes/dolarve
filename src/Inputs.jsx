import React from "react";
import "./Inputs.css";

function Inputs({ setInputValue, currency, setCurrency }) {
  // TODO:
  return (
    <div className="input-container">
      <select
        name="Currency"
        id="select-currency"
        onChange={(e) => setCurrency(e.target.value)}
      >
        <option value="VES">Bs.S</option>
        <option value="USD">USD</option>
      </select>

      <label>
        {currency == "VES" ? "> $" : "> Bs."}
        <input
          type="number"
          name="USD"
          step="0.01"
          placeholder="Calculadora"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>
    </div>
  );
}

export default Inputs;
