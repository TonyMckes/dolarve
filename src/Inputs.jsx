import React, { useContext } from "react";
import { UserContext } from "./App";
import "./Inputs.css";

function Inputs({ setCurrencyCode, setInputValue }) {
  // const [currencies] = useContext(UserContext);

  return (
    <div className="input-container">
      <select
        name="Currency"
        id="select-currency"
        onChange={(e) => setCurrencyCode(e.target.value)}
      >
        <option value="VES">US$</option>
        <option value="USD">Bs.</option>
      </select>

      <label>
        {/* {currencies === "VES" ? "> $" : "> Bs."} */}
        &gt;
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
