import { useContext } from "react";
import { useOutletContext } from "react-router-dom";
import { CurrenciesContext } from "../App";

function Inputs() {
  const { currencyInput, setCurrencyInput } = useOutletContext();
  const { value, code } = currencyInput;

  return (
    <div className="fixed left-0 bottom-0 w-full px-4 py-2 bg-gray-400 border drop-shadow text-center rounded-t-lg lg:sticky lg:rounded-lg lg:top-20">
      <select
        onChange={(e) =>
          setCurrencyInput({ ...currencyInput, inputCode: e.target.value })
        }
      >
        <option value="VES">US$</option>
        <option value="USD">Bs.</option>
      </select>

      <label>
        {code === "VES" ? "> $" : "> Bs."}
        &gt;
        <input
          type="number"
          step="0.01"
          placeholder="Calculadora"
          value={value}
          onChange={(e) =>
            setCurrencyInput({ ...currencyInput, inputValue: e.target.value })
          }
        />
      </label>
    </div>
  );
}

export default Inputs;
